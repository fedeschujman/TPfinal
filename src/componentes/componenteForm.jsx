import React, {useState} from 'react'
import './form.css'
import {useNavigate } from 'react-router-dom'

export default function ComponenteForm({setUser}) {
    
    const [usuario, setUsuario] = useState ('')
    const [contraseña, setContraseña] = useState ('')
    const [email, setEmail] = useState ('')
    const [error, setError] = useState (false)
    const [nacionalidad, setNacionalidad] = useState ('')
    const navigate=useNavigate()
    

    const handleSubmit = (e) =>{
        e.preventDefault()/*permite que la pagina se refresque automaticamente y no realice la animación de refresco*/

        if(usuario=== '' || contraseña==='') {
            setError(true)
            return
        }

        setError(false)

        setUser({state:true})

        navigate("/inicio")

    }



    return (
        <div>
            <h1 className='login'>Iniciar sesión</h1>

            <form className='formulario' onSubmit={handleSubmit}>
                <input className='login-input' placeholder='Usuario' type='text' value={usuario} onChange={e=>setUsuario(e.target.value)}/*va a capturar lo que escribamos en el input*/ ></input>
                <input className='login-input'placeholder='Contraseña' type='password' value={contraseña} onChange={e=>setContraseña(e.target.value)}></input>
                <button className='login-button'>Iniciar sesion</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
            
            <br />

            <h1 className='login'>Registrarse</h1>

            <form className='formulario' onSubmit={handleSubmit}>
                <input placeholder='Usuario' type='text' value={usuario} onChange={e=>setUsuario(e.target.value)}/*va a capturar lo que escribamos en el input*/ ></input>
                <input placeholder='Contraseña' type='password' value={contraseña} onChange={e=>setContraseña(e.target.value)}></input>
                <input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}></input>
                <input placeholder='Nacionalidad' value={nacionalidad} onChange={e=>setNacionalidad(e.target.value)}></input>
                <button>Registarse</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </div>
    )
}
