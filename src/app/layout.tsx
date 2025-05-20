import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/context/Providers";

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
});

const notoSans = Noto_Sans({
	variable: "--font-noto-sans",
	subsets: ["latin"],
	weight: ["400", "700"],
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
		<html lang="en">
			<body className={`${playfair.variable} ${notoSans.variable} antialiased`}>
				<Providers>
					<Navbar />
					<main className="min-h-screen">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}

