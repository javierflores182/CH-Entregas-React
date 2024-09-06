import Carrito from '../assets/shopping-cart.png'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";


export const CartWidget= () => {
    const {items} =useContext(ItemsContext)
    const cantidad = items.reduce((acu,act)=>acu+act.cantidad,0)
    return (
        <Link to="/cart">
        <img src={Carrito} height={25}/>
        <span>{cantidad}</span>
        </Link>
    );
};