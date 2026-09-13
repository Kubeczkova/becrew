import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http';
import { drizzle as drizzlePg } from 'drizzle-orm/postgres-js';
import { neon } from '@neondatabase/serverless';
import postgres from 'postgres';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export const db = env.DATABASE_URL.includes('neon.tech')
	? drizzleNeon(neon(env.DATABASE_URL), { schema })
	: drizzlePg(postgres(env.DATABASE_URL), { schema });
