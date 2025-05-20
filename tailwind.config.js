/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				green: {
					50: "#e6f5f3",
					100: "#c2e8e4",
					200: "#8fe0d6",
					300: "#5dcdc2",
					400: "#40b4a6",
					500: "#2a9d8f",
					600: "#207b71",
					700: "#175853",
					800: "#113e3a",
					900: "#0d2321",
				},
				accent: {
					light: "#f7b989",
					DEFAULT: "#f4a261",
					dark: "#e18f48",
				},
				secondary: {
					light: "#eb8a72",
					DEFAULT: "#e76f51",
					dark: "#d85638",
				},
			},
			fontFamily: {
				serif: ["var(--font-fraunces)", "Georgia", "serif"],
				sans: ["var(--font-inter)", "system-ui", "sans-serif"],
			},
			backgroundImage: {
				"matcha-pattern": "url('/images/matcha-pattern.png')",
			},
		},
	},
	plugins: [],
};
