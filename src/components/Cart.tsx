"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const formatPrice = (price: number): string => {
	return price.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
};

export default function Cart() {
	const { items, removeItem, updateQuantity, itemCount, subtotal, clearCart } = useCart();
	const [isOpen, setIsOpen] = useState(false);

	const toggleCart = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative">
			{/* Cart Button */}
			<button onClick={toggleCart} className="relative p-2 text-green-700 hover:text-green-900 focus:outline-none" aria-label="Shopping cart">
				<svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>

				{itemCount > 0 && <span className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{itemCount}</span>}
			</button>

			{/* Cart Dropdown */}
			{isOpen && (
				<div className="absolute top-full right-0 mt-2 w-80 md:w-96 bg-white dark:bg-neutral-800 rounded-lg shadow-xl z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
					<div className="p-4">
						<div className="flex justify-between items-center mb-4">
							<h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Shopping Cart</h3>
							<button onClick={toggleCart} className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200" aria-label="Close cart">
								<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>

						{items.length === 0 ? (
							<div className="py-8 text-center">
								<p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
							</div>
						) : (
							<>
								<div className="mt-8">
									{items.map((item) => (
										<div key={item.id} className="flex items-center justify-between py-4 border-b dark:border-gray-700">
											<div className="flex items-center">
												<Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md" />
												<div className="ml-4">
													<h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.name}</h4>
													<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{formatPrice(item.price)}</p>
												</div>
											</div>
											<div className="flex items-center">
												<div className="flex items-center border rounded-md">
													<button
														onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
														className="px-2 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
														aria-label="Decrease quantity"
													>
														-
													</button>
													<span className="px-2 py-1 text-gray-900 dark:text-gray-100">{item.quantity}</span>
													<button
														onClick={() => updateQuantity(item.id, item.quantity + 1)}
														className="px-2 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
														aria-label="Increase quantity"
													>
														+
													</button>
												</div>
												<button onClick={() => removeItem(item.id)} className="ml-4 text-red-500 hover:text-red-600" aria-label={`Remove ${item.name} from cart`}>
													<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
														/>
													</svg>
												</button>
											</div>
										</div>
									))}
								</div>
								<div className="mt-4">
									<div className="flex justify-between text-base font-medium text-gray-900 dark:text-gray-100">
										<p>Subtotal</p>
										<p>{formatPrice(subtotal)}</p>
									</div>
									<p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Shipping and taxes calculated at checkout.</p>
									<div className="mt-6">
										<Link
											href="/checkout"
											className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark"
										>
											Checkout
										</Link>
									</div>
									<div className="mt-2">
										<button
											onClick={() => {
												clearCart();
												setIsOpen(false);
											}}
											className="flex justify-center items-center w-full px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
										>
											Clear Cart
										</button>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
