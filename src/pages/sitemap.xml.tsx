import { GetServerSideProps } from "next";

const EXTERNAL_DATA_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://matcha-experience.vercel.app";

function generateSiteMap(routes: string[]) {
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${routes
			.map((route) => {
				return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}${route}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
       </url>
     `;
			})
			.join("")}
   </urlset>
 `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	// List of routes to include in sitemap
	const routes = ["", "/history", "/tiers", "/products", "/cultivars", "/effects"];

	// Generate the XML sitemap
	const sitemap = generateSiteMap(routes);

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default function SiteMap() {
	// getServerSideProps will handle the XML response
	return null;
}
