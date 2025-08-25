
type Project = {
	name: string,
	type: string,
	image: string,
	description: string,
	url?: string,
	company?: string,
	company_url?: string,
	// stack: Skill[]
}

export const projects: Project[] = [
	{
		name: "Portfolio",
		type: "Frontend",
		image: "Portfolio",
		description: "projects.portfolio_desc",
		// stack: [Svelte]
	},
	{
		name: "Taneční klub Ostrava",
		type: "Full-Stack",
		image: "TKO",
		description: "projects.tko_desc",
		// stack: [Vue, Vuetify, Django]
	},
	{
		name: "Financial Buyout Portal",
		type: "Full-Stack",
		image: "cashtec-buyout",
		description: "Collaborated on a user account portal for a financial services provider. Implemented features allowing customers to view transaction history, receive notifications, and claim rewards after completing a buyout process.",
		// stack: [Vue, Vuetify, Django]
	},
	{
		name: "Multi-Region Financial Platform",
		type: "Full-Stack",
		image: "cashtec-multiregion",
		description: "Adapted an existing platform to support multiple regions. Implemented automatic currency conversion, regional pricing, and content localization while maintaining a single unified codebase.",
		// stack: [Vue, Vuetify, Django]
	},
	{
		name: "Leasing Service Management Tool",
		type: "Full-Stack",
		image: "cashtec-leasing",
		description: "Created an internal web application for service staff to manage leasing requests. Implemented UI workflows, automated backend communication with external services, and reporting tools for issue tracking.",
		// stack: [Vue, Vuetify, Django, Kafka]
	}
]