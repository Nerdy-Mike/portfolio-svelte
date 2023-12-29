<script lang="ts">
</script>

<div class="grid grid-cols-2 space-x-6 w-full h-full">
	<div class="card col-span-1 w-full shadow-md">
		<slot name="left" />
	</div>
	<div class="card col-span-1 w-full shadow-md">
		<slot name="right" />
	</div>
</div>
