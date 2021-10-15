import React from 'react';
import './Service.css';

const Service = ({service}) => {
    // const {service} = props;
    const {name, Price, Time, img, details} = service;
    return (
        <div className="service">
            <img style={{height:'300px', width:'100%'}} src={img} alt="" />
            <h2>{name}</h2>
            <p className="px-4">{details}</p>
            <h4>Price: {Price}</h4>
        </div>
    );
};

export default Service;