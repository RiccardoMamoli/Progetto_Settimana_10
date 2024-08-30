import { useEffect, useState } from "react";
import { Container, Button, Row, Col, Spinner } from "react-bootstrap";

function SingleCity({ city }) {

    const [cityData, setCityData] = useState(null);



    const getWeather = (city) => {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d7b26fd7ee9ec6be4f7218dc0343c22e`
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    console.log('Sei qui')
                    return response.json()
                }
                else {
                    throw new Error('errore')
                }
            })
            .then((requestedCity) => {
                console.log('Sei dentro la citta', requestedCity)
                setCityData(requestedCity)
            })
            .catch((err) => {
                console.log('errore nel recupero dati', err)
            })


    }


    useEffect(() => {
        getWeather(city);
    }, [city])


    const celsius = cityData ? (cityData.main.temp - 273.15).toFixed(1) + '°' : '';
    const iconUrl = cityData && cityData.weather[0] ? `http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png` : '';
    const windSpeed = cityData ? cityData.wind.speed : '';
    const humidity = cityData ? cityData.main.humidity : '';


    return (
        <>
            {cityData ?

                (<Container fluid className="p-0 d-flex justify-content-center py-3">
                    <div style={{ width: '18rem' }}>
                        <div className="custom-card">
                            <div className="text-center">
                                <div className="nameCity">
                                    {cityData.name}
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div>
                                        {celsius}
                                    </div>
                                    <div>
                                        <img src={iconUrl} alt='Weather'></img>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <Row>
                                        <Col>
                                            <p> Wind</p>
                                        </Col>
                                        <Col>
                                            <p> {windSpeed} m/s</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p> Humidity</p>
                                        </Col>
                                        <Col>
                                            <p> {humidity} %</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row>
                                        <Col>
                                            <p></p>
                                        </Col>

                                    </Row>

                                </div>
                                <Button className="custom-button my-3"> View Details </Button>
                            </div>
                        </div>
                    </div>
                </Container>) :

                (
                    <Container fluid className="p-0 d-flex justify-content-center py-3">
                        <div style={{ width: '18rem' }}>
                            <div className="custom-card">
                                <div className="d-flex align-items-center justify-content-center">
                                    <Spinner animation="grow" />
                                </div>
                            </div>
                        </div>
                    </Container>)

            }


        </>
    )
}

export default SingleCity;






