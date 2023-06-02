import { useParams } from "react-router-dom";
import { authors } from "../../db";

function Chapter() {
  const params = useParams();
  const author = authors.find((author) => author.name === params.name);
  const book = author.books.find((book) => book.title === params.book);
  const chapters = book.chapters;

  return (
    <>
      <h3>Chapters</h3>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index}>{chapter}</li>
        ))}
      </ul>
    </>
  );
}

export default Chapter;
