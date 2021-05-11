import React from 'react';

import './CardGamer.css'

const CardGamer = () => {
    return (
        <div className="card-gamer">
            <h1 className="card-gamer__title">Are you a gamer?</h1>
            <div className="card-gamer__desc">
                <div className="card-gamer__desc__img">
                    
                </div>
                <div className="card-gamer__desc__text">
                    banane banane banane <br/> 
                    banane banane banane <br/> 
                    banane banane banane <br/> 
                    banane banane banane
                </div>
            </div>
            {/*<div className="card-gamer__button">Get Started</div>*/}
        </div>
    );
}

export default CardGamer;