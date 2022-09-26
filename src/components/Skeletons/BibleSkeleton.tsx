import Skeleton from '@mui/material/Skeleton';

export const Animations = () =>{
  return (
    <div className="w-[100%]">
      <div className="flex gap-2">
         <Skeleton variant="rounded" className="w-10" height={20}/>
         <Skeleton variant="rounded" className="w-full" height={20}/>

      </div>
      <Skeleton animation="wave" className="w-[90%] mx-auto"/>
      <Skeleton animation="wave"  className="w-[85%] mx-auto" height={15}/>
      <Skeleton animation="wave"  className="w-[25%] ml-auto" height={15}/>
      <Skeleton animation="wave"  width={80} height={50}/>
    </div>
  );}
