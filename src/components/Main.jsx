import React from 'react';
import { useState } from 'react';

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const text = `Lorem ipsum dolor, sit amet consectetur adipisicing elAperiam
            accusantium inventore sunt odio totam sed asperiores nostrum soluta
            odit optio harum molestiae quam ad, dolorem accusamus vitae! Non,
            aut exercitationem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            accusantium inventore sunt odio totam sed asperiores nostrum soluta
            odit optio harum molestiae quam ad, dolorem accusamus vitae! Non,
            aut exercitationem.`;

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='w-full h-[550px] absolute bg-gradient-to-r from-black' />
        {/* movie title */}
        <img
          src='./about04.png'
          alt=''
          className='w-full h-full object-cover'
        />

        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>Virus:32</h1>
          {/* button */}
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
              Play
            </button>
            <button className='border text-white mx-4  border-gray-300 py-2 px-5'>
              Watch Later
            </button>
          </div>
          <p className='text-gray-400 text-sm'>Released:2022-21-11</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 '>
            {truncateString(text, 200)}
          </p>
        </div>
      </div>
    </div>
  );
};
