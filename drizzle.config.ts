import { defineConfig } from 'drizzle-kit';
import * as process from 'node:process';

function getEnv(key: string): string {
	const value = process.env[key];
	if (!value) throw new Error(`Missing required env: ${key}`);
	return value;
}

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		host: getEnv('DB_HOST'),
		user: getEnv('DB_USER'),
		password: getEnv('DB_PASSWORD'),
		database: getEnv('DB_NAME'),
		ssl: 'require'
	},
	verbose: true,
	strict: true
});
