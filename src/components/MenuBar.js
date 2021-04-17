import React from 'react';
import { Navbar, Nav, InputGroup, FormControl } from "react-bootstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './MenuBar.css'

export default function MenuBar({filterText, handleFilter}) {
   
    const [dropDownValue, setDropDownValue] = React.useState("Select an item");
    const changeValue = text => setDropDownValue(text);

    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* Filter */}
                    <Nav className="search">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Search:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Search actor" aria-label="Filter" aria-describedby="basic-addon1"
                            value={filterText} onChange={handleFilter}  />
                        </InputGroup>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                   
        
        </div>
    );
};
