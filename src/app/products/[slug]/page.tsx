"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

// This would typically come from a database or CMS
const products = {
	"ceremonial-grade-matcha": {
		name: "Ceremonial Grade Matcha",
		image: "/images/bowl-of-matcha-horz.jpg",
		price: "$35.99",
		description: "Our finest quality matcha, perfect for traditional preparation. Vibrant green color with a smooth, rich taste and natural sweetness.",
		features: ["Organic", "Stone-ground", "First harvest", "Vibrant color", "Complex flavor"],
		origin: "Uji, Japan",
		servingSize: "30g (30 servings)",
		longDescription: `
			<p>Our Ceremonial Grade Matcha is the pinnacle of matcha quality, carefully sourced from the renowned tea fields of Uji, Japan. This premium matcha is made exclusively from the youngest, most tender leaves of the camellia sinensis plant, which are shade-grown for 3-4 weeks before harvest to enhance chlorophyll production and amino acid content.</p>
			
			<p>After harvesting, the leaves are meticulously de-stemmed and de-veined before being stone-ground into a fine powder using traditional granite stone mills. This slow and careful grinding process preserves the delicate flavor compounds and prevents heat buildup that could compromise quality.</p>
			
			<p>The result is a vibrant, emerald-green powder with an exceptionally smooth, umami-rich flavor profile. You&apos;ll notice subtle notes of sweet grass, fresh spring vegetables, and a pleasant, lingering sweetness on the palate. The aroma is fresh and inviting, with hints of cream and freshly steamed greens.</p>
			
			<p>Our Ceremonial Grade Matcha contains naturally occurring caffeine (approximately 35mg per serving) and high levels of L-theanine, which work in harmony to provide sustained, focused energy without the jitters commonly associated with coffee.</p>
			
			<p>This premium matcha is best enjoyed in the traditional manner - whisked with hot (not boiling) water using a bamboo chasen (whisk) to create a frothy, smooth tea. It&apos;s perfect for mindful moments, meditative practice, or whenever you seek exceptional quality in your matcha experience.</p>
		`,
		instructions: `
			<h3>Traditional Preparation:</h3>
			<ol>
				<li>Sift 1-2 tsp (2-4g) of matcha into a preheated bowl</li>
				<li>Add 2oz (60ml) of hot water (175°F/80°C)</li>
				<li>Whisk in a zigzag motion until frothy</li>
				<li>Enjoy immediately</li>
			</ol>
		`,
		nutritionFacts: {
			servingSize: "2g (1 tsp)",
			calories: 10,
			totalFat: "0g",
			sodium: "0mg",
			totalCarbohydrates: "1g",
			protein: "1g",
			caffeine: "35mg",
			antioxidants: "High",
			lTheanine: "High",
		},
		reviews: [
			{
				author: "Matcha Enthusiast",
				rating: 5,
				comment: "This is the most vibrant and smooth matcha I&apos;ve ever tried. The umami flavor is perfect!",
				date: "2025-04-28",
			},
			{
				author: "Tea Connoisseur",
				rating: 5,
				comment: "Exceptional quality. You can really taste the difference compared to lower grade matchas.",
				date: "2025-04-15",
			},
			{
				author: "Zen Practitioner",
				rating: 4,
				comment: "Wonderful for my morning meditation. Smooth with no bitterness.",
				date: "2025-03-22",
			},
		],
		relatedProducts: ["premium-usucha", "matcha-latte-blend"],
	},
	"premium-usucha": {
		name: "Premium Usucha",
		image: "/images/usucha.jpg",
		price: "$29.99",
		description: "High-quality thin tea suitable for daily consumption. Balanced flavor with pleasant umami and subtle sweetness.",
		features: ["Organic", "Stone-ground", "Versatile preparation", "Balanced flavor", "Everyday use"],
		origin: "Nishio, Japan",
		servingSize: "30g (30 servings)",
		longDescription: `
			<p>Our Premium Usucha (thin tea) is a high-quality matcha suitable for everyday enjoyment. Sourced from the fertile tea fields of Nishio, Japan, this matcha strikes the perfect balance between quality and value, making it an excellent choice for daily matcha drinkers.</p>
			
			<p>Made from young tea leaves harvested in late spring, our Premium Usucha maintains the vibrant green color and smooth texture characteristic of quality matcha. The leaves are shade-grown for 2-3 weeks before harvest, increasing their chlorophyll content and enhancing the amino acid profile.</p>
			
			<p>After careful processing and stone-grinding, the resulting powder offers a pleasant balance of umami, subtle sweetness, and a mild vegetal character. While slightly more astringent than our Ceremonial grade, this matcha is still remarkably smooth with minimal bitterness.</p>
			
			<p>This versatile matcha is perfect for traditional usucha preparation, but also performs beautifully in smoothies, lattes, and culinary applications. Its balanced flavor profile means it can stand up to milk or other ingredients without losing its distinctive matcha character.</p>
			
			<p>With approximately 30mg of caffeine per serving and a good amount of L-theanine, our Premium Usucha provides a sustained energy boost for your daily activities.</p>
		`,
		instructions: `
			<h3>Traditional Preparation:</h3>
			<ol>
				<li>Sift 1-2 tsp (2-4g) of matcha into a bowl</li>
				<li>Add 3-4oz (90-120ml) of hot water (175°F/80°C)</li>
				<li>Whisk in a zigzag motion until frothy</li>
				<li>Enjoy immediately</li>
			</ol>
			
			<h3>Matcha Latte:</h3>
			<ol>
				<li>Sift 1-2 tsp of matcha into a cup</li>
				<li>Add 1oz hot water and whisk until smooth</li>
				<li>Add 6-8oz steamed milk of choice</li>
				<li>Sweeten to taste if desired</li>
			</ol>
		`,
		nutritionFacts: {
			servingSize: "2g (1 tsp)",
			calories: 10,
			totalFat: "0g",
			sodium: "0mg",
			totalCarbohydrates: "1g",
			protein: "1g",
			caffeine: "30mg",
			antioxidants: "High",
			lTheanine: "Medium-High",
		},
		reviews: [
			{
				author: "Daily Matcha Drinker",
				rating: 5,
				comment: "Perfect for my daily morning matcha ritual. Great quality for the price!",
				date: "2025-05-02",
			},
			{
				author: "Latte Lover",
				rating: 4,
				comment: "Makes an amazing latte while still letting the matcha flavor shine through.",
				date: "2025-04-18",
			},
			{
				author: "New to Matcha",
				rating: 5,
				comment: "As someone new to matcha, this is a perfect starting point. Not too bitter and very smooth.",
				date: "2025-03-30",
			},
		],
		relatedProducts: ["ceremonial-grade-matcha", "matcha-latte-blend"],
	},
};

