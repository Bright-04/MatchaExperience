import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Matcha Tiers | Matcha Experience",
	description: "Learn about the different grades and tiers of matcha tea, from ceremonial to culinary grade.",
};

export default function TiersPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold text-green-800 mb-8">Matcha Tea Grades</h1>

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold text-green-700 mb-4">Ceremonial Grade</h2>
					<p className="text-gray-600 mb-4">
						The highest quality matcha, made from the youngest tea leaves with the stems and veins removed. This grade is used in traditional tea ceremonies and is characterized by its
						vibrant green color and smooth, subtle flavor.
					</p>
					<ul className="list-disc list-inside text-gray-600">
						<li>Bright, vivid green color</li>
						<li>Sweet, delicate taste</li>
						<li>No bitterness</li>
						<li>Premium price point</li>
					</ul>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold text-green-700 mb-4">Premium Grade</h2>
					<p className="text-gray-600 mb-4">
						High-quality matcha suitable for daily drinking. While not as refined as ceremonial grade, it offers excellent flavor and color at a more accessible price point.
					</p>
					<ul className="list-disc list-inside text-gray-600">
						<li>Bright green color</li>
						<li>Fresh, balanced taste</li>
						<li>Slight natural sweetness</li>
						<li>Good value for daily use</li>
					</ul>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold text-green-700 mb-4">Culinary Grade</h2>
					<p className="text-gray-600 mb-4">Specifically designed for cooking and baking. This grade has a stronger flavor that holds up well when mixed with other ingredients.</p>
					<ul className="list-disc list-inside text-gray-600">
						<li>Darker green color</li>
						<li>Robust flavor</li>
						<li>More bitter notes</li>
						<li>Economical choice for recipes</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
