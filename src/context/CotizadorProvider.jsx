import { createContext , useState} from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

  
    return(
        // con el useContext solo podemos acceder a lo que este dentro
        <CotizadorContext.Provider
            value={{
            
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext