import React from 'react';

import './CardCompany.css'

const CardCompany = () => {
    return (
        <div className="card-company">
            <h1 className="card-company__title">Are you a company?</h1>
            <div className="card-company__desc">
                <div className="card-company__desc__text">
                    banane banane banane <br/> 
                    banane banane banane <br/> 
                    banane banane banane <br/> 
                    banane banane banane
                </div>
                <div className="card-company__desc__img">
                    
                </div>
            </div>
            {/*<div className="card-company__button">Get Started</div>*/}
        </div>
    );
}

export default CardCompany;