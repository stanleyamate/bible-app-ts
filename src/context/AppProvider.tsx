import { useState, createContext } from "react";
import { ErrProps } from "../types/Bible.types";

const AppContext = createContext({});

interface AppContextInterface {
    bibles: {}[];
    loading: boolean;
}

const AppCtx = createContext<AppContextInterface | null>(null);

interface initialStateProps {
    bibles: {}[] ;
    errObj: ErrProps;
    loading: boolean;
}


const initialState: initialStateProps = {
    errObj: {
        error: '',
        message: '',
        statusCode: ''
    },
    loading: true,
    bibles: []
}

// provider in the app

const sample: AppContextInterface = {
    bibles: [{
        name: "amate"
    }]
    ,
    loading: true
}

// export const AppProvider = ({ children: AppContextInterface }) => (

//     const [bibles, setBibles] = useState<any[]>([])
//     <AppCtx.Provider value={initialState}>
//         {children}
//     </AppCtx.Provider>
// );


