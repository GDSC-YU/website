<script>
	//import {toggleMembers} from "../Team.svelte";
	//import {showMembers}  from "../Team.svelte";
</script>
<div>
	<button
		class="transform rounded-lg border border-google-yellow px-4 py-2 text-lg font-semibold transition duration-200 ease-in hover:-translate-y-1 hover:border-transparent hover:bg-google-yellow active:translate-y-0 md:text-xl"
		on:click={toggleMembers}
	>{(showMembers)? "!Show The Rest" : "Show The Rest"} 😎
	</button>
</div>
