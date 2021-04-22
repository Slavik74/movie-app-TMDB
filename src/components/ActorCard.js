import React from 'react';
import './ActorCard.css'

function ActorCard({tmdbId, firstName, lastName, age, image, imdburl, getActorId}) {

    const handleClick = (e)=>{
        e.preventDefault();
        getActorId(tmdbId)
    }

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 card-box">
            <div className="card"> 
                <div className="card-header">
                    <h5><a href='#' onClick={handleClick} target="_self">{firstName  + ' ' + lastName}</a></h5>
                </div>
                <div className="img-box">
                    <img className="card-img" src={image} />
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span>Age:&nbsp;</span>{age}</li>
                </ul>
            </div>
        </div>



    )
}

export default ActorCard;
