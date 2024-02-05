<script lang="ts">
	import { onMount } from 'svelte';
	export let Icon: ConstructorOfATypedSvelteComponent | null;

	let borderColor = 'border-gray-800';

	onMount(() => {
		function changeColor() {
			borderColor = `border-gray-400`;
			setTimeout(() => {
				borderColor = 'border-gray-800';
				// Set a random delay for the next color change between 1s and 5s
				setTimeout(changeColor, Math.random() * 4000 + 1000);
			}, 1000); // Change back to gray after 1 second
		}
		if (Math.random() > 0.5) {
			changeColor();
		}
	});
</script>

<div
	class={`m-2 border-2 p-2 rounded grayscale-[80%] transition-colors duration-500 ${borderColor}`}
>
	<svelte:component this={Icon} />
</div>
