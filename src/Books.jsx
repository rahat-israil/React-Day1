import PropTypes from "prop-types";
import Book from "./Book";

const Books = ({ books }) => {
  return (
    <div className="border p-10 mt-7 border-red-800 ml-6 w-fit rounded-xl">
          <h3>Books: {books.length}</h3>

          {
              books.map(book => <Book key={book.id} book = {book}></Book>)
          }
    </div>
  );
};

Books.propTypes = {
    books: PropTypes.object,
}

export default Books;