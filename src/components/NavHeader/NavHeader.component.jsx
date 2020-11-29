import React from 'react';

import FavouriteCoins from '../FavouriteCoins/FavouriteCoins.component';

import './NavHeader.styles.scss';

const NavHeader = () => (
  <nav className='nav-header'>
    <section className='favourite-coins container'>
      <FavouriteCoins />
    </section>
  </nav>
);

export default NavHeader;