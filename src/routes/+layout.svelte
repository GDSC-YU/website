<script lang="ts">
	import '../app.postcss';

	import { isLoading as i18nLoading } from 'svelte-i18n';
	import { isLocaleLoading } from '../i18n';

	import { ModeWatcher } from 'mode-watcher';

	import '@fontsource-variable/alexandria';

	let combinedLoading = true;
	let minLoadingTimeReached = false;

	$: if (!i18nLoading && !isLocaleLoading && minLoadingTimeReached) {
		combinedLoading = false;
	}

	setTimeout(() => {
		minLoadingTimeReached = true;
	}, 2000);

	$: combinedLoading = $i18nLoading || $isLocaleLoading || !minLoadingTimeReached;
</script>

<ModeWatcher />

{#if combinedLoading}
	<div class="flex min-h-screen items-center justify-center">
		<img
			src="/images/gdsc.svg"
			alt="Google DSC LOGO"
			class="h-64 w-64 animate-pulse md:h-96 md:w-96"
		/>
	</div>
{:else}
	<slot />
{/if}
