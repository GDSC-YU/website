import { leads22, engineering22, design22, pr22, content22 } from './team22';
import { leads23, engineering23, design23, pr23, content23 } from './team23';
import { leads24, engineering24, design24, pr24, content24 } from './team24';
//import { content24 } from './team24';

export interface SocialLinks {
	twitter?: string;
	github?: string;
	instagram?: string;
	linkedin?: string;
}

export interface TeamMember {
	nameKey: string;
	positionKey: string;
	team: string[];
	image?: string;
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
	},
	'2024 - 2025': {
		Leads: leads24,
		Engineering: engineering24,
		Design: design24,
		Pr: pr24,
		Content: content24
	}
};
