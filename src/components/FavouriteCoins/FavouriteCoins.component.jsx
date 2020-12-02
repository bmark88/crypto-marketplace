import React from 'react';

import './FavouriteCoins.styles.scss';

const FavouriteCoins = (props) => {
  const { favoriteCoins } = props;

  return (
    <>
      <h1>Favourite Coins</h1>
      {favoriteCoins.length === 0 ? <h2>No Favourite Coins Added</h2> : 
        <div className='fav-coin-list container'>
        {favoriteCoins.map((coin, idx) => 
          <div className='fav-coin-padding' key={idx}> {/* index should not be used as key, but is used temporarily to handle errors when the same fav coin is added  */}
            <div className='fav-coin'>
              <span>
                <img 
                  className='fav-coin-image' 
                  width='19px' 
                  height='19px' 
                  src={coin.coinImage}
                  alt='coin logo'
                />
                {coin.coinName}
              </span>
            </div>
          </div>
        )}
        </div>
      }
    </>
  );
};

export default FavouriteCoins;