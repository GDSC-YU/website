import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('ar', () => import('./locales/ar.json'));

init({ initialLocale: getLocaleFromNavigator(), fallbackLocale: 'en' });
