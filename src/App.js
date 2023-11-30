import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation/navigation.component';
import Home from './components/products/product-list/product-list.component.jsx'
import CheckOut from './components/checkout/checkout.component';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element ={<Home/>} />
        <Route path='cart' element ={<CheckOut/>} />
      </Route>
    </Routes>
  );
}

export default App;
