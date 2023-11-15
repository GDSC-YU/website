<script lang="ts">
	import { onMount } from 'svelte';

	import AR from '~icons/ion/logo-apple-ar';

	let ArCapable: boolean;

	// todo: enhance the expression
	onMount(() => {
		ArCapable =
			/iPhone|iPad|iPod/.test(navigator.userAgent) ||
			(/Mac/.test(navigator.userAgent) && screen.width < 1024 && screen.height < 1366);
	});
</script>

<div>
	{#if ArCapable}
		<a rel="ar" href="/models/ios/gdsc-logo.usdz" class="w-full">
			<img src="/images/hack.jpg" class="opacity-0" alt="hack" />
			<p class="flex items-center justify-center text-lg font-medium">
				View the GDSC Logo in AR <AR class="ml-2" />
			</p>
		</a>
	{/if}
</div>
