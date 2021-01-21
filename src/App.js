import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coin from './Coin.js';
import './App.css';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=250&page=1&sparkline=false'
      ).then(res => {
        setCoins(res.data);
        // .sort((a, b) => parseFloat(b.total_volume) - parseFloat(a.total_volume))
      }).catch(error => console.log(error));

  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="coin-app">
      <div className="coins-search">
        <input type="text" placeholder="Buscar" className="coin-input" onChange={handleChange}/>
        <h1 className="coin-text">Busque uma criptomoeda</h1>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin 
            key={coin.id}
            coinName={coin.name} 
            coinImage={coin.image}
            coinSymbol={coin.symbol} 
            coinPrice={coin.current_price}
            coinVolume={coin.total_volume}
            coinPriceChange={coin.price_change_percentage_24h}
            coinMakertcap={coin.market_cap} 
          />
        )
      })}
    </div>
  );
}

export default App;
