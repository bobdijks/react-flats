import React, { Component } from 'react';

import flats from '../data/flats';
import Flat from './flat';
import FlatList from './flat_list';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        flats: flats,
      }
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <FlatList flats={this.state.flats} />
        </div>
        <div className="right-scene">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
