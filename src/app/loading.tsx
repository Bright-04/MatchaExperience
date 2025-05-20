export default function Loading() {
	return (
		<div className="flex justify-center items-center h-[70vh]">
			<div className="relative">
				<div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-green-700 animate-spin"></div>
				<div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-green-300 animate-spin animation-delay-500"></div>
			</div>
			<span className="sr-only">Loading...</span>
		</div>
	);
}
