import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="border-t">
			<div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
				<div className="flex-1 space-y-4">
					<Link href="/" className="flex items-center space-x-2">
					<span className="font-bold">
						<Image
							src="/TM.png"
							alt="logo"
							width={150}
							height={0}
						/>
					</span>
				</Link>
					<p className="text-sm text-muted-foreground">
						At Nature Crave  we offer premium, natural products like chia, flax, and quinoa,etc.
					</p>
				</div>
				<div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
					<div className="space-y-4">
						<h3 className="text-sm font-medium">Company</h3>
						<ul className="space-y-3 text-sm">
							<li>
								<Link
									href="#about"
									className="text-muted-foreground transition-colors hover:text-primary"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/products"
									className="text-muted-foreground transition-colors hover:text-primary"
								>
									Products
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h3 className="text-sm font-medium">Connect</h3>
						<div className="flex space-x-4">
							<Link
								href="https://www.facebook.com/people/Nature-Crave/61565742117668/"
								target="_blank"
								className="text-muted-foreground transition-colors hover:text-primary"
							>
								<Facebook className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</Link>
							<Link
								href="https://x.com/CraveNature"
								target="_blank"
								className="text-muted-foreground transition-colors hover:text-primary"
							>
								<Twitter className="h-5 w-5" />
								<span className="sr-only">Twitter</span>
							</Link>
							<Link
								href="https://www.instagram.com/nature.crave"
								target="_blank"
								className="text-muted-foreground transition-colors hover:text-primary"
							>
								<Instagram className="h-5 w-5" />
								<span className="sr-only">Instagram</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="container border-t py-6">
				<p className="text-center text-sm text-muted-foreground">
					© {new Date().getFullYear()} <Link href="https://rishilahoti.works" target='_blank'>rishilahoti.works</Link>, Inc. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
