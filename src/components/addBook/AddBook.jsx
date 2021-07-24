import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useBook } from "../../contexts/Context";

const AddBook = ({ history, location, match }) => {
  const { editBook, addBook } = useBook();
  const [bookTitle, setBookTitle] = React.useState(location.state?.title|| '');
  const [authorName, setAuthorName] = React.useState(location.state?.author|| '');
  const [category, setCategory] = React.useState(location.state?.category || '');
  const [ISBN, setISBN] = React.useState(location.state?.ISBN|| '');

  const handleSubmit = (e) => {
    if (location.state?.id)
      editBook(location.state?.id, bookTitle, authorName, category, ISBN);
    if (!location.state?.id) addBook(bookTitle, authorName, category, ISBN);
    setBookTitle("");
    setAuthorName("");
    setCategory("");
    setISBN("");
  };
  return (
    <Form className="container my-2">
      <Form.Floating className="mb-3">
        <Form.Control
          id="bookTitle"
          type="text"
          placeholder="Book title"
          required
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <label htmlFor="bookTitle">Book title (required)</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="authorName"
          type="text"
          placeholder="Author name"
          required
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <label htmlFor="authorName">Author name (required)</label>
      </Form.Floating>
      <FloatingLabel
        className="mb-3"
        controlId="floatingSelectGrid"
        label="Category (required)"
      >
        <Form.Select
          aria-label="Floating label select example"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          required
          defaultValue={category}
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="History">History</option>
          <option value="Romance">Romance</option>
          <option value="Westerns">Westerns</option>
          <option value="Travel">Travel</option>
          <option value="Cooking">Cooking</option>
        </Form.Select>
      </FloatingLabel>
      <Form.Floating className="mb-3">
        <Form.Control
          id="ISBN"
          type="number"
          placeholder="ISBN"
          required
          value={ISBN}
          onChange={(e) => setISBN(e.target.value)}
        />
        <label htmlFor="ISBN">ISBN (number only, required)</label>
      </Form.Floating>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={() => history.push("/")}>Cancel</Button>
        <Button
          disabled={!bookTitle || !authorName || !category || !ISBN}
          onClick={handleSubmit}
        >
          {location.state ? "Save" : "Add"}
        </Button>
      </div>
    </Form>
  );
};

export default AddBook;
