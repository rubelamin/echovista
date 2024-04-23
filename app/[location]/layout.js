import Image from "next/image";

import "../globals.css";

export const metadata = {
	title: "EchoVista",
	description: "Powered By LWS",
};

export default function LocationLayout({
	children,
	aqi,
	wind,
	weather,
	temparature,
}) {
	return (
		<div className="wrapper">
			<Image
				src="/assets/images/background.png"
				width={712}
				height={1200}
				className="bg-img"
				alt="bg"
			/>
			<div className="overlay"></div>

			<main className="!z-50 w-full">
				<div className="container">
					<div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
						{children}
						{weather}
						{aqi}
						{wind}
						{temparature}
					</div>
				</div>
			</main>
		</div>
	);
}
