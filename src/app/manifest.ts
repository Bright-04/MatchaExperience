import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Matcha Experience",
		short_name: "Matcha Exp",
		description: "Discover the world of matcha, its history, cultivars, and more",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#4D7C50",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
			{
				src: "/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
