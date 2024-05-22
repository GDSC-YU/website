<script lang="ts">
	import { locale } from 'svelte-i18n';

	function setLanguage(lang: string) {
		$locale = lang;
		if (lang === 'ar') {
			document.documentElement.dir = 'rtl';
		} else {
			document.documentElement.dir = 'ltr';
		}
	}
</script>

<button
	type="button"
	class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-2xl border border-secret px-4 py-2 text-sm font-medium transition-colors hover:bg-secret hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-200 dark:hover:bg-slate-200 dark:hover:text-black"
	on:click={() => setLanguage($locale === 'ar' ? 'en' : 'ar')}
>
	{$locale === 'ar' ? 'English' : 'العربيّة'}
</button>
