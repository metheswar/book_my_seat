import React, { useContext, useEffect } from 'react';
import InputForm from './InputForm';
import StandardSeats from './StandardSeats';
import PremiumSeats from './PremiumSeats';
import Context from '../Store/Context';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BookingPage = () => {
    const { selectedMovie, selectedSeats, movieSeatsMap, setMoviesSeatsMap } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!selectedMovie) {
            navigate('/');
        }
    }, []);

    const submitHandler = () => {
        let movie = movieSeatsMap.get(selectedMovie);
        selectedSeats.forEach(seat => movie.push(seat));
        setMoviesSeatsMap(new Map(movieSeatsMap.set(selectedMovie, movie)));
        localStorage.setItem('movieSeatsMap', JSON.stringify([...movieSeatsMap]));
        navigate('/');
    };
    console.log(movieSeatsMap)
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h1>{selectedMovie}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <InputForm />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <StandardSeats />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <PremiumSeats />
                </div>
            </div>
            <div className="row" style={{ margin: '10px' }}>
                <Button onClick={submitHandler}>Submit</Button>
            </div>
        </div>
    );
};

export default BookingPage;
