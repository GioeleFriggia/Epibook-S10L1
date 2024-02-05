import React, { Component } from "react";
import { Col, Row, Card } from "react-bootstrap"; // Assicurati di importare anche Card qui

class BookList extends Component {
  state = {
    selectedBookAsin: null,
  };

  handleBookSelection = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };

  render() {
    return (
      <Row className="mt-3">
        <Col md={6}>
          {/* Left Column - Book Grid */}
          {this.props.books.map((b) => (
            <Card key={b.asin} onClick={() => this.handleBookSelection(b.asin)}>
              <Card.Img variant="top" src={b.img} />
              <Card.Body>
                <Card.Title>{b.title}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={6}>
          {/* Right Column - Comment Area */}
          {/* ... */}
        </Col>
      </Row>
    );
  }
}

export default BookList;
