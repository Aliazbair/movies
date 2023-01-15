import { useState } from 'react';
import { MovieList as data } from '../data/movies';
import { Category } from './Category';

export const Movies = () => {
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div className='container max-w-7xl mx-auto px-10 py-20 '>
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
      <div className='grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10'>
        {filteredData.map(
          ({ id, name, description, image, type, category }) => (
            <div
              key={id}
              className='shadow-sm shadow-red-200 p-2 bg-gray-800 rounded'
            >
              <img
                src='https://th.bing.com/th/id/OIP.Vg7gE_hwMujcoiqNbwekmAHaF7?w=228&h=182&c=7&r=0&o=5&pid=1.7'
                alt=''
                className='w-full object-cover'
              />
              <h2 className='text-gray-200 font-semibold font-mono text-sm md:text-xl '>
                {name}
              </h2>
              <p className='text-gray-400 text-xl truncate'>{description}</p>
              <div className='flex items-center justify-between flex-wrap '>
                <span className='text-red-800'>{type}</span>
                <span className='text-red-800'>{category}</span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
