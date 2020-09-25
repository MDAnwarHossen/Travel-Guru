import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Button, Col, Row } from 'react-bootstrap';
import './Slider.css';
import { useHistory } from 'react-router-dom';

const Slider = (props) => {
    const history = useHistory();
    const {placeId, name, image, shortDescription, fullDescription} = props.place;
    const handleSelectedPlace=(placeId)=>{
        //console.log(placeId);
            history.push(`/destination/${placeId}`);
    }

    return (
        
        <Row className='d-flex align-items-center justify-content-center'>
            <Col md={6}>
                <div className ="mb-3 slider-text">
                    <h3>{name}</h3>
                    <p>{shortDescription}</p>
                    <Button onClick={()=>handleSelectedPlace(placeId)} variant="warning">Booking <FontAwesomeIcon icon={faArrowRight} /> </Button>
                    
                </div>
            </Col>
            <Col md={6}>
                <img className = "slider-image" src={image}  alt="First"/>
            </Col>
        </Row>
    );
};

export default Slider;