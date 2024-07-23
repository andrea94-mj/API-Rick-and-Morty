import {useState, useEffect} from 'react';

export const Personajes = () =>{
    const [personajes, setPersonajes] = useState([]);
    const [info, setInfo] = useState({
        count: 0,
        next: null,
        prev: null,
        pages: 0
    })

    useEffect(()=>{
        getPersonajes('https://rickandmortyapi.com/api/character'); // utilizando async/await
        console.log("cargando datos")
    }, []); //al estar el array vacío unicamente se ejecuta en componentDidMount


    const getPersonajes = async (url) => {
        // const url = 'https://rickandmortyapi.com/api/character';
        const respuesta = await fetch (url);
        // console.log("[Personajes.jsx] Respuesta vale:", respuesta);

        const objeto = await respuesta.json();
        console.log("[Personajes.jsx] Objeto vale:", objeto);


        //incorporamos un forEach:

        if(objeto.error){
            setErrorData ("No se han encontrado resultados");
            setPersonajes ([]);
            setInfo ([]);
            return;
        }else{
            setErrorData("");
            setPersonajes(objeto.results);
            setInfo(objeto.info);
        }
        
    }
    

    return(
        <section>
            <h3>Personajes ({info.count}) </h3>

            <div className='flexBetween'>
                <button disabled={!info.prev} onClick={()=>{ getPersonajes(info.prev) }}>Anterior</button>
                <div className='flexCenter'>
                    {info.count}
                </div>
                <button disabled={!info.next} onClick={()=>{ getPersonajes(info.next) }}>Siguiente</button>
            </div>

            <div className='flexGrid'>
            
        {
            personajes.map((personaje) =>(
                <PersonajeCard key={personaje.id} {...personaje} />
            ))
        }
            </div>

            
        </section>
        
    );
}

const PersonajeCard = ({name, image, id, status, species, location}) =>{
    return(
        <article className='Card'>
            Nombre: {name}
            <img src={image} alt={name} />
        </article>
    )
}








