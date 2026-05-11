import type { Actions, PageServerLoad } from './$types';
import { getMainProjects } from '$lib/server/projects';
import { submitContact } from '$lib/server/contact';

export const load: PageServerLoad = async () => {
	const projects = await getMainProjects();
	return { projects };
};

export const actions = {
	submitContact: ({ request, cookies }) => submitContact(request, cookies)
} satisfies Actions;
