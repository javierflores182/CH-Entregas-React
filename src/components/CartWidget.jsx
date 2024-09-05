import Carrito from '../assets/shopping-cart.png'
import { Link } from 'react-router-dom';

export const CartWidget= () => {
    return (
        <Link to="/cart">
        <img src={Carrito} height={25}/>
        <span>182</span>
        </Link>
    );
};