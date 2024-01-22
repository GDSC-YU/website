<script>
	import { t } from 'svelte-i18n';
</script>

<button
	type="submit"
	class="inline-flex items-center rounded border-b-2 border-google-green bg-slate-100 px-6 py-2 text-black shadow-lg transition duration-300 ease-in-out hover:bg-google-green hover:text-white dark:shadow-black/30"
>
	<span class="mr-2 font-bold">{$t('send')}</span>
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
	</svg>
</button>
