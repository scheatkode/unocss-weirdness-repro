/**
 * @file Contains the implementation of the style injection hook.
 */

import type { Handle } from "@sveltejs/kit";

/**
 * Injects the required pattern to enable UnoCSS to inject global styles.
 *
 * @returns The handle hook.
 */
export const styles: () => Handle = () => {
	return async ({ event, resolve }) => {
		return resolve(event, {
			transformPageChunk(chunk) {
				return chunk.html.replace(
					"%unocss-svelte-scoped.global%",
					"unocss_svelte_scoped_global_styles"
				);
			}
		});
	};
};
