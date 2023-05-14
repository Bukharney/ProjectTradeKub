const basePath = "https://finnhub.io/api/v1";

export const getSearchResult = async (searchQuery) => {
  const url = `${basePath}/search?q=${searchQuery}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const msg = `An error has occured: ${response.status}`;
    throw new Error(msg);
  }

  return await response.json();
};

export const getStockDetails = async (symbol) => {
  const response = await fetch(
    `${basePath}/stock/profile2?symbol=${symbol}&token=${process.env.REACT_APP_API_KEY}`
  );

  if (!response.ok) {
    const msg = `An error has occured: ${response.status}`;
    throw new Error(msg);
  }

  return await response.json();
};

export const getStockQuote = async (symbol) => {
  const response = await fetch(
    `${basePath}/quote?symbol=${symbol}&token=${process.env.REACT_APP_API_KEY}`
  );

  if (!response.ok) {
    const msg = `An error has occured: ${response.status}`;
    throw new Error(msg);
  }

  return await response.json();
};

export const getStockCandle = async (symbol) => {
  const response = await fetch(
    `${basePath}/stock/candle?symbol=${symbol}&resolution=D&from=1572651390&to=1582911390&token=${process.env.REACT_APP_API_KEY}`
  );

  if (!response.ok) {
    const msg = `An error has occured: ${response.status}`;
    throw new Error(msg);
  }

  return await response.json();
};

export const getHistoricalData = async (symbol, resolution, from, to) => {
  const response = await fetch(
    `${basePath}/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`
  );

  if (!response.ok) {
    const msg = `An error has occured: ${response.status}`;
    throw new Error(msg);
  }

  return await response.json();
};
