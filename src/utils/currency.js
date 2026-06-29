export const formatCurrency = (amount, currency = "INR") => {
  if (currency === "INR") {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  }
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
};

export const formatCompactCurrency = (amount) => {
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(amount % 1000 === 0 ? 0 : 1)}K`;
  return formatCurrency(amount);
};
