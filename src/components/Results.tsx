import React from 'react'
import '../css/scripture.css'
import { IResults } from '../types/Bible.types'
interface ResultsProps{
  passages:IResults
}
const Results = (props:ResultsProps) => {
  return (
    <div className="container max-w-[700px] mx-auto scripture-styles"
    >
        {props.passages.content}
      </div>
  )
}

export default Results