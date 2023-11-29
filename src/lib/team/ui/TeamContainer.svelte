<script lang="ts">
	import TeamMember from './TeamMember.svelte';
	import { year } from '$lib/store.js';

	// need to be modified
	import { leads21, engineering21, design21, pr21, content21 } from '$data/teams/team21';
	import { leads22, engineering22, design22, pr22, content22 } from '$data/teams/team22';
	import { leads23, engineering23, design23, pr23, content23 } from '$data/teams/team23';

	export let team: string;

	let selectedLeads: any[] = [];
	let selectedEng: any[] = [];
	let selectedDesign: any[] = [];
	let selectedPr: any[] = [];
	let selectedContent: any[] = [];

	year.subscribe((y) => {
		if (y === '2021-2022') {
			selectedLeads = leads21;
			selectedEng = engineering21;
			selectedDesign = design21;
			selectedPr = pr21;
			selectedContent = content21;
		} else if (y === '2022-2023') {
			selectedLeads = leads22;
			selectedEng = engineering22;
			selectedDesign = design22;
			selectedPr = pr22;
			selectedContent = content22;
		} else {
			selectedLeads = leads23;
			selectedEng = engineering23;
			selectedDesign = design23;
			selectedPr = pr23;
			selectedContent = content23;
		}
	});
</script>

{#if team}
	<h1 class="px-1 text-center text-3xl font-semibold dark:text-white md:text-5xl">
		{team}
	</h1>
{/if}

<div class="grid w-full flex-wrap justify-items-center gap-y-4 md:grid-cols-2 lg:grid-cols-3">
	{#if team === ''}
		{#each selectedLeads as member}
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
		{#each [...selectedLeads, ...selectedEng] as member}
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
		{#each [...selectedLeads, ...selectedDesign] as member}
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
		{#each [...selectedLeads, ...selectedPr] as member}
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
		{#each [...selectedLeads, ...selectedContent] as member}
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
