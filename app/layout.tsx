import './globals.css';
import { Inter } from 'next/font/google';
import type React from 'react';
import type { Metadata } from 'next';
import MouseMoveEffect from '@/components/mouse-move-effect';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Nature Crave',
	description:
		'At Nature Crave we of er premium, natural products like chia, flax, and quinoa,etc.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.className} bg-background text-foreground antialiased`}
			>
				<MouseMoveEffect />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
