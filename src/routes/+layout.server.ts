import type { LayoutServerLoad, LayoutServerLoadEvent } from "./$types";

export const load: LayoutServerLoad = async (event) => {
	return { locale: event.locals.locale };
};
