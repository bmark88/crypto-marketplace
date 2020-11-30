import React from 'react';

import './SelectedCoin.styles.scss';

const SelectedCoin = (props) => {
  const { selectedCoin, coinDetails} = props;
  console.log({coinDetails, selectedCoin})

  return (
    <section className='selected-coin container'>
      {!selectedCoin && <h5>Select a coin to view more information</h5>}

      {
        selectedCoin && coinDetails && 
        <>
          <div className='selected-coin-details'>
            <span className='selected-coin-header'>
              <img src={`${coinDetails.image}`}/>
              <h4>{coinDetails.name}</h4>
            </span>
            <ul className='details-list'>
              <li><span>Current Price:</span>${coinDetails.current_price}</li>
              <li><span>Market Cap: </span>{coinDetails.market_cap}</li>
              <li><span>Low 24h: </span>{coinDetails.low_24h}</li>
              <li><span>High 24h: </span>{coinDetails.high_24h}</li>
              <li><span>Circulating Supply: </span>{coinDetails.circulating_supply}</li>
              <li><span>Total Supply: </span>{coinDetails.total_supply}</li>
              <li><span>Market Cap Rank: </span>{coinDetails.market_cap_rank}</li>
            </ul>
            <div className='add-to-favourites-button'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.8 0C3.5 0 0 3.5 0 7.8C0 12.1 3.5 15.6 7.8 15.6C12.1 15.6 15.6 12.1 15.6 7.8C15.6 3.5 12 0 7.8 0ZM7.8 14C4.4 14 1.6 11.2 1.6 7.8C1.6 4.4 4.4 1.6 7.8 1.6C11.2 1.6 14 4.3 14 7.8C14 11.3 11.2 14 7.8 14ZM11.8 7.8C11.8 8.2 11.5 8.6 11 8.6H8.5V11C8.5 11.4 8.2 11.8 7.7 11.8C7.2 11.8 7 11.5 7 11V8.5H4.5C4 8.5 3.7 8.2 3.7 7.8C3.7 7.4 4 7 4.5 7H7V4.5C7 4 7.3 3.7 7.8 3.7C8.3 3.7 8.5 4 8.5 4.5V7H11C11.5 7 11.8 7.3 11.8 7.8Z" fill="#4A90E2"/>
              </svg>
              <p>Add To Favourites</p>
            </div>
          </div>
          <div className='trade-options'>
            <div className='buy-sell-buttons'>
              <button>Buy</button>
              <button>Sell</button>
            </div>
            <div className='trade-selectors'>
              <div>Select Trade Currency (DROPDOWN)</div>
              <div>Amount (DROPDOWN)</div>
              <button>Submit</button>
            </div>
          </div>
        </>
      }
    </section>
  );
};

export default SelectedCoin;