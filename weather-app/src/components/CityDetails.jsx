import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import DetailsExtendedCard from "./DetailsExtendedCard";


function CityDetails() {

    const { cityName } = useParams();

    return (
        <>
           <Container fluid className="bg-dark text-light mt-2 d-flex h-100 align-items-center">
                <Row className='w-100'>
                        <Col xs={12} lg={3} className="d-flex align-items-center">
                            <DetailsExtendedCard city={cityName} />
                        </Col>
                </Row>
            </Container>
        </>
    )
}

export default CityDetails;