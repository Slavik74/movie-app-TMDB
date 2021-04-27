import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './MovieCard.css'

function MovieCard({ movie }) {
    //if (!movie) return '';
    return (
        <div className="c-movie">
            <Card bg="secondary" text='white'>
                <div className="card-horizontal">
                {movie.poster?<Card.Img variant="top" src={movie.poster} />:null}
                <Card.Body>
                    <Card.Title>{`${movie.name} (${movie.release_year()}) `}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="secondary">
                                <span className="card-label">Length:</span>{movie.length+" minutes"}
                        </ListGroup.Item>
                        <ListGroup.Item variant="secondary">
                            <span className="card-label">Director:</span>{movie.director}</ListGroup.Item>
                        <ListGroup.Item variant="secondary">
                            <span className="card-label">Main stars:</span>{movie.stars}</ListGroup.Item>
                        <ListGroup.Item variant="secondary">
                            <span className="card-label">Overview:</span>
                            <span>{movie.plot}</span>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                </div>
            </Card>
        </div>
    );
}

export default MovieCard;