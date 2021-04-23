import React from 'react';
import { Card } from 'react-bootstrap';
import './MovieCard.css'

function MovieCard({ movie }) {
    return (
        <div className="c-movie">
            <Card>
                <Card.Img variant="top" src={movie.poster} />
                <Card.Body>
                    <Card.Title>{movie.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;