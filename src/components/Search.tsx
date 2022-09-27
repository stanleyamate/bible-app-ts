import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { baseUrl } from '../config/api';
import { config } from '../config/axiosConfig';

const Search = () => {

  /* initializing query state */
 const [search, setSearch]= useState<string >("")

 const [results, setResults]= useState<any[] |null>(null)

 const [clicked, setClicked]= useState<boolean>(false)
  
 // handleSearchSumbites to and axios search end point
  const handleSearch=(e:React.SyntheticEvent)=>{
    e.preventDefault();
     
    axios.get(baseUrl+`/65bfdebd704a8324-01/search?query=${search}`,config).then(res=>{
      setResults(res.data.data.verses)
      setSearch("")
      setClicked(false)
      // console.log(res.data.data.verses)
     
    }).catch (error => console.log(error))
  }

  //handle click on the list
  const handleClick =()=>{ 
      setClicked(true)
      setSearch("")
      setResults(null)
   }

  /* mapping throught the search results object */
  const resultList= results?.length?results.map(result =>(
  <Link to={`/${result.bibleId}/verses/${result.id}`} 
  className="w-full bg-white p-1 rounded-md block hover:bg-orange-200"
   key={result.id}
   onClick={handleClick}
   >
    <strong>{result.reference}</strong>
    <p>
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
          }}/>
        <ul className={clicked?"hide":"show"}>
           {resultList}
        </ul>
    </form>

  )
}

export default Search