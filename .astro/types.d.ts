declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"post": {
"2009-02-12-batch-unrar-command-line-os-x.md": {
  id: "2009-02-12-batch-unrar-command-line-os-x.md",
  slug: "2009-02-12-batch-unrar-command-line-os-x",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2009-11-04-finding-recently-changed-files-osx-terminal.md": {
  id: "2009-11-04-finding-recently-changed-files-osx-terminal.md",
  slug: "2009-11-04-finding-recently-changed-files-osx-terminal",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2009-11-09-finding-files-inside-archive.md": {
  id: "2009-11-09-finding-files-inside-archive.md",
  slug: "2009-11-09-finding-files-inside-archive",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2010-07-13-joining-pdf-files-in-os-x-from-the-command-line.md": {
  id: "2010-07-13-joining-pdf-files-in-os-x-from-the-command-line.md",
  slug: "2010-07-13-joining-pdf-files-in-os-x-from-the-command-line",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2010-09-22-svn-status-codes.md": {
  id: "2010-09-22-svn-status-codes.md",
  slug: "2010-09-22-svn-status-codes",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2011-07-07-a-place-for-unix-scripts-osx.md": {
  id: "2011-07-07-a-place-for-unix-scripts-osx.md",
  slug: "2011-07-07-a-place-for-unix-scripts-osx",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2011-09-04-advanced-evernote-search.md": {
  id: "2011-09-04-advanced-evernote-search.md",
  slug: "2011-09-04-advanced-evernote-search",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2011-12-12-google-apps-script-boilerplate.md": {
  id: "2011-12-12-google-apps-script-boilerplate.md",
  slug: "2011-12-12-google-apps-script-boilerplate",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2011-12-22-combining-images-imagemagick.md": {
  id: "2011-12-22-combining-images-imagemagick.md",
  slug: "2011-12-22-combining-images-imagemagick",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2012-03-06-change-title-cmd-window.md": {
  id: "2012-03-06-change-title-cmd-window.md",
  slug: "2012-03-06-change-title-cmd-window",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2012-03-28-escaping-in-replace-strings-in-javascript.md": {
  id: "2012-03-28-escaping-in-replace-strings-in-javascript.md",
  slug: "2012-03-28-escaping-in-replace-strings-in-javascript",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2012-07-19-simple-voice-recording-mac.md": {
  id: "2012-07-19-simple-voice-recording-mac.md",
  slug: "2012-07-19-simple-voice-recording-mac",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2012-08-25-os-x-extended-attibutes.md": {
  id: "2012-08-25-os-x-extended-attibutes.md",
  slug: "2012-08-25-os-x-extended-attibutes",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2013-03-23-copying-files-matching-pattern-cpio.md": {
  id: "2013-03-23-copying-files-matching-pattern-cpio.md",
  slug: "2013-03-23-copying-files-matching-pattern-cpio",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2013-09-01-storing-bash-profile-and-so-on-on-github.md": {
  id: "2013-09-01-storing-bash-profile-and-so-on-on-github.md",
  slug: "2013-09-01-storing-bash-profile-and-so-on-on-github",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-03-07-directory-listings-in-apache-2-4.md": {
  id: "2015-03-07-directory-listings-in-apache-2-4.md",
  slug: "2015-03-07-directory-listings-in-apache-2-4",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-04-24-os-x-dns-lookups-too-slow-for-local-hosts.md": {
  id: "2015-04-24-os-x-dns-lookups-too-slow-for-local-hosts.md",
  slug: "2015-04-24-os-x-dns-lookups-too-slow-for-local-hosts",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-08-25-os-x-software-update-from-command-line.md": {
  id: "2015-08-25-os-x-software-update-from-command-line.md",
  slug: "2015-08-25-os-x-software-update-from-command-line",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2015-10-21-pretty-printing-xml.md": {
  id: "2015-10-21-pretty-printing-xml.md",
  slug: "2015-10-21-pretty-printing-xml",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2016-01-16-backing-up-hard-disk-os-x.md": {
  id: "2016-01-16-backing-up-hard-disk-os-x.md",
  slug: "2016-01-16-backing-up-hard-disk-os-x",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2019-09-09-osx-apps.md": {
  id: "2019-09-09-osx-apps.md",
  slug: "2019-09-09-osx-apps",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-03-12-music-remove-album-ratings-applescript.md": {
  id: "2020-03-12-music-remove-album-ratings-applescript.md",
  slug: "2020-03-12-music-remove-album-ratings-applescript",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-03-29-countdown-clock-state-machine-requestanimationframe-vanilla-js.md": {
  id: "2020-03-29-countdown-clock-state-machine-requestanimationframe-vanilla-js.md",
  slug: "2020-03-29-countdown-clock-state-machine-requestanimationframe-vanilla-js",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-04-09-setting-css-values-dynamically-in-svelte.md": {
  id: "2020-04-09-setting-css-values-dynamically-in-svelte.md",
  slug: "2020-04-09-setting-css-values-dynamically-in-svelte",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-05-02-setting-up-a-logitech-vertical-mx-mouse-osx.md": {
  id: "2020-05-02-setting-up-a-logitech-vertical-mx-mouse-osx.md",
  slug: "2020-05-02-setting-up-a-logitech-vertical-mx-mouse-osx",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-06-16-using-say-command-to-make-os-x-talk-and-fixing-it.md": {
  id: "2020-06-16-using-say-command-to-make-os-x-talk-and-fixing-it.md",
  slug: "2020-06-16-using-say-command-to-make-os-x-talk-and-fixing-it",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2020-08-06-setting-up-thunderbird-for-gmail-on-os-x.md": {
  id: "2020-08-06-setting-up-thunderbird-for-gmail-on-os-x.md",
  slug: "2020-08-06-setting-up-thunderbird-for-gmail-on-os-x",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-01-04-installing-python-on-mac-os-x-in-2022.md": {
  id: "2022-01-04-installing-python-on-mac-os-x-in-2022.md",
  slug: "2022-01-04-installing-python-on-mac-os-x-in-2022",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-03-24-fixing-autoformatting-django-templates-in-visual-studio-code.md": {
  id: "2022-03-24-fixing-autoformatting-django-templates-in-visual-studio-code.md",
  slug: "2022-03-24-fixing-autoformatting-django-templates-in-visual-studio-code",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-04-01-reordering-audio-files-in-a-fat-usb-stick.md": {
  id: "2022-04-01-reordering-audio-files-in-a-fat-usb-stick.md",
  slug: "2022-04-01-reordering-audio-files-in-a-fat-usb-stick",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-04-22-blog-with-sveltekit-and-markdown.md": {
  id: "2022-04-22-blog-with-sveltekit-and-markdown.md",
  slug: "2022-04-22-blog-with-sveltekit-and-markdown",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-05-22-removing-lines-matching-patterns-from-all-files-in-dir.md": {
  id: "2022-05-22-removing-lines-matching-patterns-from-all-files-in-dir.md",
  slug: "2022-05-22-removing-lines-matching-patterns-from-all-files-in-dir",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-05-26-vscode-cspell-do-not-use-gitignore.md": {
  id: "2022-05-26-vscode-cspell-do-not-use-gitignore.md",
  slug: "2022-05-26-vscode-cspell-do-not-use-gitignore",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-06-20-migrating-thunderbird-message-filters-from-another-machine.md": {
  id: "2022-06-20-migrating-thunderbird-message-filters-from-another-machine.md",
  slug: "2022-06-20-migrating-thunderbird-message-filters-from-another-machine",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-08-23-migrating-youtube-playlists-by-adding-videos-via-cli.md": {
  id: "2022-08-23-migrating-youtube-playlists-by-adding-videos-via-cli.md",
  slug: "2022-08-23-migrating-youtube-playlists-by-adding-videos-via-cli",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-09-01-deleting-duplicates-from-youtube-playlists-with-python-script.md": {
  id: "2022-09-01-deleting-duplicates-from-youtube-playlists-with-python-script.md",
  slug: "2022-09-01-deleting-duplicates-from-youtube-playlists-with-python-script",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-09-05-migrating-away-from-goole-proton-mail-and-other-stories.md": {
  id: "2022-09-05-migrating-away-from-goole-proton-mail-and-other-stories.md",
  slug: "2022-09-05-migrating-away-from-goole-proton-mail-and-other-stories",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-09-24-create-fake-dataset-fixtures-testing-with-faker.md": {
  id: "2022-09-24-create-fake-dataset-fixtures-testing-with-faker.md",
  slug: "2022-09-24-create-fake-dataset-fixtures-testing-with-faker",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-09-24-creating-a-poetry-driven-python-project-template-with-cookiecutter.md": {
  id: "2022-09-24-creating-a-poetry-driven-python-project-template-with-cookiecutter.md",
  slug: "2022-09-24-creating-a-poetry-driven-python-project-template-with-cookiecutter",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-09-26-creating-german-grammar-exercises-with-spacy.md": {
  id: "2022-09-26-creating-german-grammar-exercises-with-spacy.md",
  slug: "2022-09-26-creating-german-grammar-exercises-with-spacy",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-10-03-mypy-found-module-but-no-type-hints-or-library-stubs.md": {
  id: "2022-10-03-mypy-found-module-but-no-type-hints-or-library-stubs.md",
  slug: "2022-10-03-mypy-found-module-but-no-type-hints-or-library-stubs",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-11-13-deleting-tweets-and-likes-from-twitter.md": {
  id: "2022-11-13-deleting-tweets-and-likes-from-twitter.md",
  slug: "2022-11-13-deleting-tweets-and-likes-from-twitter",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-12-11-history-of-dance-music-as-jupyter-notebook.md": {
  id: "2022-12-11-history-of-dance-music-as-jupyter-notebook.md",
  slug: "2022-12-11-history-of-dance-music-as-jupyter-notebook",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-12-11-how-to-build-blog-with-sveltekit-markdown-tailwind.md": {
  id: "2022-12-11-how-to-build-blog-with-sveltekit-markdown-tailwind.md",
  slug: "2022-12-11-how-to-build-blog-with-sveltekit-markdown-tailwind",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2023-02-03-migrating-blog-to-astro.md": {
  id: "2023-02-03-migrating-blog-to-astro.md",
  slug: "2023-02-03-migrating-blog-to-astro",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2023-02-03-trello-like-crm-tool-with-google-apps-script/01-intro.md": {
  id: "2023-02-03-trello-like-crm-tool-with-google-apps-script/01-intro.md",
  slug: "trello-like-crm-tool-with-google-apps-script/01-introduction",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2023-02-03-trello-like-crm-tool-with-google-apps-script/02-gas-principles.md": {
  id: "2023-02-03-trello-like-crm-tool-with-google-apps-script/02-gas-principles.md",
  slug: "2023-02-03-trello-like-crm-tool-with-google-apps-script/02-gas-principles",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2023-02-03-trello-like-crm-tool-with-google-apps-script/03-rest.md": {
  id: "2023-02-03-trello-like-crm-tool-with-google-apps-script/03-rest.md",
  slug: "2023-02-03-trello-like-crm-tool-with-google-apps-script/03-rest",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2023-02-03-trello-like-crm-tool-with-google-apps-script/index.md": {
  id: "2023-02-03-trello-like-crm-tool-with-google-apps-script/index.md",
  slug: "2023-02-03-trello-like-crm-tool-with-google-apps-script",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
