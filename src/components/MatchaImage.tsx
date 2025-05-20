import { useState } from "react";
import Image, { ImageProps } from "next/image";

type MatcaImageProps = Omit<ImageProps, "onError" | "onLoad"> & {
	fallbackSrc?: string;
};

export default function MatchaImage({ src, alt, fallbackSrc = "/images/matcha-pattern.png", className = "", ...props }: MatcaImageProps) {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	return (
		<div className={`relative ${className}`}>
			<Image
				src={error ? fallbackSrc : src}
				alt={alt}
				className={`transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
				onError={() => setError(true)}
				onLoad={() => setLoading(false)}
				{...props}
			/>
			{loading && (
				<div className="absolute inset-0 flex items-center justify-center bg-green-50">
					<div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
				</div>
			)}
		</div>
	);
}
