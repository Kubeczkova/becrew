import { pgTable, serial, text, boolean, integer, unique } from 'drizzle-orm/pg-core';

export const contactForm = pgTable('contact_form', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull(),
	message: text('message').notNull(),
	url: text('url').notNull(),
	createdAt: text('created_at').notNull()
});

export const project = pgTable('project', {
	id: serial('id').primaryKey(),
	image: text('image').notNull(),
	github: text('github').notNull().default(''),
	live: text('live').notNull().default(''),
	demo: text('demo').notNull().default(''),
	main: boolean('main').notNull().default(false),
	seoName: text('seo_name').default('')
});

export const projectTranslation = pgTable('project_translation', {
	id: serial('id').primaryKey(),
	projectId: integer('project_id')
		.notNull()
		.references(() => project.id, { onDelete: 'cascade' }),
	language: text('language').notNull(),
	title: text('title').notNull(),
	description: text('description').notNull()
});

export const projectTheme = pgTable('project_theme', {
	id: serial('id').primaryKey(),
	projectId: integer('project_id')
		.notNull()
		.references(() => project.id, { onDelete: 'cascade' }),
	pageBg:   text('page_background').notNull().default('#1a1a1a'),
	formBg:   text('form_background').notNull().default('#ffffff'),
	pageText: text('page_text').notNull().default('#f4d03f'),
	formText: text('form_text').notNull().default('#1a1a1a')
}, (t) => [unique().on(t.projectId)]);

