import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Bibles from './pages/Bibles';
import Books from './pages/Books';
import Passage from './pages/Passage';
import Chapter from './pages/Chapters';
import Verses from './pages/Verses';
import Verse from './components/Verse';
import Notfound from './pages/Notfound';
import bibleService from './services/bible.service';
import {BiblesProps} from './types/Bible.types'
import { BibleContextProvider } from './context/BibleProvider';


function App() {
 /* loading state */ 
 const [loading, setLoading] = useState<boolean>(true)
 /* bibles state */
 const [bibles, setBibles] = useState<BiblesProps>()

 /* error state */
 const [errObj, setErrObj] = useState<any>({})

 const fetchAllBibles = () => {

   bibleService.getAllBibles()
     .then(res => {
       setBibles(res.data.data);
      //  localStorage.setItem('bibles', JSON.stringify(bibles));
     })
     .catch(err => {

       // set error object in state
       setErrObj(err?.response?.data)
     });
 }

 useEffect(() => {
   
   fetchAllBibles();
}, [])

const getRandomElement = (arr:any[])=>{
 const randomIndex = (arr.length);
 return arr[randomIndex]}
 
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/bibles' element={<Bibles />} />
            <Route path='/:id/books' element={<Books />} />
            <Route path='/:bibleId/:id/chapters' element={<Chapter />} />
            <Route path='/:bibleId/passages/:id' element={<Passage />} />
            <Route path='/:bibleId/books/:id/verses' element={<Verses />} />
            <Route path='/:bibleId/verses/:id' element={<Verse />} />
            <Route path='*' element={<Notfound />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
