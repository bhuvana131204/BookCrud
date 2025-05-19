import { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => {
        alert("Book is deleted successfully!!");
        setAllBooks(prevBooks => prevBooks.filter(book => book._id !== id));
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-center text-blue-700'>📚 Manage Your Books</h2>
      <div className="overflow-x-auto">
        <Table className='w-full text-sm text-gray-800 border border-gray-200 shadow-md'>
          <Table.Head className='bg-blue-100 text-gray-900 text-base'>
            <Table.HeadCell className='text-center w-20'>No.</Table.HeadCell>
            <Table.HeadCell className='text-center w-60'>Book Name</Table.HeadCell>
            <Table.HeadCell className='text-center w-60'>Author</Table.HeadCell>
            <Table.HeadCell className='text-center w-52'>Category</Table.HeadCell>
            <Table.HeadCell className='text-center w-36'>Price</Table.HeadCell>
            <Table.HeadCell className='text-center w-56'>Actions</Table.HeadCell>
          </Table.Head>

          <Table.Body className='divide-y'>
            {
              allBooks.map((book, index) => (
                <Table.Row key={book._id} className="bg-white hover:bg-gray-50 transition">
                  <Table.Cell className="text-center align-top">{index + 1}</Table.Cell>
                  <Table.Cell className="text-center align-top break-words">{book.bookTitle}</Table.Cell>
                  <Table.Cell className="text-center align-top break-words">{book.authorName}</Table.Cell>
                  <Table.Cell className="text-center align-top break-words">{book.category}</Table.Cell>
                  <Table.Cell className="text-center align-top">$10.00</Table.Cell>
                  <Table.Cell className="text-center align-top space-x-2">
                    <Link
                      to={`/admin/dashboard/edit-books/${book._id}`}
                      className="inline-block px-3 py-1 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-700 transition"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="inline-block px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageBooks;
