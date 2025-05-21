import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Health Effects | Matcha Experience",
	description: "Discover the many health benefits and effects of drinking matcha green tea.",
};

export default function EffectsPage() {
	return (
		<div className="flex flex-col items-center">
			<div className="hero w-full py-16 px-4 sm:px-6 lg:px-8 text-center">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4 font-serif">Health Benefits of Matcha</h1>
					<p className="text-xl text-primary-dark/80 dark:text-primary-light/80 mb-8 max-w-3xl mx-auto">
						Discover the numerous health benefits that make matcha more than just a delicious beverage
					</p>
				</div>
			</div>

			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d2321]">
				<div className="max-w-7xl mx-auto">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<div className="bg-white dark:bg-primary-dark/30 p-8 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
							<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									></path>
								</svg>
							</div>
							<h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-light mb-4 font-serif">Antioxidant Properties</h2>
							<p className="text-primary-dark/70 dark:text-primary-light/70">
								Rich in catechins, particularly EGCG (epigallocatechin gallate), matcha helps protect cells from damage caused by free radicals and may reduce the risk of various
								chronic diseases.
							</p>
						</div>
						<div className="bg-white dark:bg-primary-dark/30 p-8 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
							<div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-6">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
									></path>
								</svg>
							</div>
							<h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-light mb-4 font-serif">Mental Focus</h2>
							<p className="text-primary-dark/70 dark:text-primary-light/70">
								The combination of L-theanine and caffeine provides a stable energy boost and improved concentration without the jitters commonly associated with coffee.
							</p>
						</div>{" "}
						<div className="bg-white dark:bg-primary-dark/30 p-8 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
							<div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-6">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
									></path>
								</svg>
							</div>
							<h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-light mb-4 font-serif">Metabolism Boost</h2>
							<p className="text-primary-dark/70 dark:text-primary-light/70">
								The high concentration of EGCG and other catechins may help boost metabolism and increase fat burning, supporting healthy weight management.
							</p>
						</div>
						<div className="bg-white dark:bg-primary-dark/30 p-8 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
							<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									></path>
								</svg>
							</div>
							<h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-light mb-4 font-serif">Heart Health</h2>
							<p className="text-primary-dark/70 dark:text-primary-light/70">
								Regular consumption may help maintain healthy blood pressure and cholesterol levels, contributing to overall cardiovascular health.
							</p>
						</div>{" "}
						<div className="bg-white dark:bg-primary-dark/30 p-8 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
							<div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-6">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
								</svg>
							</div>
							<h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-light mb-4 font-serif">Immune Support</h2>
							<p className="text-primary-dark/70 dark:text-primary-light/70">
								The high levels of antioxidants and vitamins in matcha can help strengthen the immune system and protect against infections.
							</p>
						</div>
						<div className="bg-white dark:bg-primary-dark/30 p-8 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
							<div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-6">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
								</svg>
							</div>
							<h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-light mb-4 font-serif">Stress Reduction</h2>
							<p className="text-primary-dark/70 dark:text-primary-light/70">
								L-theanine in matcha promotes the production of alpha waves in the brain, which can help reduce stress and promote relaxation without causing drowsiness.{" "}
							</p>
						</div>
					</div>

					<div className="mt-16 bg-primary-light/10 dark:bg-primary-dark/30 p-8 rounded-lg shadow-soft">
						<h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-light mb-4 font-serif">Daily Consumption Guidelines</h2>
						<p className="text-primary-dark/80 dark:text-primary-light/80 mb-4">While matcha is generally safe for most people, it&apos;s recommended to:</p>
						<ul className="list-disc list-inside text-primary-dark/80 dark:text-primary-light/80 space-y-2">
							<li>Start with 1-2 cups per day</li>
							<li>Drink it early in the day due to caffeine content</li>
							<li>Stay hydrated by drinking plenty of water</li>
							<li>Consult with healthcare provider if you have specific health concerns</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
