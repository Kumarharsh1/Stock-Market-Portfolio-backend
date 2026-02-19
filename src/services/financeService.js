// Simulating Yahoo Finance and Google Finance APIs
const CACHE = new Map();
const CACHE_DURATION = 15000; // 15 seconds

// Generate realistic stock data
function generateStockData(symbol) {
  const basePrices = {
    'RELIANCE': 2850,
    'TCS': 3890,
    'HDFCBANK': 1670,
    'INFY': 1620,
    'ICICIBANK': 1120,
    'BHARTIARTL': 980,
    'ASIANPAINT': 3120,
    'MARUTI': 10850
  };
  
  const peRatios = {
    'RELIANCE': 28.5,
    'TCS': 32.1,
    'HDFCBANK': 19.8,
    'INFY': 26.4,
    'ICICIBANK': 17.2,
    'BHARTIARTL': 35.6,
    'ASIANPAINT': 42.3,
    'MARUTI': 24.7
  };

  const basePrice = basePrices[symbol] || 1500;
  const variation = (Math.random() - 0.5) * 50;
  const cmp = Number((basePrice + variation).toFixed(2));
  
  // Simulate P/E ratio with slight variation
  const peRatio = Number((peRatios[symbol] + (Math.random() - 0.5) * 2).toFixed(2));
  
  // Generate random earnings date within last 90 days
  const earningsDate = new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000);
  const latestEarnings = earningsDate.toISOString().split('T')[0];
  
  return { cmp, peRatio, latestEarnings };
}

async function fetchStockData(symbol) {
  const cached = CACHE.get(symbol);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const data = generateStockData(symbol);
  CACHE.set(symbol, { data, timestamp: Date.now() });
  
  return data;
}

async function fetchMultipleStockData(symbols) {
  const results = new Map();
  
  await Promise.all(
    symbols.map(async (symbol) => {
      try {
        const data = await fetchStockData(symbol);
        results.set(symbol, data);
      } catch (error) {
        console.error(`Failed to fetch ${symbol}:`, error);
      }
    })
  );

  return results;
}

module.exports = { fetchMultipleStockData };
