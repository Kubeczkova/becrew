export type TranslateField = {
	cs: string;
	en: string;
};

export type Project = {
	id: number;
	title: TranslateField;
	description: TranslateField;
	image: string;
	github: string;
	live: string;
	demo: string;
	seoName: string;
};

export type ProjectTheme = {
	pageBg: string; // entire page background + submit button background
	formBg: string; // contact form background
	pageText: string; // text/icons on pageBg
	formText: string; // text on formBg
};

export const defaultTheme: ProjectTheme = {
	pageBg: '#1a1a1a',
	formBg: '#ffffff',
	pageText: '#f4d03f',
	formText: '#1a1a1a'
};