import { leads22, engineering22, design22, pr22, content22 } from './team22';
import { leads23, engineering23, design23, pr23, content23 } from './team23';

export interface SocialLinks {
	twitter: string | null;
	github: string | null;
	instagram: string | null;
	linkedin: string | null;
}

export interface TeamMember {
	nameKey: string;
	positionKey: string;
	team: string[];
	image: string | null;
	social: SocialLinks;
}

export type TeamData = {
	Leads: TeamMember[];
	Engineering: TeamMember[];
	Design: TeamMember[];
	Pr: TeamMember[];
	Content: TeamMember[];
};

export const teamData = {
	'2022 - 2023': {
		Leads: leads22,
		Engineering: engineering22,
		Design: design22,
		Pr: pr22,
		Content: content22
	},
	'2023 - 2024': {
		Leads: leads23,
		Engineering: engineering23,
		Design: design23,
		Pr: pr23,
		Content: content23
	}
};
