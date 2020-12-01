import { useState, useEffect } from 'react';

import './App.css';

import NavHeader from './components/NavHeader/NavHeader.component';
import AllCoins from './components/AllCoins/AllCoins.component';
import SelectedCoin from './components/SelectedCoin/SelectedCoin.component';

function App() {
  const [selectedCoin, setSelectedCoin] = useState();
  const [coinDetails, setCoinDetails] = useState();
  const [coins, setCoins] = useState();

  const fetchCoins = async () => {
    return await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad')
      .then(res => res.json())
      .then(coins => setCoins(coins.map(coin => coin)))
      .catch(() => console.error('error with fetching coins'));
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  useEffect(() => {
    if (coins) {
      setCoinDetails(coins.filter(coin => 
        coin.name.toLowerCase() === selectedCoin.toLowerCase())[0]
      )
    }
  }, [selectedCoin]);

  const handleClick = (e) => {
    e.preventDefault();

    setSelectedCoin(e.target.innerText);
  };

  return (
    <>
      <NavHeader />
      <AllCoins 
        onClick={handleClick} 
        coins={coins} 
      />
      <SelectedCoin 
        selectedCoin={selectedCoin} 
        coins={coins} 
        coinDetails={coinDetails} 
      />
    </>
  );
}

export default App;
