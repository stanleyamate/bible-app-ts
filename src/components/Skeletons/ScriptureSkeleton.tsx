import Skeleton from '@mui/material/Skeleton';

export const ButtonAnimation = () =>{
  return (
    <div className="w-[90%] lg">
      <div className="flex justify-center bg-slate-200 rounded-sm p-1 gap-2 h-7 items-center ">
         <Skeleton animation="wave" variant="rounded" className="w-10" height={20}/>
         <Skeleton animation="wave" variant="rounded" className="w-16" height={12}/>
      </div>
    </div>
  );}
