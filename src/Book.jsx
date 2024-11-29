import PropTypes from "prop-types";
const Book = ({ book }) => {
//   const { name, price } = book;
  return (
    <div className="border p-3 mt-2 border-red-800 w-fit rounded-xl">
      <h3>Book Name: {book.name} </h3>
      <h3>Book Price: {book.price} </h3>
    </div>
  );
};

Book.propTypes = {
    book: PropTypes.object,
};

export default Book;