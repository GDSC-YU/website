<script lang="ts">
	import { locale } from 'svelte-i18n';

	import { toggleMode } from 'mode-watcher';

	import Sun from '~icons/ri/sun-line';
	import Moon from '~icons/ri/moon-line';

	const isArabic = $locale === 'ar';
</script>

<button
	type="button"
	class="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-2xl border border-secret text-sm font-medium transition-colors hover:bg-secret hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-200 dark:hover:bg-slate-200 dark:hover:text-black"
	on:click={toggleMode}
>
	<Sun
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">{isArabic ? 'تبديل الوضع' : 'Toggle theme'} </span>
</button>
