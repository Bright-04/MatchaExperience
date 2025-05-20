export default function Loading() {
	return (
		<div className="flex flex-col justify-center items-center h-[80vh] bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
			<div className="relative">
				<div className="h-20 w-20 rounded-full border-t-4 border-b-4 border-green-500 animate-spin"></div>
				<div className="absolute top-0 left-0 h-20 w-20 rounded-full border-r-4 border-l-4 border-accent-light animate-spin animation-delay-300 animate-[spin_1.2s_linear_infinite]"></div>
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="h-10 w-10 bg-white dark:bg-green-800 rounded-full shadow-lg"></div>
				</div>
			</div>
			<div className="mt-8 text-xl font-serif text-green-700 dark:text-green-300 animate-pulse">Preparing your matcha experience...</div>
			<span className="sr-only">Loading...</span>
		</div>
	);
}
