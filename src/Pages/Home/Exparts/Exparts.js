import React from 'react';
import Expart from '../Expart/Expart';
import './Exparts.css';
import expert1 from '../../../images/machanic/mechanic-1.jpg';
import expert2 from '../../../images/machanic/mechanic-2.jpg';
import expert3 from '../../../images/machanic/mechanic-3.jpg';
import expert4 from '../../../images/machanic/mechanic-4.jpg';
import expert5 from '../../../images/machanic/mechanic-5.jpg';

const experts = [
    {
        image: expert1,
        name:'Andrew Smith',
        expertize: '-Engine Expert-'
    },{
        image: expert2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },{
        image: expert3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },{
        image: expert4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },{
        image: expert5,
        name: 'Kalam Hossen',
        expertize: '-Air Compressor Expert-'
    }
]

const Exparts = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-5 mb-3">Our Exparts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expart
                    key = {expert.name}
                    expert = {expert}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;