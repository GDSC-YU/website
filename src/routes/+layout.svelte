<script lang="ts">
	import '../app.postcss';

	// todo: drop & build our own
	import { ModeWatcher } from 'mode-watcher';
</script>
<svelte:head>
    <link
	rel="preload"
	href="/static/fonts/OpenSans-VariableFont_wdth,wght.ttf"
	as="font"
	type="font/ttf"
	crossOrigin="anonymous"
/>
</svelte:head>
<ModeWatcher />
<slot />
