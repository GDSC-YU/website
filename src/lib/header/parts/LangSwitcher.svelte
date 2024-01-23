<script lang="ts">
	import { locale } from 'svelte-i18n';

	import SaudiFlag from '~icons/twemoji/flag-saudi-arabia';
	import USFlag from '~icons/twemoji/flag-united-states';

	function setLanguage(lang: string) {
		$locale = lang;
		if (lang === 'ar') {
			document.documentElement.dir = 'rtl';
		} else {
			document.documentElement.dir = 'ltr';
		}
	}
</script>

<div
	class="rounded px-3 py-1 text-lg font-bold outline outline-2 outline-black transition-all duration-300 ease-in-out hover:scale-105 dark:outline-slate-200"
>
	{#if $locale === 'en'}
		<button class="flex flex-row items-center gap-x-2" on:click={() => setLanguage('ar')}>
			<SaudiFlag class="h-6 w-6" /><span>العربية</span>
		</button>
	{:else}
		<button class="flex flex-row items-center gap-x-2" on:click={() => setLanguage('en')}>
			<USFlag class="h-6 w-6" /><span>English</span>
		</button>
	{/if}
</div>
