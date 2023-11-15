/** @type {import('tailwindcss').Config}*/
const config = {
	darkMode: 'class',

	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				secret: '#282C34',
				'google-blue': '#4285f4',
				'google-red': '#db4437',
				'google-yellow': '#f4b400',
				'google-green': '#0f9d58'
			}
		}
	},

	plugins: []
};

module.exports = config;
