import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { project, projectTranslation } from './schema';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
	throw new Error('DATABASE_URL is not set');
}

const client = postgres(process.env.DATABASE_URL);
const db = drizzle(client);

async function seed() {
	console.log('Seeding database...');

	const [meepleProject] = await db
		.insert(project)
		.values({
			image: '/projects/meeple.webp',
			github: 'https://git.kropcloud.net/Beeebooo/MEEPLE',
			demo: '',
			live: '',
			main: true
		})
		.returning();

	await db.insert(projectTranslation).values([
		{
			projectId: meepleProject.id,
			language: 'cs',
			title: 'Meeple Café',
			description: 'Webová stránka pro kavárnu'
		},
		{
			projectId: meepleProject.id,
			language: 'en',
			title: 'Meeple Café',
			description: 'Website for a café'
		}
	]);

	const [becrewProject] = await db
		.insert(project)
		.values({
			image: '/projects/becrew.webp',
			github: 'https://git.kropcloud.net/Beeebooo/Portfolio',
			demo: '',
			live: '',
			main: true
		})
		.returning();

	await db.insert(projectTranslation).values([
		{
			projectId: becrewProject.id,
			language: 'cs',
			title: 'Beeebooo Crew',
			description: 'Vlastní web naší Crew'
		},
		{
			projectId: becrewProject.id,
			language: 'en',
			title: 'Beeebooo Crew',
			description: 'Own website for our Crew'
		}
	]);

	console.log('Database seeded successfully!');
	await client.end();
	process.exit(0);
}

seed().catch(() => {
	process.exit(1);
});

