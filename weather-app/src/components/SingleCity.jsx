import { useEffect, useState } from "react";
import { Container, Button, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addToFavAction, removeFromFavAction } from "../redux/actions";


function SingleCity({ city }) {

    const [cityData, setCityData] = useState(null);
    const navigate = useNavigate();
    const selector = useSelector((store) => store.list.fav)
    const dispatch = useDispatch()
    const isFav = cityData ? selector.find((singleFav) => singleFav.name === cityData.name) : false



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

    const ViewDetails = () => {
        navigate(`/details/${cityData.name}`)
    }


    useEffect(() => {
        getWeather(city);
    }, [city])


    const celsius = cityData ? (cityData.main.temp - 273.15).toFixed(1) + '°' : '';
    const iconUrl = cityData && cityData.weather[0] ? `http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png` : '';
    const windSpeed = cityData ? cityData.wind.speed : '';
    const humidity = cityData ? cityData.main.humidity : '';
    const description = cityData ? cityData.weather[0].main : '';

    if (!cityData) {
        return (
            <Container fluid className="p-0 d-flex justify-content-center py-3">
                <div style={{ width: '18rem' }}>
                    <div className="custom-card">
                        <div className="d-flex align-items-center justify-content-center h-100">
                            <Spinner animation="grow" />
                        </div>
                    </div>
                </div>
            </Container>
        );
    }



    return (
        <>
            {cityData ?

                (


                    <Container fluid className="p-0 d-flex justify-content-center py-3">
                        <div style={{ width: '18rem' }}>
                            <div className="custom-card">
                                <div className="text-center">
                                    <div className="nameCity d-flex justify-content-center">
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
                                    <div className="d-flex justify-content-center">
                                        <div>
                                            <Button className="custom-button my-3" onClick={ViewDetails}> View Details </Button>
                                        </div>
                                        <div className="addIcon">
                                            <i className={isFav ? "bi bi-check-circle" : 'bi bi-plus-circle'} onClick={() => {

                                                isFav ?
                                                    dispatch(removeFromFavAction(cityData))
                                                    :
                                                    dispatch(addToFavAction(cityData))

                                            }}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>) :

                (
                    <Container fluid className="p-0 d-flex justify-content-center py-3">
                        <div style={{ width: '18rem' }}>
                            <div className="custom-card">
                                <div className="d-flex align-items-center justify-content-center h">
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






