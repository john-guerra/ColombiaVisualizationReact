import React, { Component } from 'react';


import ColombiaMap from "./ColombiaMap.jsx";
import WorldMap from "./WorldMap.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Map of Colombia</h2>
        <ColombiaMap width="600" height="600"></ColombiaMap>
        <h2>World Map</h2>
        <WorldMap width="600" height="600"></WorldMap>

      </div>
    );
  }
}

export default App;
