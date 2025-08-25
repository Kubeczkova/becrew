import { pgTable, boolean, serial, text, varchar, integer, pgEnum, primaryKey } from 'drizzle-orm/pg-core';


export const skillCategoryEnum = pgEnum('skill_category', [
  'programming',
  'frameworks',
  'technology',
  'tools',
]);

export const skill = pgTable('skill', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	url: text('url'),
	image: varchar('image', { length: 256 }),
	category: skillCategoryEnum('category').notNull(),
});

export const project = pgTable('project', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	image: varchar('image', { length: 256 }),
	showCode: text('showCode'),
	showLink: text('showLink'),
	cooperation: text('cooperation'),
})

export const projectTranslation = pgTable('projectTranslation', {
  language: varchar('language', { length: 2 }).notNull(),
  description: text('description').notNull(),
	contribution: text('contribution').notNull(),
  projectId: integer('project_id').references(() => project.id).notNull(),
}, (t) => ({
  id: primaryKey({ columns: [t.projectId, t.language] }),
}));

export const projectSkill = pgTable('projectSkill', {
	project: integer('project').references(() => project.id).notNull(),
	skill: integer('skill').references(() => skill.id).notNull(),
})