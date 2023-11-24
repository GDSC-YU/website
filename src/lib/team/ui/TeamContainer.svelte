<script lang="ts">
	import TeamMember from './TeamMember.svelte';

	import { leads22, engineering22, design22, pr22, content22 } from '$data/teams/team21-22';
	import { leads23, engineering23, design23, pr23, content23 } from '$data/teams/team22-23';
	import { leads24, engineering24, design24, pr24, content24 } from '$data/teams/team23-24';

	export let team: string;
	export let year: string;
</script>

{#if team}
	<h1 class="px-1 text-center text-3xl font-semibold dark:text-white md:text-5xl">
		{team}
	</h1>
{/if}

<div class="grid w-full flex-wrap justify-items-center gap-y-4 md:grid-cols-2 lg:grid-cols-3">
	{#if team === '' && year === '2022-2023'}
		{#each leads23 as member}
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

	{#if team === 'Tech Team 💻' && year === '2022-2023'}
		{#each [...leads23, ...engineering23] as member}
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

	{#if team === 'Art Department 🎨' && year === '2022-2023'}
		{#each [...leads23, ...design23] as member}
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

	{#if team === 'Communications and PR 📧' && year === '2022-2023'}
		{#each [...leads23, ...pr23] as member}
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

	{#if team === 'Content Creators 🤳' && year === '2022-2023'}
		{#each [...leads23, ...content23] as member}
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
