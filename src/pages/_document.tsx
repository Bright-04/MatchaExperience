import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<meta name="theme-color" content="#4D7C50" />
				<meta name="description" content="Discover the world of matcha, its history, cultivars, and more" />
				<meta property="og:title" content="Matcha Experience" />
				<meta property="og:description" content="Discover the world of matcha, its history, cultivars, and more" />
				<meta property="og:image" content="/images/bowl-of-matcha-horz.jpg" />
				<meta property="og:url" content="https://matcha-experience.vercel.app" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
