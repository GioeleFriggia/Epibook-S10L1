// App.js
import React, { Component } from "react";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import { Col, Row } from "react-bootstrap";

const yourBooksArray = [
  { asin: "123", title: "Book 1" },
  { asin: "456", title: "Book 2" },
  // Aggiungi altri libri secondo necessità
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBookAsin: null,
    };
  }

  handleBookSelection = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };

  render() {
    return (
      <div className="app-container">
        <Row>
          <Col md={6}>
            <BookList
              books={yourBooksArray}
              onSelectBook={this.handleBookSelection}
            />
          </Col>
          <Col md={6}>
            <CommentArea asin={this.state.selectedBookAsin} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
