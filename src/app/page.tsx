import Image from "next/image";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			{/* Hero Section */}
			<div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
				{/* Background Pattern Layer */}
				<div className="absolute inset-0 bg-[url('/images/matcha-pattern.png')] opacity-5 bg-repeat" />

				{/* Gradient Overlay */}
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-primary-lightest to-primary-light/60 dark:from-accent/30 dark:via-primary/30 dark:to-primary-darkest/40" />
					<div className="absolute inset-0 bg-gradient-to-tl from-primary/30 via-transparent to-accent-light/40 dark:from-primary/20 dark:via-transparent dark:to-accent/20 mix-blend-soft-light" />
					<div className="absolute inset-0 bg-gradient-to-t from-primary-lightest/60 via-transparent to-accent-light/10" />
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col md:flex-row items-center gap-16">
					{/* Text Content */}
					<div className="flex-1 text-center md:text-left z-10">
						<h1 className="text-5xl md:text-7xl font-bold text-primary-dark dark:text-primary-light mb-6 font-serif animate-slide-up">
							<span className="block">Discover the</span>
							<span className="block text-primary dark:text-primary-light mt-2">Art of Matcha</span>
						</h1>
						<p className="text-xl md:text-2xl text-primary-dark/80 dark:text-primary-light/80 mb-12 max-w-2xl animate-fade-in animate-stagger-delay-1">
							Journey through centuries of Japanese tradition, expertly crafted into every cup of our premium matcha
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in animate-stagger-delay-2">
							<Button href="/products" variant="primary" size="lg">
								Explore Collection
							</Button>
							<Button href="/history" variant="secondary" size="lg">
								Learn More
							</Button>
						</div>
					</div>

					{/* Image Section */}
					<div className="flex-1 relative w-full aspect-square max-w-md animate-fade-in animate-stagger-delay-2">
						<div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-2xl ring-1 ring-primary/10 transform hover:scale-105 transition-transform duration-500">
							<Image
								src="/images/bowl-of-matcha-vertical.jpg"
								alt="Traditional matcha bowl"
								fill
								style={{ objectFit: "cover" }}
								className="brightness-105 hover:brightness-110 transition-all duration-500"
								priority
							/>{" "}
							{/* Decorative elements */}
							<div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-primary/20 to-transparent" />
							<div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary-light/20 mix-blend-overlay" />
						</div>
						{/* Decorative circle */}
						<div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow" />
					</div>
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<svg className="w-6 h-6 text-primary-dark/50 dark:text-primary-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</div>
			{/* Featured Matcha Section */}
			<div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d2321]">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark dark:text-primary-light mb-4 font-serif animate-fade-in">Exceptional Matcha Varieties</h2>
					<p className="text-center text-primary-dark/70 dark:text-primary-light/70 max-w-2xl mx-auto mb-16 animate-fade-in animate-stagger-delay-1">
						Explore our selection of premium matcha products, each with unique characteristics and flavor profiles
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						<Card
							title="Usucha"
							subtitle="Thin matcha, the most common preparation for daily enjoyment."
							image={{ src: "/images/usucha.jpg", alt: "Usucha Matcha" }}
							badge={{ text: "Traditional", variant: "accent" }}
							className="animate-fade-in animate-stagger-delay-1"
						>
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
						</Card>

						<Card
							title="Matcha Latte"
							subtitle="A modern favorite blending matcha with steamed milk."
							image={{ src: "/images/matcha-latte.jpg", alt: "Matcha Latte" }}
							badge={{ text: "Popular", variant: "secondary" }}
							className="animate-fade-in animate-stagger-delay-2"
						>
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
						</Card>

						<Card
							title="Cold Matcha"
							subtitle="Refreshing cold-whisked matcha perfect for warm days."
							image={{ src: "/images/cold-whisked-matcha-latte.jpg", alt: "Cold Matcha" }}
							badge={{ text: "Refreshing", variant: "primary" }}
							className="animate-fade-in animate-stagger-delay-3"
						>
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
						</Card>
					</div>
				</div>
			</div>{" "}
			{/* Why Matcha Section */}
			<div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-light/10 to-primary-light/20 dark:from-primary-dark/40 dark:to-primary-dark/20">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-16">
						<div className="md:w-1/2 animate-slide-in">
							<h2 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-primary-light mb-8 font-serif">Why Choose Premium Matcha?</h2>
							<div className="space-y-5 text-lg text-primary-dark dark:text-primary-light">
								<div className="flex items-start p-4 rounded-lg bg-white dark:bg-primary-dark/30 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
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

								<div className="flex items-start p-4 rounded-lg bg-white dark:bg-primary-dark/30 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
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

								<div className="flex items-start p-4 rounded-lg bg-white dark:bg-primary-dark/30 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
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

								<div className="flex items-start p-4 rounded-lg bg-white dark:bg-primary-dark/30 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
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
								<Button
									href="/history"
									variant="accent"
									size="md"
									icon={
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
										</svg>
									}
									iconPosition="right"
								>
									Discover matcha&apos;s history
								</Button>
							</div>
						</div>
						<div className="md:w-1/2 relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl group animate-fade-in animate-stagger-delay-2">
							<Image
								src="/images/bowl-of-matcha-horz.jpg"
								alt="Bowl of matcha"
								fill
								style={{ objectFit: "cover" }}
								className="rounded-xl transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent"></div>
							<div className="absolute bottom-8 left-8 right-8 text-white animate-slide-up">
								<div className="glass-card rounded-lg p-6 bg-primary-dark/30 backdrop-blur-sm border border-white/10 shadow-md">
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
