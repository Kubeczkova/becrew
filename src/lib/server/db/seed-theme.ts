import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { project, projectTheme } from './schema';
import { eq } from 'drizzle-orm';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
	throw new Error('DATABASE_URL is not set');
}

const client = postgres(process.env.DATABASE_URL);
const db = drizzle(client);

async function seedThemes() {
	console.log('Seeding project themes...');

	const [meeple] = await db
		.select()
		.from(project)
		.where(eq(project.seoName, 'meeple-cafe'))
		.limit(1);

	if (meeple) {
		await db
			.insert(projectTheme)
			.values({
				projectId: meeple.id,
				pageBg: '#2c1a0e',
				formBg: '#fff8f0',
				pageText: '#fff8f0',
				formText: '#2c1a0e'
			})
			.onConflictDoUpdate({
				target: projectTheme.projectId,
				set: {
					pageBg: '#2c1a0e',
					formBg: '#fff8f0',
					pageText: '#fff8f0',
					formText: '#2c1a0e'
				}
			});
	}

	await client.end();
	process.exit(0);
}

seedThemes().catch(() => {
	process.exit(1);
});

