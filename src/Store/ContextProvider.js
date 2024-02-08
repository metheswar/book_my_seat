import React, { useEffect, useState } from 'react';
import Context from './Context';

const ContextProvider = (props) => {
    const [selectedMovie, setSelectedMovie] = useState();
    const [standardSeats, setStandardSeats] = useState([]);
    const [PremiumSeats, setPremiumSeats] = useState([]);
    const [type, setType] = useState();
    const [noOfseats, setNoOfSeats] = useState();
    const [selectedSeats, setSelectedSeats] = useState(new Set());
    const [movieSeatsMap, setMoviesSeatsMap] = useState(new Map());
    const [alreadySelected, setAlreadySelected] = useState(new Set());

    useEffect(() => {
        const storedMovieSeatsMap = localStorage.getItem('movieSeatsMap');
        if (storedMovieSeatsMap) {
            setMoviesSeatsMap(new Map(JSON.parse(storedMovieSeatsMap)));
        } else {
            movies.forEach((movie) => {
                movieSeatsMap.set(movie.title, []);
            });
            setMoviesSeatsMap(new Map(movieSeatsMap));
        }
    }, []);

    useEffect(() => {
        const bookedSeats = movieSeatsMap.get(selectedMovie);
        if (bookedSeats) {
            setAlreadySelected(new Set(bookedSeats));
        } else {
            setAlreadySelected(new Set());
        }
    }, [selectedMovie]);

    const movies = [
        {
            "title": "The Lost Expedition",
            "genre": "Adventure",
            "release_year": 2023,
            "director": "Emily Johnson",
            "rating": 8.2,
            "image_url": "https://picsum.photos/200/300/?random=1"
        },
        {
            "title": "Echoes of Eternity",
            "genre": "Drama, Romance",
            "release_year": 2024,
            "director": "Michael Anderson",
            "rating": 7.5,
            "image_url": "https://picsum.photos/200/300/?random=2"
        },
        {
            "title": "Galactic Conquest",
            "genre": "Sci-Fi, Action",
            "release_year": 2022,
            "director": "James Smith",
            "rating": 8.7,
            "image_url": "https://picsum.photos/200/300/?random=3"
        },
        {
            "title": "In the Shadows",
            "genre": "Thriller",
            "release_year": 2023,
            "director": "Sophia Ramirez",
            "rating": 7.9,
            "image_url": "https://picsum.photos/200/300/?random=4"
        },
        {
            "title": "Dreams of Tomorrow",
            "genre": "Fantasy",
            "release_year": 2024,
            "director": "David Thompson",
            "rating": 8.4,
            "image_url": "https://picsum.photos/200/300/?random=5"
        }
    ];

    const obj = {
        movies,
        selectedMovie,
        setSelectedMovie,
        standardSeats,
        setStandardSeats,
        PremiumSeats,
        setPremiumSeats,
        type,
        setType,
        noOfseats,
        setNoOfSeats,
        selectedSeats,
        setSelectedSeats,
        movieSeatsMap,
        setMoviesSeatsMap,
        alreadySelected
    };

    return (
        <Context.Provider value={obj}>{props.children}</Context.Provider>
    );
};

export default ContextProvider;
