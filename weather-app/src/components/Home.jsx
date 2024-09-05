import { Container, Row, Col } from "react-bootstrap";
import SingleCity from "./SingleCity";
// import { useState } from "react";
// import { useEffect } from "react";
// import Loader from "./Loader";




function Home() {

    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 4000);

    //     return () => clearTimeout(timer);
    // }, []);

    // if (isLoading) {
    //     return (
    //         <Container fluid className="text-light mt-4 d-flex vh-100 justify-content-center align-items-center">
    //             <Loader />
    //         </Container>
    //     );
    // }

    const cities = [
        'London', 'Madrid', 'Milan', 'Lisbon', 'Paris',
        'Rome', 'Manchester', 'Oslo', 'Copenhagen',
        'Reggio Emilia', 'Reykjavík', 'Marrakesh'
    ];
    return (
        <>
            <Container fluid className=" text-light mt-4 d-flex h-100 align-items-center">
                <Row>
                    {cities.map(city => (

                        <Col key={city} xs={12} md={6} lg={4} xl={3} className="d-flex align-items-center">
                            <SingleCity city={city} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )

}

export default Home;