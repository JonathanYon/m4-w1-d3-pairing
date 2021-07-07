import { Card, Button, Col} from "react-bootstrap"
import React from "react"

export default class SingleBook extends React.Component {
    state = {
        button: "primary",
        card: ""
    }
    render(){

        const {book} = this.props;
        return <Col sm={12} md={3} className="d-flex mb-3 " key={book.asin}>  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body className={this.state.card}>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            {book.category}
          </Card.Text>
          <Button variant={this.state.button} className="px-5" onClick={() => this.setState({
              button: "success",
              card: "bg-primary"
          })}>{book.price}</Button>
        </Card.Body>
      </Card>
      </Col>
    }
}

