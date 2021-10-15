import React from 'react';
import './Expart.css';

const Expart = ({expert}) => {
    const {name, image, expertize} = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h5 className="text-danger">{expertize}</h5>
        </div>
    );
};

export default Expart;