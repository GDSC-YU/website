<script lang="ts">
	import TeamMemberComponent from './TeamMember.svelte';

	import { year } from '$lib/store';

	import { teamData } from '$data/teams/index';
	import type { TeamMember, TeamData } from '$data/teams/index';

	export let team: string;
	let selectedTeamMembers: TeamMember[];

	const teamKeyMapping: Record<string, string> = {
		'Tech Team 💻': 'Engineering',
		'Art Department 🎨': 'Design',
		'Communications and PR 📧': 'Pr',
		'Content Creators 🤳': 'Content'
	};

	const getTeamMembers = (year: string, team: string): TeamMember[] => {
		const teams: TeamData = teamData[year as keyof typeof teamData];

		if (!teams) {
			return [];
		}

		if (team === '') {
			return teams.Leads;
		}

		const teamKeyword = teamKeyMapping[team];

		if (teamKeyword === 'Leads') {
			return teams.Leads;
		} else {
			const relevantLeads = teams.Leads.filter((lead) => lead.team.includes(teamKeyword));
			const teamMembers = (teams as any)[teamKeyword] || [];

			return [...relevantLeads, ...teamMembers];
		}
	};

	$: selectedTeamMembers = getTeamMembers($year, team);
</script>

{#if team}
	<h1 class="px-1 text-center text-3xl font-semibold dark:text-white md:text-5xl">
		{team}
	</h1>
{/if}

<div class="grid w-full flex-wrap justify-items-center gap-y-4 md:grid-cols-2 lg:grid-cols-3">
	{#each selectedTeamMembers as member}
		<TeamMemberComponent
			img={member.image}
			name={member.name}
			position={member.position}
			twitter={member.social.twitter}
			github={member.social.github}
			instagram={member.social.instagram}
			linkedin={member.social.linkedin}
		/>
	{/each}
</div>
