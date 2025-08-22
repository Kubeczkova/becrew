
export type Skill = {
	name: string;
	image: string;
	url: string;
};

export type Category = {
	title: string;
	subtitle: string;
	list: Skill[];
};

export const Python = {
	name: "Python",
	image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
	url: "https://www.python.org/"
}
export const JavaScript = {
	name: "JavaScript",
	image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
	url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
}
export const TypeScript = {
	name: "TypeScript",
	image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
	url: "https://www.typescriptlang.org/"
}
export const Svelte = {
	name: "Svelte",
	image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
	url: "https://svelte.dev/"
}
export const Vue = {
	name: "Vue 3",
	image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
	url: "https://vuejs.org/"
}
export const Vuetify = {
	name: "Vuetify",
	image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg",
	url: "https://vuetifyjs.com/"
}
export const Django = {
	name: "Django",
	image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
	url: "https://www.djangoproject.com/"
}
export const FastAPI = {
	name: "FastAPI",
	image: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
	url: "https://fastapi.tiangolo.com/"
}
export const Kafka = {
	name: "Kafka",
	image: "",
	url: ""
}

export const categories: Category[] = [
	{
		title: "skills.programming",
		subtitle: "skills.programming_sub",
		list: [
			Python,
			JavaScript,
			TypeScript,
		]
	},
	{
		title: "skills.frameworks",
		subtitle: "skills.frameworks_sub",
		list: [
			Svelte,
			Vue,
			Vuetify,
			Django,
			FastAPI,
		]
	},
	{
		title: "skills.technology",
		subtitle: "skills.technology_sub",
		list: [
			{
				name: "HTML5",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
				url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
			},
			{
				name: "CSS3",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
				url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
			},
			{
				name: "REST API",
				image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/REST_API_logo.png",
				url: "https://restfulapi.net/"
			},
			Kafka
		]
	},
	{
		title: "skills.tools",
		subtitle: "skills.tools",
		list: [
			{
				name: "Docker",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
				url: "https://www.docker.com/"
			},
			{
				name: "Git & GitHub",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
				url: "https://github.com/"
			},
			{
				name: "CI/CD",
				image: "https://cdn-icons-png.flaticon.com/512/2621/2621022.png",
				url: "https://en.wikipedia.org/wiki/CI/CD"
			},
			{
				name: "Vercel",
				image: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/favicon.ico",
				url: "https://vercel.com/"
			}
		]
	},
	{
		title: "skills.development",
		subtitle: "skills.development_sub",
		list: [
			{
				name: "Responsive Design",
				image: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
				url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
			},
			{
				name: "API Integration",
				image: "https://cdn-icons-png.flaticon.com/512/950/950394.png",
				url: "https://www.redhat.com/en/topics/api/what-is-api-integration"
			},
			{
				name: "Agile Workflow",
				image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
				url: "https://www.atlassian.com/agile"
			},
			{
				name: "Testing & Debugging",
				image: "https://cdn-icons-png.flaticon.com/512/1159/1159633.png",
				url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing"
			}
		]
	}
];
