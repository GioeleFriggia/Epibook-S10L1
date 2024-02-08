import React from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book, selectedBook, changeSelectedBook }) => {
  return (
    <>
      <Card
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          border: selectedBook === book.asin ? "3px solid red" : "none",
        }}
        data-testid={`book-${book.asin}`} // Aggiungiamo un attributo data-testid con un identificatore univoco
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
export default SingleBook;
