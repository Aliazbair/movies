import React from 'react';
import { MovieList as data } from '../data/movies';
const MovesList = () => {
  return (
    <div className='max-w-sxl mx-auto px-10'>
      <h2 className='text-3xl text-center  py-10 bg-gradient-to-r text-transparent bg-clip-text from-yellow-800 to-emerald-400 uppercase tracking-[10px] md:tracking-[20px]'>
        some Movie
      </h2>
      <div className='grid gap-5  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-10 px-1'>
        {data
          .splice(0, 8)
          .map(({ id, name, description, image, type, category }) => (
            <div
              key={id}
              className='shadow bg-gradient-to-br from-red-400 to-indigo-700 rounded overflow-hidden'
            >
              <img
                src='./Metaverse.webp'
                alt=''
                className='w-full object-cover'
              />
              <h2 className='text-gray-700 font-semibold font-mono text-sm md:text-xl px-2'>
                {name}
              </h2>
              <p className='text-gray-400 text-xl truncates px-1'>
                {description}
              </p>
              {/* <div className='flex items-center justify-between flex-wrap px-2'>
                <span className='text-red-800 '>{type}</span>
                <span className='text-red-800'>{category}</span>
              </div> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovesList;
