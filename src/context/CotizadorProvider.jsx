import { createContext , useState} from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [modal, setModal] = useState(false)

    const cambiarState = ()=>{
        setModal(!modal)
    }
  
    return(
        // con el useContext solo podemos acceder a lo que este dentro
        <CotizadorContext.Provider
            value={{
              modal,
              cambiarState
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