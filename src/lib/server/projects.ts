import { db } from '$lib/server/db';
import { project, projectTranslation, projectTheme } from '$lib/server/db/schema';
import { eq, inArray } from 'drizzle-orm';
import type { Project, TranslateField, ProjectTheme } from '$lib/data/projects';

function mapProject(
	proj: typeof project.$inferSelect,
	translations: (typeof projectTranslation.$inferSelect)[]
): Project {
	const title: TranslateField = { cs: '', en: '' };
	const description: TranslateField = { cs: '', en: '' };

	for (const t of translations) {
		if (t.language === 'cs' || t.language === 'en') {
			title[t.language] = t.title;
			description[t.language] = t.description;
		}
	}

	return {
		id: proj.id,
		title,
		description,
		image: proj.image,
		github: proj.github ?? '',
		demo: proj.demo ?? '',
		live: proj.live ?? '',
		seoName: proj.seoName ?? ''
	};
}

async function fetchTranslationsForProjects(
	projectIds: number[]
): Promise<Map<number, (typeof projectTranslation.$inferSelect)[]>> {
	if (projectIds.length === 0) return new Map();
	const translations = await db
		.select()
		.from(projectTranslation)
		.where(inArray(projectTranslation.projectId, projectIds));

	const map = new Map<number, (typeof projectTranslation.$inferSelect)[]>();
	for (const t of translations) {
		const list = map.get(t.projectId) ?? [];
		list.push(t);
		map.set(t.projectId, list);
	}
	return map;
}

export async function getMainProjects(): Promise<Project[]> {
	const projects = await db
		.select()
		.from(project)
		.where(eq(project.main, true))
		.orderBy(project.id);

	const translationsMap = await fetchTranslationsForProjects(projects.map((p) => p.id));
	return projects.map((p) => mapProject(p, translationsMap.get(p.id) ?? []));
}

export async function getAllProjects(): Promise<Project[]> {
	const projects = await db.select().from(project).orderBy(project.id);

	const translationsMap = await fetchTranslationsForProjects(projects.map((p) => p.id));
	return projects.map((p) => mapProject(p, translationsMap.get(p.id) ?? []));
}

export async function getProjectBySeoName(seoName: string): Promise<Project | null> {
	const [proj] = await db
		.select()
		.from(project)
		.where(eq(project.seoName, seoName))
		.limit(1);

	if (!proj) return null;

	const translations = await db
		.select()
		.from(projectTranslation)
		.where(eq(projectTranslation.projectId, proj.id));

	return mapProject(proj, translations);
}

export async function getProjectTheme(projectId: number): Promise<ProjectTheme | null> {
	const [row] = await db
		.select()
		.from(projectTheme)
		.where(eq(projectTheme.projectId, projectId))
		.limit(1);

	if (!row) return null;

	return {
		pageBg: row.pageBg,
		formBg: row.formBg,
		pageText: row.pageText,
		formText: row.formText
	};
}
