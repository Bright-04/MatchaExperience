"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	// Handle scroll events to change navbar appearance
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 60) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu when path changes
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	const isActive = (path: string) => {
		if (path === "/") {
			return pathname === path;
		}
		return pathname.startsWith(path);
	};

	const getLinkClassName = (path: string) => {
		return `inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
			isActive(path)
				? "bg-primary-light/20 dark:bg-primary/30 text-primary-dark dark:text-primary-light"
				: "text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-white"
		}`;
	};

	return (
		<nav className={`${isScrolled ? "py-2 bg-white/90 dark:bg-[#0d2321]/90 shadow-md backdrop-blur-sm" : "py-4 bg-white dark:bg-[#0d2321]"} sticky top-0 z-50 transition-all duration-300`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<Link href="/" className="flex items-center">
							<div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">M</div>
							<span className="text-xl font-serif font-semibold text-primary-dark dark:text-primary-light">Matcha Experience</span>
						</Link>
					</div>{" "}
					<div className="hidden md:flex md:items-center md:space-x-2">
						<Link href="/" className={getLinkClassName("/")}>
							Home
						</Link>
						<Link href="/history" className={getLinkClassName("/history")}>
							History
						</Link>
						<Link href="/tiers" className={getLinkClassName("/tiers")}>
							Grades
						</Link>
						<Link href="/products" className={getLinkClassName("/products")}>
							Recipes
						</Link>
						<Link href="/cultivars" className={getLinkClassName("/cultivars")}>
							Cultivars
						</Link>
						<Link href="/effects" className={getLinkClassName("/effects")}>
							Benefits
						</Link>
						<div className="ml-2">
							<ThemeToggle />
						</div>
					</div>{" "}
					<div className="-mr-2 flex items-center sm:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-primary-dark dark:text-primary-light hover:text-primary-dark hover:bg-primary-light/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
						>
							<span className="sr-only">Open main menu</span>
							{isMenuOpen ? (
								<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className="sm:hidden">
					<div className="pt-2 pb-3 space-y-1">
						<Link
							href="/"
							className={`block pl-3 pr-4 py-2 border-l-4 ${
								isActive("/")
									? "bg-primary-light/20 border-primary text-base font-medium text-primary-dark dark:text-primary-light dark:bg-primary/20"
									: "border-transparent text-base font-medium text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary/10 hover:border-primary-light hover:text-primary-dark"
							}`}
						>
							Home
						</Link>
						<Link
							href="/history"
							className={`block pl-3 pr-4 py-2 border-l-4 ${
								isActive("/history")
									? "bg-primary-light/20 border-primary text-base font-medium text-primary-dark dark:text-primary-light dark:bg-primary/20"
									: "border-transparent text-base font-medium text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary/10 hover:border-primary-light hover:text-primary-dark"
							}`}
						>
							History
						</Link>
						<Link
							href="/tiers"
							className={`block pl-3 pr-4 py-2 border-l-4 ${
								isActive("/tiers")
									? "bg-primary-light/20 border-primary text-base font-medium text-primary-dark dark:text-primary-light dark:bg-primary/20"
									: "border-transparent text-base font-medium text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary/10 hover:border-primary-light hover:text-primary-dark"
							}`}
						>
							Grades
						</Link>
						<Link
							href="/products"
							className={`block pl-3 pr-4 py-2 border-l-4 ${
								isActive("/products")
									? "bg-primary-light/20 border-primary text-base font-medium text-primary-dark dark:text-primary-light dark:bg-primary/20"
									: "border-transparent text-base font-medium text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary/10 hover:border-primary-light hover:text-primary-dark"
							}`}
						>
							Recipes
						</Link>
						<Link
							href="/cultivars"
							className={`block pl-3 pr-4 py-2 border-l-4 ${
								isActive("/cultivars")
									? "bg-primary-light/20 border-primary text-base font-medium text-primary-dark dark:text-primary-light dark:bg-primary/20"
									: "border-transparent text-base font-medium text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary/10 hover:border-primary-light hover:text-primary-dark"
							}`}
						>
							Cultivars
						</Link>
						<Link
							href="/effects"
							className={`block pl-3 pr-4 py-2 border-l-4 ${
								isActive("/effects")
									? "bg-primary-light/20 border-primary text-base font-medium text-primary-dark dark:text-primary-light dark:bg-primary/20"
									: "border-transparent text-base font-medium text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary/10 hover:border-primary-light hover:text-primary-dark"
							}`}
						>
							Benefits
						</Link>
						<div className="pl-3 pr-4 py-4 flex items-center">
							<span className="text-base font-medium text-primary-dark dark:text-primary-light mr-3">Theme:</span>
							<ThemeToggle />
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
