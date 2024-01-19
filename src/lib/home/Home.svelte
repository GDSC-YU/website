<script>
  import { t } from 'svelte-i18n';

	import Yu from './ui/Yu.svelte';
	import Google from './ui/Google.svelte';
	import HomeButton from './ui/HomeButton.svelte';
	import LogoModel from './ui/LogoModel.svelte';
	import ARview from './ui/ARview.svelte';
	import HomeButton from './ui/HomeButton.svelte';
	import Google from './ui/Google.svelte';
</script>

<section
	id="home"
	class="flex flex-col items-center justify-between gap-y-16 px-8 py-14 md:flex-row lg:px-10 lg:py-20"
>
	<div
		class="flex flex-col items-center gap-y-9 text-center dark:text-white md:w-1/2 md:items-start md:gap-y-6 md:text-left lg:flex-grow"
	>

		<Yu />

		<Google />
		<h1 class="text-4xl font-bold lg:text-6xl">{$t('Club')}</h1>
		<p class="text-xl font-bold lg:text-3xl">{$t('LGC')}</p>
		<HomeButton />
	</div>
	<div class="flex w-5/6 flex-col items-center md:w-1/2 lg:min-h-[24.5rem] lg:w-full lg:max-w-xl">
		<LogoModel />
		<ARview />
	</div>
</section>
