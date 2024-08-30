import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function CustomNavbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Link to="/" className='text-decoration-none'>
                        <Navbar.Brand> your.Weather</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/yourplaces' className='text-decoration-none text-light'>your places</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CustomNavbar;