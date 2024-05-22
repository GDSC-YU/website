<script>
	import { t, locale } from 'svelte-i18n';

	import Google from './parts/Google.svelte';
	import Yu from './parts/Yu.svelte';
	import HomeButton from './parts/HomeButton.svelte';
	import LogoModel from './parts/LogoModel.svelte';
	import ARview from './parts/ARview.svelte';
</script>

<section
	id="home"
	class="flex flex-col items-center justify-between gap-y-10 py-14 md:flex-row md:pr-4 lg:px-10 lg:py-20"
>
	<div
		class="flex flex-col items-center gap-y-7 text-center dark:text-white md:w-1/2 md:items-start md:gap-y-8 md:text-left lg:flex-grow"
	>
		<h1
			class="text-4xl leading-relaxed xl:text-6xl ltr:font-semibold md:ltr:text-left rtl:font-medium md:rtl:text-right"
		>
			{#if $locale === 'ar'}
				{$t('Dev')}{' '}
				<Google />
				{' '}{$t('Club')}
				<Yu /> 🌟
			{:else}
				<Google />{' '}{$t('Dev')}{' '}{$t('Club')} <Yu /> 🌟
			{/if}
		</h1>
		<p class="text-xl lg:text-3xl ltr:font-semibold rtl:font-medium">{$t('LGC')}</p>
		<HomeButton />
	</div>
	<div class="flex w-5/6 flex-col items-center md:w-1/2 lg:min-h-[24.5rem] lg:w-full lg:max-w-xl">
		<LogoModel />
		<ARview />
	</div>
</section>
