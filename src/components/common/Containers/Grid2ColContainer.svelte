<script lang="ts">
</script>

<div class="grid grid-cols-2 gap-x-6 w-full h-full">
	<div class="card col-span-1 w-full">
		<slot name="left" />
	</div>
	<div class="card col-span-1 w-full">
		<slot name="right" />
	</div>
</div>
