<script lang="ts">
	import '../app.postcss';
	import '../i18n';

	import { isLoading } from 'svelte-i18n';

	import { ModeWatcher } from 'mode-watcher';
</script>

<svelte:head>
	<link
		rel="preload"
		href="/fonts/OpenSans.woff2"
		as="font"
		type="font/woff"
		crossOrigin="anonymous"
	/>
</svelte:head>


{#if $isLoading}
	Hello 👋🏻
{:else}
	<ModeWatcher />
	<slot />
{/if}
