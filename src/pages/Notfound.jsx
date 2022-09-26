import React from 'react'
import { useNavigation } from 'react-router-dom'
import Button from '../components/Button'
import {IoIosArrowBack} from 'react-icons/io'

const Notfound = () => {
  const navigation = useNavigation()
  return (
    <div className="not-found-wrapper lg:h-[90vh]">
        <button className="btn-blue mt-52 mt-[90vh] shadow-gray-600 shadow-lg capitalize p-6 flex justify-between items-center" onClick={()=>{navigation()}}><IoIosArrowBack/>go back</button>
    </div>
  )
}

export default Notfound