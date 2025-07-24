import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componenets/Navbar';
import Cart from './componenets/cart';
import Item from './componenets/item';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Item/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
