import React, { useState, useEffect } from "react";
import { Spinner, Alert, Card } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedBookTitle, setSelectedBookTitle] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZjA1ZGUwODVmYTAwMTk2MzFhN2UiLCJpYXQiOjE3MDcyMjIwMzcsImV4cCI6MTcwODQzMTYzN30.I26rri3SjevMvsHdKd5KTtluWbjICHMUnVD65AC422U",
            },
          }
        );
        if (response.ok) {
          const commentsData = await response.json();
          setComments(commentsData);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    if (asin) {
      fetchComments();
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [asin]);

  const handleBookClick = (title) => {
    setSelectedBookTitle(title);
  };

  return (
    <Card
      className="comment-area-container"
      style={{ marginTop: `${scrollY}px` }}
      data-testid="comment-area" // Aggiungi l'attributo data-testid
    >
      <Card.Body>
        {isLoading && <Spinner animation="border" variant="primary" />}
        {isError && (
          <Alert variant="danger">Errore nel caricamento dei commenti</Alert>
        )}
        {selectedBookTitle && <Card.Title>{selectedBookTitle}</Card.Title>}
        <AddComment asin={asin} onSelectBook={handleBookClick} />
        <CommentList commentsToShow={comments} onSelectBook={handleBookClick} />
      </Card.Body>
    </Card>
  );
};

export default CommentArea;
