import React from 'react';
import { Navbar, Nav, InputGroup, FormControl, FormGroup } from "react-bootstrap";
import './MenuBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuBar({filterText, sortType, handleFilter, handleSortBy, handleSortAsc, handleSortDesc}) {
    
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="primary">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    {/* Filter */}
                    <Nav className="search">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Search:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Search actor" aria-label="Filter"value={filterText} onChange={handleFilter}  />
                        </InputGroup>
                    </Nav>

                    {/* Sort */}
                    <Nav className="sort">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Sort:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="select" custom onChange={handleSortBy}>
                                    <option defaultValue="1">Select</option>
                                    <option value="1">First Name</option>
                                    <option value="2">Last Name</option>
                                    <option value="3">Age</option>
                            </FormControl>
                            <div className="arrows">
                                <FontAwesomeIcon style={{ cursor: "pointer" }} icon="long-arrow-alt-down" values={sortType} size="lg" color={sortType==='Asc'? '#d0cfca': '#0275df'}
                                    onClick={handleSortAsc} />
                                <FontAwesomeIcon style={{ cursor: "pointer" }} icon="long-arrow-alt-up" values={sortType} size="lg" color={sortType==='Desc'? '#d0cfca': '#0275df'}
                                    onClick={handleSortDesc}/>
                            </div>
                        </InputGroup>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            
            
            

        </div>
    );
};
