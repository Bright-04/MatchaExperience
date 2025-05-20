"use client";

import { useState, useEffect } from "react";

type WindowSize = {
	width: number | undefined;
	height: number | undefined;
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
};

// Custom hook for responsive design
export function useWindowSize(): WindowSize {
	// Initialize with undefined to avoid hydration mismatch
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: undefined,
		height: undefined,
		isMobile: false,
		isTablet: false,
		isDesktop: false,
	});

	useEffect(() => {
		// Only execute in client-side
		if (typeof window !== "undefined") {
			// Handler to call on window resize
			const handleResize = () => {
				const width = window.innerWidth;
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
					isMobile: width < 640,
					isTablet: width >= 640 && width < 1024,
					isDesktop: width >= 1024,
				});
			};

			// Add event listener
			window.addEventListener("resize", handleResize);

			// Call handler right away to set initial size
			handleResize();

			// Remove event listener on cleanup
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []); // Empty array ensures effect runs only on mount and unmount

	return windowSize;
}
