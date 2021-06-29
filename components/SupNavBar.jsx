import {FormControl, Navbar, Nav, Form , Button, Container, Image} from 'react-bootstrap'
import styles from '../styles/SupNavBar.module.css'

export const SupNavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" >
            <Container className="mx-0 px-2">
                <Navbar.Brand href="#"><Image src="../img/popcorn.png" width="80"/> NextMovie</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex justify-content-end">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

