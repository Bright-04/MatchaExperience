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
	const baseStyles = `
    overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700
    ${hoverable ? "transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md" : ""}
    ${onClick ? "cursor-pointer" : ""}
  `;

	// Simplified, vintage-inspired variant styles
	const variantStyles = {
		default: "bg-background",
		featured: "bg-primary/5 dark:bg-primary-dark/10",
		simple: "bg-neutral-50 dark:bg-neutral-900",
	};

	// Combine all styles
	const cardStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
	return (
		<div className={cardStyles} onClick={onClick} style={style}>
			{image && (
				<div className="relative h-64 w-full overflow-hidden">
					<Image
						src={image.src}
						alt={image.alt}
						fill
						style={{ objectFit: "cover" }}
						className={`transition-transform duration-300 ${hoverable ? "hover:scale-105" : ""} ${imageClassName}`}
					/>

					{badge && (
						<div className="absolute top-4 left-4">
							<Badge variant={badge.variant}>{badge.text}</Badge>
						</div>
					)}
				</div>
			)}

			<div className="p-6">
				{title && <h3 className="text-lg font-medium text-text-dark mb-2">{title}</h3>}

				{subtitle && <p className="text-sm text-text-medium mb-4">{subtitle}</p>}

				{children}
			</div>
		</div>
	);
};

export default Card;
