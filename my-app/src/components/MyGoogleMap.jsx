import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF, PolylineF } from "@react-google-maps/api";

function MyGoogleMap() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
	});

	const center = useMemo(() => ({ lat: 49.83826, lng: 24.02324 }), []);
	const mallsMarkers = useMemo(() => ([
		{ lat: 49.807368, lng: 23.978039 },
		{ lat: 49.773515, lng: 24.009919 },
		{ lat: 49.870072, lng: 24.023141 },
		{ lat: 49.849902, lng: 24.022299 },
	]), []);

	function haversine_distance(mk1, mk2) {
		var R = 3958.8; // Radius of the Earth in miles
		var rlat1 = mk1.lat * (Math.PI/180); // Convert degrees to radians
		var rlat2 = mk2.lat * (Math.PI/180); // Convert degrees to radians
		var difflat = rlat2-rlat1; // Radian difference (latitudes)
		var difflon = (mk2.lng-mk1.lng) * (Math.PI/180); // Radian difference (longitudes)

		var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
		return d;
	}

	if (!isLoaded) return <div>Loading...</div>;
	return (
		// <div id="map" className="row map-block">
		//   <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=vickoria gardens&t=&z=12&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
		//   {/* <!-- tyt mapa --> */}
		//   <button className="my-location">Моє місцезнаходження</button>
		// </div>
		<>
			<GoogleMap
				zoom={10}
				center={center}
				mapContainerClassName="map-container"
			>
				<MarkerF label="VICTORIA GARDENS" position={mallsMarkers[0]} />
				<MarkerF label="KING CROSS LEOPOLIS" position={mallsMarkers[1]} />
				<MarkerF label="SPARTAK" position={mallsMarkers[2]} />
				<MarkerF label="FORUM LVIV" position={mallsMarkers[3]} />
				<PolylineF draggable="true" path={[mallsMarkers[0], mallsMarkers[1]]} />
			</GoogleMap>
			<div>Distance between markers: {haversine_distance(mallsMarkers[0], mallsMarkers[1])}</div>
		</>
	);
}

export default MyGoogleMap;