export default function ProductDetail({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const product = products[slug as keyof typeof products];

	if (!product) {
		notFound();
	}

	return (
		<div className="flex flex-col items-center">
			{/* Breadcrumbs */}
			<div className="w-full bg-primary-light/5 dark:bg-primary-dark/10 py-4 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<nav className="flex" aria-label="Breadcrumb">
						<ol className="flex items-center space-x-2 text-sm text-primary-dark/80 dark:text-primary-light/80">
							<li>
								<Link href="/" className="hover:text-primary transition-colors duration-300">
									Home
								</Link>
							</li>
							<li className="flex items-center">
								<svg className="h-4 w-4 text-primary-light/60 dark:text-primary-light/40" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<Link href="/products" className="ml-2 hover:text-primary transition-colors duration-300">
									Products
								</Link>
							</li>
							<li className="flex items-center">
								<svg className="h-4 w-4 text-primary-light/60 dark:text-primary-light/40" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="ml-2 text-primary font-medium">{product.name}</span>
							</li>
						</ol>
					</nav>
				</div>
			</div>

			{/* Product Detail */}
			<div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d2321]">
				<div className="max-w-7xl mx-auto">
					<div className="lg:grid lg:grid-cols-2 lg:gap-16">
						{/* Product Image */}
						<div className="mb-10 lg:mb-0 animate-fade-in">
							<div className="relative h-96 md:h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
								<Image src={product.image} alt={product.name} fill priority style={{ objectFit: "cover" }} className="transition-transform duration-500 hover:scale-105" />
							</div>
						</div>

						{/* Product Info */}
						<div className="animate-slide-in">
							<h1 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-2 font-serif">{product.name}</h1>

							<div className="flex items-center mb-4">
								<Badge variant="primary" size="md">
									{product.price}
								</Badge>
								<span className="ml-4 text-primary-dark/60 dark:text-primary-light/60">{product.origin}</span>
							</div>

							<p className="text-lg text-primary-dark/80 dark:text-primary-light/80 mb-6">{product.description}</p>

							<div className="mb-6">
								<h3 className="font-semibold text-primary-dark dark:text-primary-light mb-2">Features:</h3>
								<div className="flex flex-wrap gap-2">
									{product.features.map((feature, idx) => (
										<Badge key={idx} variant={idx % 2 === 0 ? "outline" : "accent"} size="sm">
											{feature}
										</Badge>
									))}
								</div>
							</div>

							<div className="flex items-center space-x-4 mt-8">
								<Button variant="primary" size="lg" fullWidth>
									Add to Cart
								</Button>
							</div>
						</div>
					</div>

					{/* Product Details Tabs */}
					<div className="mt-16 border-t border-primary-light/20 dark:border-primary-dark/20 pt-12">
						<div className="grid md:grid-cols-2 gap-12">
							{/* Description */}
							<Card variant="simple" title="About this Matcha" className="mb-8 animate-fade-in">
								<div className="prose prose-green dark:prose-invert" dangerouslySetInnerHTML={{ __html: product.longDescription }} />
							</Card>

							{/* How to Prepare */}
							<Card variant="simple" title="How to Prepare" className="mb-8 animate-fade-in animate-stagger-delay-1">
								<div className="prose prose-green dark:prose-invert" dangerouslySetInnerHTML={{ __html: product.instructions }} />
							</Card>
						</div>

						{/* Nutrition Facts */}
						<Card variant="featured" title="Nutrition Facts" className="mt-12 animate-fade-in animate-stagger-delay-2">
							<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
								<div>
									<h4 className="text-sm font-semibold text-primary-dark/70 dark:text-primary-light/70 uppercase mb-1">Serving Size</h4>
									<p className="text-lg text-primary-dark dark:text-primary-light">{product.nutritionFacts.servingSize}</p>
								</div>
								<div>
									<h4 className="text-sm font-semibold text-primary-dark/70 dark:text-primary-light/70 uppercase mb-1">Calories</h4>
									<p className="text-lg text-primary-dark dark:text-primary-light">{product.nutritionFacts.calories}</p>
								</div>
								<div>
									<h4 className="text-sm font-semibold text-primary-dark/70 dark:text-primary-light/70 uppercase mb-1">Protein</h4>
									<p className="text-lg text-primary-dark dark:text-primary-light">{product.nutritionFacts.protein}</p>
								</div>
								<div>
									<h4 className="text-sm font-semibold text-primary-dark/70 dark:text-primary-light/70 uppercase mb-1">Caffeine</h4>
									<p className="text-lg text-primary-dark dark:text-primary-light">{product.nutritionFacts.caffeine}</p>
								</div>
								<div>
									<h4 className="text-sm font-semibold text-primary-dark/70 dark:text-primary-light/70 uppercase mb-1">Total Fat</h4>
									<p className="text-lg text-primary-dark dark:text-primary-light">{product.nutritionFacts.totalFat}</p>
								</div>
								<div>
									<h4 className="text-sm font-semibold text-primary-dark/70 dark:text-primary-light/70 uppercase mb-1">Total Carbohydrates</h4>
									<p className="text-lg text-primary-dark dark:text-primary-light">{product.nutritionFacts.totalCarbohydrates}</p>
								</div>
								<div>
									<h4 className="text-sm font-semibold text-primary-dark/70 dark:text-primary-light/70 uppercase mb-1">Antioxidants</h4>
									<p className="text-lg text-primary-dark dark:text-primary-light">{product.nutritionFacts.antioxidants}</p>
								</div>
								<div>
									<h4 className="text-sm font-semibold text-primary-dark/70 dark:text-primary-light/70 uppercase mb-1">L-Theanine</h4>
									<p className="text-lg text-primary-dark dark:text-primary-light">{product.nutritionFacts.lTheanine}</p>
								</div>
							</div>
						</Card>
					</div>

					{/* Customer Reviews */}
					<div className="mt-16 border-t border-primary-light/20 dark:border-primary-dark/20 pt-12 animate-fade-in">
						<h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-8 font-serif">Customer Reviews</h2>

						<div className="space-y-6">
							{product.reviews.map((review, index) => (
								<Card key={index} variant="simple" className={`animate-fade-in animate-stagger-delay-${(index % 3) + 1}`}>
									<div className="flex items-center mb-2">
										<span className="font-semibold text-primary-dark dark:text-primary-light">{review.author}</span>
										<span className="ml-4 text-sm text-primary-dark/60 dark:text-primary-light/60">{review.date}</span>
									</div>

									<div className="flex mb-2">
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className={`h-5 w-5 ${i < review.rating ? "text-accent" : "text-primary-light/30 dark:text-primary-dark/30"}`}
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>

									<p className="text-primary-dark/80 dark:text-primary-light/80">{review.comment}</p>
								</Card>
							))}
						</div>
					</div>

					{/* Related Products */}
					<div className="mt-16 border-t border-primary-light/20 dark:border-primary-dark/20 pt-12">
						<h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-8 font-serif">You May Also Like</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{product.relatedProducts.map((relatedProductId, index) => {
								const relatedProduct = products[relatedProductId as keyof typeof products];
								if (!relatedProduct) return null;

								return (
									<Card
										key={index}
										variant={index % 2 === 0 ? "default" : "featured"}
										title={relatedProduct.name}
										image={{ src: relatedProduct.image, alt: relatedProduct.name }}
										badge={{ text: relatedProduct.price, variant: "primary" }}
										className="animate-fade-in"
									>
										<p className="text-primary-dark/80 dark:text-primary-light/80 mb-4">{relatedProduct.description}</p>
										<Button href={`/products/${relatedProductId}`} variant="primary" fullWidth>
											View Details
										</Button>
									</Card>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
