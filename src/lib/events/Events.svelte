<script>
	import { t } from 'svelte-i18n';

	import Slider from './ui/Slider.svelte';
	import EventsButton from './ui/EventsButton.svelte';

	import Spacer from '$lib/Spacer.svelte';
</script>

<section id="events">
	<!-- Wave Shape And Heading Text -->
	<Spacer title={$t('events')} color="blue" />
	<!-- Content -->
	<Slider />
	<EventsButton />
</section>
