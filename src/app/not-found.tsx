import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-4 text-center">
			<Image src="/images/bowl-of-matcha-vertical.jpg" alt="Matcha bowl" width={150} height={150} className="rounded-full mb-8 border-4 border-green-200" />

			<h1 className="text-4xl font-bold text-green-800 mb-4">Oops! Page Not Found</h1>

			<p className="text-xl text-green-700 mb-8 max-w-md">We couldn't find the page you were looking for. Perhaps it's time to take a moment and enjoy a cup of matcha instead?</p>

			<div className="flex flex-col sm:flex-row gap-4">
				<Link href="/" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300">
					Return Home
				</Link>

				<Link href="/products" className="bg-transparent hover:bg-green-100 text-green-800 border border-green-700 px-6 py-3 rounded-lg text-lg font-medium transition duration-300">
					Explore Products
				</Link>
			</div>
		</div>
	);
}
