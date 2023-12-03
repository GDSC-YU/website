<script lang="ts">
	import { year } from '$lib/store';

	export let showMembers: Boolean;
	export let onClick: () => void;

	$: currentYear = $year;
</script>

<div class="flex flex-col gap-5 md:flex-row">
	<button on:click={onClick}>
		{showMembers ? '!Show The Rest' : 'Show The Rest'} 😎
	</button>

	{#if currentYear !== '2022 - 2023'}
		<button on:click={() => year.set('2022 - 2023')}>2022 - 2023 Team!</button>
	{/if}
	{#if currentYear !== '2023 - 2024'}
		<button on:click={() => year.set('2023 - 2024')}>2023 - 2024 Team!</button>
	{/if}
</div>

<style lang="postcss">
	button {
		@apply transform rounded-lg border border-google-yellow px-4 py-2 text-lg font-semibold transition duration-200 ease-in hover:-translate-y-1 hover:border-transparent hover:bg-google-yellow active:translate-y-0 md:text-xl;
	}
</style>
