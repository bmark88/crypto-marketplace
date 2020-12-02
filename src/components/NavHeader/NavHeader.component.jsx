import React from 'react';

import FavouriteCoins from '../FavouriteCoins/FavouriteCoins.component';

import './NavHeader.styles.scss';

const NavHeader = (props) => (
  <nav className='nav-header'>
    <section className='favourite-coins container'>
      <FavouriteCoins coins={props.coins} />
    </section>
  </nav>
);

export default NavHeader;