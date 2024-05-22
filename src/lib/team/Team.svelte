<script lang="ts">
	import { t, locale } from 'svelte-i18n';

	import TeamContainer from './ui/TeamContainer.svelte';
	import TeamButton from './ui/TeamButton.svelte';

	import Spacer from '$lib/Spacer.svelte';
	import { year } from '$lib/store';

	let areShown = false;
	let teamSection: HTMLElement;

	const toggleMembers = () => {
		areShown = !areShown;
		if (!areShown) {
			teamSection.scrollIntoView();
		}
	};

	$: selectedYear = $year;
	$: currentLocale = $locale;
	$: isArabic = currentLocale === 'ar';

	const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
	const convertToArabicNumerals = (numberString: string): string =>
		numberString.replace(/\d/g, (digit) => arabicNumerals[parseInt(digit)]);

	$: displayedYear = isArabic ? convertToArabicNumerals(selectedYear) : selectedYear;
</script>

<section id="team" bind:this={teamSection}>
	<!-- Wave Shape And Heading Text -->
	<Spacer
		title={`${isArabic ? `${$t('team')} ${displayedYear}` : `${displayedYear} ${$t('team')}`}!`}
		color="yellow"
	/>

	<!-- Content -->
	<div class="flex flex-col items-center gap-y-10 px-2 py-5 md:gap-y-12 lg:px-5">
		<TeamContainer team="" />
		{#if areShown}
			<TeamContainer team="Tech Team 💻" />
			<TeamContainer team="Art Department 🎨" />
			<TeamContainer team="Communications and PR 📧" />
			<TeamContainer team="Content Creators 🤳" />
		{/if}
		<TeamButton showMembers={areShown} onClick={toggleMembers} />
	</div>
</section>
