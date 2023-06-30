/**
 * @file Contains the UnoCSS configuration for this project.
 */

import module from "node:module";
import path from "node:path";

import {
	defineConfig,
	presetTypography,
	presetUno,
	type UserConfig
} from "unocss";

const config: UserConfig = {
	safelist: ["prose"],

	presets: [
		presetUno(),
		presetTypography()
	],

	shortcuts: [
		[
			"btn",
			[
				"py-3",
				"px-4",
				"text-gray-50",
				"text-sm",
				"font-semibold",
				"rounded-lg",
				"shadow-md",
				"uppercase",
				"cursor-pointer",
				"flex-shrink-0",
				"select-none",
				"leading-relaxed",
				"tracking-wide",
				"motion-safe:transition-colors",
				"decoration-none"
			].join(" ")
		],
		["btn-primary", "bg-primary-600 hover:bg-primary-700"],
		["btn-secondary", "bg-secondary-600 hover:bg-secondary-700"],
	],

	theme: {
		colors: {
			primary: {
				600: "#974bdc",
				700: "#8739c8",
			},
			secondary: {
				600: "#0096c7",
				700: "#007095",
			},
		}
	}
};

/*
 eslint-disable-next-line import/no-default-export
 ---
 `UnoCSS` expects a default export to figure out the configuration.
 */
export default defineConfig(config);
