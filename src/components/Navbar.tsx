"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

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
		return `inline-flex items-center px-1 pt-1 border-b-2 ${
			isActive(path) ? "border-green-500 text-sm font-medium text-green-900" : "border-transparent text-sm font-medium text-green-600 hover:text-green-800 hover:border-green-300"
		}`;
	};

	return (
		<nav className="bg-green-50 border-b border-green-100 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex">
						<div className="flex-shrink-0 flex items-center">
							<Link href="/" className="text-xl font-semibold text-green-800">
								Matcha Experience
							</Link>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							<Link href="/" className={getLinkClassName("/")}>
								Trang Chủ
							</Link>
							<Link href="/history" className={getLinkClassName("/history")}>
								Lịch Sử
							</Link>
							<Link href="/tiers" className={getLinkClassName("/tiers")}>
								Phân Hạng
							</Link>
							<Link href="/products" className={getLinkClassName("/products")}>
								Công Thức
							</Link>
							<Link href="/cultivars" className={getLinkClassName("/cultivars")}>
								Giống Trà
							</Link>
							<Link href="/effects" className={getLinkClassName("/effects")}>
								Tác Dụng
							</Link>
						</div>
					</div>

					<div className="-mr-2 flex items-center sm:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:text-green-900 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
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
									? "bg-green-100 border-green-500 text-base font-medium text-green-900"
									: "border-transparent text-base font-medium text-green-700 hover:bg-green-50 hover:border-green-300 hover:text-green-800"
							}`}
						>
							Trang Chủ
						</Link>
						<Link
							href="/history"
							className={`block pl-3 pr-4 py-2 border-l-4 ${
								isActive("/history")
									? "bg-green-100 border-green-500 text-base font-medium text-green-900"
									: "border-transparent text-base font-medium text-green-700 hover:bg-green-50 hover:border-green-300 hover:text-green-800"
							}`}
						>
							Lịch Sử
						</Link>
						<Link
							href="/tiers"
							className={`block pl-3 pr-4 py-2 border-l-4 ${
								isActive("/tiers")
									? "bg-green-100 border-green-500 text-base font-medium text-green-900"
									: "border-transparent text-base font-medium text-green-700 hover:bg-green-50 hover:border-green-300 hover:text-green-800"
							}`}
						>
							Phân Hạng
						</Link>
						<Link
							href="/products"
							className={`block pl-3 pr-4 py-2 border-l-4 ${
								isActive("/products")
									? "bg-green-100 border-green-500 text-base font-medium text-green-900"
									: "border-transparent text-base font-medium text-green-700 hover:bg-green-50 hover:border-green-300 hover:text-green-800"
							}`}
						>
							Công Thức
						</Link>
						<Link
							href="/cultivars"
							className={`block pl-3 pr-4 py-2 border-l-4 ${
								isActive("/cultivars")
									? "bg-green-100 border-green-500 text-base font-medium text-green-900"
									: "border-transparent text-base font-medium text-green-700 hover:bg-green-50 hover:border-green-300 hover:text-green-800"
							}`}
						>
							Giống Trà
						</Link>
						<Link
							href="/effects"
							className={`block pl-3 pr-4 py-2 border-l-4 ${
								isActive("/effects")
									? "bg-green-100 border-green-500 text-base font-medium text-green-900"
									: "border-transparent text-base font-medium text-green-700 hover:bg-green-50 hover:border-green-300 hover:text-green-800"
							}`}
						>
							Tác Dụng
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
