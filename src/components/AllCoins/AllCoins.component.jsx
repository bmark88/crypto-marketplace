import React from 'react';

import './AllCoins.styles.scss';


const AllCoins = (props) => {  
  const { onClick, coins } = props;

  return (
    <section className='all-coins container'> 
      <h3>All coins</h3>
      <div className='coin-chart'>
        <ul className='coin-list'>
          <li className='coin-header-name'>
            <h4 className='coin-name'>Name</h4>
            <h4 className='additional-details'>Total Supply</h4>
            <h4 className='additional-details'>Market Cap</h4>
            <h4>Current Price</h4>
          </li>
          {coins && coins.map(coin => {
            const { id, name, total_supply, market_cap, current_price } = coin;

            return (
              <li key={id}>
                <span className='coin-name' onClick={onClick}>{name ? name : 'N/A'}</span>
                <span className='additional-details'>
                  {total_supply ? total_supply : 'N/A'}
                </span>
                <span className='additional-details'>
                  {market_cap ? market_cap : 'N/A'}
                </span>
                <span>${current_price ? current_price : 'N/A'}</span>
              </li>
            )}
          )}
        </ul>
      </div>
    </section>
  );
};

export default AllCoins;