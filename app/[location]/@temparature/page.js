import NoLocationInfo from "@/components/NoLocationInfo";
import TemparatureComponent from "@/components/TemparatureComponent";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function Temparature({
	params: { location },
	searchParams: { latitude, longitude },
}) {
	const resolved = await getResolvedLatLong(location, latitude, longitude);

	if (resolved?.lat && resolved?.lon) {
		return <TemparatureComponent lat={resolved.lat} lon={resolved.lon} />;
	} else {
		return <NoLocationInfo />;
	}
}
