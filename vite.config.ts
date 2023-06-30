import { sveltekit } from "@sveltejs/kit/vite";

import unocss from "@unocss/svelte-scoped/vite";

import type { UserConfig } from "vite";

const config: UserConfig = {
	plugins: [
		unocss({
			combine: process.env["NODE_ENV"] === "production",
			injectReset: "@unocss/reset/tailwind.css"
		}),
		sveltekit(),
	],

	server: {
		fs: {
			allow: [".."]
		}
	},

	ssr: {
		noExternal: ["typesafe-i18n"]
	}
};

export default config;
