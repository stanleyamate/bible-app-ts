import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import VerseDigit from '../components/VerseDigit'
import { baseUrl } from '../config/api'
import { config } from '../config/axiosConfig'
import { INumProps } from '../types/Bible.types'

const Verses = () => {
  let { id, bibleId } = useParams()
  const [verses, setVerses] = useState<any[]>([])
 
  /* error state */
  const [errObj, setErrObj] = useState<any>({})

  const fetchChaptersAndVerses = () => {

    /* getting all chapters from a specific bible */
    axios.get(baseUrl + `/${bibleId}/chapters/${id}/verses`, config)
      .then(res => {
        console.log('response', res.data.data)
        setVerses(res.data.data);
      })
      .catch(err => {
        // set error object in state
        setErrObj(err?.response?.data)
      });
  }

  useEffect(() => {
    /* fetching the chapters on render */
    fetchChaptersAndVerses();
  }, [])
  const verseDigits = verses.length?verses
  .map((verse:INumProps)=>(
    <VerseDigit key={verse.id} verse={verse} />
  )
  ):null
  return (
        <>
          <div className="py-20 container mx-auto">
            <h3 className="capitalize text-4xl">Verses</h3>
             <small>Choose verse : </small>
          <div className="w-full grid grid-cols-3 gap-1  md:grid-cols-10 md:w-[700px] md:mx-auto">
      {verseDigits}
    </div>
          </div>
        </>
  )
}

export default Verses