<script lang="ts">
	import Home from '$lib/home';
	import Header from '$lib/header';
	import Events from '$lib/events';
	import Projects from '$lib/projects';
	import Team from '$lib/team';
	import Connect from '$lib/connect';
	import { year } from '$lib/store';

	import ScrollUp from '$lib/ScrollUp.svelte';

	const title = 'Google DSC | Al Yamamah';
	const description =
		"Welcome to the official website of Al Yamamah's University Google Developer Student Club!";

	year.set('2023-2024');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
</svelte:head>

<Header />
<Home />
<Events />
<Projects />
<Team />
<Connect />

<ScrollUp />
