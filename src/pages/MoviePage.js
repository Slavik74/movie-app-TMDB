
import React, { useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import configData from "../../package.json";//to hide TMDB API keys
import MovieCard from '../components/MovieCard.js';

function MoviePage(props) {

    const api_key = configData.tmdb_api_key //get TMDB API key from config file

    const [results, setResults] = useState([]);
    const [movies, setMovies] = useState([])

    function getMovies(tmdbId) {

        // What are the highest rated movies that actor has been in?
            const movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&&with_cast=${tmdbId}&sort_by=vote_average.desc`;
            axios.get(movieURL).then(response => {
                setResults(response.data.results)
            });
    }


    return (
        <div className="p-movies">
            <Container>
                <Row>
                    {movies.map(movie => <Col lg={3} md={6}><MovieCard movie={movie}/></Col>)}
                </Row>
            </Container>
        </div>

    );
}

export default MoviePage;