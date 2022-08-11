import { createContext , useState} from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    })

    const [error, setError] = useState('')

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
  
    return(
        // con el useContext solo podemos acceder a lo que este dentro
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError
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