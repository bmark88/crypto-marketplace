import { useState, useEffect } from 'react';

import './App.css';

import NavHeader from './components/NavHeader/NavHeader.component';
import AllCoins from './components/AllCoins/AllCoins.component';
import SelectedCoin from './components/SelectedCoin/SelectedCoin.component';

function App() {
  const [selectedCoin, setSelectedCoin] = useState();
  const [coinDetails, setCoinDetails] = useState();
  const [coins, setCoins] = useState();
  const [favoriteCoins, setFavoriteCoins] = useState([]);

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

  const handleFavorites = (coinImage, coinName) => {
    if (!favoriteCoins.includes(selectedCoin)) {
      
      setFavoriteCoins([...favoriteCoins, selectedCoin]);
      localStorage.setItem('favoriteCoins', JSON.stringify([favoriteCoins, {coinImage, coinName}]));
    }
  };

  return (
    <>
      <NavHeader coins={coins} />
      <AllCoins 
        onClick={handleClick} 
        coins={coins} 
      />
      <SelectedCoin 
        selectedCoin={selectedCoin} 
        coins={coins} 
        coinDetails={coinDetails}
        setFavorites={handleFavorites}
      />
    </>
  );
}

export default App;
