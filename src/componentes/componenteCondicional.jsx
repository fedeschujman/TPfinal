
import React from 'react';

const alumnos = [
    {
        id: 1,
        nombre: 'Lautaro',
        miGrupo:true
    },
    {
        id: 2,
        nombre: 'Juan',
        miGrupo:false
    },
    {
        id: 3,
        nombre: 'Ricardo',
        miGrupo:false
    },
    {
        id: 4,
        nombre: 'Federico',
        miGrupo:true
    },
    {
        id: 5,
        nombre: 'Lucas',
        miGrupo:true
    },
    {   
        id: 6,
        nombre: 'Facundo',
        miGrupo:true
    },
];

const ComponenteCondicional = () => {

    return (
        <div className='lista-alumnos'>
            <h2>Lista de alumnos</h2>
            <ul>
                {alumnos.map(alumno=>(<li key={alumno.id}>{alumno.nombre}{alumno.miGrupo && <span>&#x2713;</span>}</li>))}
            </ul>
        </div>
    )
}

export default ComponenteCondicional;
