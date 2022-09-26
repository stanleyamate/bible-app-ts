import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import bible from '../img/bible.png'
import Bible from '../components/Bible'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { IBible,BiblesProps } from '../types/Bible.types';
import bibleService from '../services/bible.service';
import { Animations } from '../components/Skeletons/BibleSkeleton';

interface bibleProps {
        bibles: BiblesProps
}

const Home = () => {

 /* loading state */ 
 const [loading, setLoading] = useState<boolean>(true)
 /* bibles state */
 const [bibles, setBibles] = useState<any[]>([])

 /* error state */
 const [errObj, setErrObj] = useState<any>({})

        useEffect(() => {
                if (loading) {
                        setTimeout(() => {
                                setLoading(false)
                        }, 3000)
                }
                return () => {

                }
        }, [])

 const fetchAllBibles = () => {

   bibleService.getAllBibles()
     .then(res => {
       setBibles(res.data.data);
     })
     .catch(err => {

       // set error object in state
       setErrObj(err?.response?.data)
     });
 }

 useEffect(() => {

   fetchAllBibles();

 }, [])
    const bibleList =bibles.length? bibles
    .filter((bible:IBible) => bible.language.name =="English")
    .map((bible:IBible) =>(
        <Bible key={bible.id} bible={bible}/>
    
    )).slice(1, 13):null
 
  return (
    <>
        <main>

          {/* hero section */}

          <section className='hero'>
            <h2 className='capitalize text-5xl text-white '>The <strong className='text-orange-400 uppercase text-8xl'>Bible</strong> app</h2>
             <h3 className='text-white my-3'>Read your bible online here at NO COST...</h3>
             <Button direction={'/bibles'}>get started!</Button>
          </section>

          <section className="container mx-auto relative text-center py-5">
            <img className="absolute right-5 -top-20 h-10 z-10 sm:h-16 md:h-28 md:-top-24" src={bible} alt="bible-book" />
            <div className="pt-5 flex flex-col items-center justify-center">
              <h3 className="text-lg md:text-2xl">Understand <strong className=' text-orange-400'>God's</strong> Will for You!</h3>
              <div className='divider'></div>
              <p className="mt-5 max-w-lg">
              There is no greater book than the Bible. In the Bible you learn where you come from, why you are here and where you are heading after this life. There are many conflicting messages in the “religious” world. By reading the Bible directly, you learn how simple God’s plan really can be for your life.
              </p>            
            </div>
          </section>
          <section className="bg-slate-400 mmx-auto text-center py-5 flex flex-col items-center justify-center ">
          <AnimationOnScroll animateIn='animate__fadeInUp'>
              <h3 className="text-lg text-white capitalize md:text-2xl">some english<strong className="ml-1 text-orange-400">Bibles</strong></h3>
            </AnimationOnScroll>
             
              <div className='divider '></div>
              <div className="container px-3 mt-4  ">
                
                  {loading?<Animations />:
                   <AnimationOnScroll className='flex flex-col gap-3 sm:grid sm:grid-cols-3 md:grid-rows-3 lg:grid-cols-6 md:my-20 md:grid-rows-2 md:gap-5' animateIn='animate__fadeInUp'>
                    {bibleList}
                    </AnimationOnScroll>
                  }
              </div>
          </section>
          <section className='jumbo'>
            <Button direction={'/about'}>About our project</Button>
          </section>
        </main>
    </>
  )
}
export default Home