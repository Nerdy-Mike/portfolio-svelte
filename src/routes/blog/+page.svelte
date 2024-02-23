<script lang="ts">
</script>

<div class="flex flex-col w-full items-center justify-start gap-10 p-6">
	<h1 class="text-4xl font-bold">Blog</h1>
	<div class="flex gap-4">
		<div class="card max-w-lg bg-base-100 shadow-md">
			<div class="card-body">
				<h2 class="card-title">Oh Hi there 👋</h2>
				<p>You are about to be redirected to my blog page. Do you want to continue?</p>
				<div class="card-actions justify-end">
					<button
						class="btn btn-primary"
						on:click={() => {
							// open in new tab
							window.open('https://my-blog-nerdy-mike.vercel.app/', '_blank');
						}}>Let's go</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
