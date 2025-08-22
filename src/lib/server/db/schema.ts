import { pgTable, serial, text, varchar, integer} from 'drizzle-orm/pg-core';


export const category = pgTable('category', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	subtitle: text('subtitle').notNull(),
})

export const skill = pgTable('skill', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	image: varchar('image', { length: 256 }),
	category: integer("category").references(() => category.id)
});

export const project = pgTable('project', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	image: varchar('image', { length: 256 }),
	description: text('description'),
})

export const projectSkill = pgTable('projectSkill', {
	project: integer('project').references(() => project.id).notNull(),
	skill: integer('skill').references(() => skill.id).notNull(),
})

export const categoryTranslation = pgTable('categoryTranslation', {
  id: serial('id').primaryKey(),
  language: varchar('language', { length: 2 }),
  title: text('title'),
  subtitle: text('subtitle'),
  categoryId: integer('category_id').references(() => category.id).notNull(),
});

export const projectTranslation = pgTable('projectTranslation', {
  id: serial('id').primaryKey(),
  language: varchar('language', { length: 2 }),
  description: text('description'),
  projectId: integer('project_id').references(() => project.id).notNull(),
});