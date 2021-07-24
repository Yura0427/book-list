import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useBook } from "../../contexts/Context";

const Dashboard = () => {
  const { books } = useBook();
  return (
    <div className="container my-2">
      <Table bordered hover>
        <thead>
          <tr>
            <th>Book title</th>
            <th>Author name</th>
            <th>Category</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </tbody>
      </Table>
      <Button as={Link} to="/add">
        Add
      </Button>
    </div>
  );
};

export default Dashboard;

const Book = ({ book }) => {
  const {id, title, author, category, ISBN } = book;
  const { delBook } = useBook();
  const history = useHistory()
  const del = () => {
    delBook(id);
  };
  const edit = () => {
    history.push('/add', book)
  };
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{category}</td>
      <td>{ISBN}</td>
      <td>
        <Button  onClick={edit} className="m-1">
          Edit
        </Button>
        <Button  onClick={del} className="m-1">
          Delete
        </Button>
      </td>
    </tr>
  );
};
