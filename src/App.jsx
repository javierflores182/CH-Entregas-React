import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}> </Route>
        <Route path='/category/:id' element={<ItemListContainer/>}> </Route>
        <Route path='/item/:id' element={<ItemDetailContainer/>}> </Route>
        <Route path='*' element={404}> </Route>
      </Routes>
      {/* <ItemListContainer greeting="Bienvenid@ a nuestra tienda!"/> */}
    </BrowserRouter>
  )
}

export default App
