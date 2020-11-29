import React, { useEffect, useState } from 'react';

import './AllCoins.styles.scss';


const AllCoins = () => {  
  const [coins, setCoins] = useState({});
  
  const fetchCoins = async () => {
    return await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad')
      .then(res => res.json())
      .then(coins => setCoins(coins.map(coin => coin)))
      .catch(() => console.error('error with fetching coins'));
  };

  useEffect(() => {
    fetchCoins()
  }, []);

  console.log(coins);
  return (
    <section className='all-coins container'> 
      <h3>All coins</h3>
      <div className='coin-chart'>
        <ul className='coin-list'>
          <li>
            <h4>Name</h4>
            <h4 className='additional-details'>Total Supply</h4>
            <h4 className='additional-details'>Market Cap</h4>
            <h4>Current Price</h4>
          </li>
          {coins.slice(0, 5).map(coin => {
            const { id, name, total_supply, market_cap, current_price } = coin;

            return (
              <li key={id}>
                <span className='coin-name'>{name ? name : 'N/A'}</span>
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