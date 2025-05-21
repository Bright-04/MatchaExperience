"use client";

import { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "accent" | "outline" | "text";
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
	const baseStyles = `
    inline-flex items-center justify-center
    font-medium tracking-wide
    transition-all duration-300 ease-in-out
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"}
  `;

	const sizeStyles = {
		sm: "px-4 py-2 text-sm",
		md: "px-6 py-2.5 text-base",
		lg: "px-8 py-3 text-lg",
	};

	// Updated variant styles with more subtle, vintage-inspired design
	const variantStyles = {
		primary: "bg-primary text-text-light rounded-md hover:bg-primary-dark shadow-sm",
		secondary: "bg-background border-2 border-primary text-primary rounded-md hover:bg-primary/5",
		accent: "bg-accent text-text-light rounded-md hover:bg-accent-dark shadow-sm",
		outline: "bg-transparent border border-current text-primary hover:bg-primary/5 rounded-md",
		text: "bg-transparent text-primary hover:bg-primary/5 rounded-md px-2",
	};

	// Icon styles
	const iconStyles = icon ? `gap-2 ${iconPosition === "right" ? "flex-row-reverse" : "flex-row"}` : "";

	const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${iconStyles} ${className}`;

	const ButtonContent = () => (
		<>
			{icon}
			{children}
		</>
	);

	// Render as link or button
	if (href) {
		return (
			<Link href={href} className={buttonStyles}>
				<ButtonContent />
			</Link>
		);
	}

	return (
		<button type={type} className={buttonStyles} onClick={onClick} disabled={disabled}>
			<ButtonContent />
		</button>
	);
};

export default Button;
