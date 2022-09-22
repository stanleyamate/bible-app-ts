import Skeleton from '@mui/material/Skeleton';

export const Animations = () =>{
  return (
    <div className="w-[100%]">
      <Skeleton variant="rounded" className="w-full" height={20}/>
      <Skeleton animation="wave" className="w-[90%]"/>
      <Skeleton animation="wave"  className="w-[90%]" height={15}/>
      <Skeleton animation="wave"  className="w-[90%]" height={15}/>
    </div>
  );}
