import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center space-x-2">
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
				<nav className="flex flex-1 items-center space-x-4 text-sm font-medium">
					<Link
						href="/products"
						className="transition-colors hover:text-primary"
					>
						Products
					</Link>
					<Link
						href="/#about"
						className="transition-colors hover:text-primary"
					>
						About
					</Link>
				</nav>
				<div className="flex items-center space-x-4">
					<Link href="/contact">
						<Button size="sm">Contact</Button>
					</Link>
				</div>
			</div>
		</header>
	);
}
