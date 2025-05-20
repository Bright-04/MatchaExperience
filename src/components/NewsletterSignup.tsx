"use client";

import { useState } from "react";

interface NewsletterSignupProps {
	dark?: boolean;
}

export default function NewsletterSignup({ dark = false }: NewsletterSignupProps) {
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
		<div className={`w-full py-16 px-4 sm:px-6 lg:px-8 ${dark ? "bg-green-800 text-white" : "bg-green-50 text-green-900"}`}>
			<div className="max-w-4xl mx-auto text-center">
				<h2 className={`text-3xl font-bold mb-4 ${dark ? "text-white" : "text-green-900"}`}>Subscribe to Our Newsletter</h2>
				<p className={`text-xl mb-8 ${dark ? "text-green-100" : "text-green-800"}`}>Stay updated with the latest matcha tips, recipes, and exclusive content</p>

				{status === "success" && <div className="bg-green-600 text-white px-4 py-3 rounded mb-8 max-w-md mx-auto">{message}</div>}

				{status === "error" && <div className={`${dark ? "bg-red-700" : "bg-red-100 text-red-700"} px-4 py-3 rounded mb-8 max-w-md mx-auto`}>{message}</div>}

				<form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
					<input
						type="email"
						placeholder="Your email address"
						className={`flex-grow px-4 py-3 rounded-lg focus:ring-green-500 focus:border-green-500 border ${
							dark ? "border-green-600 bg-green-700 text-white placeholder-green-200" : "border-gray-300 bg-white text-green-900"
						}`}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<button
						type="submit"
						className={`font-medium px-6 py-3 rounded-lg transition duration-300 ${dark ? "bg-white text-green-800 hover:bg-green-100" : "bg-green-700 hover:bg-green-800 text-white"}`}
					>
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
}
