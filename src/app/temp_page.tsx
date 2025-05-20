import Image from "next/image";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			{/* Hero Section */}
			<div className="hero w-full py-20 px-4 sm:px-6 lg:px-8 text-center">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-4">
						Discover the World of <span className="text-green-700">Matcha</span>
					</h1>
					<p className="text-xl md:text-2xl text-green-800 mb-8">Explore the tradition, varieties, and exceptional qualities of authentic Japanese matcha</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Link href="/history" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300">
							Explore History
						</Link>
						<Link href="/cultivars" className="bg-transparent hover:bg-green-100 text-green-800 border border-green-700 px-6 py-3 rounded-lg text-lg font-medium transition duration-300">
							View Cultivars
						</Link>
					</div>
				</div>
			</div>

			{/* Featured Matcha Section */}
			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center text-green-900 mb-12">Exceptional Matcha Varieties</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-green-50 rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
							<div className="relative h-64 w-full">
								<Image src="/images/usucha.jpg" alt="Usucha Matcha" fill style={{ objectFit: "cover" }} />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-green-800 mb-2">Usucha</h3>
								<p className="text-green-700 mb-4">Thin matcha, the most common preparation for daily enjoyment.</p>
								<Link href="/products" className="text-green-600 hover:text-green-800 font-medium">
									Learn more →
								</Link>
							</div>
						</div>

						<div className="bg-green-50 rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
							<div className="relative h-64 w-full">
								<Image src="/images/matcha-latte.jpg" alt="Matcha Latte" fill style={{ objectFit: "cover" }} />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-green-800 mb-2">Matcha Latte</h3>
								<p className="text-green-700 mb-4">A modern favorite blending matcha with steamed milk.</p>
								<Link href="/products" className="text-green-600 hover:text-green-800 font-medium">
									Learn more →
								</Link>
							</div>
						</div>

						<div className="bg-green-50 rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
							<div className="relative h-64 w-full">
								<Image src="/images/cold-whisked-matcha-latte.jpg" alt="Cold Matcha" fill style={{ objectFit: "cover" }} />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-green-800 mb-2">Cold Matcha</h3>
								<p className="text-green-700 mb-4">Refreshing cold-whisked matcha perfect for warm days.</p>
								<Link href="/products" className="text-green-600 hover:text-green-800 font-medium">
									Learn more →
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Why Matcha Section */}
			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="md:w-1/2">
							<h2 className="text-3xl font-bold text-green-900 mb-6">Why Choose Premium Matcha?</h2>
							<div className="space-y-4 text-lg text-green-800">
								<p className="flex items-start">
									<span className="mr-2 text-green-600">✓</span>
									Rich in antioxidants and nutrients
								</p>
								<p className="flex items-start">
									<span className="mr-2 text-green-600">✓</span>
									Natural energy without jitters
								</p>
								<p className="flex items-start">
									<span className="mr-2 text-green-600">✓</span>
									Enhances focus and concentration
								</p>
								<p className="flex items-start">
									<span className="mr-2 text-green-600">✓</span>
									Traditional craftsmanship in every cup
								</p>
								<p className="flex items-start">
									<span className="mr-2 text-green-600">✓</span>
									Unique, complex flavor profile
								</p>
							</div>
							<div className="mt-8">
								<Link href="/history" className="text-green-600 hover:text-green-800 font-medium text-lg">
									Discover the rich history of matcha →
								</Link>
							</div>
						</div>
						<div className="md:w-1/2 relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
							<Image src="/images/bowl-of-matcha-horz.jpg" alt="Bowl of matcha" fill style={{ objectFit: "cover" }} className="rounded-lg" />
						</div>
					</div>
				</div>
			</div>

			{/* Newsletter Section */}
			<NewsletterSignup />
		</div>
	);
}
