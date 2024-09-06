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
//     return (      
//         <ListGroup variant="flush">
//             <button onClick={reset}>Vaciar carrito</button>
//             {items.map((item)=>{
//                 return (
//                     <div key={item.id}>
//                         <h1>{item.name}</h1>
//                         <h2>{item.description}</h2>
//                         <p>{item.cantidad}</p>
//                         <p onClick={()=>removeItem(item.id)}>X</p>
//                     </div>
//                 )
//             })}

// <br />
// <div>Total Compra: {total} </div>
// <br />

// <form>
//     <div>
//         <label>Nombre</label>
//         <input value={comprador.nombre} name="nombre" onChange={handleChange} />
//     </div>
//     <div>
//         <label>Telefono</label>
//         <input value={comprador.telefono} name="telefono" onChange={handleChange} />
//     </div>
//     <div>
//         <label>Email</label>
//         <input value={comprador.email} name="email" onChange={handleChange} />
//     </div>
//     <button type="button" onClick={Ordenar}>Comprar</button>
// </form>
// </ListGroup>)

return ( 
     <Container className='mt-4'>
     <div className="text-center">  
     <h1>Confirmacion de la compra</h1>
     <br/>  

     <Row>
     {items.map((item)=>{
             return (
                 <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
                 <Card style={{ width: '18rem' }}>
                 <ListGroup variant="flush">
                 <ListGroup.Item> <button onClick={reset}>Vaciar carrito</button></ListGroup.Item>
                     <ListGroup.Item><strong>Codigo:</strong> {item.codigo}</ListGroup.Item>
                     <ListGroup.Item><strong>Nombre:</strong> {item.name}</ListGroup.Item>
                     <ListGroup.Item><strong>Descripcion:</strong> {item.description}</ListGroup.Item>
                     <ListGroup.Item><strong>Precio:</strong> {item.price}</ListGroup.Item>
                     <ListGroup.Item><strong>Categoria:</strong> {item.category}</ListGroup.Item>
                     <ListGroup.Item><strong>En Stock:</strong> {item.stock}</ListGroup.Item>
                     <ListGroup.Item><strong>Marca:</strong> {item.brand}</ListGroup.Item>
                     <ListGroup.Item><strong>Cantidad:</strong> {item.cantidad}</ListGroup.Item>
                     {/* <ListGroup.Item><p onClick={()=>removeItem(item.id)}>Quitar del carrito</p></ListGroup.Item> */}
                     <ListGroup.Item><Button variant="outline-danger" onClick={()=>removeItem(item.id)}>Quitar del carrito</Button></ListGroup.Item>
                    <ListGroup.Item><strong>Total Compra::</strong> {total}</ListGroup.Item>
                 </ListGroup>
                 </Card>
                 </Col>
             )
         })}
    </Row>

    <Row>
  

                 <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
                 <Card style={{ width: '18rem' }}>
                 <ListGroup variant="flush">
                 <ListGroup.Item> <button onClick={reset}>Vaciar carrito</button></ListGroup.Item>
                     <ListGroup.Item><strong>Codigo:</strong> {item.codigo}</ListGroup.Item>
                     <ListGroup.Item><strong>Nombre:</strong> {item.name}</ListGroup.Item>
                     <ListGroup.Item><strong>Descripcion:</strong> {item.description}</ListGroup.Item>
                     <ListGroup.Item><strong>Precio:</strong> {item.price}</ListGroup.Item>
                     <ListGroup.Item><strong>Categoria:</strong> {item.category}</ListGroup.Item>
                     <ListGroup.Item><strong>En Stock:</strong> {item.stock}</ListGroup.Item>
                     <ListGroup.Item><strong>Marca:</strong> {item.brand}</ListGroup.Item>
                     <ListGroup.Item><strong>Cantidad:</strong> {item.cantidad}</ListGroup.Item>
                     {/* <ListGroup.Item><p onClick={()=>removeItem(item.id)}>Quitar del carrito</p></ListGroup.Item> */}
                     <ListGroup.Item><Button variant="outline-danger" onClick={()=>removeItem(item.id)}>Quitar del carrito</Button></ListGroup.Item>
                    <ListGroup.Item><strong>Total Compra::</strong> {total}</ListGroup.Item>
                 </ListGroup>
                 </Card>
                 </Col>

    </Row>
         </div>
       </Container>


        )

}