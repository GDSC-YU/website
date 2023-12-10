<script>
	import Spacer from '$lib/Spacer.svelte';
	import Slider from './ui/Slider.svelte';
	import EventsButton from './ui/EventsButton.svelte';
	import { t } from 'svelte-i18n';

</script>

<section id="events">
	<!-- Wave Shape And Heading Text -->
	<Spacer title="{$t('events')}" color="blue" />
	<!-- Content -->
	<Slider />
	<EventsButton />
</section>
