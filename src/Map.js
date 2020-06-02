import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import FaDotCircleO from 'react-icons/lib/fa/dot-circle-o';
import TiLocation from 'react-icons/lib/ti/location-outline.js'


const AnyReactComponent = ({ component }) => (
  <div style={{
    color: "red",
    //position: 'relative', color: 'black', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    { component }
  </div>
);

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 51.154499382, lng: -114.14249943},
    zoom: 9
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={51.154499382}
          lng={-114.14249943}
          component={<TiLocation size={75}/>}
        />
      </GoogleMapReact>
    );
  }
}


export {SimpleMap};