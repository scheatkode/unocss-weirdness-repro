import { loadNamespaceAsync } from "$lib/i18n/i18n-util.async";
import { setLocale } from "$lib/i18n/i18n-svelte";

import type { PageLoad } from "./$types";

// We need client-side rendering on this page mostly for the
// routing and images.
export const csr = true;

export const load: PageLoad = async ({ parent }) => {
	const data = await parent();

	await loadNamespaceAsync(data.locale, "landing");
	setLocale(data.locale);

	return data;
};
