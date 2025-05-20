"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Cart() {
	const { items, removeItem, updateQuantity, itemCount, subtotal, clearCart } = useCart();
	const [isOpen, setIsOpen] = useState(false);

	const toggleCart = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative">
			{/* Cart Button */}
			<button onClick={toggleCart} className="relative p-2 text-green-700 hover:text-green-900 focus:outline-none">
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
				<div className="absolute top-full right-0 mt-2 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50">
					<div className="p-4">
						<div className="flex justify-between items-center mb-4">
							<h3 className="text-lg font-medium text-gray-900">Shopping Cart</h3>
							<button onClick={toggleCart} className="text-gray-400 hover:text-gray-500">
								<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>

						{items.length === 0 ? (
							<div className="py-8 text-center">
								<svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
								<p className="mt-4 text-gray-500">Your cart is empty</p>
								<Link href="/products" className="mt-4 inline-block text-sm text-green-600 hover:text-green-800" onClick={() => setIsOpen(false)}>
									Continue Shopping
								</Link>
							</div>
						) : (
							<>
								<div className="max-h-64 overflow-y-auto">
									{items.map((item) => (
										<div key={item.id} className="flex py-4 border-b border-gray-200">
											<div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
												<div className="relative h-full w-full">
													<Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} />
												</div>
											</div>

											<div className="ml-4 flex flex-1 flex-col">
												<div>
													<div className="flex justify-between text-base font-medium text-gray-900">
														<h3>
															<Link href={`/products/${item.id}`} onClick={() => setIsOpen(false)}>
																{item.name}
															</Link>
														</h3>
														<p className="ml-4">{item.price}</p>
													</div>
												</div>

												<div className="flex flex-1 items-end justify-between text-sm">
													<div className="flex items-center">
														<button type="button" className="text-gray-400 hover:text-gray-500" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
															<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
															</svg>
														</button>

														<span className="mx-2 text-gray-700">{item.quantity}</span>

														<button type="button" className="text-gray-400 hover:text-gray-500" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
															<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
															</svg>
														</button>
													</div>

													<div>
														<button type="button" className="text-red-500 hover:text-red-700" onClick={() => removeItem(item.id)}>
															Remove
														</button>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>

								<div className="border-t border-gray-200 py-4">
									<div className="flex justify-between text-base font-medium text-gray-900 mb-4">
										<p>Subtotal</p>
										<p>{subtotal}</p>
									</div>

									<div className="flex justify-between space-x-2">
										<button
											type="button"
											className="flex flex-1 items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white hover:bg-green-700"
											onClick={() => {
												alert("Checkout functionality would be implemented here");
												setIsOpen(false);
											}}
										>
											Checkout
										</button>

										<button
											type="button"
											className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
											onClick={clearCart}
										>
											Clear
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
