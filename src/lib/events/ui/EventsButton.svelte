<script lang="ts">
	import { year } from '$lib/store';
	import { t } from 'svelte-i18n';
	$: currentYear = $year;
</script>

<div class="flex flex-col items-center justify-center gap-5 pb-5 pt-10 md:flex-row md:pt-12">
	{#if currentYear !== '2022 - 2023'}
		<button on:click={() => year.set('2022 - 2023')}>{$t('team22')}</button>
	{/if}
	{#if currentYear !== '2023 - 2024'}
		<button on:click={() => year.set('2023 - 2024')}>{$t('team23')}</button>
	{/if}
</div>

<style lang="postcss">
	button {
		@apply transform rounded-lg border border-google-blue px-4 py-2 text-lg font-semibold transition duration-200 ease-in hover:-translate-y-1 hover:border-transparent hover:bg-google-blue active:translate-y-0 md:text-xl;
	}
</style>
