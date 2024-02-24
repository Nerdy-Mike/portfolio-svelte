import Dulux1 from '@/assets/projects/dulux/1.png';
import Dulux2 from '@/assets/projects/dulux/2.png';
import Dulux3 from '@/assets/projects/dulux/3.png';
import Dulux4 from '@/assets/projects/dulux/4.png';
import Dulux5 from '@/assets/projects/dulux/5.png';
import Dulux6 from '@/assets/projects/dulux/6.png';
import Dulux7 from '@/assets/projects/dulux/7.png';

import BuildYou1 from '@/assets/projects/build-you/1.jpg';
import BuildYou2 from '@/assets/projects/build-you/2.jpg';
import BuildYou3 from '@/assets/projects/build-you/3.jpg';
import BuildYou4 from '@/assets/projects/build-you/4.jpg';
import BuildYou5 from '@/assets/projects/build-you/5.jpg';
import BuildYou6 from '@/assets/projects/build-you/6.jpg';
import BuildYou7 from '@/assets/projects/build-you/7.jpg';
import BuildYou8 from '@/assets/projects/build-you/8.jpg';

import CPAP1 from '@/assets/projects/cpap/1.png';
import CPAP2 from '@/assets/projects/cpap/2.png';
import CPAP3 from '@/assets/projects/cpap/3.png';
import CPAP4 from '@/assets/projects/cpap/4.png';
import CPAP5 from '@/assets/projects/cpap/5.png';
import CPAP6 from '@/assets/projects/cpap/6.png';
import CPAP7 from '@/assets/projects/cpap/7.png';

import Papaya1 from '@/assets/projects/papaya/1.png';
import Papaya2 from '@/assets/projects/papaya/2.png';
import Papaya3 from '@/assets/projects/papaya/3.png';
import Papaya4 from '@/assets/projects/papaya/4.png';

import PollyProperty1 from '@/assets/projects/polly-property/1.jpg';
import PollyProperty2 from '@/assets/projects/polly-property/2.png';
import PollyProperty3 from '@/assets/projects/polly-property/3.jpg';
import PollyProperty4 from '@/assets/projects/polly-property/4.png';
import PollyProperty5 from '@/assets/projects/polly-property/5.jpg';
import PollyProperty7 from '@/assets/projects/polly-property/7.jpg';

import Zoodoo1 from '@/assets/projects/zoodoo/1.png';
import Zoodoo2 from '@/assets/projects/zoodoo/2.png';
import Zoodoo3 from '@/assets/projects/zoodoo/3.png';
import Zoodoo4 from '@/assets/projects/zoodoo/4.png';
import Zoodoo5 from '@/assets/projects/zoodoo/5.png';

import StartAndGo1 from '@/assets/projects/start-and-go/1.png';
import StartAndGo2 from '@/assets/projects/start-and-go/2.png';
import StartAndGo3 from '@/assets/projects/start-and-go/3.png';
import StartAndGo4 from '@/assets/projects/start-and-go/4.png';

