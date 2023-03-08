import { useState } from 'react';
import { MovieList as data } from '../data/movies';
import { Category } from './Category';

export const Movies = () => {
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.description.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.type.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.category.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className='container max-w-7sxl mx-auto px-10 py-20 '>
      <Category />
      {/* input search */}
      <div className='mt-5'>
        <input
          type='search'
          className='bg-gray-400 w-full px-2 py-3 rounded-sm outline-none placeholder:text-gray-200 text-white'
          placeholder='Search Here'
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
      <div className='grid gap-5  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-10 px-1'>
        {filteredData.map(
          ({ id, name, description, image, type, category }) => (
            <div
              key={id}
              className='shadow shadow-gray-200 p-s2 bg-gray-200 rounded overflow-hidden'
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
          )
        )}
      </div>
    </div>
  );
};
