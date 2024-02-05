import React from "react";
import { Card } from "react-bootstrap";

class SingleBook extends React.Component {
  handleClick = () => {
    const { onSelectBook, book } = this.props;
    onSelectBook(book.asin);
  };

  render() {
    const { book, selected } = this.props;

    return (
      <Card
        onClick={this.handleClick}
        style={{
          border: selected ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
