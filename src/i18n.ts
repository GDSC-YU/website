import { register, init, locale } from 'svelte-i18n';

import { writable } from 'svelte/store';

export const isLocaleLoading = writable(true);

register('en', () => import('./locales/en.json'));
register('ar', () => import('./locales/ar.json'));

const isClient = typeof window !== 'undefined';
const savedLocale = isClient ? localStorage.getItem('locale') || 'en' : 'en';

function setDocumentDirection(lang: string) {
	if (isClient) {
		document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
	}
}

init({
	initialLocale: savedLocale,
	fallbackLocale: 'en'
});

if (isClient) {
	setDocumentDirection(savedLocale);
	isLocaleLoading.set(false);
}

if (isClient) {
	locale.subscribe((currentLocale) => {
		if (currentLocale) {
			localStorage.setItem('locale', currentLocale);
			setDocumentDirection(currentLocale);
		}
	});
}
