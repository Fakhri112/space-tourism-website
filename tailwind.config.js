/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			barlowCondensed: ["Barlow Condensed", "sans-serif"],
			barlow: ["Barlow", "serif"],
			bellefair: ["Bellefair", "serif"],
		},
		extend: {},
	},
	plugins: [],
};
