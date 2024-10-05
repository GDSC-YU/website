<script lang="ts">
	import { t } from 'svelte-i18n';
	import { year } from '$lib/store';

	$: currentYear = $year;

	const yearOptions = [
		{ labelKey: 'team22', value: '2022 - 2023' },
		{ labelKey: 'team23', value: '2023 - 2024' },
		{ labelKey: 'team24', value: '2024 - 2025' }
	];

	function handleYearChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		if (target) {
			year.set(target.value);
		}
	}
</script>

<div class="flex flex-col items-center justify-center gap-5 pb-5 pt-10 md:flex-row md:pt-0">
	<select on:change={handleYearChange} bind:value={currentYear} class="text-lg font-normal">
		{#each yearOptions as { labelKey, value }}
			<option {value} disabled={currentYear === value}>
				{$t(labelKey)}
			</option>
		{/each}
	</select>
</div>

<style lang="postcss">
	select {
		@apply rounded-lg border border-google-blue px-4 py-2 text-lg transition duration-200 ease-in focus:outline-none focus:ring-2 focus:ring-google-blue;
	}
</style>
