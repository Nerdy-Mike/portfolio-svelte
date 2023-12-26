<script lang="ts">
	export let noBackground: boolean = false;
</script>

<div
	class={`card component-container overflow-hidden h-full w-full ${noBackground ? 'no-bg' : ''}`}
>
	<slot />
</div>

<style>
	.component-container {
		background-color: rgba(16 18 27 / 30%);
	}

	.component-container.no-bg {
		background-color: transparent;
	}

	.component-container::-webkit-scrollbar-thumb {
		background: rgb(1 2 3 / 40%);
		border-radius: 10px;
	}
</style>
