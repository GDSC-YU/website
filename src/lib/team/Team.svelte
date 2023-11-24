<script lang="ts">
	import Spacer from '$lib/Spacer.svelte';
	import TeamContainer from './ui/TeamContainer.svelte';
	import TeamButton from './ui/TeamButton.svelte';

	export let year: string;

	let areShown = false;
	let teamSection: HTMLElement;

	const toggleMembers = () => {
		areShown = !areShown;
		if (!areShown) {
			teamSection.scrollIntoView();
		}
	};
</script>

<section id="team" bind:this={teamSection}>
	<!-- Wave Shape And Heading Text -->
	<Spacer title="Meet The Team!" color="yellow" />
	<!-- Content -->
	<div class="flex flex-col items-center gap-y-10 px-2 py-5 md:gap-y-12 lg:px-5">
		<TeamContainer team="" {year} />
		{#if areShown}
			<TeamContainer team="Tech Team 💻" {year} />
			<TeamContainer team="Art Department 🎨" {year} />
			<TeamContainer team="Communications and PR 📧" {year} />
			<TeamContainer team="Content Creators 🤳" {year} />
		{/if}
		<TeamButton showMembers={areShown} onClick={toggleMembers} />
	</div>
</section>
