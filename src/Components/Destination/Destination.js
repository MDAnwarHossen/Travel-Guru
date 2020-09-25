import React, { useState } from 'react';
import { Col, FormGroup, Jumbotron } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import FakePlace from '../../FakeData/FakePlace';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Destination.css';
import { useForm } from 'react-hook-form';

const Destination = () => {
    const {placeId} = useParams();
    const destination = FakePlace.find((place)=>place.placeId === placeId);
    //console.log("id", destination );

const [from,setFrom]=useState(null)
const [to,setTo]=useState(null)

const { handleSubmit } = useForm();

const history = useHistory();
const onSubmit = () => {
   history.push(`/hotels/${placeId}`);
 };

    return (
        <Jumbotron className ="banner d-flex align-items-center text-center">
            <Col md={5}>
                <div className ="mb-3 slider-text">
                    <h3>{destination.name}</h3>
                    <p>{destination.fullDescription}</p>
                    
                </div>
            </Col>
            <Col md={7}>
                <form className="booking-form" style={
                                {padding: "80px", margin:"auto",
                                marginTop:"50px"}}
                                onSubmit={handleSubmit(onSubmit)}>

                        <FormGroup className="form-group" >
                            
                            <label htmlFor="origin">Origin</label>
                            <input value="Dhaka" id="origin" type="text" required/>

                            <label htmlFor="origin">Destination</label>
                            <input value ={destination.name} id="origin" type="text" required/>

                            <div className="datepicker-section" style={{display:"flex"}}>
                                <div style={{marginRight:"5px"}}>
                                    <p>From </p>
                                    <DatePicker selected={from} 
                                        className="date-picker"
                                        onChange={date => setFrom(date)} 
                                        required
                                        placeholderText="Start Date" />
                                </div>
                                <div>
                                    <p>To</p>
                                    <DatePicker selected={to}
                                        className="date-picker"
                                        onChange={date => setTo(date)}
                                        required
                                        placeholderText="End Date" />
                                </div>
                            </div>
                                <input type="submit" value="Start Booking"/>

                        </FormGroup>
                </form>
            </Col>

        </Jumbotron>
    );
};

export default Destination;