import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

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
		id: "cold-brew-matcha",
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
			{/* Hero Section */}
			<div className="hero w-full py-16 px-4 sm:px-6 lg:px-8 text-center">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4 font-serif animate-slide-up">Matcha Products</h1>
					<p className="text-xl text-primary-dark/80 dark:text-primary-light/80 mb-8 max-w-3xl mx-auto animate-slide-up animate-stagger-delay-1">
						Browse our selection of premium matcha powders for every taste and occasion
					</p>
				</div>
			</div>{" "}
			{/* Products Grid */}
			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d2321]">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{products.map((product, index) => (
							<div key={index} className={`animate-fade-in animate-stagger-delay-${index + 1}`}>
								<Card
									variant={index % 2 === 0 ? "default" : "featured"}
									image={{ src: product.image, alt: product.name }}
									title={product.name}
									subtitle={product.description}
									badge={{ text: product.price, variant: "primary" }}
									hoverable={true}
								>
									<div className="mb-6">
										<h4 className="font-semibold text-primary-dark dark:text-primary-light mb-2">Features:</h4>
										<div className="flex flex-wrap gap-2">
											{product.features.map((feature, idx) => (
												<Badge key={idx} variant={idx % 2 === 0 ? "outline" : "accent"}>
													{feature}
												</Badge>
											))}
										</div>
									</div>
									<div className="flex gap-3">
										<Button href={`/products/${product.id}`} variant="primary" fullWidth>
											View Details
										</Button>
									</div>
								</Card>
							</div>
						))}
					</div>
				</div>
			</div>{" "}
			{/* Coming Soon */}
			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-primary-light/10 dark:bg-primary-dark/30">
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-6 font-serif animate-slide-up">More Products Coming Soon</h2>
					<p className="text-xl text-primary-dark/80 dark:text-primary-light/80 mb-8 max-w-3xl mx-auto animate-slide-up animate-stagger-delay-1">
						We&apos;re expanding our selection to include matcha accessories, gift sets, and more. Check back soon!
					</p>
					<Button href="/" variant="accent" size="lg" className="animate-fade-in animate-stagger-delay-2">
						Back to Home
					</Button>
				</div>
			</div>
		</div>
	);
}
