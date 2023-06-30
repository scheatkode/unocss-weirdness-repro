// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { EventMap } from "$lib/server/hooks/event";

declare global {
	namespace App {
		// interface Error {}

		interface Locals {
			id: number;
			locale?: string;
		}

		// interface PageData {}
		// interface Platform {}
	}
}

export {};
