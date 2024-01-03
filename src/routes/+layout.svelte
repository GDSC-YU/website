<script lang="ts">
	import '../app.postcss';

	// todo: drop & build our own
	import { ModeWatcher } from 'mode-watcher';
</script>

<svelte:head>
    <link
	rel="preload"
	href="/fonts/OpenSans-VariableFont_wdth_wght.woff"
	as="font"
	type="font/woff"
	crossOrigin="anonymous"
/>
</svelte:head>

<ModeWatcher />
<slot />
