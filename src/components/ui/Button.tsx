"use client";

import { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "accent" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
	children: ReactNode;
	variant?: ButtonVariant;
	size?: ButtonSize;
	href?: string;
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	fullWidth?: boolean;
	icon?: ReactNode;
	iconPosition?: "left" | "right";
};

const Button = ({ children, variant = "primary", size = "md", href, className = "", onClick, disabled = false, type = "button", fullWidth = false, icon, iconPosition = "left" }: ButtonProps) => {
	// Base styles shared by all variants
	const baseStyles = `
    inline-flex items-center justify-center 
    font-medium rounded-lg transition-all
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `;

	// Size-specific styles
	const sizeStyles = {
		sm: "px-4 py-2 text-sm",
		md: "px-6 py-3 text-base",
		lg: "px-8 py-4 text-lg",
	};

	// Variant-specific styles
	const variantStyles = {
		primary: "bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg transform hover:-translate-y-1",
		secondary:
			"bg-white dark:bg-primary-dark/30 hover:bg-primary-light/10 dark:hover:bg-primary-dark/50 text-primary-dark dark:text-primary-light border border-primary/30 dark:border-primary/30 shadow-md hover:shadow-lg transform hover:-translate-y-1",
		accent: "bg-accent hover:bg-accent-dark text-white shadow-md hover:shadow-lg transform hover:-translate-y-1",
		outline: "bg-transparent border border-primary text-primary hover:bg-primary/10 dark:border-primary-light dark:text-primary-light shadow-sm hover:shadow-md",
	};

	// Combine all styles
	const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

	// Render as link or button
	if (href) {
		return (
			<Link href={href} className={buttonStyles} onClick={onClick}>
				{icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
				{children}
				{icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
			</Link>
		);
	}

	return (
		<button type={type} className={buttonStyles} onClick={onClick} disabled={disabled}>
			{icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
			{children}
			{icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
		</button>
	);
};

export default Button;
