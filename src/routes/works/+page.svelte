<script>
	import Button from '../../components/Buttons/Button.svelte';
	import MainContainer from '../../components/Containers/MainContainer.svelte';
	import Grid2ColContainer from '../../components/Containers/Grid2ColContainer.svelte';
</script>

<MainContainer>
	<Grid2ColContainer>
		<div class="card-body" slot="left">
			<h2 class="card-title">Card title!</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions justify-end">
				<Button intent="primary" size="medium">Buy Now</Button>
			</div>
		</div>
		<div class="card-body" slot="right">
			<h2 class="card-title">Card title!</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions justify-end">
				<Button intent="primary" size="medium">Buy Now</Button>
			</div>
		</div>
	</Grid2ColContainer>
</MainContainer>
