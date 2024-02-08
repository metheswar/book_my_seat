import React, { useContext } from 'react';
import Context from '../Store/Context';
import { Button } from 'react-bootstrap';
import './PremiumSeats.css'; 

const PremiumSeats = () => {
    const { PremiumSeats } = useContext(Context);

    const handleSeatSelection = (seat) => {
        console.log(`Selected seat: ${seat}`);
    };

    return (
        <div>
            <h2>Premium Seats</h2>
            <div className="seat-layout">
                {PremiumSeats.map((seat, index) => (
                    <Button key={index} className="seat" onClick={() => handleSeatSelection(seat)}>
                        {seat}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default PremiumSeats;
