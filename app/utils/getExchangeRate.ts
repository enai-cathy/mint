// utils/getExchangeRate.ts
export async function getExchangeRate(from = "USD", to = "EUR") {
  const res = await fetch(
    `https://api.exchangerate.host/convert?from=${from}&to=${to}`
  );
  const data = await res.json();
  return data.result;
}
