import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Health Effects | Matcha Experience",
	description: "Discover the many health benefits and effects of drinking matcha green tea.",
};

export default function EffectsPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold text-green-800 mb-8">Health Benefits of Matcha</h1>

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold text-green-700 mb-4">Antioxidant Properties</h2>
					<p className="text-gray-600">
						Rich in catechins, particularly EGCG (epigallocatechin gallate), matcha helps protect cells from damage caused by free radicals and may reduce the risk of various chronic
						diseases.
					</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold text-green-700 mb-4">Mental Focus</h2>
					<p className="text-gray-600">
						The combination of L-theanine and caffeine provides a stable energy boost and improved concentration without the jitters commonly associated with coffee.
					</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold text-green-700 mb-4">Metabolism Boost</h2>
					<p className="text-gray-600">The high concentration of EGCG and other catechins may help boost metabolism and increase fat burning, supporting healthy weight management.</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold text-green-700 mb-4">Heart Health</h2>
					<p className="text-gray-600">Regular consumption may help maintain healthy blood pressure and cholesterol levels, contributing to overall cardiovascular health.</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold text-green-700 mb-4">Immune Support</h2>
					<p className="text-gray-600">The high levels of antioxidants and vitamins in matcha can help strengthen the immune system and protect against infections.</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold text-green-700 mb-4">Stress Reduction</h2>
					<p className="text-gray-600">
						L-theanine in matcha promotes the production of alpha waves in the brain, which can help reduce stress and promote relaxation without causing drowsiness.
					</p>
				</div>
			</div>

			<div className="mt-8 bg-green-50 p-6 rounded-lg">
				<h2 className="text-2xl font-semibold text-green-700 mb-4">Daily Consumption Guidelines</h2>
				<p className="text-gray-600 mb-4">While matcha is generally safe for most people, it's recommended to:</p>
				<ul className="list-disc list-inside text-gray-600">
					<li>Start with 1-2 cups per day</li>
					<li>Drink it early in the day due to caffeine content</li>
					<li>Stay hydrated by drinking plenty of water</li>
					<li>Consult with healthcare provider if you have specific health concerns</li>
				</ul>
			</div>
		</div>
	);
}
