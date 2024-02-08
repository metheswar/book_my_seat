import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import Context from '../Store/Context';

const MovieCard = ({ title, genre, release_year, director, rating, image_url , submitHandler}) => {
    const {setSelectedMovie} = useContext(Context)
    const bookHandler = ()=>{
        setSelectedMovie(title)
        submitHandler();
    }
    return (
        <Card style={{ width: '18rem', margin: '10px', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%', paddingTop: '150%', overflow: 'hidden' }}>
                <Card.Img variant="top" src={image_url} style={{ position: 'absolute', width: '100%', height: 'auto', top: 0, left: 0 }} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <strong>Genre:</strong> {genre}<br />
                    <strong>Release Year:</strong> {release_year}<br />
                    <strong>Director:</strong> {director}<br />
                    <strong>Rating:</strong> {rating}
                </Card.Text>
                <Button variant="primary" onClick={bookHandler} >Book Now</Button>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
