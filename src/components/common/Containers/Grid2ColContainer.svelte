<script lang="ts">
</script>

<div class="flex flex-col gap-y-6  lg:grid lg:grid-cols-2 md:gap-y-0  gap-x-6 w-full h-full">
	<div class="card col-span-1 w-full">
		<slot name="left" />
	</div>
	<div class="card col-span-1 w-full">
		<slot name="right" />
	</div>
</div>
