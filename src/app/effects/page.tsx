import React from "react";
import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
	title: "Health Effects | Matcha Experience",
	description: "Discover the many health benefits and effects of drinking matcha green tea.",
};

// Array of health benefit data
const healthBenefits = [
	{
		title: "Antioxidant Properties",
		icon: (
			<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
				></path>
			</svg>
		),
		description:
			"Rich in catechins, particularly EGCG (epigallocatechin gallate), matcha helps protect cells from damage caused by free radicals and may reduce the risk of various chronic diseases.",
		color: "primary",
	},
	{
		title: "Mental Focus",
		icon: (
			<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
				></path>
			</svg>
		),
		description: "The combination of L-theanine and caffeine provides a stable energy boost and improved concentration without the jitters commonly associated with coffee.",
		color: "accent",
	},
	{
		title: "Metabolism Boost",
		icon: (
			<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
				></path>
			</svg>
		),
		description: "The high concentration of EGCG and other catechins may help boost metabolism and increase fat burning, supporting healthy weight management.",
		color: "secondary",
	},
	{
		title: "Heart Health",
		icon: (
			<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				></path>
			</svg>
		),
		description: "Regular consumption may help maintain healthy blood pressure and cholesterol levels, contributing to overall cardiovascular health.",
		color: "primary",
	},
	{
		title: "Immune Support",
		icon: (
			<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
			</svg>
		),
		description: "The high levels of antioxidants and vitamins in matcha can help strengthen the immune system and protect against infections.",
		color: "accent",
	},
	{
		title: "Stress Reduction",
		icon: (
			<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
		),
		description: "L-theanine in matcha promotes alpha wave production in the brain, which can induce relaxation without drowsiness.",
		color: "secondary",
	},
];

export default function EffectsPage() {
	return (
		<div className="flex flex-col items-center">
			<div className="hero w-full py-16 px-4 sm:px-6 lg:px-8 text-center">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4 font-serif animate-slide-up">Health Benefits of Matcha</h1>
					<p className="text-xl text-primary-dark/80 dark:text-primary-light/80 mb-8 max-w-3xl mx-auto animate-fade-in animate-stagger-delay-1">
						Discover the numerous health benefits that make matcha more than just a delicious beverage
					</p>
				</div>
			</div>

			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d2321]">
				<div className="max-w-7xl mx-auto">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{healthBenefits.map((benefit, index) => (
							<Card key={index} variant={index % 2 === 0 ? "default" : "featured"} title={benefit.title} className={`animate-fade-in animate-stagger-delay-${(index % 3) + 1}`}>
								<div className={`w-12 h-12 bg-${benefit.color} rounded-full flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110`}>
									{benefit.icon}
								</div>
								<p className="text-primary-dark/70 dark:text-primary-light/70">{benefit.description}</p>
							</Card>
						))}
					</div>
				</div>
			</div>

			{/* Scientific Research Section */}
			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-primary-light/10 dark:bg-primary-dark/20">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12 animate-slide-up">
						<h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-4 font-serif">Backed by Science</h2>
						<p className="text-lg text-primary-dark/80 dark:text-primary-light/80 max-w-3xl mx-auto">
							Numerous scientific studies have demonstrated the potential health benefits of matcha and its bioactive compounds.
						</p>
					</div>

					<div className="bg-white dark:bg-primary-dark/30 rounded-xl p-8 shadow-lg animate-fade-in">
						<div className="flex flex-col md:flex-row gap-8">
							<div className="md:w-1/2">
								<h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-4">Research Highlights</h3>
								<ul className="space-y-4">
									<li className="flex items-start">
										<span className="flex-shrink-0 text-primary mt-1 mr-2">•</span>
										<p className="text-primary-dark/80 dark:text-primary-light/80">
											<strong>Journal of Medicinal Food (2023):</strong> Regular matcha consumption was associated with improved attention and reaction time in healthy adults.
										</p>
									</li>
									<li className="flex items-start">
										<span className="flex-shrink-0 text-primary mt-1 mr-2">•</span>
										<p className="text-primary-dark/80 dark:text-primary-light/80">
											<strong>American Journal of Clinical Nutrition (2022):</strong> EGCG in matcha was shown to increase fat oxidation during moderate-intensity exercise.
										</p>
									</li>
									<li className="flex items-start">
										<span className="flex-shrink-0 text-primary mt-1 mr-2">•</span>
										<p className="text-primary-dark/80 dark:text-primary-light/80">
											<strong>Nutrients (2021):</strong> Matcha consumption was linked to reduced markers of oxidative stress and inflammation in human subjects.
										</p>
									</li>
								</ul>
							</div>

							<div className="md:w-1/2">
								<h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-4">Key Compounds</h3>
								<ul className="space-y-4">
									<li className="flex items-start">
										<span className="flex-shrink-0 text-accent mt-1 mr-2">•</span>
										<p className="text-primary-dark/80 dark:text-primary-light/80">
											<strong>Catechins:</strong> Powerful antioxidants including EGCG, which has been studied for its anti-cancer and metabolism-boosting properties.
										</p>
									</li>
									<li className="flex items-start">
										<span className="flex-shrink-0 text-accent mt-1 mr-2">•</span>
										<p className="text-primary-dark/80 dark:text-primary-light/80">
											<strong>L-theanine:</strong> An amino acid that promotes relaxation without drowsiness, helping to balance the stimulating effects of caffeine.
										</p>
									</li>
									<li className="flex items-start">
										<span className="flex-shrink-0 text-accent mt-1 mr-2">•</span>
										<p className="text-primary-dark/80 dark:text-primary-light/80">
											<strong>Chlorophyll:</strong> Gives matcha its vibrant green color and has detoxifying properties.
										</p>
									</li>
								</ul>
							</div>
						</div>

						<div className="mt-8 text-center">
							<Button variant="primary" href="/products" className="animate-fade-in animate-stagger-delay-3">
								Explore Our Matcha Products
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
