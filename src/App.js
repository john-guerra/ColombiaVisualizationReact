import React, { Component } from 'react';


import ColombiaMap from "./ColombiaMap.jsx";

class App extends Component {
  render() {

    return (
      <div className="App">
        <h2>Map of Colombia</h2>
        <ColombiaMap
          width="600"
          height="600"
          data={{RISARALDA:10, CALDAS:12}}
        ></ColombiaMap>

      </div>
    );
  }
}

export default App;
