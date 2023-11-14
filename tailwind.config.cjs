/** @type {import('tailwindcss').Config}*/
const config = {
	darkMode: 'class',

	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				secret: '#282C34'
			}
		}
	},

	plugins: []
};

module.exports = config;
