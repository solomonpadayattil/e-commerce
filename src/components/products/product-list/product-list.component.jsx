import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from '../product-card/product-card.component';

import { ProductsContext } from '../../../contexts/products.context';
import { getProducts } from '../../../store/products/product.selector';
import { setProducts } from '../../../store/products/product.action';

import './product-list.component.scss';

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get('https://fakestoreapi.com/products?limit=100');
            console.log(response)
            dispatch(setProducts(response.data));
        }
        fetchData()

    }, []);
    const products = useSelector(getProducts);
    console.log(products)


  return (
    <div className='products-container'>
      {products.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

  );
};

export default Shop;