import React from 'react';
import './Coin.css';

const Coin = ({coinImage, coinName, coinSymbol, coinPrice, coinVolume, coinPriceChange, coinMakertcap}) => {


    const convertValue = (value) => {
        let newValue = value;

        if (value > 1000000000000) {
            newValue = (value / 1000000000000).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + " trilhões";
        } else if (value > 1000000000) {
            newValue = (value / 1000000000).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + " bilhões";
        } else if (value > 1000000) {
            newValue = (value / 1000000).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + " milhões";
        } else if (value > 1000) {
            newValue = (value / 1000).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + " mil";
        }

        return newValue;
    }

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={coinImage} alt="crypto"/>
                    <h1>{coinName}</h1>
                    <p className="coin-symbol">{coinSymbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price" data-tooltip="Preço da criptomoeda">{coinPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    <p className="coin-volume" real-value={coinVolume.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} data-tooltip="Volume negociado nas últimas 24h">{convertValue(coinVolume)}</p>
                    {coinPriceChange < 0 ? (
                        <p className="coin-percent red" data-tooltip="Variação nas últimas 24h">{coinPriceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green" data-tooltip="Variação nas últimas 24h">{coinPriceChange != null ? (coinPriceChange.toFixed(2)) : (coinPriceChange)}%</p>
                    )}
                    <p className="coin-marketcap" real-value={coinMakertcap.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} data-tooltip="Valor total em mercado">{convertValue(coinMakertcap)}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
