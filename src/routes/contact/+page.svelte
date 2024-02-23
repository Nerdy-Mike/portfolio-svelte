<script lang="ts">
	import cn from '@/lib/tailwind-merged';

	import Modal from '@/components/common/Modals/Modal.svelte';

	let name: string = '';
	let email: string = '';
	let message: string = '';

	let isModalOpen: boolean = false;
	let isErrorModalOpen: boolean = false;

	let isLoading: boolean = false;

	function closeErrorModal() {
		isErrorModalOpen = false;
	}
	function closeModal() {
		isModalOpen = false;
	}

	// Handle form submission
	async function handleSubmit(event: Event) {
		event.preventDefault();
		isLoading = true;
		const response = await fetch('/emails/hello', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				message
			})
		});
		isLoading = false;
		if (response.status == 200) {
			isModalOpen = true;
			// reset form fields
			name = '';
			email = '';
			message = '';
		} else {
			isErrorModalOpen = true;
		}
	}
</script>

<Modal {isModalOpen} {closeModal}>
	<div class="p-4">
		<div class="uppercase tracking-wide text-2xl text-accent font-semibold text-center">
			Thank you!
		</div>
		<p class="mt-2 text-neutral-content">
			Your message has been sent successfully. I will get back to you as soon as possible.
		</p>
	</div>
</Modal>

<Modal isModalOpen={isErrorModalOpen} closeModal={closeErrorModal}>
	<div class="p-4">
		<div class="uppercase tracking-wide text-2xl text-error font-semibold text-center">
			An error occurred!
		</div>
		<p class="mt-2 text-neutral-content">Your message could not be sent. Please try again later.</p>
	</div>
</Modal>

<section class="flex flex-col w-full h-full justify-center items-center px-6">
	<div class={cn(`padding card bg-base-300 lg:py-16 mx-auto max-w-screen-lg`)}>
		<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center">Contact me</h2>
		<p class="mb-8 text-centersm:text-xl">
			Feel free to reach out to me for any queries or just to say hi!
		</p>
		<form action="#" class="space-y-8" on:submit={handleSubmit}>
			<div>
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Name</span>
					</div>
					<input
						type="text"
						placeholder="Your name"
						class="input input-bordered w-full"
						required
						bind:value={name}
					/>
				</label>
			</div>
			<div>
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Email</span>
					</div>
					<input
						type="email"
						placeholder="someone@gmail.com"
						class="input input-bordered w-full"
						required
						bind:value={email}
					/>
				</label>
			</div>
			<div class="sm:col-span-2">
				<label class="form-control">
					<div class="label">
						<span class="label-text">Message</span>
					</div>
					<textarea
						class="textarea textarea-bordered h-24 w-full"
						placeholder="Your message"
						required
						bind:value={message}
					/>
				</label>
			</div>

			<div class="flex flex-row justify-end items-end w-full pt-4">
				<button type="submit" class="btn btn-accent w-44">
					{#if isLoading}
						<div class="flex justify-center items-center">
							<div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary" />
						</div>
					{:else}
						Send message
					{/if}
				</button>
			</div>
		</form>
	</div>
</section>

<style>
	.padding {
		padding: 2rem;
	}
</style>
