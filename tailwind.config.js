/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				green: {
					50: "#F2F7F2",
					100: "#E6F0E6",
					200: "#C4D8C4",
					300: "#A3C1A3",
					400: "#82AB82",
					500: "#619561",
					600: "#4D7C50",
					700: "#36563A",
					800: "#25382B",
					900: "#0F170F",
				},
				accent: {
					light: "#FFD054",
					DEFAULT: "#E3B63A",
					dark: "#C79B28",
				},
			},
			fontFamily: {
				serif: ["var(--font-playfair)", "Georgia", "serif"],
				sans: ["var(--font-noto-sans)", "Arial", "sans-serif"],
			},
			backgroundImage: {
				"matcha-pattern": "url('/images/matcha-pattern.png')",
			},
		},
	},
	plugins: [],
};
