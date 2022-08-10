import { createContext } from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const hola = "Hola mundoaaaaaaaaaaa"

    const fnHola = () =>{
        console.log('Hola mundo desde una funcion')
    }
    return(
        // con el useContext solo podemos acceder a lo que este dentro
        <CotizadorContext.Provider
            value={{
                hola,
                fnHola
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