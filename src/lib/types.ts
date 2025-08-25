export type Skill = {
  id: number;
  name: string;
  url: string | null;
  image: string | null;
  category: 'programming' | 'frameworks' | 'technology' | 'tools';
}

export type ProjectTranslation = {
  description: string;
};

export type Project = {
  id: number;
  name: string;
  image: string;
  skills: number[];
  translations: Record<string, ProjectTranslation>;
};

export type LayoutData = {
  lang: string;
  projects: Project[];
  skills: Skill[];
};

