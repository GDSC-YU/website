<script lang="ts">
	import TeamMember from './TeamMember.svelte';
	import { year } from '$lib/store.js';

	// need to be modified
	import { leads21, engineering21, design21, pr21, content21 } from '$data/teams/team21';
	import { leads22, engineering22, design22, pr22, content22 } from '$data/teams/team22';
	import { leads23, engineering23, design23, pr23, content23 } from '$data/teams/team23';

	export let team: string;

	let leads: ArrayLike<unknown>;
	let engineering: ArrayLike<unknown>;
	let design: ArrayLike<unknown>;
	let pr: ArrayLike<unknown>;
	let content: ArrayLike<unknown>;

	/*{#if $year === '2023-2024'}
	{leads} = {leads23}
	{engineering} = {engineering23}
	{design} = {design23}
	{pr} = {pr23}
	{content} = {content23}
{/if}
{#if $year === '2023-2024'}
	{leads} = {leads22}
	{engineering} = {engineering22}
	{design} = {design22}
	{pr} = {pr22}
	{content} = {content22}
{/if}
{#if $year === '2023-2024'}
	{leads} = {leads21}
	{engineering} = {engineering21}
	{design} = {design21}
	{pr} = {pr21}
	{content} = {content21}
{/if}*/
</script>

{#if team}
	<h1 class="px-1 text-center text-3xl font-semibold dark:text-white md:text-5xl">
		{team}
	</h1>
{/if}

<div class="grid w-full flex-wrap justify-items-center gap-y-4 md:grid-cols-2 lg:grid-cols-3">
	{#if team === ''}
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

	{#if team === 'Tech Team 💻'}
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

	{#if team === 'Art Department 🎨'}
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

	{#if team === 'Communications and PR 📧'}
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

	{#if team === 'Content Creators 🤳'}
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
