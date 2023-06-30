import { baseLocale, locales } from "$lib/i18n/i18n-util";
import { loadLocaleAsync } from "$lib/i18n/i18n-util.async";
import { setLocale } from "$lib/i18n/i18n-svelte";

import type { Locales } from "$lib/i18n/i18n-types";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ data }) => {
	const locale = data.locale as Locales | undefined;
	const language: Locales =
		locale && locales.includes(locale) ? locale : baseLocale;

	await loadLocaleAsync(language);
	setLocale(language);

	return { ...data, locale: language };
};
