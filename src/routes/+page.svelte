<script>
	import Donut from '../components/FunStuffs/Donut.svelte';

	import Button from '../components/Buttons/Button.svelte';
	import MainContainer from '../components/Containers/MainContainer.svelte';
	import Grid2ColContainer from '../components/Containers/Grid2ColContainer.svelte';
	import ComponentContainer from '../components/Containers/ComponentContainer.svelte';

	import Mail from '../assets/social-icons/Mail.svelte';
	import Github from '../assets/social-icons/Github.svelte';
	import Linkedin from '../assets/social-icons/Linkedin.svelte';
</script>

<MainContainer>
	<Grid2ColContainer>
		<ComponentContainer slot="left" noBackground>
			<div class="flex flex-col justify-center items-center w-full h-full">
				<h1 class="text-xl tracking-wide text-gray-800 dark:text-gray-200 lg:text-4xl">
					Hi, I'm
					{' '}
					<span class="font-semibold">Michael</span>
				</h1>
				<p class="mt-4 text-center text-gray-600 dark:text-gray-400 text-lg">
					A junior software engineer based in Adelaide, currently doing intership at Fivecast. I'm a
					huge fan of the web and its architecture.
				</p>

				<div class="">
					<div class="mb-3 flex space-x-4 pt-4">
						<!-- <a
							class="text-sm"
							target="_blank"
							rel="noopener noreferrer"
							href={`mailto:${siteMetadata.email}`}
						>
							<span class="sr-only">Git</span>
							<div
								class="fill-current text-gray-700 dark:text-gray-400 ransition dark:hover:text-gray-200 hover:text-blue-400 h-8 w-8"
							>
								<Mail />
							</div>
						</a>
						<a class="text-sm" target="_blank" rel="noopener noreferrer" href={siteMetadata.github}>
							<span class="sr-only">Mail</span>
							<div
								class="fill-current text-gray-700 dark:text-gray-400 ransition dark:hover:text-gray-200 hover:text-blue-400 h-8 w-8"
							>
								<Github />
							</div>
						</a>
						<a
							class="text-sm"
							target="_blank"
							rel="noopener noreferrer"
							href={siteMetadata.linkedin}
						>
							<span class="sr-only">Linkedin</span>
							<div
								class="fill-current text-gray-700 dark:text-gray-400 ransition dark:hover:text-gray-200 hover:text-blue-400 h-8 w-8"
							>
								<Linkedin />
							</div>
						</a> -->
					</div>
				</div>
			</div>
		</ComponentContainer>

		<ComponentContainer slot="right" />
	</Grid2ColContainer>
</MainContainer>
