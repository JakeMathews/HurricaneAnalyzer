import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import logo from './logo.svg';
import './App.css';

const API_KEY = "AIzaSyBgDzj_3vzVhvJhz7S2lwUbgoprsMQjmAw"

const location = {
  lat: 25.5418138,
  lng: -70.4575096
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {
  static defaultProps = {
    center: location,
    zoom: 6
  };

  render() {

    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
          language: 'en'
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={location.lat}
          lng={location.lng}
          text={'My side hoe Irma'}
        />
      </GoogleMapReact>
    );
  }
}

export default App;
