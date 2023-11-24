<script lang="ts">
	import Home from '$lib/home';
	import Header from '$lib/header';
	import Events from '$lib/events';
	import Projects from '$lib/projects';
	import Team from '$lib/team';
	import Connect from '$lib/connect';

	import ScrollUp from '$lib/ScrollUp.svelte';

	const title = 'Google DSC | Al Yamamah';
	const description =
		"Welcome to the official website of Al Yamamah's University Google Developer Student Club!";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<link rel="preload" href="/images/layers/blue-layer.svg" as="image" type="image/svg+xml" />
</svelte:head>

<Header />
<Home />
<Events />
<Projects />
<Team />
<Connect />

<ScrollUp />
