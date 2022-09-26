import React from 'react'
import logo from '../img/logo.png';
import { Link } from 'react-router-dom'
import Search from './Search';


const Header= () => {
  return (
    <header className="header lg:px-28">
      <Link className="logo" to={'/'}>
        <img className='w-14' src={logo} alt="logo" />
      </Link>
      <nav className='nav'>
        <ul className='flex items-center'>
        <Link className='link' to={'/'}>home</Link>
        <Link className='link' to={'/bibles'}>bibles</Link>
        </ul>
      </nav>
      <Search />
    </header>
  )
}

export default Header