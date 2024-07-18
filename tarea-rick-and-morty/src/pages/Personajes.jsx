import {useState, useEffect} from 'react';

export const Personajes = () =>{
    const [personajes, setPersonajes] = useState(null);
    const [info, setInfo] = useState({
        count: 0,
        next: null,
        prev: null,
        pages: 0
    })

    useEffect(()=>{
        console.log("cargando datos")
    }, []); //al estar el array vacío unicamente se ejecuta en componentDidMount


    const getPersonajes = async () => {
        const respuesta = await fetch('https://rickandmortyapi.com/api/character')
        console.log("[Personajes.jsx] Respuesta vale:", respuesta);

        const objeto = await respuesta.json();
        console.log("[Personajes.jsx] Objeto vale:", objeto);

        setPersonajes(objeto.results);
        setInfo(objeto.info);
    }

    return(
        <section>
            <h3>Personajes</h3>
            Cantidad de elementos: {info.count}
            {
                personajes.map(({id, name}) => {
                    return(
                        <div key={id}>
                        nombre: {name}
                        </div>
                    )
                })
            }
        </section>
    );
}








