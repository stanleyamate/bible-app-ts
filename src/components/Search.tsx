import React from 'react'

const Search = () => {
  return (
    <form className="form" method="get">
        <input className='search' type="search" name="phrase-search" id="search" placeholder="e.g john was praying..."/>
    </form>
  )
}

export default Search