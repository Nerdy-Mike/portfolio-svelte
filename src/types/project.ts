export interface Works {
	projects: Project[];
}

export type IProjectType =
	| 'ecommerce'
	| 'landing-page'
	| 'react-native'
	| 'internal-tool'
	| 'internal-dashboard';
export type IProjectRenderType = 'web' | 'mobile';

export interface Project {
	id: string;
	company: string;
	project: string;
	type: IProjectType;
	renderType: IProjectRenderType;
	description: string;
	role: string;
	teamSize: number;
	techStack: string;
	duration: string;
	year: string;
	showCase: string;
	appStore?: string;
	playStore?: string;
	responsibilities: string[];
	folder: string;
	files: string[];
}

export interface ProjectsData {
	projects: Project[];
}
