import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function MyGoogleMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const center = useMemo(() => ({ lat: 49.83826, lng: 24.02324 }), []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    // <div id="map" className="row map-block">
    //   <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=vickoria gardens&t=&z=12&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    //   {/* <!-- tyt mapa --> */}
    //   <button className="my-location">Моє місцезнаходження</button>
    // </div>
    <GoogleMap
      zoom={11}
      center={center}
      mapContainerClassName="map-container"
    >
      <Marker position={center}/>
    </GoogleMap>
  );
}

export default MyGoogleMap;
