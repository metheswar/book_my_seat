import React, { useContext, useEffect, useState } from 'react';
import Context from '../Store/Context';
import { Button } from 'react-bootstrap';

const StandardSeats = () => {
    const { standardSeats , noOfseats,type,selectedSeats, setSelectedSeats, movieSeatsMap,alreadySelected} = useContext(Context);
   

    const handleSeatSelection = (seat) => {
        if(selectedSeats .size >1 && !selectedSeats.has(seat)){
            setSelectedSeats(new Set())
            return
        }
        

        if(type !== 'Standard'){
            return
        }
        if(selectedSeats.size === noOfseats){
            return
        }
        let newSelectedSeats = new Set(selectedSeats);
        for(let i=0;i<noOfseats;i++){
            if(!selectedSeats.has(seat+i) && !alreadySelected.has(seat+i)){
                newSelectedSeats.add(seat+i);
            }
            else{
                return
            }
        }
        setSelectedSeats(newSelectedSeats);

    };

    console.log(selectedSeats)

    const validate = (seat) => {
        return selectedSeats.has(seat) || alreadySelected.has(seat)
    };

    return (
        <div>
            <h2>Standard Seats</h2>
            <div className="seat-layout">
                {standardSeats.map((seat, index) => (
                    <Button
                        key={index}
                        className="seat"
                        style={{
                            backgroundColor: validate(seat) ? 'white' : null,
                            color: validate(seat) ? 'black' : null,
                        }}
                        disabled={validate(seat)}
                        onClick={() => handleSeatSelection(seat)}
                    >
                        {seat}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default StandardSeats;
