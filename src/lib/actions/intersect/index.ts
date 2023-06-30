import type { Action } from "svelte/action";

interface IIntersectionObserverDetails {
	intersecting: boolean;
	entry: IntersectionObserverEntry;
	node: Element;
	observer: IntersectionObserver;
}

type IIntersectionObserverOptions = IntersectionObserverInit & {
	once?: boolean;
};

interface Attributes {
	"on:change"?: (e: IIntersectionObserverDetails) => void;
	"on:enter"?: (e: IIntersectionObserverDetails) => void;
	"on:leave"?: (e: IIntersectionObserverDetails) => void;
}

/**
 * Observe an element and dispatch an event on `change`, `enter`, or `leave`.
 *
 * @example
 * ```svelte
 * <div
 *    use:intersect
 *    on:change={() => console.log('visibility changed')}
 *    on:enter={()  => console.log('entered viewpoint')}
 *    on:leave={()  => console.log('left viewpoint')}
 * />
 * ```
 */
const intersect: Action<Element, IIntersectionObserverOptions, Attributes> = (
	node: Element,
	options?: IIntersectionObserverOptions
) => {
	const settings = { once: false, ...options };

	const observer = new IntersectionObserver(([entry], _observer) => {
		if (entry === undefined) {
			return;
		}

		const intersecting: boolean = entry.isIntersecting;
		const detail: IIntersectionObserverDetails = {
			entry,
			node,
			intersecting,
			observer: _observer
		};

		node.dispatchEvent(new CustomEvent("change", { detail }));

		if (!intersecting) {
			return node.dispatchEvent(new CustomEvent("leave", { detail }));
		}

		node.dispatchEvent(new CustomEvent("enter", { detail }));

		if (settings.once) {
			_observer.unobserve(node);
		}

		return;
	}, settings);

	observer.observe(node);

	return {
		destroy: (): void => observer.disconnect()
	};
};

export default intersect;
