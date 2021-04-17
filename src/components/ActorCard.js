import React from 'react';
import { Container } from 'react-bootstrap';
import './ActorCard.css'

function ActorCard({firstName, lastName, age, image, imdb}) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 card-box">
            <div className="my-card"> 
                <div className="card-header"><h5><a href={imdb} target="_blank">{firstName  + ' ' + lastName}</a></h5></div>            
                <div className="img-box">
                    <img className="my-card-img" src={image} />
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span>Age:&nbsp;</span>{age}</li>
                </ul>
            </div>
        </div>



    )
}

export default ActorCard;
