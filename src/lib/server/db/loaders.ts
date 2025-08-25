import { db } from '$lib/server/db';
import { skill, project, projectTranslation, projectSkill } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function getSkills() {
	return db.select().from(skill);
}

export async function getProjectsWithTranslations() {
  const rows = await db
    .select()
    .from(project)
    .leftJoin(projectTranslation, eq(project.id, projectTranslation.projectId))
    .leftJoin(projectSkill, eq(project.id, projectSkill.project));

  // transform into a nicer structure:
  const projects: Record<number, any> = {};

  for (const row of rows) {
    const p = row.project;
    if (!projects[p.id]) {
      projects[p.id] = {
        ...p,
        translations: {},
        skills: []
      };
    }

    if (row.projectTranslation) {
      projects[p.id].translations[row.projectTranslation.language] = {
        description: row.projectTranslation.description
      };
    }

    if (row.projectSkill) {
      projects[p.id].skills.push(row.projectSkill.skill);
    }
  }

  return Object.values(projects);
}