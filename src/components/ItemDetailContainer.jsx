import Container from 'react-bootstrap/Container';
// import data from '../data/productos.json'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc,doc } from 'firebase/firestore';
import { ItemCount } from './itemCount';
import { ItemsContext } from '../context/ItemsContext';

export const ItemDetailContainer = () => {
    const [item,setItem]= useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const {addItem} = useContext(ItemsContext)

    // useEffect(()=>{
    //     new Promise((resolve)=>setTimeout(()=>resolve(data),2000))
    //     .then((response)=>{
    //         const encontrado = response.find(i=>i.id===Number(id))
    //         setItem(encontrado)
    //     })
    //     .finally(()=>setLoading(false))
    // },[id])

    useEffect(()=>{
        const db = getFirestore()
        const ref = doc(db, "productos",id)
       
        getDoc(ref)
        .then((snapshot)=>{
            console.log(snapshot)
            setItem({...snapshot.data(),id:snapshot.id})
        })
        .finally(()=>setLoading(false))
    },[id])


    const onAdd = (cantidad)=>{
        addItem({...item,cantidad})
    }

    if(loading) return "ESPERE"
    return (
        <Container className='d-flex justify-content-center align-items-center vh-100'>
        <div className="text-center">
          <h1>Detalle del producto</h1>
          <br/>
          <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Codigo:</strong> {item.codigo}</ListGroup.Item>
              <ListGroup.Item><strong>Nombre:</strong> {item.name}</ListGroup.Item>
              <ListGroup.Item><strong>Descripcion:</strong> {item.description}</ListGroup.Item>
              <ListGroup.Item><strong>Precio:</strong> {item.price}</ListGroup.Item>
              <ListGroup.Item><strong>Categoria:</strong> {item.category}</ListGroup.Item>
              <ListGroup.Item><strong>En Stock:</strong> {item.stock}</ListGroup.Item>
              <ListGroup.Item><strong>Marca:</strong> {item.brand}</ListGroup.Item>
              <ListGroup.Item>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </Container>
      )
}