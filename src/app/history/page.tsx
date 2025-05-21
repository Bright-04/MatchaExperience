import Image from "next/image";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function History() {
	return (
		<div className="flex flex-col items-center">
			{/* Hero Section */}
			<div className="hero w-full py-16 px-4 sm:px-6 lg:px-8 text-center">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4 font-serif animate-slide-up">The Rich History of Matcha</h1>
					<p className="text-xl text-primary-dark/80 dark:text-primary-light/80 mb-8 max-w-3xl mx-auto animate-slide-up animate-stagger-delay-1">
						From ancient Chinese traditions to Japanese tea ceremonies, discover the fascinating journey of matcha through the centuries
					</p>
				</div>
			</div>{" "}
			{/* Timeline Section */}
			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d2321]">
				<div className="max-w-4xl mx-auto">
					<div className="border-l-4 border-primary ml-6">
						{/* Timeline Item 1 */}
						<div className="relative mb-16 animate-slide-in">
							<div className="absolute -left-9 mt-2 w-14 h-14 rounded-full bg-primary-light/20 dark:bg-primary/20 border-4 border-primary flex items-center justify-center shadow-md">
								<span className="text-primary-dark dark:text-primary-light font-bold">700</span>
							</div>
							<div className="ml-12">
								<Card variant="simple" title="Origins in Tang Dynasty China" badge={{ text: "700 CE", variant: "primary" }}>
									<p className="text-primary-dark/80 dark:text-primary-light/80 mb-4">
										The earliest form of powdered tea emerged during China&apos;s Tang Dynasty. Tea leaves were steamed, molded into cakes, and then ground into powder before being
										whisked with hot water.
									</p>
									<div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
										<Image
											src="/images/bowl-of-matcha-horz.jpg"
											alt="Ancient tea ceremony"
											fill
											style={{ objectFit: "cover" }}
											className="transition-transform duration-500 hover:scale-105"
										/>
									</div>
								</Card>
							</div>
						</div>{" "}
						{/* Timeline Item 2 */}
						<div className="relative mb-16 animate-slide-in animate-stagger-delay-1">
							<div className="absolute -left-9 mt-2 w-14 h-14 rounded-full bg-primary-light/20 dark:bg-primary/20 border-4 border-primary flex items-center justify-center shadow-md">
								<span className="text-primary-dark dark:text-primary-light font-bold">1191</span>
							</div>
							<div className="ml-12">
								<Card variant="simple" title="Introduction to Japan" badge={{ text: "1191 CE", variant: "accent" }}>
									<p className="text-primary-dark/80 dark:text-primary-light/80 mb-4">
										Eisai, a Japanese Zen Buddhist monk, brought tea seeds and the method of preparing powdered tea from China to Japan. He planted the seeds on temple grounds and
										wrote &quot;Kissa Yōjōki&quot; (喫茶養生記), a treatise on tea drinking for health.
									</p>
									<div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
										<Image
											src="/images/cup-of-matcha-vertical.jpg"
											alt="Japanese tea ceremony"
											fill
											style={{ objectFit: "cover" }}
											className="transition-transform duration-500 hover:scale-105"
										/>
									</div>
								</Card>
							</div>
						</div>{" "}
						{/* Timeline Item 3 */}
						<div className="relative mb-16 animate-slide-in animate-stagger-delay-2">
							<div className="absolute -left-9 mt-2 w-14 h-14 rounded-full bg-primary-light/20 dark:bg-primary/20 border-4 border-primary flex items-center justify-center shadow-md">
								<span className="text-primary-dark dark:text-primary-light font-bold">1500s</span>
							</div>
							<div className="ml-12">
								<Card variant="simple" title="Sen no Rikyū and Tea Ceremony" badge={{ text: "1500s", variant: "primary" }}>
									<p className="text-primary-dark/80 dark:text-primary-light/80 mb-4">
										Sen no Rikyū perfected the Japanese tea ceremony (chanoyu), emphasizing simplicity, tranquility, and respect. The meticulous preparation and consumption of
										matcha became a spiritual practice embodying harmony, respect, purity, and tranquility.
									</p>
									<div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
										<Image
											src="/images/bowl-of-matcha-vertical.jpg"
											alt="Traditional tea ceremony"
											fill
											style={{ objectFit: "cover" }}
											className="transition-transform duration-500 hover:scale-105"
										/>
									</div>
								</Card>
							</div>
						</div>{" "}
						{/* Timeline Item 4 */}
						<div className="relative mb-16 animate-slide-in animate-stagger-delay-3">
							<div className="absolute -left-9 mt-2 w-14 h-14 rounded-full bg-primary-light/20 dark:bg-primary/20 border-4 border-primary flex items-center justify-center shadow-md">
								<span className="text-primary-dark dark:text-primary-light font-bold">1900s</span>
							</div>
							<div className="ml-12">
								<Card variant="simple" title="Modern Cultivation Methods" badge={{ text: "1900s", variant: "accent" }}>
									<p className="text-primary-dark/80 dark:text-primary-light/80 mb-4">
										The development of specialized shading techniques and stone-grinding methods refined matcha production. The Uji region in Kyoto became famous for producing the
										highest quality matcha using these traditional methods.
									</p>
									<div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
										<Image
											src="/images/matcha-latte.jpg"
											alt="Modern matcha preparation"
											fill
											style={{ objectFit: "cover" }}
											className="transition-transform duration-500 hover:scale-105"
										/>
									</div>
								</Card>
							</div>
						</div>{" "}
						{/* Timeline Item 5 */}
						<div className="relative animate-slide-in animate-stagger-delay-4">
							<div className="absolute -left-9 mt-2 w-14 h-14 rounded-full bg-primary-light/20 dark:bg-primary/20 border-4 border-primary flex items-center justify-center shadow-md">
								<span className="text-primary-dark dark:text-primary-light font-bold">2000s</span>
							</div>
							<div className="ml-12">
								<Card variant="featured" title="Global Popularity" badge={{ text: "2000s", variant: "secondary" }}>
									<p className="text-primary-dark/80 dark:text-primary-light/80 mb-4">
										Matcha gained international popularity for both its cultural significance and health benefits. It became a staple in cafes worldwide and an ingredient in
										various culinary creations, from lattes to desserts.
									</p>
									<div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
										<Image
											src="/images/london-fog.jpg"
											alt="Modern matcha drinks"
											fill
											style={{ objectFit: "cover" }}
											className="transition-transform duration-500 hover:scale-105"
										/>
									</div>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</div>{" "}
			{/* Cultural Significance Section */}
			<div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-primary-light/10 dark:bg-primary-dark/20">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center text-primary-dark dark:text-primary-light mb-12 font-serif animate-slide-up">The Cultural Significance of Matcha</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<Card variant="default" title="Spiritual Connections" className="animate-fade-in animate-stagger-delay-1">
							<p className="text-primary-dark/80 dark:text-primary-light/80 mb-4">
								Zen Buddhist monks used matcha as a meditation aid, appreciating its ability to provide calm alertness during long meditation sessions. The tea ceremony itself became a
								form of moving meditation, emphasizing mindfulness and presence.
							</p>
							<p className="text-primary-dark/80 dark:text-primary-light/80">
								The preparation and consumption of matcha embody the four principles of the Japanese tea ceremony: harmony (和, wa), respect (敬, kei), purity (清, sei), and
								tranquility (寂, jaku).
							</p>
						</Card>

						<Card variant="default" title="Artistic Influence" className="animate-fade-in animate-stagger-delay-2">
							<p className="text-primary-dark/80 dark:text-primary-light/80 mb-4">
								The aesthetics of the tea ceremony influenced Japanese art, architecture, garden design, and pottery. Many famous tea bowls (chawan) are considered masterpieces of
								ceramic art.
							</p>
							<p className="text-primary-dark/80 dark:text-primary-light/80">
								The concept of &quot;wabi-sabi&quot; (finding beauty in imperfection and transience) was central to the tea ceremony and remains a core principle in Japanese
								aesthetics.
							</p>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
