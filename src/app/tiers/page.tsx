import React from "react";

export default function TiersPage() {
	return (
		<main className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8">Matcha Experience Tiers</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div className="glass-card p-6 rounded-lg">
					<h2 className="text-2xl font-semibold mb-4">Beginner</h2>
					<p className="mb-4">Perfect for those starting their matcha journey</p>
					<ul className="space-y-2">
						<li>✓ Basic matcha preparation guide</li>
						<li>✓ Starter-grade matcha powder</li>
						<li>✓ Essential utensils kit</li>
					</ul>
				</div>

				<div className="glass-card p-6 rounded-lg">
					<h2 className="text-2xl font-semibold mb-4">Enthusiast</h2>
					<p className="mb-4">For matcha lovers seeking premium experience</p>
					<ul className="space-y-2">
						<li>✓ Advanced preparation techniques</li>
						<li>✓ Premium ceremonial grade matcha</li>
						<li>✓ Complete traditional tool set</li>
					</ul>
				</div>

				<div className="glass-card p-6 rounded-lg">
					<h2 className="text-2xl font-semibold mb-4">Connoisseur</h2>
					<p className="mb-4">The ultimate matcha experience</p>
					<ul className="space-y-2">
						<li>✓ Master-level preparation course</li>
						<li>✓ Rare single-origin matcha selection</li>
						<li>✓ Artisan-crafted tools and ceramics</li>
					</ul>
				</div>
			</div>
		</main>
	);
}
