import React from 'react'
import bible from '../img/bible.png'


const Bible = () => {
  return (
                <div className="card border bg-white flex flex-col justify-center shadow-lg p-3 rounded-md overflow-hidden relative">
                    <img className="absolute -z-1 opacity-40 -right-40 h-52" src={bible} alt="" />
                  <h4 className="font-bold text-orange-400 self-start">KJV</h4>
                  <h5 className="font-bold">Lorem ipsum dolor sit amet</h5>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
               </div>
  )
}

export default Bible