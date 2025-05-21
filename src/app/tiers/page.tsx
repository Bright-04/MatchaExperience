import React from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const tierData = [
	{
		title: "Beginner",
		description: "Perfect for those starting their matcha journey",
		features: ["Basic matcha preparation guide", "Starter-grade matcha powder", "Essential utensils kit"],
		variant: "default",
		badge: { text: "Starter", variant: "primary" },
	},
	{
		title: "Enthusiast",
		description: "For matcha lovers seeking premium experience",
		features: ["Advanced preparation techniques", "Premium ceremonial grade matcha", "Complete traditional tool set"],
		variant: "featured",
		badge: { text: "Popular", variant: "accent" },
	},
	{
		title: "Connoisseur",
		description: "The ultimate matcha experience",
		features: ["Master-level preparation course", "Rare single-origin matcha selection", "Artisan-crafted tools and ceramics"],
		variant: "default",
		badge: { text: "Premium", variant: "secondary" },
	},
];

export default function TiersPage() {
	return (
		<div className="flex flex-col items-center">
			{/* Hero Section */}
			<div className="hero w-full py-16 px-4 sm:px-6 lg:px-8 text-center">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4 font-serif animate-slide-up">Matcha Experience Tiers</h1>
					<p className="text-xl text-primary-dark/80 dark:text-primary-light/80 mb-8 max-w-3xl mx-auto animate-slide-up animate-stagger-delay-1">
						Choose the perfect matcha tier to match your preferences and experience level
					</p>
				</div>
			</div>

			{/* Tiers Section */}
			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d2321]">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{tierData.map((tier, index) => (
							<div key={index} className={`animate-fade-in animate-stagger-delay-${index + 1}`}>
								<Card variant={tier.variant} title={tier.title} subtitle={tier.description} badge={tier.badge} className="h-full">
									<ul className="space-y-3 mb-6">
										{tier.features.map((feature, idx) => (
											<li key={idx} className="flex items-start">
												<span className="text-primary mr-2">✓</span>
												<span className="text-primary-dark/80 dark:text-primary-light/80">{feature}</span>
											</li>
										))}
									</ul>
									<Button variant={index === 1 ? "accent" : "primary"} fullWidth>
										Select {tier.title}
									</Button>
								</Card>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Additional Info Section */}
			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-primary-light/10 dark:bg-primary-dark/30">
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-6 font-serif animate-slide-up">Custom Experience Available</h2>
					<p className="text-xl text-primary-dark/80 dark:text-primary-light/80 mb-8 max-w-3xl mx-auto animate-slide-up animate-stagger-delay-1">
						Looking for something specific? We can create a custom matcha experience tailored to your preferences.
					</p>
					<Button href="/contact" variant="secondary" size="lg" className="animate-fade-in animate-stagger-delay-2">
						Contact Us
					</Button>
				</div>
			</div>
		</div>
	);
}
