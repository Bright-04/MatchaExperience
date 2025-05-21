"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CartItem = {
	id: string;
	name: string;
	price: number;
	image: string;
	quantity: number;
};

type CartContextType = {
	items: CartItem[];
	addItem: (item: Omit<CartItem, "quantity">) => void;
	removeItem: (id: string) => void;
	updateQuantity: (id: string, quantity: number) => void;
	clearCart: () => void;
	itemCount: number;
	subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([]);
	const [loaded, setLoaded] = useState(false);

	// Load cart from localStorage on client-side
	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedCart = localStorage.getItem("matchaCart");
			if (storedCart) {
				try {
					setItems(JSON.parse(storedCart));
				} catch (error) {
					console.error("Failed to parse cart from localStorage:", error);
					setItems([]);
				}
			}
			setLoaded(true);
		}
	}, []);

	// Save cart to localStorage whenever it changes
	useEffect(() => {
		if (loaded) {
			localStorage.setItem("matchaCart", JSON.stringify(items));
		}
	}, [items, loaded]);

	// Calculate total items in cart
	const itemCount = items.reduce((count, item) => count + item.quantity, 0);

	// Calculate subtotal
	const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

	// Add item to cart
	const addItem = (newItem: Omit<CartItem, "quantity">) => {
		setItems((prevItems) => {
			const existingItemIndex = prevItems.findIndex((item) => item.id === newItem.id);

			if (existingItemIndex > -1) {
				// Item already exists, increment quantity
				const updatedItems = [...prevItems];
				updatedItems[existingItemIndex].quantity += 1;
				return updatedItems;
			} else {
				// Item doesn't exist, add it with quantity 1
				return [...prevItems, { ...newItem, quantity: 1 }];
			}
		});
	};

	// Remove item from cart
	const removeItem = (id: string) => {
		setItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	// Update item quantity
	const updateQuantity = (id: string, quantity: number) => {
		if (quantity < 1) return;

		setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
	};

	// Clear cart
	const clearCart = () => {
		setItems([]);
	};

	const value = {
		items,
		addItem,
		removeItem,
		updateQuantity,
		clearCart,
		itemCount,
		subtotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
