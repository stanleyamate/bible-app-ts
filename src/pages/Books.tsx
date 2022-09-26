import React from 'react'
import BooksList from '../components/BookList'

const Books = () => {

  return (
    <div className="py-10 px-5">
      <h3 className="capitalize text-4xl">books</h3>
      <BooksList />
    </div>
  )
}

export default Books