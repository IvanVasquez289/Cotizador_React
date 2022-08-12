import { createContext , useState} from "react";
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers";
const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
  

    const cotizarSeguro = () =>{
        const base = 2000
        let resultado = base

        const diferencia = obtenerDiferenciaYear(datos.year)
        
        // Restar el 3% por cada year
        resultado -=(((diferencia * 3) * resultado)/100)
        
        // Europeo 30%
        // Americano 15%
        // Asiatico 5%
        resultado *= calcularMarca(datos.marca)
        
        // Basico 20%
        // Completo 50%
        resultado *= calcularPlan(datos.plan)
        
        resultado = formatearDinero(resultado)

        setResultado(resultado)
    }   

    return(
        // con el useContext solo podemos acceder a lo que este dentro
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro
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