<script lang="ts">
	import '../app.postcss';
	import '../i18n';

	import { isLoading } from 'svelte-i18n';

	import { ModeWatcher } from 'mode-watcher';

	import '@fontsource-variable/open-sans';
</script>

{#if $isLoading}
	Hello 👋🏻
{:else}
	<ModeWatcher />
	<slot />
{/if}

<style>
	:global(body) {
		font-family: 'Open Sans Variable', sans-serif;
	}
</style>
