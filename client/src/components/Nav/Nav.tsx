import React from 'react';
import './nav.scss';

export const Nav = () => {
  return (
    <nav className='nav' id='nav'>
      <a className='nav-link' href='#add-transaction'>add</a>
      <a className='nav-link' href='#income'>income</a>
      <a className='nav-link' href='#expenses'>expenses</a>
    </nav>
  );
};
