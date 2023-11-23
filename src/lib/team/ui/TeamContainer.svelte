<script lang="ts">
	import TeamMember from './TeamMember.svelte';

	import { leads, engineering, design, pr, content } from '$data/teams/team';

	export let team: string;
</script>

{#if team}
	<h1 class="px-1 text-center text-3xl font-semibold dark:text-white md:text-5xl">
		{team}
	</h1>
{/if}

<div class="grid w-full flex-wrap justify-items-center gap-y-4 md:grid-cols-2 lg:grid-cols-3">
	{#if team === ''}
		{#each leads as member}
			<TeamMember
				img={member.image}
				name={member.name}
				position={member.position}
				twitter={member.social.twitter}
				github={member.social.github}
				instagram={member.social.instagram}
				linkedin={member.social.linkedin}
			/>
		{/each}
	{/if}

	{#if team === 'Tech Team 💻'}
		{#each [...leads, ...engineering] as member}
			{#if member.position.includes('Engineering ')}
				<TeamMember
					img={member.image}
					name={member.name}
					position={member.position}
					twitter={member.social.twitter}
					github={member.social.github}
					instagram={member.social.instagram}
					linkedin={member.social.linkedin}
				/>
			{/if}
		{/each}
	{/if}

	{#if team === 'Art Department 🎨'}
		{#each [...leads, ...design] as member}
			{#if member.position.includes('Design')}
				<TeamMember
					img={member.image}
					name={member.name}
					position={member.position}
					twitter={member.social.twitter}
					github={member.social.github}
					instagram={member.social.instagram}
					linkedin={member.social.linkedin}
				/>
			{/if}
		{/each}
	{/if}

	{#if team === 'Communications and PR 📧'}
		{#each [...leads, ...pr] as member}
			{#if member.position.includes('Public Relations')}
				<TeamMember
					img={member.image}
					name={member.name}
					position={member.position}
					twitter={member.social.twitter}
					github={member.social.github}
					instagram={member.social.instagram}
					linkedin={member.social.linkedin}
				/>
			{/if}
		{/each}
	{/if}

	{#if team === 'Content Creators 🤳'}
		{#each [...leads, ...content] as member}
			{#if member.position.includes('Content') || member.position.includes('Account')}
				<TeamMember
					img={member.image}
					name={member.name}
					position={member.position}
					twitter={member.social.twitter}
					github={member.social.github}
					instagram={member.social.instagram}
					linkedin={member.social.linkedin}
				/>
			{/if}
		{/each}
	{/if}
</div>
