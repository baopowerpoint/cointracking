import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Table2 = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    async function FetchData() {
      await axios.get("https://api.hotbit.io/api/v1/allticker").then((data) => {
        setCoinData(
          data.data.ticker.sort((a, b) => a.symbol.localeCompare(b.symbol))
        );
      });
    }
    setInterval(FetchData, 5000);
  }, [coinData]);
  return (
    <table>
      <thead>
        <tr>
          <th>colll</th>
        </tr>
      </thead>
      <tbody>
        {coinData &&
          coinData.map((coin, idx) => (
            <tr key={idx}>
              <th>{coin.base_volume}</th>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table2;
