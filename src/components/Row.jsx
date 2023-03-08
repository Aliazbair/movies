import React from 'react';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import MoviesCard from './MoviesCard';

export const Row = ({ title,color }) => {
  const [like, setLike] = useState(false);
  return (
    <>
      <h1 className={`text-white font-bold text-xl p-4 ${color}`}>{title}</h1>
      <div className='flex  relative items-center ml-5'>
        <div
          id={'slide'}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative snap-mandatory snap-x'
        >
          {/* loops through data */}
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </div>
      </div>
    </>
  );
};
