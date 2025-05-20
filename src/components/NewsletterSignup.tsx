"use client";

import { useState } from "react";

export default function NewsletterSignup() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Validate email
		if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
			setStatus("error");
			setMessage("Please enter a valid email address.");
			return;
		}

		// In a real app, you would send this data to your server or API
		// This is just a simulation for demo purposes
		setTimeout(() => {
			setStatus("success");
			setMessage("Thank you for subscribing to our newsletter!");
			setEmail("");
		}, 1000);
	};
	return (
		<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0d2321] text-foreground">
			<div className="max-w-4xl mx-auto">
				<div className="glass-card rounded-xl p-10 relative overflow-hidden bg-white/70 dark:bg-primary-dark/20 shadow-soft dark:shadow-lg">
					{/* Decorative elements */}
					<div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary-light/20 dark:bg-primary-light/10 blur-3xl"></div>
					<div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-accent/10 dark:bg-accent/5 blur-2xl"></div>

					<div className="relative z-10 text-center">
						<h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary-dark dark:text-primary-light">Join Our Matcha Community</h2>
						<p className="text-xl mb-8 max-w-2xl mx-auto text-primary-dark/80 dark:text-primary-light/80">
							Subscribe to receive exclusive recipes, brewing tips, and special offers direct to your inbox
						</p>

						{status === "success" && (
							<div className="bg-primary/90 text-white px-6 py-4 rounded-lg mb-8 max-w-md mx-auto shadow-md">
								<p>{message}</p>
							</div>
						)}

						{status === "error" && (
							<div className="bg-secondary/10 dark:bg-secondary/30 text-secondary dark:text-secondary-light px-6 py-4 rounded-lg mb-8 max-w-md mx-auto shadow-md">
								<p>{message}</p>
							</div>
						)}

						<form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
							<input
								type="email"
								placeholder="Your email address"
								className="flex-grow px-6 py-4 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary border border-primary/20 bg-white dark:bg-primary-dark/50 text-foreground dark:text-white placeholder-gray-400 dark:placeholder-white/70"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<button
								type="submit"
								className="font-medium px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 bg-accent hover:bg-accent-dark text-white"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
