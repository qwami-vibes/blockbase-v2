export const dollarConvert = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const euroConvert = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

export const poundConvert = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
    currencyDisplay: "narrowSymbol",
  }).format(price);
};

export const cedisConvert = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GHS",
    currencyDisplay: "narrowSymbol",
  }).format(price);
};

export const nairaConvert = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    currencyDisplay: "narrowSymbol",
  }).format(price);
};
