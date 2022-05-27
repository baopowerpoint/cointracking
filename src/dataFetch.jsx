import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Table2 from "./table2";

const DataFetch = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    async function FetchData() {
      await axios.get("https://api.hotbit.io/api/v1/allticker").then((data) => {
        setCoinData(
          data.data.ticker.sort((a, b) => a.symbol.localeCompare(b.symbol))
        );
      });
    }
    FetchData();
  }, [coinData]);

  //   function fetchCoin() {
  //     const a = coinData.map((coin, i) => coin.base_volume);
  //     setCoinArr(a.sort((a, b) => a - b));
  //   }

  return (
    <div className="flex">
      <table className="table-auto border-separate border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600">Cặp</th>
            <th className="border border-slate-600">Giá</th>
            <th className="border border-slate-600">BaseVol</th>
            <th className="border border-slate-600">QuoteVol</th>
          </tr>
        </thead>
        <tbody>
          {coinData.map((coin, idx) => (
            <tr key={idx} c>
              <td className="border border-slate-600">{coin.symbol}</td>
              <td className="border border-slate-600">{coin.buy}</td>
              <td className="border border-slate-600">{coin.base_volume}</td>
              <td className="border border-slate-600">{coin.quote_volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Table2 />
    </div>
  );
};

export default DataFetch;
