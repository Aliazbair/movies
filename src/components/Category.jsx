import { MovieList } from '../data/movies';


export const Category = () => {
    
  return (
    <div>
      <div className='flex justify-center items-center space-x-3 flex-wrap gap-3'>
        {MovieList.slice(0,14).map(({ id, category }) => (
          <div
            key={id}
            className='shadow-sm shadow-indigo-500 p-1 hover:text-indigo-700  hover:scale-105 rounded  transition-all duration-300 cursor-pointer'
          >
            <span className='text-sm py-2 px-1 text-white'>{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
