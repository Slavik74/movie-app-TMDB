import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function HomePage(props) {
    return (
        <div>
            <Container>
                <h1 className="display-1">Movies App</h1>
                <p>Movies App!!</p>
                <Link className="btn btn-primary" to="/actors">See all actors</Link>
            </Container>
        </div>
    );
}

export default HomePage;