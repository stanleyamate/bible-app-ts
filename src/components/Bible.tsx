import React, { useEffect, useState } from 'react'
import bib from '../img/bib.jpg'
import { Animations } from './Skeletons/BibleSkeleton'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Button from './Button';
import { FaBible } from 'react-icons/fa';
import { AiOutlineRead } from 'react-icons/ai';
import { IBible } from '../types/Bible.types';

interface bibleProps {
        bible: IBible
}

const Bible = (props: bibleProps) => {
        const [loading, setLoading] = useState(true)

        useEffect(() => {
                if (loading) {
                        setTimeout(() => {
                                setLoading(false)
                        }, 3000)
                }
                return () => {

                }
        }, [])

        return (<>
                {loading ? <Animations /> :
                        !loading && props.bible.description?
                                <div className="card">
                                        <img className="absolute z-[-3] opacity-30 -bottom-10 right-1 w-full h-60" src={bib} alt="" />
                                        <div className="self-start flex items-center gap-1">
                                                <FaBible className="fill-orange-400" />
                                                <h4 className="font-bold capitalize  text-orange-400">{props.bible.description}</h4>
                                        </div>
                                        <p className="font-bold text-sm text-clip ...">{props.bible.name}</p>
                                        <small className="self-end text-sm text-gray-800 capitalize">lang: {props.bible.language.name}</small>
                                        <Button direction={`/${props.bible.id}/books`} className={"btn-blue"}><AiOutlineRead />Read</Button>

                                </div> : null
                }
        </>
        )
}

export default Bible

