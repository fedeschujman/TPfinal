import React, {useState, useEffect} from 'react'
import ComponenteForm from './componentes/componenteForm'
import Home from './Home'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Historia from './componentes/Historia'
import ComponenteNavbar from './componenteNavbar';
import ComponenteFooter from './componentes/componenteFooter';
import Productos from './componentes/Productos';
import Contactanos from './componentes/Contactanos';
import Equipo from './componentes/Equipo';


export default function App() {

  const [user, setUser] = useState({state:false})

  const handleLogout = ()=>{
    setUser({state:false})
}

  useEffect(()=>
    console.log('Este componente se renderizó')
  );

  useEffect(()=>{
    document.title='BEBIDASFULL'
})
  return (
    <BrowserRouter>
    <ComponenteNavbar user={user} handleLogout={handleLogout}></ComponenteNavbar>
      <Routes>
        <Route path='/login' element={<ComponenteForm user={user} setUser={setUser}/>}></Route>
        <Route path='/historia' element={<Historia/>}></Route>
        <Route path='/inicio' element={user.state? <Home/> : <ComponenteForm/>}></Route>
        <Route path='/productos' element={<Productos></Productos>}></Route>
        <Route path='/contactanos' element={<Contactanos/>}></Route>
        <Route path='/equipo' element={<Equipo></Equipo>}></Route>
      </Routes>
    <ComponenteFooter></ComponenteFooter>
    </BrowserRouter>
  )
}
