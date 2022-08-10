import { CotizadorProvider } from "./context/CotizadorProvider"
import AppSeguro from "./components/AppSeguro"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <CotizadorProvider>
      <AppSeguro/>
    </CotizadorProvider>
  )
}

export default App
