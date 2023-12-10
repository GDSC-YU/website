// src/i18n.js
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('ar', () => import('./locales/ar.json'));
// ...register other languages

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
