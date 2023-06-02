import { Link, useParams, Outlet } from "react-router-dom";
import { authors } from "../../db";

function Books() {
  const params = useParams();
  const author = authors.find((author) => author.name === params.name);
  const book = author.books.find((book) => book.title === params.book);

  return (
    <div>
      <h2>{book.title}</h2>
      <li>
        <Link to={`/authors/${author.name}/${book.title}/chapters`}>
          Chapters
        </Link>
      </li>
      <li>
        <Link to={`/authors/${author.name}/${book.title}/characters`}>
          Characters
        </Link>
      </li>
      <Outlet />
    </div>
  );
}

export default Books;
