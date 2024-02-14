export interface Works {
	projects: Project[];
}

export interface Project {
	id: string;
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
