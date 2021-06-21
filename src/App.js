import React, { Component } from 'react';
import './App.css';

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoiY3l1ZTE5IiwiYSI6ImNrcTBiMWNlNDAzMzUycHA0ejFoYW9jOW0ifQ.LMzBp9YK9S7_a76qnm_8-g";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: -26,
      longitude: 28,
      zoom: 10
    }

    this.mapElement = React.createRef();
  }

  componentDidMount() {
    const {latitude, longitude, zoom} = this.state;

    this.map = new mapboxgl.Map({
      container: this.mapElement.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: zoom
    });
  }

  render() {
    return (
      <div>
        <div ref={this.mapElement} className="map"></div>
      </div>
    );
  }

}

export default App;
