import React from 'react';

import './FavouriteCoins.styles.scss';

const FavouriteCoins = (props) => {
  const { coins } = props;
  const favoriteCoinsList = JSON.parse(localStorage.getItem('favoriteCoins'));
  console.log(favoriteCoinsList)

  return (
    <>
      <h1>Favourite Coins</h1>
      {!favoriteCoinsList ? <h2>No Favourite Coins Added</h2> : 
        <div className='fav-coin-list'>
        {favoriteCoinsList.map(coin => 
          <div className='fav-coin' key={coin.coinName}>
            <span>
              <img 
                className='fav-coin-image' 
                width='19px' 
                height='19px' 
                src={coin.coinImage}
              />
              {coin.coinName}
            </span>
          </div>
        )}
        </div>
      }
    </>
  );
};

export default FavouriteCoins;