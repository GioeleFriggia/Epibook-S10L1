import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { FaShoppingCart, FaComment } from "react-icons/fa"; // Importa le icone desiderate
/* src/index.css */
import "~bootstrap/dist/css/bootstrap.min.css";

const AllTheBooks = () => {
  return (
    <Row className="g-2">
      {fantasy.map((book) => (
        <Col xs={12} md={4} key={book.asin}>
          <Card className="book-cover d-flex flex-column h-100">
            <a href={`#${book.asin}`}>
              <Card.Img
                variant="top"
                src={book.img}
                className="img-fluid card-img"
              />
            </a>
            <Card.Body className="d-flex flex-column">
              <a href={`#${book.asin}`}>
                <Card.Title>{book.title}</Card.Title>
              </a>
              <Button variant="primary" className="mb-2">
                <FaShoppingCart className="me-2" /> Aggiungi al carrello
              </Button>
              <Button variant="secondary">
                <FaComment className="me-2" /> Leggi recensioni
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AllTheBooks;
