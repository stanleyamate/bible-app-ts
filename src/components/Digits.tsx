import React from 'react'
import Digit from './ChapDigit'
import { INumProps } from '../types/Bible.types'

// interface Numprop {
//     chapters?: INumProps & {number:string};
//     verses?: INumProps;
// }
// const digitList = verses.length?verses
//   .map((vers:INumProps)=>(
//     <Digit key={props.vers.id} vers={vers} />
//   )
//   ):null
const Digits = () => {
  return (
    <div className=" w-[400px] pt-2 flex flex-wrap gap-1 container mx-auto ">
      <Digit />
    </div>
  )
}

export default Digits