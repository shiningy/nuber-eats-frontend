import React, { useEffect } from "react";
import GoogleMapReact, { Position } from "google-map-react";

export const Dashboard = () => {
  const onWatchSuccess = (coord: Position) => {
    console.log(coord);
  };
  useEffect(() => {
    // navigator.geolocation.watchPosition(onWatchSuccess);
  }, []);
  return (
    <div>
      <div
        className="overflow-hidden"
        style={{ width: window.innerWidth, height: "95vh"}}
      >
        <GoogleMapReact
          defaultZoom={10}
          draggable={false}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          bootstrapURLKeys={{key: "AIzaSyAu5o500KGYEH4LnRdBh2dCbXxUNBs1Ic0"}}
        ></GoogleMapReact>
      </div>
    </div>
  )
};
