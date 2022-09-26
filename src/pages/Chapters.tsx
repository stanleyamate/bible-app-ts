import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Digit from '../components/ChapDigit';
import { baseUrl } from '../config/api';
import { config } from '../config/axiosConfig';
import { IChapProps, INumProps } from '../types/Bible.types';
import Passage from './Passage';

const Chapter = () => {
   //getting id from url
   let { id, bibleId } = useParams();

   /*chapters hook */
   const [chapters, setChapters] = useState<any[]>([])
 
   /* error state */
   const [errObj, setErrObj] = useState<any>({})
 
   const fetchChapters = () => {
 
     /* getting all chapters from a specific bible */
     axios.get(baseUrl + `/${bibleId}/books/${id}/chapters`, config)
       .then(res => {
         console.log('response', res.data.data)
         setChapters(res.data.data);
       })
       .catch(err => {
         // set error object in state
         setErrObj(err?.response?.data)
       });
   }
 
   useEffect(() => {
     /* fetching the chapters on render */
     fetchChapters();
 
   }, [])

   /*map through, remove the intro and display the the rest of chapter links */
   
   const chapDigits = chapters.length?
   chapters.slice(1)
   .map((chap:IChapProps)=>(
     <Digit key={chap.id} chap={chap} />
   )
   ):null
 
  return (
    <div className="py-20 px-5">
    <small>choose chapter : </small>
      
      <div className="w-full lg:w-[800px] pt-2 grid grid-cols-4 sm:grid-cols-12 gap-1 container mx-auto ">
        {chapDigits}
        {/* <Digit chap={chap}/> */}
      </div>
      <div className="mx-auto">
          <Passage />
      </div>
   </div>
  )
}

export default Chapter