import { useContext,useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import ListGroup from 'react-bootstrap/ListGroup';

const valoresComprador={
    telefono:"",
    email:"",
    nombre:""
}

export const Cart =()=>{
    const [buyer,setBuyer]=useState(valoresComprador)
    const {items, removeItem, reset} = useContext(ItemsContext)

    const handleChange=(event)=>{
        setBuyer((prev)=>{
            return{
                ...prev,
                [event.target.nombre]:event.target.value
            }
        })
    }

    const total = items.reduce((acu,act)=>acu+act.price*act.cantidad,0)
    return (      
        <ListGroup variant="flush">
            <button onClick={reset}>Vaciar carrito</button>
            {items.map((item)=>{
                return (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <h2>{item.description}</h2>
                        <p>{item.cantidad}</p>
                        <p onClick={()=>removeItem(item.id)}>X</p>
                    </div>
                )
            })}

<br />
<div>Total Compra: {total} </div>
<br />
<form>
    <div>
        <label htmlFor="nombre">Nombre</label>
        <input type="{comprador.nombre}" name="nombre" onChange={handleChange} />
    </div>
    <div>
        <label htmlFor="telefono">Telefono</label>
        <input type="{comprador.telefono}" name="telefono" onChange={handleChange} />
    </div>
    <div>
        <label htmlFor="email">Email</label>
        <input type="{comprador.email}" name="email" onChange={handleChange} />
    </div>
    {/* <button onClick={Ordenar}> Comprar</button> */}
</form>
        {/* <ListGroup.Item><strong>Codigo:</strong>  {item.codigo}</ListGroup.Item>
        <ListGroup.Item><strong>Nombre:</strong>  {item.name}</ListGroup.Item>
        <ListGroup.Item><strong>Descripcion:</strong>  {item.description}</ListGroup.Item>
        <ListGroup.Item><strong>Precio:</strong>  {item.price}</ListGroup.Item>
        <ListGroup.Item><strong>Categoria:</strong>  {item.category}</ListGroup.Item>
        <ListGroup.Item><strong>En Stock:</strong>  {item.stock}</ListGroup.Item>
        <ListGroup.Item><strong>Marca:</strong>  {item.brand}</ListGroup.Item> */}
      </ListGroup>)
}