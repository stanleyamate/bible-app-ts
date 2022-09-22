import React from 'react'
import bible from '../img/bible.png'
import { Animations } from './Skeletons/BibleSkeleton'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Button from './Button';


const Bible = () => {

  return (   <>
                  <div className="card">
                    {/* <img className="absolute -z-1 opacity-40 -right-40 h-52" src={bible} alt="" />
                    <h4 className="font-bold text-orange-400 self-start">KJV</h4>
                    <h5 className="font-bold">Lorem ipsum dolor sit amet</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
                    <Button className={"btn-blue"}>Read</Button> */}
                    <Animations />
                </div>  
                </>
  )
}

export default Bible

{/* <AnimationOnScroll animateIn="animate__backInUp">
                  <div className="card border bg-white flex flex-col justify-center shadow-lg p-3 rounded-md overflow-hidden relative">
                    <img className="absolute -z-1 opacity-40 -right-40 h-52" src={bible} alt="" />
                    <h4 className="font-bold text-orange-400 self-start">KJV</h4>
                    <h5 className="font-bold">Lorem ipsum dolor sit amet</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
                    {/* <Animations /> 
                </div>
               </AnimationOnScroll> */}