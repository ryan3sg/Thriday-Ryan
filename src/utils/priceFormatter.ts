export const priceFormatter = (amt: string) => {
  const numericValue = parseFloat(amt.replace(/[^0-9.]/g, ""));
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(numericValue);
};
