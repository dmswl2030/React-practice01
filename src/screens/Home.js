import { Link, Outlet } from "react-router-dom";
import { authors } from "../db";

function Home() {
  return (
    <>
      <h1>Best Seller Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.name}>
            <Link to={`/authors/${author.name}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
export default Home;
