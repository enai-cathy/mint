// components/CurrencyWidget.tsx
"use client";

import { useEffect, useState } from "react";
// import { getExchangeRate } from "@/utils/getExchangeRate";

export default function CurrencyWidget() {
  const [rate, setRate] = useState<number | null>(null);

  // useEffect(() => {
  //   getExchangeRate("USD", "NGN").then(setRate);
  // }, []);

  return (
    <div className="bg-dark p-4 rounded-lg text-white">
      <p className="text-lg font-bold">USD to NGN</p>
      <p>{rate ? `₦${rate.toFixed(2)}` : "Loading..."}</p>
    </div>
  );
}
