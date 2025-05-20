"use client";

import { useEffect, useState } from "react";

type NewsItem = {
  title: string;
  link: string;
  pubDate: string;
};

// export default function InvestmentNews() {
//   const [news, setNews] = useState<NewsItem[]>([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       const res = await fetch(
//         "https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&category=business&language=en"
//       );
//       const data = await res.json();
//       setNews(data.results.slice(0, 5));
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md">
//       <h2 className="text-xl font-bold mb-4">📢 Investment News</h2>
//       <ul className="space-y-2">
//         {news.map((item, index) => (
//           <li key={index}>
//             <a
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:underline text-sm"
//             >
//               {item.title}
//             </a>
//             <p className="text-xs text-gray-400">
//               {new Date(item.pubDate).toLocaleDateString()}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
