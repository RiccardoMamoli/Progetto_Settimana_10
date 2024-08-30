import { Container, Row, Col } from "react-bootstrap";
import SingleCity from "./SingleCity";



function Home() {

    return (
        <>
            <Container fluid className="bg-dark text-light mt-2 d-flex h-100 align-items-center">
                <Row>
                    <Col xs={12} lg={3} className="p-0">
                        <SingleCity city={'London'} />
                    </Col>
                    <Col xs={12} lg={3} className="d-flex align-items-center">
                        <SingleCity city={'Madrid'} />
                    </Col>
                    <Col xs={12} lg={3} className="d-flex align-items-center">
                        <SingleCity city={'Milan'} />
                    </Col>
                    <Col xs={12} lg={3} className="d-flex align-items-center">
                        <SingleCity city={'Lisbon'} />
                    </Col>
                    <Col xs={12} lg={3} className="d-flex align-items-center">
                        <SingleCity city={'Paris'} />
                    </Col>
                    <Col xs={12} lg={3} className="d-flex align-items-center">
                        <SingleCity city={'Rome'} />
                    </Col>
                    <Col xs={12} lg={3} className="d-flex align-items-center">
                        <SingleCity city={'Manchester'} />
                    </Col>
                    <Col xs={12} lg={3} className="d-flex align-items-center">
                        <SingleCity city={'Oslo'} />
                    </Col>
                    <Col xs={12} lg={3} className="d-flex align-items-center">
                        <SingleCity city={'Copenhagen'} />
                    </Col>
                    <Col xs={12} lg={3} className="d-flex align-items-center">
                        <SingleCity city={'Reggio Emilia'} />
                    </Col>
                    <Col xs={12} lg={3} className="d-flex align-items-center">
                        <SingleCity city={'Reykjavík'} />
                    </Col>
                    <Col xs={12} lg={3} className="d-flex align-items-center">
                        <SingleCity city={'Marrakesh'} />
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Home;