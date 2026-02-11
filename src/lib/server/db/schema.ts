import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const contactForm = pgTable('contact_form', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull(),
	message: text('message').notNull(),
	createdAt: text('created_at').notNull()
});
