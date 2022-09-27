import { configure } from '@testing-library/react'
import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { BiChevronLeft, BiChevronRight} from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../config/api'
import { config } from '../config/axiosConfig'
import { IVerse } from '../types/Bible.types'
import Button from './Button'

const Verse = () => {
    const{bibleId, id} = useParams()

    /*verse hook */
   const [verse, setVerse] = useState<IVerse>()
 
   /* error state */
   const [errObj, setErrObj] = useState<any>({})
 
   const fetchChapters = () => {
 
     /* getting all chapters from a specific bible */
     axios.get(baseUrl + `/${bibleId}/verses/${id}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true`, config)
       .then(res => {
         console.log('response', res.data.data)
         
         setVerse(res.data.data);
       })
       .catch(err => {
         // set error object in state
         setErrObj(err?.response?.data)
       });
   }
 
   useEffect(() => {
     /* fetching the chapters on render */
     fetchChapters();

   }, [id])
  return (
    <div className="pt-20 pb-24 container mx-auto">
        <div className=" md:w-[700px] mx-auto scripture-styles">
            <h3 className="text-left text-orange-700 mb-10">{verse?.reference}</h3>
          <p>{verse?.content}</p>
          <div className="flex items-center justify-center gap-5 w-full h-16">
                      <Button direction={`/${verse?.bibleId}/verses/${verse?.previous.id}`} className="btn-change-verse">
                        <BiChevronLeft className="fill-slate-50 h-6 w-16"/>
                        </Button>
                      <Button direction={`/${verse?.bibleId}/verses/${verse?.next.id}`} className="btn-change-verse"><BiChevronRight className="fill-slate-50 h-6 w-16 " /></Button>
                    </div>
        </div>
          
    </div>
  )
}

export default Verse