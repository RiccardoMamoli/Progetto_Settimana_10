import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

function DetailsExtendedCard() {

    const { cityName } = useParams();
    const [cityData, setCityData] = useState({})
    const navigate = useNavigate();

    function FetchDetails(cityName) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=d7b26fd7ee9ec6be4f7218dc0343c22e`
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    console.log('Tutto ok')
                    return response.json()
                } else {
                    throw new Error('non ci siamo')
                }
            })
            .then((data) => {
                setCityData(data);
            })
            .catch((err) => {
                console.log('non sono riuscito a caricare', err)

            })
    }

    function BackToHome() {
        navigate('/')
    }

    useEffect(() => {
        FetchDetails(cityName);
    }, [cityName])

    const celsius = cityData ? (cityData.main.temp - 273.15).toFixed(1) + '°' : '';
    const iconUrl = cityData && cityData.weather[0] ? `http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png` : '';
    const windSpeed = cityData ? cityData.wind.speed : '';
    const humidity = cityData ? cityData.main.humidity : '';
    const description = cityData ? cityData.weather[0].main : '';


    return (
        <>

            {cityData ?
                (<Container fluid className="p-0 d-flex justify-content-center py-3">
                    < div style={{ width: '18rem' }}>
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
                                <div>
                                    {description}
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
                                <Button className="custom-button my-3" onClick={BackToHome}> Homepage </Button>
                            </div>
                        </div>
                    </div >
                </Container >) : (

                    <Container fluid className="p-0 d-flex justify-content-center py-3">
                        <div style={{ width: '18rem' }}>
                            <div className="custom-card">
                                <div className="d-flex align-items-center justify-content-center h">
                                    <Spinner animation="grow" />
                                </div>
                            </div>
                        </div>
                    </Container>
                )

            }
        </>
    )

}

export default DetailsExtendedCard;