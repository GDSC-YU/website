import { register, init } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('ar', () => import('./locales/ar.json'));

init({ initialLocale: 'en', fallbackLocale: 'en' });
