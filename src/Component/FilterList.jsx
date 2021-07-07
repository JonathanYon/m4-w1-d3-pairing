import { Component } from "react";
import { Container, Row, InputGroup, Button, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";


export default class FilterList extends Component {
    state = {
        search: "",
        allBooks: [],
    }

    handleSearch = (e) => {
        this.setState({
            search: e.target.value.toLowerCase(),
            allBooks: this.props.books.filter(book => book.title.toLowerCase().indexOf(this.state.search) !== -1)
        })
        if (e.target.value === ""){
            this.setState({
                search: "",
                allBooks: [], 
            })
        }
    }

    render() {
        // const {books} = this.props
        return <Container className="mt-5">
                        <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Search here"
                        onChange={(e) => this.handleSearch(e)}
                        />
                        <Button variant="outline-success" id="button-addon2">
                        Search
                        </Button>
                        </InputGroup>

                    <Row>
                    
                        {
                            this.state.allBooks.map(book => (
                            <SingleBook key={book.asin} book={book}/>
                            )).slice(0, 16)
                        }
                        
                    </Row>
                </Container> 
    }
}