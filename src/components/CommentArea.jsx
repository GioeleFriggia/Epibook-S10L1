// CommentArea.jsx
import React from "react";

class CommentArea extends React.Component {
  state = {
    comments: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.book !== this.props.book) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    const { book } = this.props;

    if (!book) {
      this.setState({ comments: [] });
      return;
    }

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${book.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZjA1ZGUwODVmYTAwMTk2MzFhN2UiLCJpYXQiOjE3MDcxNDQ1MjMsImV4cCI6MTcwODM1NDEyM30.VTkPxi_6ob2la2HNzGLrAyTnYDBbEzjyAZl6t0wcTYM",
          },
        }
      );

      if (response.ok) {
        const comments = await response.json();
        this.setState({ comments });
      } else {
        console.log("Errore nella richiesta dei commenti:", response.status);
        this.setState({ comments: [] });
      }
    } catch (error) {
      console.log("Errore durante il fetch dei commenti:", error);
      this.setState({ comments: [] });
    }
  };

  render() {
    return (
      <div className="comment-area-container">
        {this.state.comments.map((comment) => (
          <div key={comment._id}>
            <p>{comment.comment}</p>
            <p>Valutazione: {comment.rate}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CommentArea;
