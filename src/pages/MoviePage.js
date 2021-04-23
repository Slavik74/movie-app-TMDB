
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import configData from "../../package.json";//to hide TMDB API keys
import MovieCard from '../components/MovieCard.js';
import MoviesModel from '../model/MovieModel.js';

function MoviePage({actorId} ) {

    const api_key = configData.tmdb_api_key //get TMDB API key from config file

    const [results, setResults] = useState([]);
    const [movies, setMovies] = useState([])

    //`movie id https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&&with_cast=${actorId}&sort_by=vote_average.desc`
    // runtime `https://api.themoviedb.org/3/movie/277129?api_key=53d2ee2137cf3228aefae083c8158855&language=en-US`
    // stars `https://api.themoviedb.org/3/movie/684426/credits?api_key=53d2ee2137cf3228aefae083c8158855&language=en-US`
    // videos `https://api.themoviedb.org/3/movie/157336/videos?api_key=53d2ee2137cf3228aefae083c8158855`
    

    
    //get movies from TMDB api
    useEffect(async () => {
        const fetchData = async () => {
            const result = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&&with_cast=${actorId}&sort_by=vote_average.desc`);
            setResults(result.data.results);
          };       
          fetchData();
    }, [actorId])

    useEffect(() => {
        setMovies(results.map(movie => new MoviesModel(movie.id, movie.release_date, movie.title, 125, "director",movie.poster_path , movie.overview, ["Star1", "Star2", "Star3", "Star4"])))    
    }, [results])

    return (        
        <div className="p-movies">
            <Container>
                <Row>
                    {movies.map((movie, index) => <Col key={"col"+index} lg={12}><MovieCard movie={movie}/></Col>)}
                </Row>
            </Container>
        </div>

    );
}

export default MoviePage;