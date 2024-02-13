<script lang="ts">
	export let noBackground: boolean = false;
	export let extraClass: string = '';
</script>

<section
	class={`card component-container ${noBackground ? 'no-bg' : ''}
	${extraClass}
`}
>
	<slot />
</section>

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
