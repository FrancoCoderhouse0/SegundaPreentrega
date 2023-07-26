import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/itemListCointainer/itemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Error from './componentes/Erro404/Error';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';

function App() {
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
    <div className="App">
          <NavBar/>
          <Routes>
            <Route path='' element={<ItemListContainer greeting={"Bienvenidos"}/>}></Route>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting={"Bienvenidos"}/>}></Route>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}></Route>
            <Route path='*' element={<Error/>}></Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
      </div>

      </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
