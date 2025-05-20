"use client";

import { createContext, useState, useEffect, useContext, ReactNode } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>("system");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// Get stored theme or default to system
		const storedTheme = localStorage.getItem("theme") as Theme | null;
		if (storedTheme) {
			setTheme(storedTheme);
		}
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;

		// Save theme preference
		localStorage.setItem("theme", theme);

		// Apply theme
		const root = window.document.documentElement;
		root.classList.remove("light", "dark");

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
			root.classList.add(systemTheme);
		} else {
			root.classList.add(theme);
		}
	}, [theme, mounted]);

	// Prevent flash of incorrect theme
	if (!mounted) {
		return null;
	}

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
