export function descByDate(a, b) {
  return b.when > a.when ? 1 : -1;
}

export function passIfData(x) {
  return x;
}
