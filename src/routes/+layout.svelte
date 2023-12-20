<script lang="ts">
	import '../app.postcss';
	import '../i18n';

	import { isLoading } from 'svelte-i18n';

	// todo: drop & build our own
	import { ModeWatcher } from 'mode-watcher';
</script>

{#if $isLoading}
	Hello 👋🏻
{:else}
	<ModeWatcher />
	<slot />
{/if}
