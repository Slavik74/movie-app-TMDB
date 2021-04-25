import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BootstrapSlider from './../../components/Carousel/Carousel';
import './HomePage.css';

function HomePage(props) {


    return (       
        <div className="p-homepage">
            <Container>
                <BootstrapSlider />
            </Container>
        </div> 
    );

}

export default HomePage;