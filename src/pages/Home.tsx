import React from 'react'
import Button from '../components/Button'
import bible from '../img/bible.png'
import Bible from '../components/Bible'

const Home = () => {
  return (
    <>
        <main>
          <section className='hero'>
             <h2 className='capitalize text-5xl text-white'>The <strong className='text-orange-400 uppercase text-8xl'>Bible</strong> app</h2>
             <h3 className='text-white my-3'>Read your bible online here at NO COST...</h3>
             <Button>get started!</Button>
          </section>
          <section className="container mx-auto relative text-center py-5">
            <img className="absolute right-5 -top-10 h-10 z-10 md:h-28 md:-top-20" src={bible} alt="bible-image" />
            <div className="pt-5 flex flex-col items-center justify-center">
              <h3 className="text-lg md:text-2xl">Understand <strong className=' text-orange-400'>God's</strong> Will for You!</h3>
              <div className='divider'></div>
              <p className="mt-5 max-w-lg">
              There is no greater book than the Bible. In the Bible you learn where you come from, why you are here and where you are heading after this life. There are many conflicting messages in the “religious” world. By reading the Bible directly, you learn how simple God’s plan really can be for your life.
              </p>
            </div>
          </section>
          <section className="container mx-auto text-center py-5 flex flex-col items-center justify-center">
          <h3 className="text-lg capitalize text-lg md:text-2xl">some<strong className="ml-1 text-orange-400">Bibles</strong></h3>
              <div className='divider'></div>
              <div className="container px-3 mt-4 flex flex-col gap-3 sm:grid sm:grid-cols-2 md:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
                <Bible/>
                <Bible/>
                <Bible/>
                <Bible/>
                <Bible/>
                <Bible/>
              </div>
          </section>
          <section className='jumbo'>
            <Button>About our project</Button>
          </section>
        </main>
    </>
  )
}

export default Home