'use client';

import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Link from 'next/link';

// Define the props interface for the ThreeDCard component
interface ThreeDCardProps {
	title: string;
	description: string;
	imageUrl: string;
	href: string;
	width: number;
	height: number;
}

const ThreeDCard = ({
	title,
	description,
	imageUrl,
	href,
}: ThreeDCardProps) => {
	return (
		<CardContainer className="inter-var">
			<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
				<CardItem
					translateZ="50"
					className="text-xl font-bold text-neutral-600 dark:text-white"
				>
					{title}
				</CardItem>
				<CardItem
					as="p"
					translateZ="60"
					className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
				>
					{description}
				</CardItem>
				<CardItem translateZ="100" className="w-full mt-4">
					<div className="relative aspect-[1169/1801]">
						{' '}
						{/* Maintain aspect ratio */}
						<Image
							src={imageUrl}
							fill // Use fill instead of fixed dimensions
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-cover rounded-xl group-hover/card:shadow-xl"
							alt="thumbnail"
						/>
					</div>
				</CardItem>
				<div className="flex justify-between items-center mt-20">
					<CardItem
						translateZ={20}
						as={Link}
						href={href}
						target="__blank"
						className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
					>
						Try now →
					</CardItem>
					<CardItem
						translateZ={20}
						as="button"
						className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
					>
						Coming Soon
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
};

// Main component to display multiple cards
export default function ProductCard() {
	const cardsData = [
		{
			title: 'Chia Seeds',
			description: "Nutrient-rich seeds with omega-3s, fiber, and antioxidants to support heart health.",
			imageUrl: '/1.png',
			href: '#',
		},
		{
			title: 'Flax Seeds',
			description: 'High in fiber, omega-3s, and antioxidants to support digestive health.',
			imageUrl:
				'/2.png',
			href: '#',
		},
		{
			title: 'Quiona Seeds',
			description: 'Protein-packed seeds containing fiber and essential amino acids for balanced nutrition.',
			imageUrl:
				'/3.png',
			href: '#',
		},
		{
			title: 'Basil Seeds',
			description: 'Hydrating seeds aiding digestion, known for their cooling and soothing effects.',
			imageUrl:
				'/4.png',
			href: '#',
		},
        {
			title: 'Sesame Seeds',
			description: 'Nutty-flavored seeds rich in calcium, healthy fats, and antioxidants.',
			imageUrl:
				'/5.png',
			href: '#',
		},
	];

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-black py-12 px-4">
            <h2 className="text-6xl font-bold text-center text-neutral-900 dark:text-white">
                Our Products
            </h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{cardsData.map((card, index) => (
					<ThreeDCard
						key={index}
						title={card.title}
						description={card.description}
						imageUrl={card.imageUrl}
						href={card.href}
						width={0}
						height={0}
					/>
				))}
			</div>
		</div>
	);
}
