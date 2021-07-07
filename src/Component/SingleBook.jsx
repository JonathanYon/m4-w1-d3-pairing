import { Card, Button } from "react-bootstrap"
import React from "react"

export default class SingleBook extends React.Component {
    render(){

        const {book} = this.props;
        return <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            {book.category}
          </Card.Text>
          <Button variant="primary" className="px-5">{book.price}</Button>
        </Card.Body>
      </Card>
    }
}

