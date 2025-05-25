import { useEffect, useState } from "react";

// 코인 리스트 보여주기 & 입력값을 BTC로 계산 챌린지
function App(){
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState(0);
    const [choose, setChoose] = useState();
    const onChange = (event) => setMoney(event.target.value); 
    const handleSelect = (event) => {
        setChoose(event.target.value);
    }; 
    // console.log(coins[0].quotes.USD.price);
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, [])
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>loading...</strong>
            : <div>
                <div>
                    <input type="number" value={money} onChange={onChange}/>USD
                </div>
                <select onChange={handleSelect}>
                    {coins.map((coin) => <option key={coin.id} value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)} 
                </select>  
                {money === 0 ? null : <div>구매할 수 있는 수량 : {(money/choose).toPrecision()}</div>}
            </div>
            }    
        </div>
    )
}

export default App;
