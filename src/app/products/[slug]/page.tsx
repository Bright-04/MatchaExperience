"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
			<div className="w-full bg-green-50 py-4 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<nav className="flex" aria-label="Breadcrumb">
						<ol className="flex items-center space-x-2 text-sm text-green-700">
							<li>
								<Link href="/" className="hover:text-green-900">
									Home
								</Link>
							</li>
							<li className="flex items-center">
								<svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<Link href="/products" className="ml-2 hover:text-green-900">
									Products
								</Link>
							</li>
							<li className="flex items-center">
								<svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="ml-2 text-green-900">{product.name}</span>
							</li>
						</ol>
					</nav>
				</div>
			</div>

			{/* Product Detail */}
			<div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="lg:grid lg:grid-cols-2 lg:gap-16">
						{/* Product Image */}
						<div className="mb-10 lg:mb-0">
							<div className="relative h-96 md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
								<Image src={product.image} alt={product.name} fill priority style={{ objectFit: "cover" }} />
							</div>
						</div>

						{/* Product Info */}
						<div>
							<h1 className="text-3xl font-bold text-green-900 mb-2">{product.name}</h1>
							<p className="text-2xl font-bold text-green-700 mb-6">{product.price}</p>
							<div className="mb-6">
								<p className="text-green-800 mb-4">{product.description}</p>

								<div className="mb-6">
									<h3 className="font-semibold text-green-800 mb-2">Features:</h3>
									<div className="flex flex-wrap gap-2">
										{product.features.map((feature, idx) => (
											<span key={idx} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">
												{feature}
											</span>
										))}
									</div>
								</div>

								<div className="flex items-start gap-6 text-sm text-green-800 mb-6">
									<div>
										<span className="font-semibold block">Origin:</span>
										{product.origin}
									</div>
									<div>
										<span className="font-semibold block">Size:</span>
										{product.servingSize}
									</div>
								</div>
							</div>{" "}
							<div className="mb-8">
								<div className="flex flex-col sm:flex-row gap-4">
									<button className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded transition duration-300">See Brewing Instructions</button>
								</div>
							</div>{" "}
							<div className="border-t border-gray-200 pt-6">
								<div className="flex items-center mb-4">
									<svg className="h-5 w-5 text-green-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="text-green-800">Premium quality matcha</span>
								</div>
								<div className="flex items-center">
									<svg className="h-5 w-5 text-green-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="text-green-800">Authentically sourced from Japan</span>
								</div>
							</div>
						</div>
					</div>

					{/* Product Details Tabs */}
					<div className="mt-16">
						<div className="border-b border-gray-200">
							<nav className="-mb-px flex space-x-8">
								<button className="border-green-500 text-green-700 py-4 px-1 border-b-2 font-medium text-sm">Description</button>
								<button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">Preparation</button>
								<button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">Nutrition Facts</button>
								<button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">Reviews</button>
							</nav>
						</div>

						<div className="mt-8 prose prose-green max-w-none">
							<div dangerouslySetInnerHTML={{ __html: product.longDescription }} />
						</div>
					</div>

					{/* Related Products */}
					{product.relatedProducts && product.relatedProducts.length > 0 && (
						<div className="mt-16">
							<h2 className="text-2xl font-bold text-green-900 mb-8">You Might Also Like</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{product.relatedProducts.map((relatedSlug) => {
									const relatedProduct = products[relatedSlug as keyof typeof products];
									if (!relatedProduct) return null;

									return (
										<div key={relatedSlug} className="bg-green-50 rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
											<Link href={`/products/${relatedSlug}`}>
												<div className="relative h-64 w-full">
													<Image src={relatedProduct.image} alt={relatedProduct.name} fill style={{ objectFit: "cover" }} />
												</div>
											</Link>
											<div className="p-6">
												<div className="flex justify-between items-start mb-4">
													<h3 className="text-xl font-bold text-green-800">
														<Link href={`/products/${relatedSlug}`} className="hover:text-green-700">
															{relatedProduct.name}
														</Link>
													</h3>
													<span className="text-lg font-bold text-green-700">{relatedProduct.price}</span>
												</div>
												<p className="text-green-700 mb-4 line-clamp-2">{relatedProduct.description}</p>
												<Link href={`/products/${relatedSlug}`} className="text-green-600 hover:text-green-800 font-medium inline-flex items-center">
													View product
													<svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
														<path
															fillRule="evenodd"
															d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
															clipRule="evenodd"
														/>
													</svg>
												</Link>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
