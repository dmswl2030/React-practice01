import { useParams } from "react-router-dom";
import { authors } from "../../db";

function Characters() {
  const params = useParams();
  const author = authors.find((author) => author.name === params.name);
  const book = author.books.find((book) => book.title === params.book);
  const characters = book.characters;

  return (
    <>
      <h3>Characters</h3>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
    </>
  );
}

export default Characters;
