import { useState } from 'react'
import './css/App.css'
import './css/RickAndMorty.css'

import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';

import {Personajes} from './pages/Personajes'
import {Lugares} from './pages/Lugares'
import {Episodios} from './pages/Episodios'

function App() {
  // const [section, setSection] = useState('personajes')

return(

  <>
  <Router>
  <main className='Contenedor'>
    <header className='Header'>
      <Link to="/">
      <h1 className='Titulo'>Rick And Morty</h1>
      </Link>
    <nav>
    <ul>
      {/* Versión1: común de links */}

      {/* <li><button onClick={()=> {setSection("personajes")}}></button>Personajes</li>
      <li><button onClick={()=> {setSection("lugares")}}></button>Lugares</li>
      <li><button onClick={()=> {setSection("episodios")}}></button>Episodios</li> */}

      {/* Versión2: Rutas con React Router */}
      {/* Con el atributo to, le decimos donde queremos que nos lleve cuando haga click */}
      {/* <li><Link to="/personajes">Personajes</Link></li>
      <li><Link to="/lugares">Lugares</Link></li>
      <li><Link to="/episodios">Episodios</Link></li> */}

      {/* Versión3:(NavLink) Navegación con React Router */}
      <li><NavLink to="/personajes" className={"Button-link"}>Personajes</NavLink></li>
      <li><NavLink to="/lugares" className={"Button-link"}>Lugares</NavLink></li>
      <li><NavLink to="/episodios" className={"Button-link"}>Episodios</NavLink></li>

      {/* Para que aparezca como un botón, solamente tendríamos que añadirle una clase y darle el formato de botón con CSS */}

      {/* La diferencia entre Link y NavLink, es que con NavLink, agrega una clase de "isActive" para que cuando estés dentro de ese componente lo marque de un color rojo por ejemplo */}
    </ul>
   </nav>

  </header>

  
  {/* Versión común de Rutas : */}
  
  {/* <main className='Contenido'>
  {(section == "personajes") && <Personajes/>}
  {(section == "lugares") && <Lugares/>}
  {(section == "episodios") &&   <Episodios/>}
  </main> */}

  {/* Versión de Rutas con React Router */}

    <div className='Content'>
      {/* Le ponemos las posibles rutas que podemos tener */}
    <Routes>
      {/* Dentro de las rutas, ponemos cada una de las rutas (se abre y se cierra directamente) */}
      {/* En este caso le decimos que si en la ruta pone /personajes, nos cargue el componente <Personajes> y lo mismo con los demás */}
        <Route path = "/personajes"   element = {<Personajes/>} />
        <Route path = "/lugares"      element = {<Lugares/>} />
        <Route path = "/episodios/"   element = {<Episodios/>} />
        {/* Ahora incluimos el que queremos que abra principalmente que en este caso sería personajes */}
        <Route path = "/"               element = {<Personajes/>}/>
    </Routes>

    </div>


  </main>
  </Router>
  </>
)

}

export default App
