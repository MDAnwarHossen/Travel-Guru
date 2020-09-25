import React, { useContext } from 'react';
import './Hotels.css';
import FakePlace from '../../FakeData/FakePlace';
import FakeHotel from '../../FakeData/FakeHotel'


import { useParams } from 'react-router-dom';

const Hotels = () => {
  const {placeId} = useParams()
   

   const findPlace = FakePlace.find((place) => parseInt(place.placeId) === parseInt(placeId));
   console.log(findPlace);
   

   const hotelsFilter = FakeHotel.filter((hotel) => hotel.placeId === placeId);
   console.log(hotelsFilter);

  return (
    
    <div>
            <h1>Hotels page</h1>
    </div>

  );
};

export default Hotels;