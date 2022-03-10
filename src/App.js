import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);
  const [usd, setUsd] = useState(0);
  const [perUsd, setPerUsd] = useState(0);

  const onCoinChange = (event) =>
    setPerUsd(coinList[event.target.selectedIndex].quotes.USD.price);
  const onInputChange = (event) => setUsd(event.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoinList(json);
        setLoading(false);
        if (json.length > 0) {
          setPerUsd(json[0].quotes.USD.price);
        }
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coinList.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input
            type="number"
            onChange={onInputChange}
            min={0}
            defaultValue={0}
          />
          {` USD = ${usd * perUsd} `}
          <select onChange={onCoinChange}>
            {coinList.map((coin, index) =>
              index < 100 ? (
                <option key={coin.id}>
                  {coin.name} ({coin.symbol})
                </option>
              ) : null
            )}
          </select>
        </div>
      )}
    </div>
  );
}

export default App;
