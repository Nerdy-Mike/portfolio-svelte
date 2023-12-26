<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cva, type VariantProps } from 'class-variance-authority';
	interface Props extends HTMLButtonAttributes, VariantProps<typeof button> {}

	const button = cva(['btn', 'btn-primary'], {
		variants: {
			intent: {
				primary: [],
				secondary: []
			},
			size: {
				small: [],
				medium: []
			}
		},
		compoundVariants: [
			{
				intent: 'primary',
				size: 'medium',
				class: 'uppercase'
				// **or** if you're a React.js user, `className` may feel more consistent:
				// className: "uppercase"
			}
		],
		defaultVariants: {
			intent: 'primary',
			size: 'medium'
		}
	});

	/**
	 * For Svelte components, we recommend setting your defaultVariants within
	 * Svelte props (which are `undefined` by default)
	 */
	export let intent: Props['intent'] = 'primary';
	export let size: Props['size'] = 'medium';
</script>

<button {...$$props} class={button({ intent, size, class: $$props.class })}>
	<slot />
</button>
