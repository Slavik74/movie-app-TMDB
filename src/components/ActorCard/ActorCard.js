import React, {useState} from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import './ActorCard.css'


function ActorCard({actorId, firstName, lastName, age, image, deathDate}) {

    const [redirectTo, setRedirectTo] = useState();
    const history = useHistory()

    if (redirectTo !== undefined) {
        return <Redirect to={'/actors/' + redirectTo+'/movie/'}/>
    }

    const died = !!deathDate
    let deathYear=""
    if (died){
        const dDate=new Date(Date.parse(deathDate));
        deathYear=dDate.getUTCFullYear();
    }
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 card-box">
            <div className="card"> 
                <div className="card-header">
                    <h5>
                        <Link onClick={() =>history.push('/actors/' + actorId+'/movie/')}>{firstName  + ' ' + lastName}</Link>
                    </h5>
                </div>
                <div className="img-box">
                    <img className="card-img" src={image} />
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span>Age:&nbsp;</span>{age}&nbsp;{died?"(Died, "+deathYear+")" : ""}</li>
                </ul>
            </div>
        </div>

    )
}

export default ActorCard;
