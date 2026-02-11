type TranslateField = {
	cs: string;
	en: string;
};

export type Project = {
	id: number;
	title: TranslateField;
	description: TranslateField;
	image: string;
	github: string;
	demo: string;
	live: string;
};

export const myProjects: Project[] = [
	{
		id: 1,
		title: {
			cs: 'Meeple Café',
			en: 'Meeple Café'
		},
		description: {
			cs: 'Webová stránka pro kavárnu',
			en: 'Website for a café'
		},
		image: '/projects/meeple.webp',
		github: 'https://git.kropcloud.net/Beeebooo/MEEPLE',
		demo: '',
		live: ''
	},
	{
		id: 2,
		title: {
			cs: 'Beeebooo Crew',
			en: 'Beeebooo Crew'
		},
		description: {
			cs: 'Beeebooo Crew web',
			en: 'Beeebooo Crew website'
		},
		image: '/projects/becrew.webp',
		github: 'https://git.kropcloud.net/Beeebooo/Portfolio',
		demo: '',
		live: ''
	}
];

export const allProjects: Project[] = [
	...myProjects
	// {
	// 	id: 3,
	// 	title: {
	// 		cs: 'E-commerce Platforma',
	// 		en: 'E-commerce Platform'
	// 	},
	// 	description: {
	// 		cs: 'Kompletní e-commerce platforma s funkcemi pro správu produktů, objednávek a uživatelů',
	// 		en: 'Complete e-commerce platform with features for managing products, orders, and users'
	// 	},
	// 	image: 'https://via.placeholder.com/400x250',
	// 	github: '',
	// 	demo: '',
	//	live: '',
	// }
];
