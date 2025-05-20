import Image from "next/image";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			{" "}
			{/* Hero Section */}
			<div className="hero w-full py-24 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-primary-light/10 via-primary-light/20 to-primary-light/10 dark:from-primary-dark/30 dark:via-primary-dark/20 dark:to-primary-dark/30">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold text-primary-dark dark:text-primary-light mb-4 font-serif">
						Discover the World of <span className="text-primary dark:text-primary-light/90">Matcha</span>
					</h1>
					<p className="text-xl md:text-2xl text-primary-dark/80 dark:text-primary-light/80 mb-12 max-w-3xl mx-auto">
						Explore the tradition, varieties, and exceptional qualities of authentic Japanese matcha
					</p>{" "}
					<div className="flex flex-col sm:flex-row justify-center gap-5">
						<Link
							href="/history"
							className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
						>
							Explore History
						</Link>
						<Link
							href="/cultivars"
							className="bg-white dark:bg-primary-dark/30 hover:bg-primary-light/10 dark:hover:bg-primary-dark/50 text-primary-dark dark:text-primary-light border border-primary/30 dark:border-primary/30 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
						>
							View Cultivars
						</Link>
					</div>
				</div>
			</div>{" "}
			{/* Featured Matcha Section */}
			<div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d2321]">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark dark:text-primary-light mb-4 font-serif">Exceptional Matcha Varieties</h2>
					<p className="text-center text-primary-dark/70 dark:text-primary-light/70 max-w-2xl mx-auto mb-16">
						Explore our selection of premium matcha products, each with unique characteristics and flavor profiles
					</p>{" "}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						<div className="bg-gradient-to-br from-primary-light/5 to-primary-light/20 dark:from-primary-dark/40 dark:to-primary-dark/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
							<div className="relative h-72 w-full overflow-hidden">
								<Image src="/images/usucha.jpg" alt="Usucha Matcha" fill style={{ objectFit: "cover" }} className="group-hover:scale-105 transition-transform duration-500" />
								<div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Traditional</div>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-3 font-serif">Usucha</h3>
								<p className="text-primary-dark/80 dark:text-primary-light/80 mb-6">Thin matcha, the most common preparation for daily enjoyment.</p>
								<Link href="/products" className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors duration-300">
									Learn more
									<svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
							</div>
						</div>{" "}
						<div className="bg-gradient-to-br from-primary-light/5 to-primary-light/20 dark:from-primary-dark/40 dark:to-primary-dark/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
							<div className="relative h-72 w-full overflow-hidden">
								<Image src="/images/matcha-latte.jpg" alt="Matcha Latte" fill style={{ objectFit: "cover" }} className="group-hover:scale-105 transition-transform duration-500" />
								<div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">Popular</div>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-3 font-serif">Matcha Latte</h3>
								<p className="text-primary-dark/80 dark:text-primary-light/80 mb-6">A modern favorite blending matcha with steamed milk.</p>
								<Link href="/products" className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors duration-300">
									Learn more
									<svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
							</div>
						</div>{" "}
						<div className="bg-gradient-to-br from-primary-light/5 to-primary-light/20 dark:from-primary-dark/40 dark:to-primary-dark/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
							<div className="relative h-72 w-full overflow-hidden">
								<Image
									src="/images/cold-whisked-matcha-latte.jpg"
									alt="Cold Matcha"
									fill
									style={{ objectFit: "cover" }}
									className="group-hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">Refreshing</div>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-3 font-serif">Cold Matcha</h3>
								<p className="text-primary-dark/80 dark:text-primary-light/80 mb-6">Refreshing cold-whisked matcha perfect for warm days.</p>
								<Link href="/products" className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors duration-300">
									Learn more
									<svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>{" "}
			{/* Why Matcha Section */}
			<div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-light/10 to-primary-light/20 dark:from-primary-dark/40 dark:to-primary-dark/20">
				{" "}
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-16">
						<div className="md:w-1/2">
							<h2 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-primary-light mb-8 font-serif">Why Choose Premium Matcha?</h2>
							<div className="space-y-5 text-lg text-primary-dark dark:text-primary-light">
								<div className="flex items-start p-4 rounded-lg bg-white dark:bg-primary-dark/30 shadow-soft transition-all duration-300 hover:shadow-md">
									<div className="flex-shrink-0 bg-primary p-2 rounded-full mr-4">
										<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<div>
										<h3 className="font-medium text-primary-dark dark:text-primary-light">Rich in antioxidants</h3>
										<p className="text-primary-dark/80 dark:text-primary-light/80 text-sm mt-1">Packed with catechins, potent antioxidants that support overall health.</p>
									</div>
								</div>

								<div className="flex items-start p-4 rounded-lg bg-white dark:bg-primary-dark/30 shadow-soft transition-all duration-300 hover:shadow-md">
									<div className="flex-shrink-0 bg-primary p-2 rounded-full mr-4">
										<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<div>
										<h3 className="font-medium text-primary-dark dark:text-primary-light">Natural, sustained energy</h3>
										<p className="text-primary-dark/80 dark:text-primary-light/80 text-sm mt-1">L-theanine provides calm alertness without the coffee jitters.</p>
									</div>
								</div>

								<div className="flex items-start p-4 rounded-lg bg-white dark:bg-primary-dark/30 shadow-soft transition-all duration-300 hover:shadow-md">
									<div className="flex-shrink-0 bg-primary p-2 rounded-full mr-4">
										<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<div>
										<h3 className="font-medium text-primary-dark dark:text-primary-light">Enhanced focus & concentration</h3>
										<p className="text-primary-dark/80 dark:text-primary-light/80 text-sm mt-1">The unique combination of caffeine and L-theanine improves cognitive function.</p>
									</div>
								</div>

								<div className="flex items-start p-4 rounded-lg bg-white dark:bg-primary-dark/30 shadow-soft transition-all duration-300 hover:shadow-md">
									<div className="flex-shrink-0 bg-primary p-2 rounded-full mr-4">
										<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<div>
										<h3 className="font-medium text-primary-dark dark:text-primary-light">Centuries of tradition</h3>
										<p className="text-primary-dark/80 dark:text-primary-light/80 text-sm mt-1">Experience the art and craft of Japanese tea culture in every cup.</p>
									</div>
								</div>
							</div>
							<div className="mt-10">
								<Link
									href="/history"
									className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-accent-dark shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
								>
									Discover matcha's history
									<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</Link>
							</div>
						</div>{" "}
						<div className="md:w-1/2 relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl group">
							<Image
								src="/images/bowl-of-matcha-horz.jpg"
								alt="Bowl of matcha"
								fill
								style={{ objectFit: "cover" }}
								className="rounded-xl transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent"></div>
							<div className="absolute bottom-8 left-8 right-8 text-white">
								<div className="glass-card rounded-lg p-6 bg-primary-dark/30">
									<p className="text-xl font-serif font-medium">Experience the authentic taste of Japanese tradition</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Newsletter Section */}
			<NewsletterSignup />
		</div>
	);
}
