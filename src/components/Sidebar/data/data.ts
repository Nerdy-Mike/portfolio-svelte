import HomeIcon from '../images/HomeIcon.svelte';
import StatusIcon from '../images/StatusIcon.svelte';
import CreditsIcon from '../images/CreditsIcon.svelte';
import ArchivesIcon from '../images/ArchivesIcon.svelte';
import DocumentationIcon from '../images/DocumentationIcon.svelte';
import ChessIcon from '../images/ChessIcon.svelte';

import type { ISidebarItem } from './type';

export const data: ISidebarItem[] = [
	{
		id: '1',
		title: 'Home',
		icon: HomeIcon,
		path: '/'
	},
	{
		id: '2',
		title: 'Works',
		icon: ArchivesIcon,
		path: '/works'
	},
	{
		id: '3',
		title: 'Blog',
		icon: DocumentationIcon,
		path: '/blog'
	},
	// {
	// 	id: '4',
	// 	title: 'Personal Projects',
	// 	icon: CreditsIcon,
	// 	path: '/personal'
	// },
	{
		id: '5',
		title: 'Chess Analysis',
		icon: ChessIcon,
		path: '/chess'
	},
	{
		id: '6',
		title: 'Contact',
		icon: StatusIcon,
		path: '/contact'
	}
];
