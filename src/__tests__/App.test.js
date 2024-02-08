import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

test("renders Welcome component correctly", () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Benvenuto in CosmoBooks!/i);
  expect(welcomeElement).toBeInTheDocument();
});

// test("renders bootstrap cards for each book", () => {
//   render(<App />);
//   const cards = screen.getAllByRole("article", { name: /book card/i });
//   expect(cards.length).toBe(6); // Assuming there are 6 books in the provided JSON
// });

// describe("CommentArea component", () => {
//   test("renders CommentArea component correctly", async () => {
//     render(<CommentArea asin="test-asin" />);
//     await waitFor(() => {
//       const commentArea = screen.getByTestId("comment-area");
//       expect(commentArea).toBeInTheDocument();
//     });
//   });
// });

test("filters books correctly via navbar", () => {
  render(<App />);
  // Implement test logic for filtering books via navbar
});

// test("changes border color when clicking on a book", () => {
//   render(<App />);
//   const firstBook = screen.getAllByRole("article", { name: /book card/i })[0];
//   fireEvent.click(firstBook);
//   expect(firstBook).toHaveStyle("border: 3px solid red");
// });

// test("restores border color when clicking on another book", () => {
//   render(<App />);
//   const firstBook = screen.getAllByRole("article", { name: /book card/i })[0];
//   const secondBook = screen.getAllByRole("article", { name: /book card/i })[1];
//   fireEvent.click(firstBook);
//   fireEvent.click(secondBook);
//   expect(firstBook).not.toHaveStyle("border: 3px solid red");
// });

test("does not render SingleComment components initially", () => {
  render(<App />);
  const singleComments = screen.queryAllByTestId("single-comment");
  expect(singleComments.length).toBe(0);
});

// test("loads comments when clicking on a book with reviews", async () => {
//   render(<App />);
//   const commentAreas = screen.getAllByTestId("comment-area");
//   console.log("Comment areas found:", commentAreas);

//   expect(commentAreas.length).toBeGreaterThan(0); // Verifica che almeno un'area commenti sia presente
// });

// Verifica la presenza di bottoni nella Navbar
// const navbarButtons = screen.getAllByRole("button", {
//   name: /home|about|browse/i,
// });
// expect(navbarButtons.length).toBe(3); // Modifica il valore in base al numero effettivo di bottoni nella Navbar

// Verifica la presenza di bottoni nella lista di libri
