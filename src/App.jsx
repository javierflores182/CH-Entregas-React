import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Provider } from './context/ItemsContext';
import { Cart } from './components/cart';

function App() {

  return (
    <Provider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}> </Route>
        <Route path='/category/:id' element={<ItemListContainer/>}> </Route>
        <Route path='/item/:id' element={<ItemDetailContainer/>}> </Route>
        <Route path='/cart' element={<Cart/>}> </Route>
        <Route path='*' element={404}> </Route>
      </Routes>
      {/* <ItemListContainer greeting="Bienvenid@ a nuestra tienda!"/> */}
    </BrowserRouter>
    </Provider>
  )
}

export default App
