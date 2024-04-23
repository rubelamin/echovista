import { getLocationByName } from "../../locations-utils";

export async function GET(request, { params }) {
	const location = getLocationByName(params?.name);

	return Response.json(location);
}
