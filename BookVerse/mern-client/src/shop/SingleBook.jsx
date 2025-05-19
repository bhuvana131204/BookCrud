import { useLoaderData } from "react-router-dom";
import './SingleBook.css'; // Import a CSS file for styling

const SingleBook = () => {
  const book = useLoaderData();

  if (!book) return <p>Loading...</p>;

  return (
    <div className="container mt-5 single-book-details">
      <h2 className="book-title">{book.bookTitle}</h2>
      <div className="detail-item">
        <strong className="detail-label">ID:</strong> <span className="detail-value">{book._id}</span>
      </div>
      <div className="detail-item">
        <strong className="detail-label">Author:</strong> <span className="detail-value">{book.authorName}</span>
      </div>
      <div className="detail-item">
        <strong className="detail-label">Category:</strong> <span className="detail-value">{book.category}</span>
      </div>
      <div className="detail-item">
        <strong className="detail-label">Description:</strong> <p className="detail-value">{book.description}</p>
      </div>
      <div className="detail-item">
        <strong className="detail-label">PDF Link:</strong> <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer" className="detail-link">{book.pdfUrl}</a>
      </div>
    </div>
  );
};

export default SingleBook;