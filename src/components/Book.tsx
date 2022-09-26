import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {IBook} from '../types/Bible.types'
import {ButtonAnimation} from './Skeletons/ScriptureSkeleton'
interface BookProps{
  book:IBook
}

const Book = (props:BookProps) => {
  
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
          if (loading) {
                  setTimeout(() => {
                          setLoading(false)
                  }, 5000)
          }
          return () => {
  
          }
  }, [])

  return (
   <>
    {loading?
      <ButtonAnimation /> :
    <Link to={`/${props.book.bibleId}/${props.book.id}/chapters`} className="cursor-pointer w-full text-gray-600 capitalize bg-blue-100 shadow-slate-400 flex justify-center items-center shadow-md rounded gap-1 transition hover:bg-orange-400 hover:text-white">
        {props.book.id}<small className="text-xs">({props.book.name})</small> 
    </Link>}</>
  )
}

export default Book