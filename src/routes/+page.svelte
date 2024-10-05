<script lang="ts">
	import { t } from 'svelte-i18n';
	import Home from '$lib/home';
	import Header from '$lib/header';
	import Events from '$lib/events';
	import Projects from '$lib/projects';
	import Team from '$lib/team';
	import Connect from '$lib/connect';

	import ScrollUp from '$lib/ScrollUp.svelte';

	const title = $t('meta.title');
	const description = $t('meta.description');
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
