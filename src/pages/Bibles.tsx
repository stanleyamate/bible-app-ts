import React from 'react'
import Bible from '../components/Bible'


const Bibles = () => {

  return (
    <>
    <div className="py-10 container mx-auto md:">
        <h3 className="text-5xl mb-3 first-letter:text-orange-400">Bibles</h3>
       <div className="grid gap-5 sm:grid-cols-2 sm: md:grid-cols-3 ">
        <Bible />
        <Bible />
        <Bible />
        <Bible />
        <Bible />
        <Bible />
       </div>
    </div>
    </>
  )
}

export default Bibles