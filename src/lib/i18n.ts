import { init, register, getLocaleFromNavigator, locale, t } from 'svelte-i18n';

import enTranslations from '$lib/locales/en.json';
import csTranslations from '$lib/locales/cs.json';

function normalizeLocale(loc: string | null) {
	return loc?.split('-')[0] ?? 'en';
}

function getInitialLocale() {
	if (typeof document !== 'undefined') {
		const cookieLocale = document.cookie
			.split('; ')
			.find((row) => row.startsWith('locale='))
			?.split('=')[1];
		if (cookieLocale) {
			return cookieLocale;
		}
	}
	return normalizeLocale(getLocaleFromNavigator());
}

register('en', () => Promise.resolve(enTranslations));
register('cs', () => Promise.resolve(csTranslations));

init({
	fallbackLocale: 'cs',
	initialLocale: getInitialLocale()
});

locale.subscribe((value) => {
	if (typeof document !== 'undefined' && value) {
		document.cookie = `locale=${value}; path=/; max-age=31536000`;
	}
});

export { locale, t };
