import type { Handle } from "@sveltejs/kit";

interface Options {
	cookie?: string;
	locales: string[];
	fallback?: string;
}

export const locale: (_: Options) => Handle = (_: Options) => {
	return async ({ event, resolve }) => {
		event.locals.locale = "en";

		return resolve(event, {
			transformPageChunk: ({ html }) =>
				event.locals.locale === undefined
					? html.replace("%lang%", "")
					: html.replace("%lang%", `lang="${event.locals.locale}"`)
		});
	};
};
