/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	variants: {
		extend: {
			backgroundColor: ['active'],
			// ...
			borderColor: ['focus-visible', 'first'],
			// ...
			textColor: ['visited'],
		},
	},
	theme: {
		extend: {},
	},
	plugins: [],
};
