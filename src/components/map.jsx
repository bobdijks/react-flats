import React from "react";
import GoogleMapReact from 'google-map-react';

// flats props const {lat, lng} = this.props

const AnyReactComponent = ({ text }) => <div>{text}</div>;
// const { lat, lng } = this.props;

export default function SimpleMap(props) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const { lat, lng } = props;

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCZmo-eaKcOMys0DSatSHxDOTUJkyNHeus" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={lat}
          lng={lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
