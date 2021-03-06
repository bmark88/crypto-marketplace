import { useState, useEffect } from 'react';

import './App.css';

import NavHeader from './components/NavHeader/NavHeader.component';
import AllCoins from './components/AllCoins/AllCoins.component';
import SelectedCoin from './components/SelectedCoin/SelectedCoin.component';

function App() {
  let storedCoins = []

  if (localStorage.getItem('favoriteCoins')) {
    storedCoins = JSON.parse(localStorage.getItem('favoriteCoins'))[0];
  }

  const [selectedCoin, setSelectedCoin] = useState();
  const [coinDetails, setCoinDetails] = useState();
  const [coins, setCoins] = useState();
  const [favoriteCoins, setFavoriteCoins] = useState(storedCoins);

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
    if (coins && selectedCoin) {
      setCoinDetails(coins.filter(coin => 
        coin.name.toLowerCase() === selectedCoin.toLowerCase())[0]
      )
    }
  }, [selectedCoin, coins]);

  const handleClick = (e) => {
    e.preventDefault();
    setSelectedCoin(e.target.innerText);
  };

  const handleAddToFavorites = (coinImage, coinName, coinSymbol) => {
    if (!favoriteCoins.filter(coin => coin.coinName === coinName)[0]) {
      setFavoriteCoins([...favoriteCoins, { coinImage, coinName, coinSymbol }]);
    }
  };

  const handleRemoveFromFavorites = (coinName) => {
    const favoriteCoinsAfterRemovedFavorite = favoriteCoins.filter(coin => coin.coinName !== coinName)
    setFavoriteCoins([...favoriteCoinsAfterRemovedFavorite]);
  };

  useEffect(() => {
    localStorage.setItem('favoriteCoins', JSON.stringify([favoriteCoins]));
  }, [favoriteCoins])

  return (
    <>
      <NavHeader 
        favoriteCoins={favoriteCoins} 
        removeFavoriteCoin={handleRemoveFromFavorites}
      />
      <AllCoins 
        onClick={handleClick} 
        coins={coins} 
      />
      <SelectedCoin 
        selectedCoin={selectedCoin} 
        coins={coins} 
        coinDetails={coinDetails}
        setFavorites={handleAddToFavorites}
      />
    </>
  );
}

export default App;
