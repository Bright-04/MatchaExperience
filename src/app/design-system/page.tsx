"use client";

import { useState } from "react";
import Link from "next/link";

const DesignSystem = () => {
	const [activeTab, setActiveTab] = useState("colors");

	const colors = {
		primary: [
			{ name: "Primary Lightest", value: "bg-primary-lightest", variable: "--primary-lightest", hex: "#c8e6c9" },
			{ name: "Primary Light", value: "bg-primary-light", variable: "--primary-light", hex: "#8fe0d6" },
			{ name: "Primary", value: "bg-primary", variable: "--primary", hex: "#2a9d8f" },
			{ name: "Primary Dark", value: "bg-primary-dark", variable: "--primary-dark", hex: "#207b71" },
			{ name: "Primary Darkest", value: "bg-primary-darkest", variable: "--primary-darkest", hex: "#0d3b11" },
		],
		accent: [
			{ name: "Accent Light", value: "bg-accent-light", variable: "--accent-light", hex: "#f7b989" },
			{ name: "Accent", value: "bg-accent", variable: "--accent", hex: "#f4a261" },
			{ name: "Accent Dark", value: "bg-accent-dark", variable: "--accent-dark", hex: "#e18f48" },
		],
		secondary: [
			{ name: "Secondary Light", value: "bg-secondary-light", variable: "--secondary-light", hex: "#eb8a72" },
			{ name: "Secondary", value: "bg-secondary", variable: "--secondary", hex: "#e76f51" },
			{ name: "Secondary Dark", value: "bg-secondary-dark", variable: "--secondary-dark", hex: "#d85638" },
		],
		text: [
			{ name: "Text Darkest", value: "bg-text-darkest", variable: "--text-darkest", hex: "#1a1a1a" },
			{ name: "Text Dark", value: "bg-text-dark", variable: "--text-dark", hex: "#333333" },
			{ name: "Text Medium", value: "bg-text-medium", variable: "--text-medium", hex: "#555555" },
			{ name: "Text Light", value: "bg-text-light", variable: "--text-light", hex: "#f5f5f5" },
		],
		neutral: [
			{ name: "Neutral 50", value: "bg-neutral-50", variable: "--neutral-50", hex: "#f8fafc" },
			{ name: "Neutral 100", value: "bg-neutral-100", variable: "--neutral-100", hex: "#f1f5f9" },
			{ name: "Neutral 200", value: "bg-neutral-200", variable: "--neutral-200", hex: "#e2e8f0" },
			{ name: "Neutral 300", value: "bg-neutral-300", variable: "--neutral-300", hex: "#cbd5e1" },
		],
	};

	const typography = [
		{ name: "Heading 1", class: "text-4xl md:text-6xl font-bold font-serif text-primary-dark" },
		{ name: "Heading 2", class: "text-3xl md:text-4xl font-bold font-serif text-primary-dark" },
		{ name: "Heading 3", class: "text-2xl font-bold font-serif text-primary-dark" },
		{ name: "Paragraph", class: "text-base text-text-dark" },
		{ name: "Small", class: "text-sm text-text-medium" },
	];

	const shadows = [
		{ name: "Shadow Small", class: "shadow-sm", variable: "--shadow-sm" },
		{ name: "Shadow Medium", class: "shadow-md", variable: "--shadow-md" },
		{ name: "Shadow Large", class: "shadow-lg", variable: "--shadow-lg" },
		{ name: "Shadow Hover", class: "shadow-xl", variable: "--shadow-hover" },
	];

	const borderRadius = [
		{ name: "Border Radius Small", class: "rounded-sm", variable: "--border-radius-sm" },
		{ name: "Border Radius Medium", class: "rounded-md", variable: "--border-radius-md" },
		{ name: "Border Radius Large", class: "rounded-lg", variable: "--border-radius-lg" },
		{ name: "Border Radius Full", class: "rounded-full", variable: "rounded-full" },
	];

	const transitions = [
		{ name: "Transition Fast", class: "transition-all duration-200", variable: "--transition-fast" },
		{ name: "Transition Default", class: "transition-all duration-300", variable: "--transition-default" },
		{ name: "Transition Slow", class: "transition-all duration-500", variable: "--transition-slow" },
	];

	const buttons = [
		{
			name: "Primary Button",
			class: "bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg",
		},
		{
			name: "Secondary Button",
			class: "bg-white dark:bg-primary-dark/30 hover:bg-primary-light/10 text-primary-dark border border-primary/30 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg",
		},
		{
			name: "Accent Button",
			class: "bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg",
		},
		{
			name: "Small Button",
			class: "bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm transition-all duration-300 shadow-sm hover:shadow-md",
		},
	];

	const badges = [
		{ name: "Primary Badge", class: "bg-primary text-white px-3 py-1 rounded-full text-sm font-medium" },
		{ name: "Accent Badge", class: "bg-accent text-white px-3 py-1 rounded-full text-sm font-medium" },
		{ name: "Secondary Badge", class: "bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium" },
	];

	return (
		<div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d2321]">
			<div className="max-w-7xl mx-auto">
				<div className="mb-16">
					<h1 className="text-4xl md:text-5xl font-bold font-serif text-primary-dark dark:text-primary-light mb-4">Design System</h1>
					<p className="text-xl text-text-medium dark:text-primary-light/70 max-w-3xl">This page documents the design tokens, components, and patterns used in Matcha Experience.</p>
					<div className="mt-6">
						<Link href="/" className="text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary-light/80 transition-colors">
							← Back to Home
						</Link>
					</div>
				</div>

				<div className="mb-8">
					<div className="flex flex-wrap gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
						<button
							onClick={() => setActiveTab("colors")}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
								activeTab === "colors"
									? "bg-primary text-white"
									: "bg-neutral-100 dark:bg-neutral-800 text-text-dark dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
							}`}
						>
							Colors
						</button>
						<button
							onClick={() => setActiveTab("typography")}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
								activeTab === "typography"
									? "bg-primary text-white"
									: "bg-neutral-100 dark:bg-neutral-800 text-text-dark dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
							}`}
						>
							Typography
						</button>
						<button
							onClick={() => setActiveTab("shadows")}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
								activeTab === "shadows"
									? "bg-primary text-white"
									: "bg-neutral-100 dark:bg-neutral-800 text-text-dark dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
							}`}
						>
							Shadows
						</button>
						<button
							onClick={() => setActiveTab("borderRadius")}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
								activeTab === "borderRadius"
									? "bg-primary text-white"
									: "bg-neutral-100 dark:bg-neutral-800 text-text-dark dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
							}`}
						>
							Border Radius
						</button>
						<button
							onClick={() => setActiveTab("transitions")}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
								activeTab === "transitions"
									? "bg-primary text-white"
									: "bg-neutral-100 dark:bg-neutral-800 text-text-dark dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
							}`}
						>
							Transitions
						</button>
						<button
							onClick={() => setActiveTab("buttons")}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
								activeTab === "buttons"
									? "bg-primary text-white"
									: "bg-neutral-100 dark:bg-neutral-800 text-text-dark dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
							}`}
						>
							Buttons
						</button>
						<button
							onClick={() => setActiveTab("badges")}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
								activeTab === "badges"
									? "bg-primary text-white"
									: "bg-neutral-100 dark:bg-neutral-800 text-text-dark dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
							}`}
						>
							Badges
						</button>
					</div>
				</div>

				{activeTab === "colors" && (
					<div>
						<h2 className="text-2xl font-serif font-bold text-primary-dark dark:text-primary-light mb-6">Color Palette</h2>

						<div className="mb-12">
							<h3 className="text-xl font-serif font-semibold text-primary-dark dark:text-primary-light mb-4">Primary Colors</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
								{colors.primary.map((color) => (
									<div key={color.name} className="flex flex-col bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md">
										<div className={`${color.value} h-24`}></div>
										<div className="p-4">
											<h4 className="font-medium mb-1 text-text-dark dark:text-neutral-200">{color.name}</h4>
											<div className="text-sm text-text-medium dark:text-neutral-400">
												<p>Variable: {color.variable}</p>
												<p>Hex: {color.hex}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="mb-12">
							<h3 className="text-xl font-serif font-semibold text-primary-dark dark:text-primary-light mb-4">Accent Colors</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
								{colors.accent.map((color) => (
									<div key={color.name} className="flex flex-col bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md">
										<div className={`${color.value} h-24`}></div>
										<div className="p-4">
											<h4 className="font-medium mb-1 text-text-dark dark:text-neutral-200">{color.name}</h4>
											<div className="text-sm text-text-medium dark:text-neutral-400">
												<p>Variable: {color.variable}</p>
												<p>Hex: {color.hex}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="mb-12">
							<h3 className="text-xl font-serif font-semibold text-primary-dark dark:text-primary-light mb-4">Secondary Colors</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
								{colors.secondary.map((color) => (
									<div key={color.name} className="flex flex-col bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md">
										<div className={`${color.value} h-24`}></div>
										<div className="p-4">
											<h4 className="font-medium mb-1 text-text-dark dark:text-neutral-200">{color.name}</h4>
											<div className="text-sm text-text-medium dark:text-neutral-400">
												<p>Variable: {color.variable}</p>
												<p>Hex: {color.hex}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="mb-12">
							<h3 className="text-xl font-serif font-semibold text-primary-dark dark:text-primary-light mb-4">Text Colors</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
								{colors.text.map((color) => (
									<div key={color.name} className="flex flex-col bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md">
										<div className={`${color.value} h-24`}></div>
										<div className="p-4">
											<h4 className="font-medium mb-1 text-text-dark dark:text-neutral-200">{color.name}</h4>
											<div className="text-sm text-text-medium dark:text-neutral-400">
												<p>Variable: {color.variable}</p>
												<p>Hex: {color.hex}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="mb-12">
							<h3 className="text-xl font-serif font-semibold text-primary-dark dark:text-primary-light mb-4">Neutral Colors</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
								{colors.neutral.map((color) => (
									<div key={color.name} className="flex flex-col bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md">
										<div className={`${color.value} h-24`}></div>
										<div className="p-4">
											<h4 className="font-medium mb-1 text-text-dark dark:text-neutral-200">{color.name}</h4>
											<div className="text-sm text-text-medium dark:text-neutral-400">
												<p>Variable: {color.variable}</p>
												<p>Hex: {color.hex}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				)}

				{activeTab === "typography" && (
					<div>
						<h2 className="text-2xl font-serif font-bold text-primary-dark dark:text-primary-light mb-6">Typography</h2>
						<div className="grid grid-cols-1 gap-8">
							{typography.map((item) => (
								<div key={item.name} className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md">
									<div className="mb-2 text-text-medium dark:text-neutral-400 text-sm">{item.name}</div>
									<div className={item.class}>This is a sample text</div>
									<div className="mt-4 text-sm text-text-medium dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 p-3 rounded">
										<code>{item.class}</code>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{activeTab === "shadows" && (
					<div>
						<h2 className="text-2xl font-serif font-bold text-primary-dark dark:text-primary-light mb-6">Shadows</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
							{shadows.map((shadow) => (
								<div key={shadow.name} className="bg-white dark:bg-neutral-800 rounded-lg p-6">
									<div className="mb-4 text-text-medium dark:text-neutral-400 text-sm">{shadow.name}</div>
									<div className={`${shadow.class} h-32 w-full bg-white dark:bg-neutral-700 rounded-lg`}></div>
									<div className="mt-4 text-sm text-text-medium dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 p-3 rounded">
										<code>{shadow.class}</code>
										<p className="mt-2">CSS Variable: {shadow.variable}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{activeTab === "borderRadius" && (
					<div>
						<h2 className="text-2xl font-serif font-bold text-primary-dark dark:text-primary-light mb-6">Border Radius</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
							{borderRadius.map((radius) => (
								<div key={radius.name} className="bg-white dark:bg-neutral-800 rounded-lg p-6">
									<div className="mb-4 text-text-medium dark:text-neutral-400 text-sm">{radius.name}</div>
									<div className={`${radius.class} h-32 w-full bg-primary`}></div>
									<div className="mt-4 text-sm text-text-medium dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 p-3 rounded">
										<code>{radius.class}</code>
										<p className="mt-2">CSS Variable: {radius.variable}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{activeTab === "transitions" && (
					<div>
						<h2 className="text-2xl font-serif font-bold text-primary-dark dark:text-primary-light mb-6">Transitions</h2>
						<div className="grid grid-cols-1 gap-8">
							{transitions.map((transition) => (
								<div key={transition.name} className="bg-white dark:bg-neutral-800 rounded-lg p-6">
									<div className="mb-4 text-text-medium dark:text-neutral-400 text-sm">{transition.name}</div>
									<div className="relative h-16 bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden">
										<div className={`${transition.class} h-16 w-16 bg-primary rounded-lg hover:translate-x-60`}>
											<div className="h-full flex items-center justify-center text-white text-sm">Hover</div>
										</div>
									</div>
									<div className="mt-4 text-sm text-text-medium dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 p-3 rounded">
										<code>{transition.class}</code>
										<p className="mt-2">CSS Variable: {transition.variable}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{activeTab === "buttons" && (
					<div>
						<h2 className="text-2xl font-serif font-bold text-primary-dark dark:text-primary-light mb-6">Buttons</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
							{buttons.map((button) => (
								<div key={button.name} className="bg-white dark:bg-neutral-800 rounded-lg p-6">
									<div className="mb-4 text-text-medium dark:text-neutral-400 text-sm">{button.name}</div>
									<button className={button.class}>Button Example</button>
									<div className="mt-4 text-sm text-text-medium dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 p-3 rounded">
										<code>{button.class}</code>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{activeTab === "badges" && (
					<div>
						<h2 className="text-2xl font-serif font-bold text-primary-dark dark:text-primary-light mb-6">Badges</h2>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
							{badges.map((badge) => (
								<div key={badge.name} className="bg-white dark:bg-neutral-800 rounded-lg p-6">
									<div className="mb-4 text-text-medium dark:text-neutral-400 text-sm">{badge.name}</div>
									<span className={badge.class}>Badge</span>
									<div className="mt-4 text-sm text-text-medium dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 p-3 rounded">
										<code>{badge.class}</code>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default DesignSystem;
