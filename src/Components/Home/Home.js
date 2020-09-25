import React, { useState } from 'react';
import FakePlace from '../../FakeData/FakePlace';
import {Button, Carousel, Jumbotron} from 'react-bootstrap';
import './Home.css';
import Slider from '../Slider/Slider';

const Home = () => {
    const [places, setPlaces] = useState(FakePlace);
    return (
        
            <Jumbotron className ="banner d-flex align-items-center text-center">

                <Carousel>
                    {places.map((place) => (
                    <Carousel.Item>
                        <Slider key={place.placeId} place={place}></Slider>
                    </Carousel.Item>
                    ))}
                    
                </Carousel>

                
            </Jumbotron>
            

            
          
       
    );
};

export default Home;