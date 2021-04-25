import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import axios from 'axios';
import configData from "../../../package.json";//to hide TMDB API keys
import MovieModel from './../../model/MovieModel';

function BootstrapSlider() {

    const [results, setresults] = useState([])
    const [movies, setmovies] = useState([])

    useEffect(() => {
        const api_key = configData.tmdb_api_key //get TMDB API key from config file
        const thdbUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
        axios.get(thdbUrl).then(response => {
            setresults(response.data.results)
        });

    }, [])


    useEffect(() => {

        setmovies(
            results.map(resItem => 
                new MovieModel(resItem.id,'',resItem.original_title,0,'',resItem.poster_path, resItem.overview,'')
            )
        )
        
    }, [results])

    return (
        <div className="c-carousel">
            <h2>Top rated movies</h2>      
            <Carousel fade >{
                movies.map((movie, index) => 
                    <Carousel.Item interval={1000} key={index}>
                    <img
                        className="d-block w-100"
                        src={movie.poster}
                        alt={movie.name}
                    />
                    <Carousel.Caption>
                        <h3>{movie.name}</h3>
                        <p>{movie.plot}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                )
            }    
            </Carousel>
        </div>
    )
}


export default BootstrapSlider;