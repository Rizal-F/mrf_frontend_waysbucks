import Navbar from './component/Navbar'
import Jombotron from './component/Jombotron';
import ListProduct from './component/ListProduct';
import DetailProduct from './component/DetailProduct';
import Profil from './component/Profil';
import AddMenu from './component/Admin/AddMenu';
import AddMenuTopping from './component/Admin/AddMenuTopping';
import TableTransaction from './component/Admin/TableTransaction';
import Cart from './component/Cart';

import './styles/App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <Router>
      <Navbar isLogin={isLogin} isAdmin={isAdmin} onClick={() => setIsLogin(!isLogin)}  />
      <Routes>
        <Route path='/' element=
        {
          <div>
            <Jombotron />
            <ListProduct />
          </div>
        }/>
        <Route path='/profil' element=
        {
          <div>
            <Profil />
          </div>
        }/>
        <Route path='/my-cart' element=
        {
          <div>
            <Cart />
          </div>
        }/>
        <Route path='/detail-product' element=
        {
          <div>
            <DetailProduct />
          </div>
        }/>
        <Route path='/add-menu' element=
        {
          <div>
            <AddMenu />
          </div>
        }/>
        <Route path='/add-menu-topping' element=
        {
          <div>
            <AddMenuTopping />
          </div>
        }/>
        <Route path='/income-transaction' element=
        {
          <div>
            <TableTransaction />
          </div>
        }/>
          
      </Routes>
    </Router>
  );
}

export default App;
