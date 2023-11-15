interface project {
	name: string;
	description: string;
	image: string;
	imageAlt: string;
	GitHub: string;
	Link: string;
}

const projectsData: project[] = [
	{
		name: 'Al-Yamamah Semester Progress 🗓️',
		description: 'View The Yu Academic Calender Easily!',

		image: '/images/projects/Al-Yamamah Semester Progress.avif',
		imageAlt: 'A ScreenShot Of Al-Yamamah Semester Progress Project',

		GitHub: 'https://github.com/YazeedAlKhalaf/alyamamah-semester-progress/',
		Link: 'https://alyamamah-semester-progress.netlify.app/'
	},
	{
		name: 'Tuwaiq Rooms Availability 📚',
		description: 'Find Empty Rooms Easily!',

		image: '/images/projects/Tuwaiq Rooms Availability.avif',
		imageAlt: 'A ScreenShot Of Tuwaiq Rooms Availability Project',

		GitHub: 'https://github.com/GDSC-YU/tuwaiq-classrooms',
		Link: 'https://tc.gdscyu.com/'
	},
	{
		name: 'Game Camp 👾',
		description: 'A Website For Game Camp Event!',

		image: '/images/projects/Game Camp.png',
		imageAlt: 'A ScreenShot Of Game Camp Project',

		GitHub: 'https://github.com/GDSC-YU/game-camp',
		Link: 'https://game-camp.gdscyu.com/'
	}
];

export default projectsData;
