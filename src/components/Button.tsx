import React,{ReactNode} from 'react'
import { Link } from 'react-router-dom'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement>{
    children?: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: void;
    action?:() => void;


    // any props that come into the component
}

const Button = (props: buttonProps) => {
  return (
    <button {...props}
    type={props.type? props.type : 'button'}
    className="rounded-full px-3 py-2 capitalize shadow-sm border-none transition-all bg-orange-400 text-white  hover:bg-black text-sm"
    >{props.children}</button>
  )
}

export default Button