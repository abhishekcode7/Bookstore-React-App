import React from 'react'
import Book from './Book.tsx'
import data from '../assets/data.json'



const Bookpage = () => {
  return (
    <>
    <div>All Books</div>
    <div className='d-flex'>
    {data.map(book => (
      <Book book={book as Book}/>
    ))}
    </div>
    
    </>
  )
}

export default Bookpage