import { useState } from 'react'
import './css/App.css'
import './css/RickAndMorty.css'
import {Personajes} from './pages/Personajes'
import {Lugares} from './pages/Lugares'
import {Episodios} from './pages/Episodios'

function App() {
  const [section, setSection] = useState('personajes')

return(

  <>
  <div className='Contenedor'>
    <header className='Header'>
      <h1 className='Titulo'>Rick And Morty</h1>
    <nav>
    <ul>
      <li><button onClick={()=> {setSection("personajes")}}></button>Personajes</li>
      <li><button onClick={()=> {setSection("lugares")}}></button>Lugares</li>
      <li><button onClick={()=> {setSection("episodios")}}></button>Episodios</li>
    </ul>
   </nav>

  </header>

  <main className='Contenido'>
  {(section == "personajes") && <Personajes/>}
  {(section == "lugares") && <Lugares/>}
  {(section == "episodios") &&   <Episodios/>}
  </main>


  </div>
  </>
)

}

export default App
