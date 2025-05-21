"use client";

import { ReactNode } from "react";

type BadgeVariant = "primary" | "secondary" | "accent" | "outline";

type BadgeProps = {
	children: ReactNode;
	variant?: BadgeVariant;
	className?: string;
};

const Badge = ({ children, variant = "primary", className = "" }: BadgeProps) => {
	const baseStyles = "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full";

	const variantStyles = {
		primary: "bg-primary/10 text-primary-dark dark:text-primary-light",
		secondary: "bg-secondary/10 text-secondary-dark dark:text-secondary-light",
		accent: "bg-accent/10 text-accent-dark dark:text-accent-light",
		outline: "border border-current text-primary-dark dark:text-primary-light",
	};

	const badgeStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

	return <span className={badgeStyles}>{children}</span>;
};

export default Badge;
