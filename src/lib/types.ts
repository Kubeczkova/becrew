export type Skill = {
  id: number;
  name: string;
  url: string | null;
  image: string | null;
  category: 'programming' | 'frameworks' | 'technology' | 'tools';
}

export type ProjectTranslation = {
  description: string;
  contribution: string;
};

export type Project = {
  id: number;
  name: string;
  image: string;
  showCode: string | null;
  showLink: string | null;
  cooperation: string | null;
  skills: number[];
  translations: Record<string, ProjectTranslation>;
};

export type LayoutData = {
  lang: string;
  projects: Project[];
  skills: Skill[];
};

