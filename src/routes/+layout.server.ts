import { getProjectsWithTranslations, getSkills } from '$lib/server/db/loaders';

export const load = async ({ cookies }) => {
  const lang = cookies.get('lang') ?? 'en';

  const projects = await getProjectsWithTranslations();
  const skills = await getSkills();

  return {
    lang,
    projects,
    skills,
  };
}

export type Skill = {
  category: string;
  id: number;
  name: string;
  image: string;
  url: string;
};

export interface Bubble {
  skill: Skill;
  x: number;
  y: number;
  speed: number;
  amplitude: number;
  frequency: number;
  phase: number;
  size: number;
}
