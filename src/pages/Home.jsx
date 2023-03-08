import React from 'react';
import { Main } from '../components/Main';
import MovesList from '../components/MovesList';
import { Row } from '../components/Row';

export const Home = () => {
  return (
    <div>
      <Main />
      <Row title='Up Comping' color='text-red-900 ' />
      {/* move list */}
      <MovesList />
      <Row title='Pupilar' color='text-indigo-900' />
      {/* showcase */}
      <div className="bg-[url('/1.jpg')] h-[90vh] w-[100%] bg-no-repeat bg-center bg-cover">
        <div className='flex flex-col items-center justify-center h-screen  mx-auto px-10 '>
          <h2 className='text-white text-center text-5xl'>some text</h2>
          <p className='text-white font-semibold text-[18px] md:text-xl px-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est
            vero sequi assumenda deserunt id facere tenetur eveniet molestiae
            non sapiente atque, suscipit quos error magnam laboriosam,
            repudiandae esse nam!
          </p>
        </div>
      </div>
      <Row title='Trending' color='text-slate-100' />
      <Row title='Top Rated' color='text-green-900' />
      <Row title='Horror' color='text-red-900' />
    </div>
  );
};
