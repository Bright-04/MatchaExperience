"use client";

import { ReactNode } from "react";

type BadgeVariant = "primary" | "secondary" | "accent" | "outline";
type BadgeSize = "sm" | "md";

type BadgeProps = {
	children: ReactNode;
	variant?: BadgeVariant;
	size?: BadgeSize;
	className?: string;
};

const Badge = ({ children, variant = "primary", size = "md", className = "" }: BadgeProps) => {
	// Base styles shared by all variants
	const baseStyles = "inline-flex items-center rounded-full font-medium";

	// Size-specific styles
	const sizeStyles = {
		sm: "px-2 py-0.5 text-xs",
		md: "px-3 py-1 text-sm",
	};

	// Variant-specific styles
	const variantStyles = {
		primary: "bg-primary text-white",
		secondary: "bg-secondary text-white",
		accent: "bg-accent text-white",
		outline: "bg-transparent border border-primary text-primary dark:border-primary-light dark:text-primary-light",
	};

	// Combine all styles
	const badgeStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

	return <span className={badgeStyles}>{children}</span>;
};

export default Badge;
