import React from "react";
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="marker">&nbsp;</div>;

const API_KEY = "AIzaSyCZmo-eaKcOMys0DSatSHxDOTUJkyNHeus";

export default function SimpleMap(props) {
  const defaultProps = {
    center: {
      lat: 19.43285080189049,
      lng: -99.1332231269288
    },
    zoom: 11
  };

  const { lat, lng } = props;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY, }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={[lat, lng]}
      >
        <Marker
          lat={lat}
          lng={lng}
        />
      </GoogleMapReact>
    </div>
  );
}
