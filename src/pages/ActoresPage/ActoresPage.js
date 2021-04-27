//import axios from 'axios'
import React, { useState, useEffect } from 'react';
import './ActoresPage.css';

import ActorCard from './../../components/ActorCard/ActorCard';
import ActorModel from './../../model/ActorModel';
import actorsJson from './../../actors.json';
import ActorsMenuBar from './../../components/ActorsMenuBar/ActorsMenuBar';

function ActoresPage() {

    const [actors, setActors] = useState([]);

    // We want to fetch the data from JSON only once the compoenent is mounting
    useEffect(() => {
        setActors(actorsJson.map(actor => new ActorModel(actor.tmdbId, actor.name1, actor.name2, actor.birthdate, actor.img, actor.imdbLink)));
    }, []);

    //Filter  
    const [filterText, setFilterText] = useState("");

    const handleFilter = event => {
        const filterText=event.target.value; 
        setFilterText(filterText); 
    }   


    //Sort
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("Asc");    

    const handleSort = event => {
        setSortBy(event.target.value);                
    };

    const handleSortOrder = (sortOrder) => {
        setSortOrder(sortOrder);                
    };


    const doFilter = filterText => actor =>
    !filterText || actor.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
    actor.lastName.toLowerCase().includes(filterText.toLowerCase()) ;

    const actorsFiltered = actors.filter(doFilter(filterText));

    if (sortBy==="1"){            
        if (sortOrder==="Asc")
            actorsFiltered.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
        else
            actorsFiltered.sort((b, a) => (a.firstName > b.firstName) ? 1 : -1);
    } else if (sortBy==="2"){
        if (sortOrder==="Asc")
            actorsFiltered.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
        else
            actorsFiltered.sort((b, a) => (a.lastName > b.lastName) ? 1 : -1);
    } else if (sortBy==="3"){
        if (sortOrder==="Asc")
            actorsFiltered.sort((a, b) => (Number(a.age()) - Number(b.age())));
        else
            actorsFiltered.sort((b, a) => (Number(a.age()) - Number(b.age())));
    }

    const actorCards = actorsFiltered.map((actor, index) => <ActorCard key={'act'+index }
                                                        actorId = {actor.tmdbId}
                                                        firstName = {actor.firstName} 
                                                        lastName = {actor.lastName}
                                                        age = {actor.age()}   
                                                        image = {actor.image} 
                                                        imdburl = {actor.imdbLink} />)

    //////////////

    return (
        <div className="p-actor">
            <ActorsMenuBar filterText={filterText} sortOrder={sortOrder} handleFilter={handleFilter} handleSortBy={handleSort} handleSortOrder={handleSortOrder} />
            <div className="container">
                <div className="row">
                    {actorCards}
                </div>
            </div>
        </div>
    );

}

export default ActoresPage;