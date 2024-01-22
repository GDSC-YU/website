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

<div>
	<button on:click={() => setLanguage('en')} class="language-button">English</button>
	<button on:click={() => setLanguage('ar')} class="language-button">العربية</button>
</div>
