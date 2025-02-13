import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './map.css';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '12px'
};

const center = {
  lat: 9.931233, // Default latitude (San Francisco)
  lng: 76.267303  // Default longitude (San Francisco)
};

function Map() {
  return (
    <div className='map'>
      <LoadScript googleMapsApiKey="AIzaSyDHBnPpENayJCNrJ9ykf-VGjob5_gUbn8E">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
      </LoadScript>
    </div>
  );
}

export default Map;
