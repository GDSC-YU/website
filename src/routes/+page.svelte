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

	let now = new Date();
	let year = now.getFullYear();
	let month = (now.getMonth() + 1).toString().padStart(2, '0'); //Pad a string with "0" until it reaches the length 2
	let currYear: string;
	const updateYear = () => {
		if (month == '9') {
			return (currYear = year + '-' + year + 1);
		}
	};
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
<Team year={currYear} />
<Connect />

<ScrollUp />
