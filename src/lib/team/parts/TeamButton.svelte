<script lang="ts">
	import { t } from 'svelte-i18n';
	import { year } from '$lib/store';

	export let showMembers: boolean;
	export let onClick: () => void;

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

<div class="flex flex-col gap-5 md:flex-row">
	<button on:click={onClick}>
		{showMembers ? $t('HideTeam') : $t('showMore')}
	</button>

	<select on:change={handleYearChange} bind:value={currentYear} class="text-lg font-medium">
		{#each yearOptions as { labelKey, value }}
			<option {value} disabled={currentYear === value}>
				{$t(labelKey)}
			</option>
		{/each}
	</select>
</div>

<style lang="postcss">
	button,
	select {
		@apply transform rounded-lg border border-google-yellow bg-transparent px-4 py-2 text-lg font-medium transition duration-200 ease-in focus:outline-none focus:ring-2 focus:ring-google-yellow;
	}
</style>
