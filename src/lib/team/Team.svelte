<script>
	import Spacer from '$lib/Spacer.svelte';
	import TeamButton from './ui/TeamButton.svelte';
	import TeamContainer from './ui/TeamContainer.svelte';

	export let showMembers = false;
	
	export const toggleMembers = () =>(showMembers = !showMembers);
</script>

<section id="team">
	<!-- Wave Shape And Heading Text -->
	<Spacer title="Meet The Team!" color="yellow" />
	<!-- Content -->
	<div class="flex flex-col items-center gap-y-10 px-2 py-5 md:gap-y-12 lg:px-5">
		<TeamContainer team="" />
		{#if showMembers}
			<TeamContainer team="Tech Team 💻" />
			<TeamContainer team="Art Department 🎨" />
			<TeamContainer team="Communications and PR 📧" />
			<TeamContainer team="Content Creators 🤳" />
		{/if}
		<!-- <TeamButton /> -->
		<div>
			<button
				class="transform rounded-lg border border-google-yellow px-4 py-2 text-lg font-semibold transition duration-200 ease-in hover:-translate-y-1 hover:border-transparent hover:bg-google-yellow active:translate-y-0 md:text-xl"
				on:click={toggleMembers}
				>{(showMembers)? "!Show The Rest" : "Show The Rest"} 😎
			</button>
		</div>
	</div>
</section>
