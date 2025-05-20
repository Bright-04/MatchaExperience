import Head from "next/head";

interface SEOProps {
	title: string;
	description?: string;
	image?: string;
	url?: string;
	type?: string;
}

export default function SEO({
	title,
	description = "Discover the world of matcha, its history, cultivars, and more",
	image = "/images/bowl-of-matcha-horz.jpg",
	url = "https://matcha-experience.vercel.app",
	type = "website",
}: SEOProps) {
	const siteTitle = `${title} | Matcha Experience`;

	return (
		<Head>
			<title>{siteTitle}</title>
			<meta name="description" content={description} />

			{/* Open Graph */}
			<meta property="og:title" content={siteTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content={type} />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={siteTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			{/* Canonical URL */}
			<link rel="canonical" href={url} />
		</Head>
	);
}
