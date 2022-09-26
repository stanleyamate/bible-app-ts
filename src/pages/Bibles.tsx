import React, { useState, useEffect } from 'react'
import Bible from '../components/Bible'
import { MdError } from 'react-icons/md'
import bibleService from '../services/bible.service';
import { ErrProps, ErrStateProps, IBible } from '../types/Bible.types';
import Notification from '../components/Notification';

/* getting all bibles */

const Bibles = () => {

  /* loading state */ 
  const [loading, setLoading] = useState<boolean>(true)
  /* bibles state */
  const [bibles, setBibles] = useState<any[]>([])

  /* error state */
  const [errObj, setErrObj] = useState<any>({})

  const fetchAllBibles = () => {

    bibleService.getAllBibles()
      .then(res => {
        console.log('response', res.data.data)
        setBibles(res.data.data);
        localStorage.setItem('bibles', JSON.stringify(bibles));
      })
      .catch(err => {

        // set error object in state
        setErrObj(err?.response?.data)
      });
  }

  useEffect(() => {

    fetchAllBibles();

  }, [])

  const bibleList=bibles.length ?
    bibles.filter(b => b.language.name == 'English')
      .map((bible: IBible) => (
        <Bible key={bible.id} bible={bible} />
        )
      )
    : null

  return (
    <>
      <div className="bg-slate-600">
        <div className="py-10 container mx-auto md:">
          <h3 className="text-5xl text-white my-10 first-letter:text-orange-400 ">Bibles</h3>
          <div className="grid px-5 gap-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {/* <Notification data={errObj} /> */}
            {
            bibleList
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Bibles
// bg-violet-600