import axios from 'axios';
import React, {useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { baseUrl } from '../config/api';
import { config } from '../config/axiosConfig';

const Search = () => {

  /* initializing query state */
 const [search, setSearch]= useState<string >("")

 const [results, setResults]= useState<any[] |null>(null)

 const [clicked, setClicked]= useState<boolean>(false)

  
  const handleSearch=(e:React.SyntheticEvent)=>{
    e.preventDefault();
    axios.get(baseUrl+`/65bfdebd704a8324-01/search?query=${search}`,config).then(res=>{
      setResults(res.data.data.verses)
      setSearch("")
      // console.log(res.data.data.verses)
      setClicked(false)
    }).catch (error => console.log(error))
  }

  /* mapping throught the search results object */
  const resultList= results?.length?results.map(result =>(
  <Link to={`/${result.bibleId}/verses/${result.id}`} 
  className="w-full bg-white  p-2 rounded-md block hover:bg-orange-300"
   key={result.id}
   onClick={()=>setClicked(true)}
   >
    <strong className="">{result.reference}</strong>
    <p className="">
    {result.text}
    </p>
  </Link>
  )):null

  return (
    <form className="form" method="get" onSubmit={handleSearch}>
        <input className='search' type="search" name="search" id="search" placeholder="e.g john was praying..."
        value={search}
         onChange={(e)=>{
          setSearch(e.target.value)
          setClicked(false)
          }}/>
        <div className={clicked?"disable":"w-full flex items-end justify-center flex-col gap-1 border-none md:w-[400px] h-auto top-10  shadow-sm text-sm shadow-gray-600 px-1 bg-gray-300 rounded-md absolute z-50 lg:left-[20%]"}>
           {resultList}
        </div>
    </form>

  )
}

export default Search