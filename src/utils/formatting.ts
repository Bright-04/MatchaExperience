/**
 * Format price with currency symbol
 */
export function formatPrice(price: number | string, currency: string = "USD"): string {
	const numericPrice = typeof price === "string" ? parseFloat(price.replace(/[^0-9.-]+/g, "")) : price;

	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
	}).format(numericPrice);
}

/**
 * Calculate grade level of matcha (1-10 scale)
 */
export function calculateGradeLevel(characteristics: {
	color?: number; // 1-10
	aroma?: number; // 1-10
	umami?: number; // 1-10
	smoothness?: number; // 1-10
	sweetness?: number; // 1-10
}): number {
	const { color = 0, aroma = 0, umami = 0, smoothness = 0, sweetness = 0 } = characteristics;
	const total = color + aroma + umami + smoothness + sweetness;
	const count = Object.values(characteristics).filter(Boolean).length;

	if (count === 0) return 0;

	const average = total / count;
	return Math.round(average);
}

/**
 * Get text description for matcha grade
 */
export function getGradeDescription(level: number): string {
	if (level >= 9) return "Ceremonial Grade - Premium";
	if (level >= 7) return "Ceremonial Grade";
	if (level >= 5) return "Premium Culinary Grade";
	if (level >= 3) return "Culinary Grade";
	return "Basic Grade";
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number = 100): string {
	if (text.length <= maxLength) return text;
	return text.slice(0, maxLength) + "...";
}

/**
 * Format a date string to a more readable format
 * @param dateString - ISO date string (YYYY-MM-DD)
 * @returns Formatted date string (e.g., "May 1, 2025")
 */
export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
