<script lang="ts">
	import Sun from '~icons/ri/sun-line';
	import Moon from '~icons/ri/moon-line';

	import { toggleMode } from 'mode-watcher';
</script>

<button
	on:click={toggleMode}
	class="transition duration-300 ease-in-out lg:hover:scale-90"
	aria-label="Toggle Theme"
>
	<Sun class="hidden h-9 w-9 fill-current dark:flex " />
	<Moon class="h-9 w-9 fill-current dark:hidden" />
</button>
