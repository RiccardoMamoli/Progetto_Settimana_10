import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavAction } from '../redux/actions';


const WidgetCard = () => {

    const cities = useSelector((store) => store.list.fav)
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();

    const handleEdit = () => {
        setEditMode(!editMode)
    }





    return (
        <>
            <Row>
                <Col>
                    <div>
                        <div className={`custom-widget ${editMode ? 'edit-mode-container' : ''}`}>
                            <div className="headerWidget">
                                <p> your favorite places</p>
                                <i className="bi bi-three-dots editIcon" onClick={handleEdit}></i>

                            </div>
                            <div className='d-flex justify-content-center align-items-center scrollArea'>

                                <Container className='px-4 mt-2'>

                                    {
                                        cities.length === 0 ?

                                            (
                                                <Row>
                                                    <Col className='text-center py-3' style={{ width: '450px' }}>
                                                        <p> Add your cities here.</p>

                                                    </Col>
                                                </Row>
                                            ) :

                                            (

                                                cities.map(city => (
                                                    <Row className='custom-row-widget d-flex align-items-center'>
                                                        <Col className='d-flex align-items-start flex-column h-100 fs-4'>
                                                            <div className='pt-1'>
                                                                <p> {city.name}</p>
                                                            </div>
                                                            <div>
                                                                <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt="icon" className='widget-icon' />
                                                                <div>
                                                                    <p className='widget-description'> {city.weather[0].main}</p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col className='d-flex flex-column justify-content-start align-items-end widget-temp h-100'>
                                                            <div>
                                                                <p> {(city.main.temp - 273.15).toFixed(1)}°</p>
                                                            </div>
                                                            <div className='d-flex me-2'>
                                                                <p className='widgetHLtemp'>
                                                                    H {(city.main.temp_max - 273.15).toFixed(1)}°
                                                                </p>
                                                                <p className='widgetHLtemp ms-2'>
                                                                    L {(city.main.temp_min - 273.15).toFixed(1)}°
                                                                </p>
                                                            </div>
                                                        </Col>



                                                        {editMode && (
                                                            <div className="delete-icon" onClick={() => dispatch(removeFromFavAction(city))}>
                                                                <i className="bi bi-trash-fill"></i>
                                                            </div>
                                                        )}




                                                    </Row>
                                                ))


                                            )





                                    }

                                </Container>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default WidgetCard;