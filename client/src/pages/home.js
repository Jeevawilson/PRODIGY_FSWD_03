import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div className='p-4 grid grid-cols-1 sm:grid-cols-3 gap-4'>
      {products.map(product => (
        <div key={product._id} className='border p-2 rounded'>
          <img src={product.image} alt={product.name} className='h-40 w-full object-cover' />
          <h2 className='text-lg font-bold'>{product.name}</h2>
          <p>{product.description}</p>
          <p className='text-green-600'>₹{product.price}</p>
          <Link to={`/product/${product._id}`} className='text-blue-500 underline'>View</Link>
        </div>
      ))}
    </div>
  );
}
export default Home;
