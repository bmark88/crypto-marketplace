import React from 'react';

import FavouriteCoins from '../FavouriteCoins/FavouriteCoins.component';

import './NavHeader.styles.scss';

const NavHeader = (props) => (
  <nav className='nav-header'>
    <section className='favourite-coins container'>
      <FavouriteCoins 
        favoriteCoins={props.favoriteCoins} 
        coins={props.coins} 
        removeFavoriteCoin={props.removeFavoriteCoin}
      />
    </section>
  </nav>
);

export default NavHeader;