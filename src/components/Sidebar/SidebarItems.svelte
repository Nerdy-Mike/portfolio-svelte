<script>
	import { page } from '$app/stores';
	import { sidebarOpen } from '../../stores/side-bar-store';
	import { data } from './data/data';

	const style = {
		title: `mx-4 text-sm whitespace-pre`,
		active: `bg-gray-700 rounded-full text-white`,
		link: `flex py-2 2xl:py-6 items-center justify-start my-1 p-1 2xl:p-3 w-full hover:text-white whitespace-pre`,
		close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
		open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`
	};
</script>

<ul class="md:pl-1 h-full flex flex-col justify-center py-8">
	{#each data as item (item.title)}
		<li>
			<a class={style.link} href={item.link}>
				<div class={`p-2 ${item.link === $page.url.pathname ? style.active : ''}`}>
					<span><svelte:component this={item.icon} /></span>
				</div>
				<span class={`${style.title} ${$sidebarOpen ? style.open : style.close}`}>
					{item.title}
				</span>
			</a>
		</li>
	{/each}
</ul>
