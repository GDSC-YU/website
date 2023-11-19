<script lang="ts">
	export let showMembers : Boolean;
	export let onClick: () => Boolean;
	export let href : string;
</script>
<a href={href}>
	<div>
		<button
		class="transform rounded-lg border border-google-yellow px-4 py-2 text-lg font-semibold transition duration-200 ease-in hover:-translate-y-1 hover:border-transparent hover:bg-google-yellow active:translate-y-0 md:text-xl"
		on:click={onClick}
	>{(showMembers)? "!Show The Rest" : "Show The Rest"} 😎
	</button>
	</div>
</a>
	
