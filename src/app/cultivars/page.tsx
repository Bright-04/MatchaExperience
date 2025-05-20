import Image from "next/image";

const cultivars = [
	{
		name: "Yabukita",
		image: "/images/cultivar/Yabukita.jpg",
		description: "The most popular cultivar in Japan, known for its balanced flavor profile and reliable growth characteristics. Makes up over 75% of tea plantations in Japan.",
		characteristics: ["Balanced umami and sweetness", "Medium astringency", "Fresh aroma", "Versatile for various grades"],
	},
	{
		name: "Samidori",
		image: "/images/cultivar/Samidori Matcha.jpg",
		description: "A premium cultivar known for its deep flavor and excellent aroma. Often used for high-quality ceremonial matcha.",
		characteristics: ["Rich umami", "Low astringency", "Vibrant green color", "Smooth mouthfeel"],
	},
	{
		name: "Gokou",
		image: "/images/cultivar/Gokou.jpg",
		description: "Prized for its intense sweetness and deep umami flavor. One of the most sought-after cultivars for premium matcha.",
		characteristics: ["Exceptional sweetness", "Strong umami", "Minimal bitterness", "Lingering aftertaste"],
	},
	{
		name: "Okumidori",
		image: "/images/cultivar/okumidori.jpg",
		description: "A later-budding cultivar that produces teas with mild astringency and good flavor. Popular for both matcha and other green teas.",
		characteristics: ["Mellow sweetness", "Mild astringency", "Balanced flavor", "Good aroma"],
	},
	{
		name: "Saemidori",
		image: "/images/cultivar/Saemidori.jpg",
		description: "A relatively new cultivar known for its vibrant color and excellent flavor profile. Increasingly popular for premium matcha.",
		characteristics: ["Bright green color", "Strong sweetness", "Complex aroma", "Low tannin content"],
	},
	{
		name: "Asahi",
		image: "/images/cultivar/ASAHI MATCHA.jpg",
		description: "Known for its distinctive character and excellent color. Often used in high-grade ceremonial matcha.",
		characteristics: ["Deep umami", "Subtle sweetness", "Rich mouthfeel", "Complex flavor notes"],
	},
	{
		name: "Inzatsu Uji",
		image: "/images/cultivar/Inucha_Uji.jpg",
		description: "A cultivar from the Uji region that produces teas with exceptional flavor and character. Used for premium ceremonial grade matcha.",
		characteristics: ["Balanced sweetness and umami", "Subtle floral notes", "Smooth texture", "Long finish"],
	},
	{
		name: "Wakatake",
		image: "/images/cultivar/Wakatake.jpg",
		description: "A traditional cultivar that produces teas with distinctive character. Valued for ceremonial grade matcha.",
		characteristics: ["Bold flavor profile", "Pronounced umami", "Complex aroma", "Rich mouthfeel"],
	},
];

export default function Cultivars() {
	return (
		<div className="flex flex-col items-center">
			{/* Hero Section */}
			<div className="hero w-full py-16 px-4 sm:px-6 lg:px-8 text-center">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Matcha Cultivars</h1>
					<p className="text-xl text-green-800 mb-8 max-w-3xl mx-auto">Explore the diverse varieties of tea plants specifically grown for producing premium matcha</p>
				</div>
			</div>

			{/* Introduction Section */}
			<div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="bg-green-50 p-8 rounded-lg shadow-md">
						<h2 className="text-2xl font-bold text-green-800 mb-4">What are Cultivars?</h2>
						<p className="text-green-700 mb-4">
							Tea cultivars are varieties of the Camellia sinensis plant that have been selectively bred for specific characteristics. For matcha production, cultivars are chosen based
							on their flavor profile, color, nutritional content, and growing conditions.
						</p>
						<p className="text-green-700">
							While all matcha comes from the same plant species, different cultivars produce distinct flavors, aromas, and characteristics in the final product. The most prized matcha
							typically comes from specific cultivars grown in optimal conditions and processed with meticulous care.
						</p>
					</div>
				</div>
			</div>

			{/* Cultivars Grid */}
			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center text-green-900 mb-12">Premium Matcha Cultivars</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{cultivars.map((cultivar, index) => (
							<div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl">
								<div className="relative h-64 w-full">
									<Image src={cultivar.image} alt={`${cultivar.name} matcha cultivar`} fill style={{ objectFit: "cover" }} />
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold text-green-800 mb-2">{cultivar.name}</h3>
									<p className="text-green-700 mb-4">{cultivar.description}</p>
									<h4 className="font-semibold text-green-800 mb-2">Key Characteristics:</h4>
									<ul className="list-disc pl-5 text-green-700 space-y-1">
										{cultivar.characteristics.map((characteristic, idx) => (
											<li key={idx}>{characteristic}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Growing Conditions */}
			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="md:w-1/2 relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
							<Image src="/images/bowl-of-matcha-vertical.jpg" alt="Matcha growing conditions" fill style={{ objectFit: "cover" }} className="rounded-lg" />
						</div>
						<div className="md:w-1/2">
							<h2 className="text-3xl font-bold text-green-900 mb-6">Ideal Growing Conditions</h2>
							<div className="space-y-4 text-lg text-green-800">
								<p className="flex items-start">
									<span className="mr-2 text-green-600 font-bold">•</span>
									<span>
										<strong>Shading:</strong> Premium matcha plants are shaded for 3-4 weeks before harvest, increasing chlorophyll and amino acid content.
									</span>
								</p>
								<p className="flex items-start">
									<span className="mr-2 text-green-600 font-bold">•</span>
									<span>
										<strong>Climate:</strong> Cool temperatures, adequate rainfall, and morning mist create ideal growing conditions.
									</span>
								</p>
								<p className="flex items-start">
									<span className="mr-2 text-green-600 font-bold">•</span>
									<span>
										<strong>Soil:</strong> Well-draining, slightly acidic soil rich in nutrients produces the best quality leaves.
									</span>
								</p>
								<p className="flex items-start">
									<span className="mr-2 text-green-600 font-bold">•</span>
									<span>
										<strong>Elevation:</strong> Many premium matcha gardens are located at higher elevations where temperature fluctuations enhance flavor.
									</span>
								</p>
								<p className="flex items-start">
									<span className="mr-2 text-green-600 font-bold">•</span>
									<span>
										<strong>Hand-picking:</strong> The youngest, tenderest leaves are carefully hand-picked for the highest grade matcha.
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
