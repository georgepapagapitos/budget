import React from 'react';
import './styles.scss';
import { Main } from './pages';
import { Nav } from './components';

export const App = () => {
  return (
    <div className='app'>
      <Nav />
      <h1 className='header'>Budget</h1>
      <Main />
    </div>
  );
};
