<script lang="ts">
	import '../app.postcss';
	import '../i18n';


	// todo: drop & build our own
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<slot />
