<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	export let isModalOpen: boolean = false;
	export let closeModal = () => {};

	let cleanup: () => void;

	onMount(() => {
		function handleKeydown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				closeModal();
			}
		}
		window.addEventListener('keydown', handleKeydown);
		cleanup = () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});

	onDestroy(() => {
		if (cleanup) cleanup();
	});
</script>

<input
	type="checkbox"
	id={Math.random().toString(36).substring(7)}
	class="modal-toggle"
	bind:checked={isModalOpen}
/>

<div
	class="modal"
	on:click|self={closeModal}
	on:keyup|self={closeModal}
	on:keydown|self={closeModal}
>
	<div class="card bg-base-100 shadow-xl p-4">
		<div class="modal-action mt-0">
			<button class="btn btn-square" on:click={closeModal}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/></svg
				>
			</button>
		</div>
		<slot />
	</div>
</div>
