import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/context/Providers";

const fraunces = Fraunces({
	variable: "--font-fraunces",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Matcha Experience",
	description: "Discover the world of matcha, its history, cultivars, and more",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${fraunces.variable} ${inter.variable} antialiased`}>
				<Providers>
					<Navbar />
					<main className="min-h-screen">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}

