import { getLocations } from "../locations-utils";

export async function GET() {
	const locations = getLocations();
	return Response.json(locations);
}
