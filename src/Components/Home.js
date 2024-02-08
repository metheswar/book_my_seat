import React, { useContext } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cards from './Cards'; 
import Context from '../Store/Context';

const Home = () => {
    const {movies,selectedMovie} = useContext(Context)

    const navigate = useNavigate();
    const submitHandler = () => {
        navigate('/book');
    };

    return (
        <Container>
                <Row>
                    {movies.map((movie, index) => (
                        <Col key={index} xs={12} md={6} lg={4}>
                            <Cards
                                title={movie.title}
                                image_url={movie.image_url}
                                genre={movie.genre}
                                release_year={movie.release_year}
                                director={movie.director}
                                rating={movie.rating}
                                submitHandler = {submitHandler}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

    );
};

export default Home;
