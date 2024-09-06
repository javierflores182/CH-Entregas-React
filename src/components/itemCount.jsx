import { useState } from "react"
import Button from 'react-bootstrap/Button';

export const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount]=useState(1);

    const handleIncrease = () =>{
        if (count < stock) 
            setCount((prev)=>prev+1)
    }

    const handleDecrease = () =>{
        if (count > 1) 
            setCount((prev)=>prev-1)
    }

    const handleAdd = () => {
        onAdd(count)
        setCount(1)
    }

    return (
        <div>
            <Button variant="outline-success    " onClick={handleIncrease}>+</Button>
            <strong>{count}</strong>
            <Button variant="outline-danger" onClick={handleDecrease}>-</Button>
            <br/>
            <Button onClick={handleAdd} >Comprar</Button>
        </div>
    )
}