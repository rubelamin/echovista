"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const Detecting = ({ setLoading }) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		setLoading(true);
		const params = new URLSearchParams(searchParams);
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				params.set("latitude", position.coords.latitude);
				params.set("longitude", position.coords.longitude);
				setLoading(false);
				router.push(`/current?${params.toString()}`);
			});
		}
	}, [pathname, router, searchParams]);

	return <Image src="/network.gif" width={200} height={200} alt="Network" />;
};

export default function LocationDetector() {
	const [loading, setLoading] = useState(false);

	return (
		<div className="flex justify-center items-center min-h-screen">
			{loading && (
				<Suspense fallback={<p>Detecting....</p>}>
					<div>
						<Detecting setLoading={setLoading} />
						<p>Loction Detecting.....</p>
					</div>
				</Suspense>
			)}
		</div>
	);
}
