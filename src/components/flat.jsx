import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const {name, image, price, onClick} = this.props

    return (
      <div className="flat" onClick={onClick} style={{ color: '#fff', backgroundImage: `url('${image}')`}}>
        <div className="flat-price">${price}</div>
        <div className="flat-description">
          <h2>{name}</h2>
        </div>
        <a className="flat-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
