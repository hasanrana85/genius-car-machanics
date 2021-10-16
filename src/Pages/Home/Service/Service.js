import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    // const {service} = props;
    const {name, Price, id, img, details} = service;
    return (
        <div className="service pb-3">
            <img style={{height:'300px', width:'100%'}} src={img} alt="" />
            <h2>{name}</h2>
            <p className="px-4">{details}</p>
            <h4>Price: {Price}</h4>
            <Link to={`/booking/${id}`}>
            <button className="btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;