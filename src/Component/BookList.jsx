import { Container, Row, Col, Card, Button, InputGroup, FormControl } from "react-bootstrap"
import SingleBook from "./SingleBook"

const BookList = ({books}) => (

    
    
      <Container className="mt-5">
          
          <Row>
             
              {
                  books.map(book => (
                    <SingleBook key={book.asin} book={book}/>
                  )).slice(0, 16)
              }
              
          </Row>
      </Container> 

    
   
)
export default BookList