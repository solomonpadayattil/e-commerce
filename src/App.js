import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation/navigation.component';
import Home from './components/products/product-list.component.jsx'
import Cart from './components/cart/cart.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element ={<Home/>} />
        <Route path='cart' element ={<Cart/>} />
      </Route>
    </Routes>
  );
}

export default App;
