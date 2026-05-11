import enTranslations from '$lib/locales/en.json';
import csTranslations from '$lib/locales/cs.json';

export function getTranslation(locale: string | null, key: string): string {
	const translations: Record<string, unknown> =
		locale === 'cs'
			? (csTranslations as Record<string, unknown>)
			: (enTranslations as Record<string, unknown>);
	const keys = key.split('.');
	let value: unknown = translations;
	for (const k of keys) {
		if (typeof value === 'object' && value !== null) {
			value = (value as Record<string, unknown>)[k];
		}
	}
	return typeof value === 'string' ? value : key;
}

