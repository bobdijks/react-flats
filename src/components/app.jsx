import React, { Component } from 'react';

import flats from '../data/flats';
import Flat from './flat';
import FlatList from './flat_list';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats,
      selectedFlat: {},
    };
  }

  handleFlatClick = (flat) => {
    this.setState({ selectedFlat: flat, flats: this.state.flats });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <FlatList flats={this.state.flats} onClick={this.handleFlatClick} />
        </div>
        <div className="right-scene">
          <Map lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
        </div>
      </div>
    );
  }
}

export default App;
