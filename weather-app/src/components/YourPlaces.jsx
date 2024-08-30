import CustomSearchBar from "./CustomSearchBar";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import SingleCity from "./SingleCity";


function YourPlaces() {

    const [cities, setCities] = useState([])

    const handleSearch = (query) => {
        if (!cities.includes(query)) {
            setCities([...cities, query]);
        }
    };


    return (
        <>
            <CustomSearchBar onSearch={handleSearch} />
            {cities && (
                <Row className="mt-4">
                    <Col xs={12} lg={3} className="d-flex align-items-center">
                        <SingleCity city={cities} />
                    </Col>
                </Row>
            )}
        </>
    )

}

export default YourPlaces;