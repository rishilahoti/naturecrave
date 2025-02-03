import Image from 'next/image';

export default function One() {
	return (
		<div className="container">
			<Image src="/1.png" alt="first page" width={1920} height={1080} />
		</div>
	);
}
