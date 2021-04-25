import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import star from '../../assets/images/cluster-clip-art_1093814.png';

export default function MainNavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    src={star}//"https://purepng.com/public/uploads/large/purepng.com-hot-golden-starstargeometricallydecagonconcavestardomgold-1421526502376z4rrq.png"
                    height="40"
                    className="d-inline-block align-top"
                    alt="logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Actors">Actors</Nav.Link>
                        <Nav.Link href="#Contact" disabled>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
