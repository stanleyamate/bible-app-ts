import React, {useState, createContext } from "react";


interface BibleContextProps{  
    bibles: any[] | null
    setBibles: React.Dispatch<React.SetStateAction<null>>
}

type BibleContextProviderProps = {
    children:React.ReactNode
}
export const BibleContext = createContext<BibleContextProps | null>(null)

export const BibleContextProvider=({children}:BibleContextProviderProps)=>{
    
    const [bibles, setBibles] = useState(null);

    <BibleContext.Provider value={{bibles, setBibles}}>
        {children}
    </BibleContext.Provider>

}
 