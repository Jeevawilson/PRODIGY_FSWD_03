import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='p-4 bg-blue-600 text-white flex justify-between'>
      <Link to='/'>Store</Link>
      <Link to='/cart'>Cart</Link>
    </nav>
  );
}
export default Navbar;