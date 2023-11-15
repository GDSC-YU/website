<script lang="ts">
	import Home from '$lib/home';
	import Header from '$lib/header';
	import Events from '$lib/events';
	import Projects from '$lib/projects';

	const title = 'GDSC Al-Yamamah University';
	const description =
		"Welcome to the official website of Al Yamamah's University Google Developer Student Club!";
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
