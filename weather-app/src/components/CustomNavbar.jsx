import { Container, Navbar, Nav, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function CustomNavbar() {

    const arrayOfFav = useSelector((store) => store.list.fav)

    return (
        <>
            <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" className='py-3 px-2 bgcustom'>
                <Container fluid>
                    <Link to="/" className='text-decoration-none'>
                        <Navbar.Brand> your.Weather</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/yourplaces' className='text-decoration-none text-light yourPlace'>your places

                            {
                                arrayOfFav.length === 0 ? ('') : (<Badge className="custom-badge rounded-2">{arrayOfFav.length}</Badge>)
                            }

            
                            
                            
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CustomNavbar;