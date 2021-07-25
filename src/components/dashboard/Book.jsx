import { useHistory } from "react-router-dom";
import { useBook } from "../../contexts/Context";
import { Button } from "react-bootstrap";

const Book = ({ book }) => {
  const { id, title, author, category, ISBN } = book;
  const { delBook } = useBook();
  const history = useHistory();
  const del = () => {
    delBook(id);
  };
  const edit = () => {
    history.push("/add", book);
  };
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{category}</td>
      <td>{ISBN}</td>
      <td>
        <Button onClick={edit} className="m-1">
          Edit
        </Button>
        <Button onClick={del} className="m-1">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Book;
