import { fail } from '@sveltejs/kit';
import type { Cookies } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { contactForm } from '$lib/server/db/schema';
import { getTranslation } from '$lib/server/i18n';

export async function submitContact(request: Request, cookies: Cookies) {
	const formData = await request.formData();
	const name = formData.get('name') as string;
	const contact = formData.get('contact') as string;
	const message = formData.get('message') as string;
	const url = (formData.get('url') as string) || '/';

	const locale = cookies.get('locale') || request.headers.get('accept-language')?.split('-')[0] || 'en';

	if (!name?.trim())
		return fail(400, { error: getTranslation(locale, 'contact.validation.name_required'), field: 'name' });
	if (!contact?.trim())
		return fail(400, { error: getTranslation(locale, 'contact.validation.contact_required'), field: 'contact' });
	if (!message?.trim())
		return fail(400, { error: getTranslation(locale, 'contact.validation.message_required'), field: 'message' });

	await db.insert(contactForm).values({
		name: name.trim(),
		email: contact.trim(),
		message: message.trim(),
		url: url.trim(),
		createdAt: new Date().toISOString()
	});

	return { success: true };
}

