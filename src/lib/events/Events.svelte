<script>
	import Spacer from '$lib/Spacer.svelte';
	import Slider from './ui/Slider.svelte';
	import EventsButton from './ui/EventsButton.svelte';
</script>

<section id="events">
	<!-- Wave Shape And Heading Text -->
	<Spacer title="Most Recent Events 📚" color="blue" />
	<!-- Content -->
	<Slider />
	<EventsButton />
</section>
