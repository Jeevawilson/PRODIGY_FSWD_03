import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className='p-4'>
      <img src={product.image} alt={product.name} className='w-full max-w-sm mx-auto' />
      <h1 className='text-2xl font-bold'>{product.name}</h1>
      <p>{product.description}</p>
      <p className='text-green-600 text-xl'>₹{product.price}</p>
      <button className='bg-blue-500 text-white px-4 py-2 mt-2'>Add to Cart</button>
    </div>
  );
}
export default ProductPage;