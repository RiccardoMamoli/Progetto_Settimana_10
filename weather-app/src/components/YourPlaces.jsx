import React, { useState } from 'react';
import CustomSearchBar from './CustomSearchBar';
import { Row, Col, Container } from 'react-bootstrap';
import SingleCity from './SingleCity';
import WidgetCard from './WidgetCard';

function YourPlaces() {
    const [cities, setCities] = useState([]);

    const handleSearch = (query) => {
        if (query && !cities.includes(query)) {
            setCities([...cities, query]);
        }
    };

    return (
        <>
            <div>
                <CustomSearchBar onSearch={handleSearch} />
            </div>
            <Container fluid className="text-light mt-2 d-flex h-100 align-items-center">
                <Row className='w-100'>
                    {cities.map((city, index) => (
                        <Col xs={12} lg={3} className="d-flex align-items-center" key={index}>
                            <SingleCity city={city} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container fluid className="text-light mt-2 d-flex h-100 align-items-center justify-content-center">
                <WidgetCard />
            </Container>
        </>
    );
}

export default YourPlaces;
