import { getWeatherData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

export default async function WeatherComponent({ lat, lon }) {
	const { main, description } = await getWeatherData(lat, lon);
	return (
		<Card>
			<h6 className="feature-name">Current Weather</h6>
			<div className="feature-main">
				<Image
					className="max-w-20"
					src="/assets/icons/icon_rain.png"
					alt="rain icon"
					width={100}
					height={100}
				/>
				<h3 className="feature-title">{main}</h3>
				<span className="feature-name">{description}</span>
			</div>
		</Card>
	);
}
