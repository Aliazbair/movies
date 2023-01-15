import React from 'react';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export const Row = ({ title }) => {
  const [like, setLike] = useState(false);
  return (
    <>
      <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
      <div className='flex  relative items-center ml-5'>
        <div id={'slide'}>
          {/* loops through data */}

          <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[289px] inline-block cursor-pointer relative p-2'>
            <img className='w-full h-auto block' src='./web5.png' alt='' />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
              <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                NETFLIX
              </p>
              <p>
                {like ? (
                  <FaHeart className='absolute top-4 left-4 text-gray-300' />
                ) : (
                  <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
