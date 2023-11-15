<script lang="ts">
	import Spacer from '$lib/Spacer.svelte';
	import TeamContainer from '$lib/team/ui/TeamContainer.svelte';

	const title = 'Our Cool Team!';
	const description = 'Meet the passionate and talented people behind Google DSC Al Yamamah! ';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
</svelte:head>

<section>
	<!-- Wave Shape And Heading Text -->
	<Spacer title="The Founding Team 😎" color="yellow" />
	<!-- Content -->
	<div class="flex flex-col gap-y-10 px-2 py-5 lg:px-5">
		<TeamContainer team="The Board 💼" />
		<TeamContainer team="Tech Team 💻" />
		<TeamContainer team="Art Department 🎨" />
		<TeamContainer team="Communications and PR 📧" />
		<TeamContainer team="Content Creators 🤳" />
	</div>
</section>
