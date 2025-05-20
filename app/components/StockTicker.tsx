// "use client";

// import { useEffect, useState } from "react";

// type Stock = {
//   symbol: string;
//   price: number;
// };

// const tickers = ["AAPL", "MSFT", "TSLA"];

// export default function StockTicker() {
//   const [stocks, setStocks] = useState<Stock[]>([]);

//   useEffect(() => {
//     const fetchStocks = async () => {
//       const results: Stock[] = [];

//       for (const ticker of tickers) {
//         const res = await fetch(
//           `https://api.twelvedata.com/price?symbol=${ticker}&apikey=YOUR_API_KEY`
//         );
//         const data = await res.json();
//         results.push({ symbol: ticker, price: parseFloat(data.price) });
//       }

//       setStocks(results);
//     };

//     fetchStocks();
//   }, []);

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md">
//       <h2 className="text-xl font-bold mb-4">📈 Real-Time Stocks</h2>
//       <ul className="space-y-2">
//         {stocks.map((stock) => (
//           <li key={stock.symbol} className="flex justify-between">
//             <span className="font-semibold">{stock.symbol}</span>
//             <span className="text-green-600">${stock.price.toFixed(2)}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
