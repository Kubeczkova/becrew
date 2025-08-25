import { register, init, getLocaleFromNavigator, locale, t } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('cs', () => import('./locales/cs.json'));

function normalizeLocale(loc: string | null) {
  return loc?.split('-')[0] ?? 'en';
}

init({
  fallbackLocale: 'en',
  initialLocale: normalizeLocale(getLocaleFromNavigator())
});

export { locale, t };