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
            {/* <Link  className="digit" to={`/${props.verse.bibleId}/chapters/${props.verse.id}/verses`}>
            {props.verse?.id}
        </Link> */}
       
            {/* <Link className="digit" to={`/${props.chap?.bibleId}/passages/${props.chap?.id}`}>
             {props.chap?.id}
            </Link> */}

        </>
    )
}

export default Digit