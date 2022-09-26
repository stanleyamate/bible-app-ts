import React, { useState, useEffect } from 'react'
import Book from './Book'
import { IBook } from '../types/Bible.types'
import axios from 'axios'
import { baseUrl } from '../config/api'
import { config } from '../config/axiosConfig'
import { useParams } from 'react-router-dom'

const BooksList = () => {

  //getting id from url
  let { id } = useParams();

  /*books hook */
  const [books, setBooks] = useState<any[]>([])

  /* error state */
  const [errObj, setErrObj] = useState<any>({})

  const fetchBooks = () => {

    /* getting all books from a specific bible */
    axios.get(baseUrl + `/${id}/books?include-chapters=true`, config)
      .then(res => {
        console.log('response', res.data.data)
        setBooks(res.data.data);
      })
      .catch(err => {

        // set error object in state
        setErrObj(err?.response?.data)
      });
  }

  useEffect(() => {

    /* fetching the books on render */
    fetchBooks();

  }, [])

  const bookList = books.length ?
    books
      .map((book: IBook) => (
        <Book key={book.id} book={book} />
      )
      )
    : null
  return (
    <div className='py-5 grid grid-cols-2 justify-center items-center flex-col container mx-auto gap-2 sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
      {bookList}
    </div>
  )
}

export default BooksList