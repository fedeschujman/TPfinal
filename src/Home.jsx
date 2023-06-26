import ComponenteCondicional from './componentes/componenteCondicional';
/*import ComponenteTitulo from './componentes/componenteTitulo';*/
import ComponenteCard from './componentes/componenteCard';
import ComponenteCarousel from './componentes/componenteCarousel';
import ComponenteFooter from './componentes/componenteFooter';
import 'bootstrap/dist/css/bootstrap.min.css';





function Home() {

/*let titulo="Trabajo Practico"*/

return (
    <div className= 'grid-layout'>
        <div className='header'>
            {/*<ComponenteNavbar></ComponenteNavbar>*/}
            {/*<ComponenteTitulo titulo={titulo}></ComponenteTitulo>*/}
        </div>
        <div className='main'>
            <ComponenteCarousel></ComponenteCarousel>
        </div>
        <div className='contenido'>
            <ComponenteCondicional></ComponenteCondicional>
        </div>
        <div className='barra-lateral'>
            <ComponenteCard></ComponenteCard>
        </div> 
        <div className='footer'>
            <ComponenteFooter></ComponenteFooter>
        </div>
    </div>
    
);

}
export default Home;