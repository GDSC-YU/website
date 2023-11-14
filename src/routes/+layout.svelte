<script lang="ts">
	import '../app.postcss';

	import { ModeWatcher } from 'mode-watcher';

	import Header from '$lib/header';
</script>

<ModeWatcher />

<Header />
<slot />
