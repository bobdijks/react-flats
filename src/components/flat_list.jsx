import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat) => {
        return <Flat
          key={flat.id}
          id={flat.id}
          name={flat.name}
          image={flat.imageUrl}
          price={flat.price}
          lat={flat.lat}
          lng={flat.lng}
          onClick={() => props.onClick(flat)}
        />;
      })}
    </div>
  );
};

export default FlatList;
