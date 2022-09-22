import React from 'react'
import Button from '../components/Button'
import hero from '../img/hero.jpg'
import bible from '../img/bible.png'
import Bible from '../components/Bible'

const Home = () => {
  return (
    <>
        <main className="container">
          <section className='hero h-96 w-full bg-black flex items-center justify-center flex-col'>
             <h2 className='capitalize text-5xl text-white'>The <strong className='text-orange-400 uppercase text-8xl'>Bible</strong> app</h2>
             <h3 className='text-white my-3'>Read your bible online here at NO COST...</h3>
             <Button>get started!</Button>
          </section>
          <section className="relative text-center py-5">
            <img className="absolute right-5 -top-10 h-10 z-10" src={bible} alt="bible-image" />
            <div className="pt-5 flex flex-col items-center justify-center">
              <h3 className="text-lg">Understand <strong className=' text-orange-400'>God's</strong> Will for You!</h3>
              <div className='divider'></div>
              <p className="mt-5">
              There is no greater book than the Bible. In the Bible you learn where you come from, why you are here and where you are heading after this life. There are many conflicting messages in the “religious” world. By reading the Bible directly, you learn how simple God’s plan really can be for your life.
              </p>
            </div>
          </section>
          <section className="top-bibles  text-center py-5 flex flex-col items-center justify-center">
          <h3 className="text-lg capitalize">some<strong className="ml-1 text-orange-400">Bibles</strong></h3>
              <div className='divider'></div>
              <div className="container px-3 mt-4 flex flex-col gap-2 ">
                <Bible/>
                <Bible/>
                <Bible/>
                <Bible/>
                <Bible/>
                <Bible/>
              </div>
          </section>
          <section>
            
          </section>
        </main>
    </>
  )
}

export default Home