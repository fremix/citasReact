import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default App

/** Reglas de React
 **  1.- Un elemento que tiene cierre debe tener las 2 etiquetas, son necesrias, si solo 
 *   tiene apertura debe tener una diagonal antes de cerrar así />.
 *   2.- Cada componente de tener un return que es lo que se muestra en pantalla
 *   3.- Solo se puede retornar maximo un elemento en el nivel mas alto
 *   4.- Fragment = es el div pero sin la palabra, ej. <> </>
 */
