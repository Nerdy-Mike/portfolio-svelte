<script lang="ts">
	export let Icon: ConstructorOfATypedSvelteComponent | null;
</script>

<div class="m-2 border-2 border-gray-600 p-2 rounded grayscale-[80%]">
	<svelte:component this={Icon} />
</div>
