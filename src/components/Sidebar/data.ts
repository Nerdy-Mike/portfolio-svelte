import HomeIcon from './images/HomeIcon.svelte';
import StatusIcon from './images/StatusIcon.svelte';
import CreditsIcon from './images/CreditsIcon.svelte';
import ArchivesIcon from './images/ArchivesIcon.svelte';
import DocumentationIcon from './images/DocumentationIcon.svelte';

export const data = [
	{
		title: 'Home',
		icon: HomeIcon,
		link: '/'
	},
	{
		title: 'About',
		icon: DocumentationIcon,
		link: '/about'
	},
	{
		title: 'Works',
		icon: ArchivesIcon,
		link: '/works'
	},
	{
		title: 'Personal Projects',
		icon: CreditsIcon,
		link: '/personal'
	},
	// {
	// 	title: 'Newest blogs',
	// 	icon: SettingsIcon,
	// 	link: '/blogs'
	// },
	{
		title: 'Contact',
		icon: StatusIcon,
		link: '/contact'
	}
];
