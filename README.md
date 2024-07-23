# API-Rick-and-Morty
En esta actividad, vamos a explorar la API de Rick and Morty, para crear una aplicación web utilizando React. La API ofrece tres categorías principales: Personajes, Lugares y Episodios.

(Utilizar fetch)

1. Para comenzar, visita la web de la API de Rick and Morty (https://rickandmortyapi.com/) para entender cómo está estructurada la API y qué datos proporciona en cada categoría. Examina los endpoints disponibles y la estructura de los datos.
2. Crea un nuevo proyecto de React y configura tu entorno de desarrollo. Asegúrate de tener instaladas las herramientas necesarias, como Node.js y npm.
3. Crea una interfaz de usuario para tu aplicación con al menos tres secciones: una para Personajes, otra para Lugares y otra para Episodios. Incluye un menú de navegación y utiliza componentes de React para cada sección.
4. Utiliza fetch para consultar la API de Rick and Morty desde tu aplicación React. Realiza solicitudes para obtener datos de cada categoría (Personajes, Lugares y Episodios) y muestra la respuesta en tu interfaz de usuario.
5. Implementa botones de paginación "anterior" y "siguiente" para cada sección, de manera que los usuarios puedan navegar entre las páginas de resultados. Gestiona la lógica de paginación en tu aplicación.
6. Añade botones de filtro para la sección de Personajes que permitan al usuario ver solo personajes humanos, solo personajes alienígenas o todos los personajes. Implementa la lógica necesaria para aplicar los filtros correctamente.
7. Para la sección de Personajes, muestra la imagen de cada personaje junto con su nombre y otra información que creas relevante proveniente de la API. Utiliza las imágenes proporcionadas por la API.
8. Muestra la cantidad total de elementos en cada sección (Personajes, Lugares y Episodios) y la página actual en relación con el número total de páginas disponibles.
9. Agrega estilos CSS para mejorar la apariencia de tu aplicación. Utiliza CSS para darle un aspecto atractivo y profesional a tu aplicación.
10. Demuestra tu conocimiento de Diseño Web para que tu sitio sea responsive (mobile + escritorio).


## React Router v6

https://reactrouter.com/en/main

Para descargarnos e instalar los paquetes gay que poner en terminal: npm i react-router-dom (siempre dentro de la carpeta del protecto)

Después importamos en el componente App:
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

Agrupamos el contenido de nuestro return dentro de Router:

```js

return(

  <>
  <Router>
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
  </Router>
  </>
)

  ```

Después podríamos comentar el useState ya que lo estamos haciendo solo con React Router ( a no ser que lo necesitemos para otra cosa )

### ¿Cual es la ventaja de instalar un Router?
Rutea distintas URLS (las escribe automáticamente y las lee), te pone automáticamente en la URL en qué componente estás en ese momento.
Tambien te dejaría ir atrás y alante, ya que guarda el historial

En resumen, hacemos nuestra página navegable, para que podamos ir de página a página dentro del propio documento.


### GENERADOR DE EMAIL Y CONTRASEÑA PARA REGISTRARTE EN PLATAFORMAS
Para crear un email y contraseña ficticios para no tener que registrarte en diferentes plataformas con tu propio email.

### Repositorio del profe de RickAndMorty:

https://github.com/TomasCEI/rick-and-morty/





