import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea"; // Aggiunto l'import di CommentArea

import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <BookList books={fantasy} />
        <CommentArea asin="ISBN del libro" data-testid="comment-area" />{" "}
        {/* Inclusione di CommentArea con l'attributo data-testid */}
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
