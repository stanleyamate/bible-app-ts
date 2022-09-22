import React,{ReactNode} from 'react'
import { Link } from 'react-router-dom'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement>{
    children?: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: void;
    className?: string;
    action?:() => void;


    // any props that come into the component
}

const Button = (props: buttonProps) => {
  return (
    <button {...props}
    type={props.type? props.type : 'button'}
    className={props.className? `btn ${props.className}`:'btn'}
    >{props.children}</button>
  )
}

export default Button