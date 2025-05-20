import Image from "next/image";
import Link from "next/link";

const products = [
	{
		id: "ceremonial-grade-matcha",
		name: "Ceremonial Grade Matcha",
		image: "/images/bowl-of-matcha-horz.jpg",
		price: "$35.99",
		description: "Our finest quality matcha, perfect for traditional preparation. Vibrant green color with a smooth, rich taste and natural sweetness.",
		features: ["Organic", "Stone-ground", "First harvest", "Vibrant color", "Complex flavor"],
	},
	{
		id: "premium-usucha",
		name: "Premium Usucha",
		image: "/images/usucha.jpg",
		price: "$29.99",
		description: "High-quality thin tea suitable for daily consumption. Balanced flavor with pleasant umami and subtle sweetness.",
		features: ["Organic", "Stone-ground", "Versatile preparation", "Balanced flavor", "Everyday use"],
	},
	{
		id: "matcha-latte-blend",
		name: "Matcha Latte Blend",
		image: "/images/matcha-latte.jpg",
		price: "$24.99",
		description: "Specially formulated for creating delicious matcha lattes. Stands up well to milk while maintaining rich matcha flavor.",
		features: ["Bold flavor", "Perfect with milk", "Culinary grade", "Economical", "Versatile"],
	},
	{
		name: "Cold Brew Matcha",
		image: "/images/cold-whisked-matcha-latte.jpg",
		price: "$27.99",
		description: "Designed to dissolve easily in cold water, perfect for refreshing summer drinks. Smooth taste with minimal bitterness.",
		features: ["No hot water needed", "Smooth texture", "Refreshing", "Less caffeine", "Summer favorite"],
	},
];

export default function Products() {
	return (
		<div className="flex flex-col items-center">
			{" "}
			{/* Hero Section */}
			<div className="hero w-full py-16 px-4 sm:px-6 lg:px-8 text-center">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4 font-serif">Matcha Products</h1>
					<p className="text-xl text-primary-dark/80 dark:text-primary-light/80 mb-8 max-w-3xl mx-auto">Browse our selection of premium matcha powders for every taste and occasion</p>
				</div>
			</div>
			{/* Products Grid */}
			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d2321]">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{products.map((product, index) => (
							<div
								key={index}
								className="bg-primary-light/10 dark:bg-primary-dark/30 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
							>
								{" "}
								<div className="relative h-72 w-full">
									<Link href={`/products/${product.id}`}>
										<Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
									</Link>
								</div>{" "}
								<div className="p-6">
									<div className="flex justify-between items-start mb-4">
										<h3 className="text-xl font-bold text-primary-dark dark:text-primary-light font-serif">
											<Link href={`/products/${product.id}`} className="hover:text-primary dark:hover:text-primary-light/90">
												{product.name}
											</Link>
										</h3>
										<span className="text-lg font-bold text-primary dark:text-primary-light/90">{product.price}</span>
									</div>
									<p className="text-primary-dark/80 dark:text-primary-light/80 mb-4">{product.description}</p>
									<div className="mb-6">
										<h4 className="font-semibold text-primary-dark dark:text-primary-light mb-2">Features:</h4>
										<div className="flex flex-wrap gap-2">
											{product.features.map((feature, idx) => (
												<span key={idx} className="bg-primary-light/30 dark:bg-primary/30 text-primary-dark dark:text-primary-light px-3 py-1 rounded-full text-sm">
													{feature}
												</span>
											))}
										</div>
									</div>
									<div className="flex gap-3">
										<Link
											href={`/products/${product.id}`}
											className="w-full inline-block text-center bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
										>
											View Details
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>{" "}
			{/* Coming Soon */}
			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-primary-light/10 dark:bg-primary-dark/30">
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-6 font-serif">More Products Coming Soon</h2>
					<p className="text-xl text-primary-dark/80 dark:text-primary-light/80 mb-8 max-w-3xl mx-auto">
						We're expanding our selection to include matcha accessories, gift sets, and more. Check back soon!
					</p>
					<Link
						href="/"
						className="inline-block bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
					>
						Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
