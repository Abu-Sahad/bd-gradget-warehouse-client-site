import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Hunter Laptop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link href='inventory'>Inventory</Nav.Link>
                            <Nav.Link href='blog'>Blogs</Nav.Link>
                            <Nav.Link as={Link} to="myItems">My Items</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="manage-item">Manage Item</Nav.Link>
                            <Nav.Link as={Link} to="add-item">Add Item</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">

                                        Login
                                    </Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;