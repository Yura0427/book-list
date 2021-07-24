import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { Preloader } from "../components/preloader/Preloader";

const Context = React.createContext({});

export const useBook = () => {
  return React.useContext(Context);
};

export const Provider = ({ children }) => {
  const history = useHistory();
  const [books, setBooks] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const resp = await axios.get("http://localhost:3001/books");
      setBooks(resp.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const editBook = (id, bookTitle, authorName, category, ISBN) => {
    setLoading(true)
    const data = {
      title: bookTitle,
      author: authorName,
      category,
      ISBN,
    };
    setBooks(
      books.map((book) => {
        if (book.id === id)
          return {
            ...book,
            ...data,
          };
        return book;
      })
    );
    axios
      .put(`http://localhost:3001/books/${id}`, { ...data })
      .then((resp) => {
        setLoading(false)
        console.log(resp.data);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addBook = (bookTitle, authorName, category, ISBN) => {
    setLoading(true)
    const data = {
      title: bookTitle,
      author: authorName,
      category,
      ISBN,
    };
    let id = [];
    books.map((element) => id.push(element.id));
    for (let i = 1; i < books.length + 2; i++) {
      if (!id.includes(i)) {
        axios
          .post(`http://localhost:3001/books`, {
            id: i,
            ...data,
          })
          .then((resp) => {
            setLoading(false)
            setBooks([...books, resp.data]);
            console.log(...books, resp.data);
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  const delBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
    async function delData() {
      try {
        await axios.delete(`http://localhost:3001/books/${id}`);
      } catch (err) {
        console.log("delete error from db:", err);
      }
    }
    delData();
  };

  const value = {
    books,
    editBook,
    delBook,
    addBook,
  };

  if (loading) return <Preloader />;
  return (
    <Context.Provider value={value}>{!loading && children}</Context.Provider>
  );
};
