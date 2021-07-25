import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useBook } from "../../contexts/Context";
import Book from "./Book";

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
