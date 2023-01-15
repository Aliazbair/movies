import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className=' flex items-center justify-between p-4 z-[100] shadow-sm shadow-red-400 absolute w-full bg-gray-800'>
      <Link to='/'>
        <h1 className='text-4xl text-red-600 cursor-pointer'>NETFLIX</h1>
      </Link>
      <div>
        <Link
          to='/movies'
          className=' px-6 py-2 rounded cursor-pointer text-white'
        >
          Movies
        </Link>
        <button className='text-white pr-4'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
          Sing Up
        </button>
      </div>
    </div>
  );
}
