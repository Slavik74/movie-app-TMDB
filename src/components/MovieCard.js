import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import './MovieCard.css'

function MovieCard({ movie }) {
    return (
        <div className="c-movie">
            <Card bg="secondary" text='white'>
                <div className="card-horizontal">
                <Card.Img variant="top" src={movie.poster} />
                <Card.Body>
                    <Card.Title>{movie.name}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="secondary">
                                <span className="card-label">Length:</span>{movie.length+" minutes"}
                        </ListGroup.Item>
                        <ListGroup.Item variant="secondary">
                            <span className="card-label">Director:</span>{movie.director}</ListGroup.Item>
                        <ListGroup.Item variant="secondary">
                            <span className="card-label">Main stars:</span>{movie.stars.join(", ")}</ListGroup.Item>
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