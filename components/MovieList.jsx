import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const MovieList = () => {
    return (
        <Container> 
            <h1>Movie List</h1>
            <Row>
                <Col mad={4} className='my-3'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Subtitle>Release Date: 2021-01-15</Card.Subtitle>
                    </Card.Body>
                   </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MovieList;