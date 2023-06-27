import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary btn-outline-dark">
            <Container>
                <Navbar.Brand href="/">Java CRUD</Navbar.Brand>
                <Button variant="outline-dark" href="/add">Add user</Button>
            </Container>
        </Navbar>
    );
}

export default NavBar;
