<script lang="ts">
	import Sun from '~icons/ri/sun-line';
	import Moon from '~icons/ri/moon-line';

	import { toggleMode } from 'mode-watcher';
</script>

<button
	on:click={toggleMode}
	class="transition-transform duration-200 ease-in-out lg:hover:scale-90"
	aria-label="Toggle Theme"
>
	<Sun class="hidden h-8 w-8 fill-current dark:flex " />
	<Moon class="h-8 w-8 fill-current dark:hidden" />
</button>
