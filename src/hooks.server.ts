/**
 * @file Contains the definition of the server hooks sequence.
 */

import { sequence } from "@sveltejs/kit/hooks";

import { dev } from "$app/environment";
import { baseLocale, locales } from "$lib/i18n/i18n-util";

import { locale, styles } from "$lib/server/hooks";

export const handle = sequence(
	locale({ cookie: "preferences.language", locales, fallback: baseLocale }),
	styles()
);
