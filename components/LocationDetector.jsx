"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocationDetector() {
	const [loading, setLoading] = useState(false);

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

	return (
		<div className="flex justify-center items-center min-h-screen">
			{loading && (
				<div>
					<Image
						src="/network.gif"
						width={500}
						height={500}
						alt="Loading.."
						className="border rounded-md my-4"
					/>
					<p>Loction Detecting.....</p>
				</div>
			)}
		</div>
	);
}
