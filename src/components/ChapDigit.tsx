import React from 'react'
import { Link } from 'react-router-dom'
import { INumProps,IChapProps } from '../types/Bible.types'

interface Numprop {
    chap?: IChapProps;
    verse?: INumProps;
}

const Digit = (props:Numprop) => {
    return (
        <>{
            <Link  className="digit" to={`/${props?.chap?.bibleId}/books/${props.chap?.id}/verses`}>
            {props.chap?.number}
        </Link>
        }
     
        </>
    )
}

export default Digit