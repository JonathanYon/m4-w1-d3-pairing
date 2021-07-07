import { Component } from "react"
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from "react-bootstrap"
import SingleBook from "./SingleBook"

// const BookList = ({books}) => (

    
    
//       <Container className="mt-5">
          
//           <Row>
             
//               {
//                   books.map(book => (
//                     <SingleBook key={book.asin} book={book}/>
//                   )).slice(0, 16)
//               }
              
//           </Row>
//       </Container> 

    
   
// )
// export default BookList

//  OR
export default class BookList extends Component {

    

    // handleSearch = (e) => {
    //     this.setState({
    //         search: e.target.value,
    //         allBooks: this.props.books
    //     })
    // }
    
    render () {
        const {books} = this.props;
        
        return <Container className="mt-5">
                      <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Search here"
                        
                        />
                        <Button variant="outline-success" id="button-addon2">
                         Search
                        </Button>
                      </InputGroup>
          
                  <Row>
                     
                       {
                          books.map(book => (
                            <SingleBook key={book.asin} book={book}/>
                          )).slice(0, 16)
                      }
                      
                  </Row>
              </Container> 
    }
} 