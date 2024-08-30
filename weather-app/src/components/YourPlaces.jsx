import React, { useState } from 'react';
import CustomSearchBar from './CustomSearchBar';
import { Row, Col, Container } from 'react-bootstrap';
import SingleCity from './SingleCity';

function YourPlaces() {
    // Stato inizializzato come array
    const [cities, setCities] = useState([]);

    const handleSearch = (query) => {
        // Aggiungi la città all'array solo se non è già presente e se non è vuota
        if (query && !cities.includes(query)) {
            setCities([...cities, query]);
        }
    };

    return (
        <>
            <CustomSearchBar onSearch={handleSearch} />
            <Container fluid className="bg-dark text-light mt-2 d-flex h-100 align-items-center">
                <Row>
                    {cities.map((city, index) => (
                        <Col xs={12} lg={3} className="d-flex align-items-center" key={index}>
                            <SingleCity city={city} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default YourPlaces;
