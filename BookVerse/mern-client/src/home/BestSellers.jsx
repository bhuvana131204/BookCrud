import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellers = () => {
    const [books,setBooks] =useState([]);

    useEffect( ()=> {
        fetch("https://bookstore-3-7ite.onrender.com/all-books").then(res=> res.json()).then(data => setBooks(data.slice(0,8)))
    },[])
  return (
    <div>
        <BookCards books = {books} headline="Best Sellers"/>
    </div>
  )
}

export default BestSellers