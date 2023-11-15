<script lang="ts">
	import '../app.postcss';

	// todo: drop & build our own
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<slot />
