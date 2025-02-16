'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
	const controls = useAnimation();
	const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [controls, inView]);

	return (
		<section
			ref={ref}
			className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32"
			style={{
				backgroundImage: 'url(/background.png)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className="space-y-4">
				<motion.h1
					className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
					variants={{
						hidden: {
							opacity: 0,
							height: 0,
						},
						visible: {
							opacity: 1,
							height: 'auto',
							transition: {
								duration: 0.7,
								ease: 'easeOut',
							},
						},
					}}
					initial="hidden"
					animate={controls}
					exit="hidden"
				>
					Fuel Your Day,
					<br />
					The Natural Way
				</motion.h1>

				<p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
					We are dedicated to providing high-quality, nutrient-rich
					products that support healthy living and sustainability,
					ensuring freshness and purity in every pack.
				</p>
			</div>

			<div className="flex gap-4">
				<Link href="/products">
					<Button className="w-44">
						Explore Products
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</Link>
				<Link href="/contact">
					<Button variant="outline" className="w-44">
						Contact Us
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</Link>
			</div>
		</section>
	);
}
