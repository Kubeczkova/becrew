import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { getProjectBySeoName, getProjectTheme } from '$lib/server/projects';
import { submitContact } from '$lib/server/contact';

export const load: PageServerLoad = async ({ params }) => {
	const project = await getProjectBySeoName(params.seo_name);
	if (!project) error(404);

	const theme = await getProjectTheme(project.id);
	return { project, theme };
};

export const actions = {
	submitContact: ({ request, cookies }) => submitContact(request, cookies)
} satisfies Actions;
