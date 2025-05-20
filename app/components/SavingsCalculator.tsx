"use client";

import { useState } from "react";

export default function SavingsCalculator() {
  const [monthly, setMonthly] = useState(0);
  const [years, setYears] = useState(1);
  const [interest, setInterest] = useState(5);
  const [total, setTotal] = useState(0);

  const calculate = () => {
    const r = interest / 100 / 12;
    const n = years * 12;
    const futureValue = monthly * (((1 + r) ** n - 1) / r);
    setTotal(futureValue);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl text-white w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Savings Calculator</h2>
      <input
        type="number"
        placeholder="Monthly Savings"
        value={monthly}
        onChange={(e) => setMonthly(+e.target.value)}
        className="w-full p-2 mb-2 rounded-lg"
      />
      <input
        type="number"
        placeholder="Years"
        value={years}
        onChange={(e) => setYears(+e.target.value)}
        className="w-full p-2 mb-2 rounded-lg"
      />
      <input
        type="number"
        placeholder="Annual Interest Rate (%)"
        value={interest}
        onChange={(e) => setInterest(+e.target.value)}
        className="w-full p-2 mb-4 rounded-lg"
      />
      <button
        onClick={calculate}
        className="bg-blue-600 px-4 py-2 rounded-lg w-full"
      >
        Calculate
      </button>
      <p className="mt-4 text-lg">
        Total Savings: <strong>${total.toFixed(2)}</strong>
      </p>
    </div>
  );
}
