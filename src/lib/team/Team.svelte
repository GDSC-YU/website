<script>
	import Spacer from '$lib/Spacer.svelte';
	import TeamButton from './ui/TeamButton.svelte';
	import TeamContainer from './ui/TeamContainer.svelte';
</script>

<section id="team">
	<!-- Wave Shape And Heading Text -->
	<Spacer title="Meet The Team!" color="yellow" />
	<!-- Content -->
	<div class="flex flex-col items-center gap-y-10 px-2 py-5 md:gap-y-12 lg:px-5">
		<TeamContainer team="" />
		<TeamButton />
	</div>
</section>
