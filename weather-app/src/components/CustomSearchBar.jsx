import { useState } from 'react';
import { Container, Form, FormControl, Button} from 'react-bootstrap'


function CustomSearchBar( {onSearch }) {

    const [query , setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query);
        }
    }

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }


    return (
        <>
            <Container className="mt-4">
                <Form className="d-flex" onSubmit={handleSearch}>
                    <FormControl
                        type="search"
                        placeholder="Search for a city..."
                        className="me-2 searchBar"
                        aria-label="Search"
                        value={query}
                        onChange={handleInputChange}
                    />
                    <Button className="custom-button" type="submit">Search</Button>
                </Form>
            </Container>

        </>
    )

}


export default CustomSearchBar;