import { Bone, Brain, Cloud, Leaf,  ShieldPlus, Snowflake } from 'lucide-react';

const features = [
	{
		name: 'Chia Seeds',
		description:
			'Nutrient-rich seeds with omega-3s, fiber, and antioxidants to support heart health.',
		icon: Brain,
	},
	{
		name: 'Quinoa Seeds',
		description:
			'Protein-packed seeds containing fiber and essential amino acids for balanced nutrition.',
		icon: ShieldPlus,
	},
	{
		name: 'Flax Seeds',
		description:
			'High-fiber, omega-3-rich seeds promoting heart health and digestive regularity.',
		icon: Cloud,
	},
	{
		name: 'Basil Seeds',
		description:
			'Hydrating seeds aiding digestion, known for their cooling and soothing effects.',
		icon: Snowflake,
	},
	{
		name: 'Sesame Seeds',
		description:
			'Nutty-flavored seeds rich in calcium, healthy fats, and antioxidants.',
		icon: Bone,
	},
    {
		name: 'Ashwagandha Powder',
		description:
			'Adaptogenic herb powder helping reduce stress and promote vitality naturally.',
		icon: Leaf,
	}

];

export default function Products() {
	return (
		<section className="container space-y-16 py-24 md:py-32">
			<div className="mx-auto max-w-[58rem] text-center">
				<h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
					What we sell
				</h2>
				<p className="mt-4 text-muted-foreground sm:text-lg">
					100% Natural: No additives, preservatives, or artificial colors. Pure and natural, seeds and powders.
				</p>
			</div>
			<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
				{features.map((feature) => (
					<div
						key={feature.name}
						className="relative overflow-hidden rounded-lg border bg-background p-8"
					>
						<div className="flex items-center gap-4">
							<feature.icon className="h-8 w-8" />
							<h3 className="font-bold">{feature.name}</h3>
						</div>
						<p className="mt-2 text-muted-foreground">
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
