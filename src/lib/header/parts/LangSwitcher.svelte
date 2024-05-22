<script lang="ts">
	import { locale } from 'svelte-i18n';

	import Globe from '~icons/ri/global-line';

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
	class="transition-transfrom duration-200 ease-in-out lg:hover:scale-90"
	on:click={() => setLanguage($locale === 'ar' ? 'en' : 'ar')}
>
	<Globe class="h-8 w-8" />
</button>
