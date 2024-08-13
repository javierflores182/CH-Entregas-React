import Container from 'react-bootstrap/Container';
import data from '../data/productos.json'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [item,setItem]= useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(()=>{
        new Promise((resolve)=>setTimeout(()=>resolve(data),2000))
        .then((response)=>{
            const encontrado = response.find(i=>i.id===Number(id))
            setItem(encontrado)
        })
        .finally(()=>setLoading(false))
    },[id])

    if(loading) return "ESPERE"
    return <Container className='mt-4' >
        <h1>Detalle del producto</h1><br/>
         <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item><strong>Codigo:</strong>  {item.id}</ListGroup.Item>
        <ListGroup.Item><strong>Nombre:</strong>  {item.name}</ListGroup.Item>
        <ListGroup.Item><strong>Descripcion:</strong>  {item.description}</ListGroup.Item>
        <ListGroup.Item><strong>Precio:</strong>  {item.price}</ListGroup.Item>
        <ListGroup.Item><strong>Categoria:</strong>  {item.category}</ListGroup.Item>
        <ListGroup.Item><strong>En Stock:</strong>  {item.stock}</ListGroup.Item>
        <ListGroup.Item><strong>Marca:</strong>  {item.brand}</ListGroup.Item>
      </ListGroup>
    </Card>
    </Container>;
}