export const worksData = [
	{
		id: '1',
		company: 'E9',
		project: 'Build you',
		type: 'react-native',
		renderType: 'mobile',
		description:
			'Buildyou is an app, a social, a community, your personal coach. Buildyou certifies your skills and helps you move from your present state to your desired state.',
		role: 'Frontend Lead',
		teamSize: 5,
		techStack: 'React Native, Expo, FireBase, Jest, TypeScript, TailwindCSS',
		year: '2023',
		duration: '9 months',
		showCase: 'https://www.buildyou.it/en/home-en/',
		appStore: 'https://apps.apple.com/it/app/buildyou/id1589215290',
		playStore: 'https://play.google.com/store/apps/details?id=com.buildyou.buildyou',
		responsibilities: [
			'Lead the frontend development team',
			'Coordinate with backend developers and stakeholders to ensure project success',
			'Ensure timely delivery of features',
			'Code review and quality assurance'
		],
		folder: 'projects/build-you',
		files: [BuildYou1, BuildYou2, BuildYou3, BuildYou4, BuildYou5, BuildYou6, BuildYou7, BuildYou8]
	},
	{
		id: '2',
		company: 'E9',
		project: 'CPAP',
		type: 'ecommerce',
		renderType: 'web',
		description:
			"CPAP Discount Warehouse is Australia's leading provider of sleep apnea treatments.",
		role: 'Frontend Developer',
		teamSize: 3,
		techStack: 'Shopify',
		duration: '1 months',
		year: '2023',
		showCase: 'https://cpapdiscount.au/',
		responsibilities: [
			'Implement frontend features based on design mockups',
			'Optimize web performance for better user experience',
			'Optimize website performance for SEO'
		],
		folder: 'projects/cpap',
		files: [CPAP1, CPAP2, CPAP3, CPAP4, CPAP5, CPAP6, CPAP7]
	},
	{
		id: '3',
		company: 'E9',
		project: 'Papaya',
		type: 'internal-dashboard',
		renderType: 'web',
		description:
			'Papaya focuses on reducing waiting time when processing insurance requests for Vietnamese citizens. By employing advanced technology, it optimizes the insurance claim process to provide the best experience to customers.',
		role: 'Frontend Lead',
		teamSize: 1,
		techStack: 'React, Redux, TypeScript, Ant Design, TailwindCSS',
		duration: '2 months',
		year: '2023',
		showCase: 'https://www.papaya.asia/',
		responsibilities: [
			'Frontend development of the internal dashboard',
			'Collaborate with backend team to integrate frontend with backend services'
		],
		folder: 'projects/papaya',
		files: [Papaya1, Papaya2, Papaya3, Papaya4]
	},
	{
		id: '4',
		company: 'E9',
		project: 'Polly Property',
		type: 'internal-tool',
		renderType: 'web',
		description:
			'Polly Property help great property developers break new ground and create better projects.',
		role: 'Frotend Developer',
		teamSize: 1,
		techStack: 'React, TypeScript, TailwindCSS',
		duration: '2 months',
		year: '2023',
		showCase: 'https://pollyproperty.com.au/',
		responsibilities: [
			'Develop frontend components for the internal tool',
			'Ensure UI consistency and responsiveness'
		],
		folder: 'projects/polly-property',
		files: [PollyProperty1, PollyProperty2, PollyProperty3, PollyProperty4, PollyProperty5, PollyProperty7]
	},
	{
		id: '5',
		company: 'E9',
		project: 'Zoodoo',
		type: 'landing-page',
		renderType: 'web',
		description:
			'Zoodoo is a wildlife park in Dalat, Vietnam. It is home to the largest collection of primates from over the world.',
		role: 'Solo FE Developer',
		teamSize: 1,
		techStack: 'NextJS, Contentful, TypeScript, TailwindCSS',
		duration: '1 months',
		year: '2023',
		showCase: 'https://www.zoodoodalat.com/',
		responsibilities: [
			'Design and develop the landing page',
			'Ensure cross-browser compatibility',
			'Optimize website performance for SEO'
		],
		folder: 'projects/zoodoo',
		files: [Zoodoo1, Zoodoo2, Zoodoo3, Zoodoo4, Zoodoo5]
	},
	{
		id: '6',
		company: 'E9',
		project: 'Start and Go',
		type: 'landing-page',
		renderType: 'web',
		description:
			'Start and Go is Digital Marketing Agency in Italy. We help businesses grow by creating and implementing effective digital marketing strategies.',
		role: 'Solo FE Developer',
		teamSize: 1,
		techStack: 'NextJS, TypeScript, TailwindCSS',
		duration: '1 months',
		year: '2023',
		showCase: 'https://www.startegois.com/',
		responsibilities: [
			'Develop frontend for digital marketing strategies',
			'Optimize website performance for SEO'
		],
		folder: 'projects/start-and-go',
		files: [StartAndGo1, StartAndGo2, StartAndGo3, StartAndGo4]
	},
	{
		id: '7',
		company: 'CMC',
		project: 'Dulux',
		type: 'ecommerce',
		renderType: 'web',
		description:
			'Dulux offers a wide range of paints for various purposes including interior and exterior walls, wood, metal, and specialty surfaces. The brand is known for its quality, durability, and extensive color palette options, making it popular among homeowners, decorators, and professionals alike.',
		role: 'Frontend Developer',
		teamSize: 16,
		techStack: 'NextJS, Contentful, Jest, TypeScript, TailwindCSS',
		duration: '6 months',
		year: '2023',
		showCase: 'https://www.dulux.com.au/',
		responsibilities: [
			'Collaborate with designers to implement UI/UX features',
			'Optimize web performance for large-scale ecommerce',
			'Optimize website performance for SEO'
		],
		folder: 'projects/dulux',
		files: [Dulux1, Dulux2, Dulux3, Dulux4, Dulux5, Dulux6, Dulux7]
	}
];
