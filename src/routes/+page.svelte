<script>
	import MainContainer from '@/components/common/Containers/MainContainer.svelte';
	import Grid2ColContainer from '@/components/common/Containers/Grid2ColContainer.svelte';
	import ComponentContainer from '@/components/common/Containers/ComponentContainer.svelte';

	import TechStack from '@/components/TechStack/TechStack.svelte';

	import PathFinding from '@/components/FunStuffs/PathFinding/PathFinding.svelte';

	import { MailIcon, GithubIcon, LinkedinIcon } from 'svelte-feather-icons';

	const siteMetadata = {
		email: 'michaelle.dev@gmail.com',
		github: 'https://github.com/Nerdy-Mike',
		linkedin: 'https://www.linkedin.com/in/michael-le-0b2a44232/'
	};
</script>

<MainContainer>
	<Grid2ColContainer>
		<ComponentContainer slot="left" noBackground extraClass=" w-full h-full">
			<section class="flex flex-col justify-start items-center w-full h-full relative">
				<div class="flex flex-col justify-center items-center h-full mt-10">
					<h1 class=" tracking-wide text-info text-4xl">
						Hi, I'm
						{' '}
						<span class="font-semibold">Michael</span>
					</h1>
					<div class="flex flex-col justify-start items-start">
						<p class="mt-4 mx-20 text-start text-primary-content text-lg 3xl:text-xl">
							👨‍💻 A Full-stack Software Engineer based in Ho Chi Minh, Vietnam
						</p>
						<p class="mt-4 mx-20 text-start text-primary-content text-lg 3xl:text-xl">
							🚀 I'm passionate about building software that solves real-world problems and provides
							value to the end-users
						</p>

						<p class="mt-4 mx-20 text-start text-primary-content text-lg 3xl:text-xl">
							👨‍🎓 Graduated from the University of Adelaide with Computer Science degree
						</p>

						<p class="mt-4 mx-20 text-start text-primary-content text-lg 3xl:text-xl">
							📫 Feel free to reach out to me for any project or collaboration
						</p>
					</div>

					<div class="my-3 flex space-x-8 pt-4">
						<a
							class="text-sm"
							target="_blank"
							rel="noopener noreferrer"
							href={`mailto:${siteMetadata.email}`}
						>
							<span class="sr-only">Git</span>
							<div class="fill-current text-neutral-content transition hover:text-blue-200 h-8 w-8">
								<MailIcon size="36" />
							</div>
						</a>
						<a class="text-sm" target="_blank" rel="noopener noreferrer" href={siteMetadata.github}>
							<span class="sr-only">Mail</span>
							<div class="fill-current text-neutral-content transition hover:text-blue-200 h-8 w-8">
								<GithubIcon size="36" />
							</div>
						</a>
						<a
							class="text-sm"
							target="_blank"
							rel="noopener noreferrer"
							href={siteMetadata.linkedin}
						>
							<span class="sr-only">Linkedin</span>
							<div class="fill-current text-neutral-content transition hover:text-blue-200 h-8 w-8">
								<LinkedinIcon size="36" />
							</div>
						</a>
					</div>
				</div>
			</section>
		</ComponentContainer>

		<ComponentContainer slot="right" extraClass="w-full h-full">
			<!-- <TechStack /> -->

			<PathFinding />
		</ComponentContainer>
	</Grid2ColContainer>
</MainContainer>
