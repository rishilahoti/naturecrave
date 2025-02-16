import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
	return (
		<section className="border-t" id="about">
			<div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
				<h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
					Who are we!
				</h2>
				<p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
					At Nature Crave we offer premium, natural products like
					chia, flax, and quinoa,etc. We are dedicated to providing
					high-quality, nutrient-rich products that support healthy
					living and sustainability, ensuring freshness and purity in
					every pack.
				</p>
				<Link href="/contact">
					<Button size="lg" className="mt-4">
						Connect To Know More
					</Button>
				</Link>
			</div>
		</section>
	);
}
