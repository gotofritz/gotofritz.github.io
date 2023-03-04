---
publishDate: 2020-03-29
draft: false
archived: false
description: I wanted to play with state machines and <a href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame">requestAnimationFrame</a> in vanilla JS, so I came up with the idea of a simple countdown clock.
title: A countdown clock using requestAnimationFrame, a state machine, and vanilla JS
tags:
  - js
---

<iframe
     src="https://codesandbox.io/embed/vanilla-js-countdown-clock-kslrp?editorsize=65&codemirror=1&fontsize=14&theme=dark&view=split"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Vanilla JS countdown clock"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

## Setting up the project with Parcel @ CodeSandbox.io

I am doing this in CodeSandbox, which has a lot of nice project starters with Babel and Parcel. With that I don't need to worry about bundles and using the [revealing module pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript) and all that jazz - I can just use standard ES6 modules and CSS files. The UI is built in basic HTML with CSS, all updated as needed by the javascript code, which is organised in modules. The main js file, `index.js`, orchestrates all the modules and connects them together. The heart of the app is a state machine

## The State Machine

State machines are a neat way to organise apps; they encapsulate behaviour and I like the way they make us approach problems in terms of state. The implementation I came up with is very simple, basically a pub / sub pattern in which subscribers are able to trigger state changes as well. The state machine source file lives in the modules/ folder and exports a singleton. It's generic enough it could be dropped in another project

```js
let state;
const entities = [];
const states = new Set();

export const StateMachine = {
  // states could be anything at all, but it only really
  // makes sense to use strings or symbols. Maybe numbers.
  // States need to be added before they can be triggered,
  // just so that the engine knows which ones to reject.
  // state can be either an array or a scalar
  addStates: (stateOrStates) => {
    [].concat(stateOrStates).forEach((s) => states.add(s));

    // all methods are chainable
    return StateMachine;
  },

  addEntity: (entity) => {
    // entities can be anything that has methods
    entities.push(entity);

    // If an entity needs to trigger states, it needs
    // to implement a linkStateMachine method and
    // save a reference to StateMachine.setState for
    // later use
    if (entity.linkStateMachine) {
      entity.linkStateMachine(StateMachine.setState);
    }
    return StateMachine;
  },

  setState: (s) => {
    // only states previously added with addState can be set.
    if (states.has(s) && s !== state) {
      state = s;
      entities.forEach((entity) => {
        // if an entity wants to respond to a state, it needs
        // to implement a method by the same name as the state.
        // If not there, nothing happens
        if (s in entity) {
          entity[s]();
        }
      });
    }
    return StateMachine;
  },
};
```

The state machine offers three methods: `addStates`, `addEntity`, `setState`, all chainable. 'States' can technically be anything at all, but it only really make sense to use strings or symbols. Maybe numbers or Date objects if you are so inclined. `addStates` simply stores a list of these states, and the state machine will not set a state with `setState` event unless the state was previously added with `addStates` (it will fail silently).

An 'entity' here is anything that is expected to respond to, or trigger, state changes. It can be any type of JS variable which is not undefine or null. Entities can respond to state changes by implementing a method with the same name as the state, and if they do not need to respond to a specific state change they simply do not implement the corresponding method; the state handling methods are basically mixed in into a 'normal' object. Additionally, they can have other methods of their own. For example, this is how it is used in this countdown example (IS_PAUSED, IS_RUNNING, IS_COMPLETE are symbols imported from a constants.js file):

```js
StateMachine.addStates([IS_PAUSED, IS_RUNNING, IS_COMPLETE])
  .addEntity(UI)
  .addEntity(CountDownTimer)
  .setState(IS_PAUSED);
```

If `UI` has a method called `[IS_PAUSED]` (it does) then it will be called when the app starts up, and the same for CountDownTimer.

Additionally if a module needs to trigger a state change, it can implement a `linkStateMachine` method, which takes a reference to the state machine's `setState` method as its sole argument. `linkStateMachine` will be called when a reference to the module is added to the state machine with `addEntity`; the module can then store that reference internally, so that it can call it whenever it needs. For example, the countdown module will call `setState(IS_COMPLETE)` when the countdown reaches 0, and the UI will change accordindly. The button in the UI also calls `setState` whenever it's clicked.

