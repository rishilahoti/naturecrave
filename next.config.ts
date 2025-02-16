import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: ['images.unsplash.com'],
		// If using other image hosts, add their domains here too:
		// domains: ['images.unsplash.com', 'other-image-host.com'],
	},
};

export default nextConfig;
