import { Link, useParams, Outlet } from "react-router-dom";
import { authors } from "../../db";

function Authors() {
  const params = useParams();
  //authors 배열에서 name이 params.name과 일치하는 작가를 찾아서 할당
  const author = authors.find((author) => author.name === params.name);

  return (
    <div>
      <h1>{author.name}</h1>
      <ul>
        {author.books.map((book) => (
          <li key={book.title}>
            <Link to={`/authors/${author.name}/${book.title}`}>
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Authors;
