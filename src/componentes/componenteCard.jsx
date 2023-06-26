import {Card} from 'react-bootstrap'
import Fede from'../imagenes/Fede.jpg'
import Lucas from'../imagenes/Lucas.jpeg'
import Lautaro from'../imagenes/Lautaro.jpeg'
import Facundo from'../imagenes/Facundo.jpeg'

export default function ComponenteCard(){
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Fede}/>
            <Card.Body>
            <Card.Title>Federico Schujman</Card.Title>
            <Card.Text>
                FULL-STACK DEVELOPMENT
            </Card.Text>
            {/*<Button variant="primary" className='levantar'>CONTACTO</Button>*/}
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Lucas}/>
            <Card.Body>
            <Card.Title>Lucas Nieva</Card.Title>
            <Card.Text>
                WEB DEVELOPMENT
            </Card.Text>
            {/*<Button variant="primary" className='levantar'>CONTACTO</Button>*/}
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Facundo} />
            <Card.Body>
            <Card.Title>Facundo Fernandez</Card.Title>
            <Card.Text>
                DESKTOP DEVELOPMENT
            </Card.Text>
            {/*<Button variant="primary" className='levantar'>CONTACTO</Button>*/}
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Lautaro} />
            <Card.Body>
            <Card.Title>Lautaro Carreras</Card.Title>
            <Card.Text>
                FRONT-END DEVELOPMENT
            </Card.Text>
            {/*<Button variant="primary" className='levantar'>CONTACTO</Button>*/}
            </Card.Body>
            </Card>
        </div>  
        );
}