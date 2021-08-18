
import React,{useState,useEffect} from "react";
import axios from 'axios';
import TableCoint from './Components/TableCoin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [coins, setCoins] = useState([]);

  const getData = async()=>{
  try {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    setCoins(res.data);
    console.log(res.data)
  
  } catch (error) {
    console.error(error);
  }
};

useEffect(()=>{
  getData();
},[])

  return (
    <div className="container">
    <TableCoint coins={coins}/>
      </div>
  );
}

export default App;
