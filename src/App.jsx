import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/itemListCointainer/itemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Error from './componentes/Erro404/Error';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
          <NavBar/>
          <Routes>
            <Route path='' element={<ItemListContainer greeting={"Bienvenidos"}/>}></Route>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting={"Bienvenidos"}/>}></Route>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}></Route>
            <Route path='*' element={<Error/>}></Route>
            
          </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App;
