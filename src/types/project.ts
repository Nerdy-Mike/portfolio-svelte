export interface Works {
	projects: Project[];
}

export interface Project {
	company: string;
	project: string;
	description: string;
	role: string;
	teamSize: number;
	techStack: string;
	duration: string;
	showCase: string;
	responsibilities: string[];
}
