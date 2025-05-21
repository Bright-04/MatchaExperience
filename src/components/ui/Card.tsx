"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Badge from "./Badge";

type CardVariant = "default" | "featured" | "simple";

type CardProps = {
	children: ReactNode;
	title?: string;
	subtitle?: string;
	image?: {
		src: string;
		alt: string;
	};
	badge?: {
		text: string;
		variant?: "primary" | "secondary" | "accent" | "outline";
	};
	variant?: CardVariant;
	className?: string;
	imageClassName?: string;
	onClick?: () => void;
	hoverable?: boolean;
	style?: React.CSSProperties;
};

const Card = ({ children, title, subtitle, image, badge, variant = "default", className = "", imageClassName = "", onClick, hoverable = true, style }: CardProps) => {
	// Base styles shared by all variants
	const baseStyles = `
    overflow-hidden rounded-xl 
    ${hoverable ? "transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl" : ""}
    ${onClick ? "cursor-pointer" : ""}
  `;

	// Variant-specific styles
	const variantStyles = {
		default: "bg-gradient-to-br from-primary-light/5 to-primary-light/20 dark:from-primary-dark/40 dark:to-primary-dark/20 shadow-lg",
		featured: "bg-gradient-to-br from-primary-light/10 to-accent-light/20 dark:from-primary-dark/50 dark:to-accent-dark/30 shadow-xl",
		simple: "bg-white dark:bg-neutral-800 shadow-md",
	};

	// Combine all styles
	const cardStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
	return (
		<div className={cardStyles} onClick={onClick} style={style}>
			{image && (
				<div className="relative h-72 w-full overflow-hidden">
					<Image src={image.src} alt={image.alt} fill style={{ objectFit: "cover" }} className={`group-hover:scale-105 transition-transform duration-500 ${imageClassName}`} />

					{badge && (
						<div className="absolute top-4 left-4">
							<Badge variant={badge.variant || "primary"}>{badge.text}</Badge>
						</div>
					)}
				</div>
			)}

			<div className="p-6 sm:p-8">
				{title && <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-2 font-serif">{title}</h3>}

				{subtitle && <p className="text-primary-dark/80 dark:text-primary-light/80 mb-4">{subtitle}</p>}

				{children}
			</div>
		</div>
	);
};

export default Card;
