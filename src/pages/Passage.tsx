import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Results from '../components/Results'
import { baseUrl } from '../config/api'
import { config } from '../config/axiosConfig'
import { IResults } from '../types/Bible.types'

const Passage = () => {


  /*gettiing id and bible id via url*/ 
  const {id, bibleId} = useParams()

  /* declaring states */
  const [passages, setPassages] = useState<any>({})
  const [errObj, setErrObj] = useState<any>({})
 
  const fetchPassage = () => {

    /* getting all chapters from a specific bible */
    axios.get(baseUrl + `/${bibleId}/passages/${id}?content-type=text`, config)
      .then(res => {
        console.log('response', res.data.data)
        setPassages(res.data.data);
      })
      .catch(err => {
        // set error object in state
        setErrObj(err?.response?.data)
      });
  }

  useEffect(() => {

    /* fetching the chapters on render */
    fetchPassage();

  }, [])

  return (
    <div className="pt-5 container mx-auto">
    <h3 className="capitalize ">{}</h3>
        <h5 className="capitalize text-left sm:text-center text-4xl mb-3">{passages.reference}</h5>       
        <div className="container max-w-[700px] mx-auto scripture-styles">
        {passages.content}
      </div>
        </div>
  )
}

export default Passage