import React, { useState } from 'react';
import {Container } from "react-bootstrap";
import './ActoresPage.css';

import ActorCard from '../components/ActorCard';
import ActorModel from '../model/ActorModel';
import MenuBar from '../components/MenuBar';

function ActoresPage() {


    const actorsData = [
        new ActorModel('Clint', 'Eastwood', 'May 31, 1930', 'https://m.media-amazon.com/images/M/MV5BMTg3MDc0MjY0OV5BMl5BanBnXkFtZTcwNzU1MDAxOA@@._V1_UY317_CR10,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000142?ref_=nmls_hd'),
        new ActorModel('Jack', 'Nicholson', 'April 22, 1937', 'https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000197/?ref_=nmls_hd'),
        new ActorModel('Ingrid', 'Bergman', 'August 29, 1915', 'https://m.media-amazon.com/images/M/MV5BMTYzMTgzMTIwOV5BMl5BanBnXkFtZTYwNzI5MzI2._V1_UY317_CR20,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000006/?ref_=nmls_pst'),
        new ActorModel('Elizabeth', 'Taylor', 'February 27, 1932', 'https://m.media-amazon.com/images/M/MV5BMTQzMTc5MDg0OF5BMl5BanBnXkFtZTgwODE4NjMzNDE@._V1_UY317_CR21,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000072?ref_=nmls_hd'),
        new ActorModel('Robert', 'De Niro', 'August 17, 1943', 'https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY317_CR13,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000134/?ref_=nmls_hd'),
        new ActorModel('Robert', 'Downey Jr.', 'April 4, 1965', 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000375/?ref_=nv_sr_srsg_0'),
        new ActorModel('Scarlett', 'Johansson', 'November 22, 1984', 'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0424060/?ref_=nm_mv_close'),
        new ActorModel('Keanu', 'Reeves', 'September 2, 1964', 'https://m.media-amazon.com/images/M/MV5BYTkzODI4MDMtNDNmZC00NDZlLWFmNTktNDRhOWE2YzhlZTQ2XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_UY317_CR19,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000206/?ref_=nv_sr_srsg_0'),
        new ActorModel('Bruce', 'Willis', 'March 19, 1955', 'https://m.media-amazon.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_UY317_CR27,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000246/?ref_=nmls_hd'),
        new ActorModel('Julia', 'Roberts', 'October 28, 1967', 'https://m.media-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000210/?ref_=nmls_hd'),
        new ActorModel('Sandra', 'Bullock', 'July 26, 1964', 'https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY317_CR1,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000113/?ref_=nmls_hd'),
  ]
    const [actors, setActors] = useState(actorsData);

    //Filter  
    const [filterText, setFilterText] = useState("");

    const handleFilter = event => {
        const filterText=event.target.value; 
        const doFilter = filterText => actor =>
        !filterText || actor.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
        actor.lastName.toLowerCase().includes(filterText.toLowerCase()) ;

        setFilterText(filterText); 
        setActors(actorsData.filter(doFilter(filterText)));
    }   



    const actorCards = actors.map((actor, index) => <ActorCard key={'act'+index }
                                                        firstName = {actor.firstName} 
                                                        lastName = {actor.lastName}
                                                        age = {actor.age()}   
                                                        image = {actor.image} 
                                                        imdb = {actor.IMDBLink}/>)

    //////////////

    return (
        <Container className="p-movie">
            <div className="container">
                <header>
                    <span className="header-text">Actors</span>               
                </header>
                <MenuBar filterText={filterText} handleFilter={handleFilter} />
                <div className="row">
                    {actorCards}
                </div>
            </div>
        </Container>
    );

}
export default ActoresPage;