import { Container, Row, Col, Card, Button, InputGroup, FormControl } from "react-bootstrap"

const BookList = ({books}) => (
    
      <Container className="mt-5">
          <InputGroup className="mb-3">
            <InputGroup.Text>Search Here</InputGroup.Text>
            <FormControl aria-label="Search" />
          </InputGroup>
          <Row>
             
              {
                  books.map(ele => (
                    <Col sm={12} md={3} className="d-flex mb-3 " key={ele.asin}>  
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ele.img} />
                            <Card.Body>
                            <Card.Title>{ele.title}</Card.Title>
                            <Card.Text>
                                {ele.category}
                            </Card.Text>
                            <Button variant="primary" className="px-5">{ele.price}</Button>
                        </Card.Body>
                    </Card>
                  </Col>
                  )).slice(0, 16)
              }
              
          </Row>
      </Container>  
   
)
export default BookList