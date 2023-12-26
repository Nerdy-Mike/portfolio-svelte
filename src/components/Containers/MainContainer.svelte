<script lang="ts">
	export let extraClass = '';
</script>

<div class="p-6 w-full h-full flex flex-col space-y-4 justify-center items-start {extraClass}">
	<slot />
</div>
