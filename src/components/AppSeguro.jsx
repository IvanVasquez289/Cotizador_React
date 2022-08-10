import Fomulario from "./Fomulario"

const AppSeguro = () => {
  return (
    <>
        <header className="my-10">
            <h1 className=" text-white text-center text-4xl">Cotizador de Seguros de Auto</h1>
        </header>

        <main className=" bg-white md:w-2/3 lg:w-2/4 shadow-xl rounded-lg mx-auto p-10">
            <Fomulario/>
        </main>
    </>
  )
}

export default AppSeguro