import React, { useContext } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import Context from '../Store/Context';

const InputForm = () => {
    const { type, setType, noOfSeats, setNoOfSeats } = useContext(Context);

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleNoOfSeatsChange = (e) => {
        setNoOfSeats(parseInt(e.target.value));
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="type">
                            <Form.Label>Ticket Type</Form.Label>
                            <Form.Select value={type} onChange={handleTypeChange} required>
                                <option value="">Select Type</option>
                                <option value="Standard">Standard</option>
                                <option value="Premium">Premium</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="seats">
                            <Form.Label>No of Seats</Form.Label>
                            <Form.Select value={noOfSeats} onChange={handleNoOfSeatsChange} required>
                                <option value="">Select Seats</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default InputForm;
