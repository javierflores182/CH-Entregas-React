import { useContext,useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col, Card } from 'react-bootstrap';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';

const valoresComprador={
    telefono:"",
    email:"",
    nombre:""
}


export const Cart =()=>{

    const [comprador,setBuyer]=useState(valoresComprador)
    const {items, removeItem, reset} = useContext(ItemsContext)

    const handleChange=(event)=>{
        setBuyer((prev)=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
     })
    }

    const total = items.reduce((acu, act) => acu + act.price * act.cantidad, 0).toFixed(2);

    const Ordenar=()=>{
        const orden ={
            comprador,
            items,
            total,
        };
        
        const db = getFirestore();
        const orderCollection = collection(db,"ordenes")

        addDoc(orderCollection,orden)
        .then(({id})=>{
            if(id){
                alert("Su orden: " + id + " ha sido realizada.")
            }
            }).finally(()=>{
                reset()
                setBuyer(valoresComprador)
            })
        }

if(items.lenght===0) return "IR A LA PAGINA PRINCIPAL"
return ( 
<Container className='mt-4'>
  <div className="text-center">
    <h1>Confirmación de la compra</h1>
    <br />

    <Row className="justify-content-between">
      {/* Formulario de Información Personal */}
      <Col sm={12} md={6} lg={4} className="mb-4">
        <h2 className="text-center">Información Personal</h2>
        <form className="text-start">
          <div className="form-group mb-3">
            <label>Nombre</label>
            <input className="form-control" value={comprador.nombre} name="nombre" onChange={handleChange} required/>
          </div>
          <div className="form-group mb-3">
            <label>Teléfono</label>
            <input className="form-control" value={comprador.telefono} name="telefono" onChange={handleChange} required/>
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input className="form-control" value={comprador.email} name="email" onChange={handleChange} required/>
          </div>

          {/* Total y botón Comprar */}
          <div className="text-center p-3 mb-3" style={{ border: '2px solid black', fontSize: '24px', fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>
            Total Compra: {total}
          </div>
          <Button variant="primary" className="mb-3 w-100" onClick={Ordenar}>
            Comprar
          </Button>
        </form>
      </Col>

      {/* Detalle de la compra a la derecha del formulario */}
      <Col sm={12} md={6} lg={6} className="mb-4">
        {/* Título del Detalle */}
        <h2 className="text-center">Detalle de la compra</h2>

        {/* Botón Vaciar carrito */}
        <div className="text-center mb-3">
          <Button variant="danger" onClick={reset}>
            Vaciar carrito
          </Button>
        </div>

        {/* ListGroup con los detalles de los productos */}
        <Row>
          {items.map((item) => {
            return (
              <Col key={item.id} sm={12} className="mb-4 d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                  <ListGroup variant="flush">
                    <ListGroup.Item><strong>Código:</strong> {item.codigo}</ListGroup.Item>
                    <ListGroup.Item><strong>Nombre:</strong> {item.name}</ListGroup.Item>
                    <ListGroup.Item><strong>Descripción:</strong> {item.description}</ListGroup.Item>
                    <ListGroup.Item><strong>Precio:</strong> {item.price}</ListGroup.Item>
                    <ListGroup.Item><strong>Categoría:</strong> {item.category}</ListGroup.Item>
                    <ListGroup.Item><strong>En Stock:</strong> {item.stock}</ListGroup.Item>
                    <ListGroup.Item><strong>Marca:</strong> {item.brand}</ListGroup.Item>
                    <ListGroup.Item><strong>Cantidad:</strong> {item.cantidad}</ListGroup.Item>
                    <ListGroup.Item>
                      <Button variant="outline-danger" onClick={() => removeItem(item.id)}>
                        Quitar del carrito
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  </div>
</Container>





        )

}