The state machine is used to orchestrate changes among its subscribers, it doesn't really know anything about the states at all except for keeping a list of what states are allowed. It is the entities which encapsulate the logic and know what to do.

Note that the actual countdown "animation" doesn't actually go through the state machine - rather, it feeds directly into the UI module. This is done to avoid the extra overhead and increase performance. Conceptually it also makes sense: when changing the time in the UI, the app is always in the same state, 'IS_RUNNING'. One could instead see each seconds passing as a different state - this may make sense, for example, if you have a few components all animating in sync. But the current code works well for the case at hand.

## The UI module

The UI is actually built in HTML; the UI module simply finds the DOM elements it needs (the time and the button) and updates them as needed in response to state changes. It implements methods for each state, and it can trigger a state change when the button is clicked on

```js
const component = document.querySelector(".Header");
const timer = document.getElementById("js-time");
const button = document.getElementById("js-button");

let lastTime;
let setState;

let nextState;
// assigning handleClick to a var so that I can remove it
let handleClick = () => {
  setState(nextState);
};

export const UI = {
  linkStateMachine: (ss) => {
    setState = ss;
  },

  init: ({ onClick: clickHandler, time }) => {
    button.addEventListener("click", handleClick);
    if (time !== undefined) {
      UI.updateTime(time);
    }
    document.querySelector(".App").style.display = "block";
  },

  // this to avoid memory leaks, although I don't need it in this app
  destroy: () => button.removeEventListener("click", handleClick),

  [IS_RUNNING]: (time) => {
    button.textContent = "PAUSE";
    nextState = IS_PAUSED;
    UI.updateTime(time);
  },

  [IS_COMPLETE]: (time) => {
    button.remove();
    UI.updateTime(0);
    component.classList.add("complete");
  },

  [IS_PAUSED]: () => {
    button.textContent = "RUN";
    nextState = IS_RUNNING;
  },

  updateTime: (time) => {
    const newTime = formatTime(time);
    if (newTime === lastTime) return;

    timer.innerText = newTime;
    lastTime = newTime;
  },
};
```

The module uses a util function, `formatDate`, to convert the time it gets from the countdown timer into the 'XX:XX' format. To avoid touching the DOM unless needed, it stores a copy of the last formatted time it has set, and will stop unless it has changed

## The Countdown timer

The timer only responds to the IS_RUNNING and IS_PAUSED states. It uses requestAnimationFrame calling itself recursively to do the counting, and since requestAnimationFrame passes on an unknown timestamp to its method, a few variables are needed to keep track of where we are.

```js
let latestStartTime;
let animationRef;
let isFinished = false;
let remainingTime;
let callback = Function.prototype;
let setState;

// this is the heart of the animation.
const animate = (timestamp) => {
  // is it the first iteration in this cycle?
  if (latestStartTime === undefined) {
    // make a note of the start time
    latestStartTime = timestamp + remainingTime;
  }
  // the time to display now
  const currentTime = latestStartTime - timestamp;
  if (currentTime <= 0) {
    cancelAnimationFrame(animationRef);
    callback(0);
    // trigger a state event in the rest of the app
    setState(IS_COMPLETE);
    // this is an internal state
    isFinished = true;
    return 0;
  }
  callback(currentTime);

  // keep animating recursively
  animationRef = requestAnimationFrame(animate);
  return currentTime;
};

export const CountDownTimer = {
  linkStateMachine: (ss) => {
    setState = ss;
  },

  init: ({ countdownFrom, callback: cb }) => {
    remainingTime = countdownFrom;
    callback = cb;
  },

  [IS_RUNNING]: (time) => {
    if (isFinished) return;
    animationRef = requestAnimationFrame(animate);
  },

  [IS_PAUSED]: () => {
    cancelAnimationFrame(animationRef);
    if (latestStartTime !== undefined) {
      // prepare for the next cycle
      remainingTime = latestStartTime - performance.now();
      latestStartTime = undefined;
    }
  },
};
```
