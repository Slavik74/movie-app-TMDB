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
        new ActorModel('Barbra', 'Streisand', 'April 24, 1942', 'https://m.media-amazon.com/images/M/MV5BMjMwOTQ3NTg1MF5BMl5BanBnXkFtZTcwMjc4MjQ4OA@@._V1_UY317_CR4,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000659/?ref_=nv_sr_srsg_4'),
        new ActorModel('Robert', 'Downey Jr.', 'April 4, 1965', 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000375/?ref_=nv_sr_srsg_0'),
        new ActorModel('Scarlett', 'Johansson', 'November 22, 1984', 'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0424060/?ref_=nm_mv_close'),
        new ActorModel('Keanu', 'Reeves', 'September 2, 1964', 'https://m.media-amazon.com/images/M/MV5BYTkzODI4MDMtNDNmZC00NDZlLWFmNTktNDRhOWE2YzhlZTQ2XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_UY317_CR19,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000206/?ref_=nv_sr_srsg_0'),
        new ActorModel('Bruce', 'Willis', 'March 19, 1955', 'https://m.media-amazon.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_UY317_CR27,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000246/?ref_=nmls_hd'),
        new ActorModel('Julia', 'Roberts', 'October 28, 1967', 'https://m.media-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000210/?ref_=nmls_hd'),
        new ActorModel('Sandra', 'Bullock', 'July 26, 1964', 'https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY317_CR1,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000113/?ref_=nmls_hd'),
        new ActorModel('Arnold', 'Schwarzenegger', 'July 30, 1947', 'https://m.media-amazon.com/images/M/MV5BMTI3MDc4NzUyMV5BMl5BanBnXkFtZTcwMTQyMTc5MQ@@._V1_UY317_CR19,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000216/?ref_=nv_sr_srsg_0'),
        new ActorModel('Cate', 'Blanchett', 'May 14, 1969', 'https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_UY317_CR3,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000949/?ref_=nv_sr_srsg_0'),
        new ActorModel('Johnny', 'Depp', ' June 9, 1963', 'https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY317_CR4,0,214,317_AL_.jpg', 'https://www.imdb.com/name/nm0000136/?ref_=nv_sr_srsg_3'),
        new ActorModel('Eddie', 'Murphy','April 3, 1961','https://m.media-amazon.com/images/M/MV5BMTc0NDQzODAwNF5BMl5BanBnXkFtZTYwMzUzNTk3._V1_UY317_CR6,0,214,317_AL_.jpg','https://www.imdb.com/name/nm0000552/?ref_=nv_sr_srsg_0'),
        new ActorModel('Jackie', 'Chan','April 7, 1954','https://m.media-amazon.com/images/M/MV5BMTk4MDM0MDUzM15BMl5BanBnXkFtZTcwOTI4MzU1Mw@@._V1_UY317_CR7,0,214,317_AL_.jpg','https://www.imdb.com/name/nm0000329/?ref_=nv_sr_srsg_0'),
        new ActorModel('Ian','McKellen','May 25, 1939','https://m.media-amazon.com/images/M/MV5BMTQ2MjgyNjk3MV5BMl5BanBnXkFtZTcwNTA3NTY5Mg@@._V1_UY317_CR10,0,214,317_AL_.jpg','https://www.imdb.com/name/nm0005212/')
    ]
    const [actors, setActors] = useState(actorsData);

    //Filter  
    const [filterText, setFilterText] = useState("");

    const handleFilter = event => {
        const filterText=event.target.value; 
        setFilterText(filterText); 
        filterAndSort(filterText, sortBy, sortType);        
    }   


    //Sort
    const [sortBy, setSortBy] = useState("");
    const [sortType, setsortType] = useState("Asc");    

    const handleSort = event => {
        const sortBy=event.target.value;   
        setSortBy(event.target.value);                
        filterAndSort(filterText, sortBy, sortType);        
    };

    const handleSortAsc = () => {
        const sortType = 'Asc'
        setsortType(sortType);                
        filterAndSort(filterText, sortBy, sortType);        
    };

    const handleSortDesc = () => {
        const sortType = 'Desc'
        setsortType(sortType);                
        filterAndSort(filterText, sortBy, sortType);
    };

    function filterAndSort(filterText, sortBy, sortType){
        const doFilter = filterText => actor =>
        !filterText || actor.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
        actor.lastName.toLowerCase().includes(filterText.toLowerCase()) ;

        const actors = actorsData.filter(doFilter(filterText));

        if (sortBy==="1"){            
            if (sortType==="Asc")
                actors.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
            else
                actors.sort((b, a) => (a.firstName > b.firstName) ? 1 : -1);
        } else if (sortBy==="2"){
            if (sortType==="Asc")
                actors.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
            else
                actors.sort((b, a) => (a.lastName > b.lastName) ? 1 : -1);
        } else if (sortBy==="3"){
            if (sortType==="Asc")
                actors.sort((a, b) => (Number(a.age()) - Number(b.age())));
            else
                actors.sort((b, a) => (Number(a.age()) - Number(b.age())));

        }

        setActors(actors);
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

                <MenuBar filterText={filterText} sortType={sortType} handleFilter={handleFilter} handleSortBy={handleSort} handleSortAsc={handleSortAsc} handleSortDesc={handleSortDesc}/>
                <div className="row">
                    {actorCards}
                </div>
            </div>
        </Container>
    );

}

export default ActoresPage;