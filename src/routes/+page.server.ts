import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { contactForm } from '$lib/server/db/schema';

import enTranslations from '$lib/locales/en.json';
import csTranslations from '$lib/locales/cs.json';

function getTranslation(locale: string | null, key: string): string {
	const translations = locale === 'cs' ? csTranslations : enTranslations;
	const keys = key.split('.');
	let value: Record<string, unknown> | string = translations;

	for (const k of keys) {
		if (typeof value === 'object' && value !== null) {
			value = (value as Record<string, unknown>)[k] as Record<string, unknown> | string;
		}
	}

	return typeof value === 'string' ? value : key;
}

export const actions = {
	submitContact: async ({ request, cookies }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const contact = formData.get('contact') as string;
		const message = formData.get('message') as string;

		const locale =
			cookies.get('locale') || request.headers.get('accept-language')?.split('-')[0] || 'en';

		if (!name || name.trim().length === 0) {
			return fail(400, {
				error: getTranslation(locale, 'contact.validation.name_required'),
				field: 'name'
			});
		}

		if (!contact || contact.trim().length === 0) {
			return fail(400, {
				error: getTranslation(locale, 'contact.validation.contact_required'),
				field: 'contact'
			});
		}

		if (!message || message.trim().length === 0) {
			return fail(400, {
				error: getTranslation(locale, 'contact.validation.message_required'),
				field: 'message'
			});
		}

		try {
			await db.insert(contactForm).values({
				name: name.trim(),
				email: contact.trim(),
				message: message.trim(),
				createdAt: new Date().toISOString()
			});

			return { success: true };
		} catch (error) {
			console.error('Failed to save contact form:', error);
			return fail(500, { error: getTranslation(locale, 'contact.validation.save_failed') });
		}
	}
} satisfies Actions;
