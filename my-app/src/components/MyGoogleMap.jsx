import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

function MyGoogleMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const center = useMemo(() => ({ lat: 49.83826, lng: 24.02324 }), []);
  const mallsMarkers = useMemo(() => ([
    {lat: 49.807368, lng: 23.978039},
    {lat: 49.773515, lng: 24.009919},
    {lat: 49.870072, lng: 24.023141},
    {lat: 49.849902, lng: 24.022299},
  ]), []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    // <div id="map" className="row map-block">
    //   <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=vickoria gardens&t=&z=12&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    //   {/* <!-- tyt mapa --> */}
    //   <button className="my-location">Моє місцезнаходження</button>
    // </div>
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container"
    >
      <MarkerF position={mallsMarkers[0]} />
      <MarkerF position={mallsMarkers[1]} />
      <MarkerF position={mallsMarkers[2]} />
      <MarkerF position={mallsMarkers[3]} />
    </GoogleMap>
  );
}

export default MyGoogleMap;
