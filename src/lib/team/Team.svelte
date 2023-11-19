<script>
	import Spacer from '$lib/Spacer.svelte';
	import TeamContainer from './ui/TeamContainer.svelte';
	import TeamButton from './ui/TeamButton.svelte';
	import navLinks from '$data/nav';

	let areShown = false;
	const toggleMembers = () => areShown = !areShown;
</script>

<section id="team">
	<!-- Wave Shape And Heading Text -->
	<Spacer title="Meet The Team!" color="yellow" />
	<!-- Content -->
	<div class="flex flex-col items-center gap-y-10 px-2 py-5 md:gap-y-12 lg:px-5">
		<TeamContainer team="" />
		{#if areShown}
			<TeamContainer team="Tech Team 💻" />
			<TeamContainer team="Art Department 🎨" />
			<TeamContainer team="Communications and PR 📧" />
			<TeamContainer team="Content Creators 🤳" />
		{/if}
		<TeamButton showMembers={areShown} onClick={toggleMembers} href={(areShown? '###' : '#team')}/>
	</div>
</section>
