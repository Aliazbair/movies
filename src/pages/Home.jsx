import React from 'react';
import { Main } from '../components/Main';
import { Row } from '../components/Row';

export const Home = () => {
  return (
    <div>
      <Main />
      <Row title='Up Comping' />
      <Row title='Pupilar' />
      <Row title='Trending' />
      <Row title='Top Rated' />
      <Row title='Horror' />
    </div>
  );
};
