import React,{ReactNode} from 'react'
import { Link } from 'react-router-dom'

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement>{
    children?: ReactNode;
    // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    direction?: string;
    action?:() => void;


    // any props that come into the component
}

const Button = (props: LinkProps) => {
  return (
    <Link {...props} to={props.direction?`${props.direction}`: '/'}
    className={props.className? `btn ${props.className}`:'btn'}
    >{props.children}</Link>
  )
}

export default Button