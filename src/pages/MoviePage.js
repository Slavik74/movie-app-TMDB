
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import configData from "../../package.json";//to hide TMDB API keys
import MovieCard from '../components/MovieCard.js';
import MoviesModel from '../model/MovieModel.js';
import { useParams } from 'react-router-dom';

function MoviePage() {
    const api_key = configData.tmdb_api_key //get TMDB API key from config file
    const [movies, setMovies] = useState([])

    const {actorId} =  useParams();

    //`movie id https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&&with_cast=${actorId}&sort_by=vote_average.desc`
    // runtime `https://api.themoviedb.org/3/movie/277129?api_key=53d2ee2137cf3228aefae083c8158855&language=en-US`
    // stars `https://api.themoviedb.org/3/movie/684426/credits?api_key=53d2ee2137cf3228aefae083c8158855&language=en-US`
    // videos `https://api.themoviedb.org/3/movie/157336/videos?api_key=53d2ee2137cf3228aefae083c8158855`
      
    useEffect(() => {


            const getMovies = async ()=> {
                try {
                    const moviesData1 = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_cast=${actorId}&sort_by=vote_average.desc`);
                    const moviesData2 = await Promise.all(moviesData1.data.results.map(({ id }) => {
                        return axios.all([
                            axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`),
                            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
                          ])
                    }));
                    const allData = await Promise.all([moviesData1, moviesData2]);                

                    const moviesId = allData[0].data.results
                    const moviesData = allData[1]

                    console.log(moviesData[0][1]);

                    const setData = async () => {
                        setMovies(moviesId.map((movie, index) => 
                            new MoviesModel(
                                movie.id,
                                movie.release_date,
                                movie.title,
                                moviesData[index][1].data.runtime, 
                                moviesData[index][0].data.crew.map(item =>                             
                                    item.job==="Director"?
                                      item.name : ''
                                ),
                                movie.poster_path , 
                                movie.overview, 
                                moviesData[index][0].data.cast.slice(0, 10).map(item =>                             
                                    item.name+', '
                                )
                            )
                        
                        ))    
    
                    }
                    setData();

                } catch (err) {
                    console.log(err.stack);
                }
            };
            getMovies();


    }, [actorId])



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