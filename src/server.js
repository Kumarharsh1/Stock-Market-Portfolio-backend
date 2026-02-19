const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Market data for Indian stocks
const marketData = {
  'RELIANCE': { price: 2923.45, change: 12.50, pe: 28.5 },
  'TCS': { price: 3892.30, change: -8.20, pe: 32.1 },
  'HDFCBANK': { price: 1678.90, change: 5.75, pe: 19.8 },
  'INFY': { price: 1624.75, change: 10.30, pe: 26.4 },
  'ICICIBANK': { price: 1125.60, change: -2.45, pe: 17.2 },
  'BHARTIARTL': { price: 985.30, change: 8.90, pe: 35.6 },
  'ASIANPAINT': { price: 3120.45, change: -15.20, pe: 42.3 },
  'MARUTI': { price: 10850.90, change: 45.60, pe: 24.7 },
  'BAJFINANCE': { price: 6850.50, change: 25.30, pe: 31.2 },
  'LTIM': { price: 4850.90, change: -12.40, pe: 28.9 },
  'KPITTECH': { price: 1450.60, change: 8.90, pe: 26.8 },
  'TATATECH': { price: 1150.45, change: 5.60, pe: 22.4 },
  'DMART': { price: 3850.75, change: 15.20, pe: 38.5 },
  'TATACONSUM': { price: 1150.90, change: -3.40, pe: 21.3 },
  'PIDILITIND': { price: 2850.45, change: 12.80, pe: 42.1 },
  'TATAPOWER': { price: 350.60, change: 2.30, pe: 15.8 },
  'SUZLON': { price: 45.80, change: 1.20, pe: 45.6 },
  'ASTRAL': { price: 1850.90, change: -5.60, pe: 36.7 },
  'POLYCAB': { price: 4850.60, change: 22.40, pe: 39.2 },
  'CLEAN': { price: 1450.30, change: 7.80, pe: 33.4 },
  'DEEPAKNTR': { price: 2150.80, change: -9.20, pe: 29.8 },
  'SBILIFE': { price: 1450.90, change: 4.60, pe: 24.5 },
  'EASEMYTRIP': { price: 45.20, change: -0.80, pe: 52.3 }
};

const earningsDates = {
  'RELIANCE': '15 Feb 2024', 'TCS': '12 Feb 2024', 'HDFCBANK': '18 Feb 2024',
  'INFY': '10 Feb 2024', 'ICICIBANK': '20 Feb 2024', 'BHARTIARTL': '08 Feb 2024',
  'ASIANPAINT': '22 Feb 2024', 'MARUTI': '25 Feb 2024', 'BAJFINANCE': '28 Feb 2024',
  'LTIM': '05 Mar 2024', 'KPITTECH': '12 Mar 2024', 'TATATECH': '15 Mar 2024',
  'DMART': '18 Mar 2024', 'TATACONSUM': '20 Mar 2024', 'PIDILITIND': '22 Mar 2024',
  'TATAPOWER': '25 Mar 2024', 'SUZLON': '28 Mar 2024', 'ASTRAL': '02 Apr 2024',
  'POLYCAB': '05 Apr 2024', 'CLEAN': '08 Apr 2024', 'DEEPAKNTR': '10 Apr 2024',
  'SBILIFE': '12 Apr 2024', 'EASEMYTRIP': '15 Apr 2024'
};

function getMarketData(symbol) {
  const data = marketData[symbol];
  if (!data) return null;
  
  const variation = (Math.random() - 0.5) * 10;
  return {
    cmp: data.price + variation,
    change: data.change + (Math.random() - 0.5) * 2,
    peRatio: data.pe,
    latestEarnings: earningsDates[symbol] || '15 Jan 2024',
    source: 'Market Data'
  };
}

// Stock list
const stocks = [
  { id: '1', name: 'HDFC Bank', sector: 'Financials', purchasePrice: 1650.25, quantity: 100, exchange: 'NSE', symbol: 'HDFCBANK' },
  { id: '2', name: 'Bajaj Finance', sector: 'Financials', purchasePrice: 6850.50, quantity: 25, exchange: 'NSE', symbol: 'BAJFINANCE' },
  { id: '3', name: 'ICICI Bank', sector: 'Financials', purchasePrice: 950.60, quantity: 120, exchange: 'NSE', symbol: 'ICICIBANK' },
  { id: '4', name: 'Nazara Technologies', sector: 'Financials', purchasePrice: 850.30, quantity: 50, exchange: 'NSE', symbol: 'NAZARA' },
  { id: '5', name: 'HUDCO', sector: 'Financials', purchasePrice: 1250.75, quantity: 60, exchange: 'NSE', symbol: 'HUDCO' },
  { id: '6', name: 'Savani Financials', sector: 'Financials', purchasePrice: 450.20, quantity: 200, exchange: 'NSE', symbol: 'SAVANIFIN' },
  { id: '7', name: 'Infosys', sector: 'Technology', purchasePrice: 1450.80, quantity: 80, exchange: 'NSE', symbol: 'INFY' },
  { id: '8', name: 'Affle India', sector: 'Technology', purchasePrice: 1250.40, quantity: 40, exchange: 'NSE', symbol: 'AFFLE' },
  { id: '9', name: 'LTI Mindtree', sector: 'Technology', purchasePrice: 4850.90, quantity: 30, exchange: 'NSE', symbol: 'LTIM' },
  { id: '10', name: 'KPIT Technologies', sector: 'Technology', purchasePrice: 1450.60, quantity: 70, exchange: 'NSE', symbol: 'KPITTECH' },
  { id: '11', name: 'Tata Technologies', sector: 'Technology', purchasePrice: 1150.45, quantity: 90, exchange: 'NSE', symbol: 'TATATECH' },
  { id: '12', name: 'BLS International', sector: 'Technology', purchasePrice: 350.30, quantity: 200, exchange: 'NSE', symbol: 'BLS' },
  { id: '13', name: 'Tanla Platforms', sector: 'Technology', purchasePrice: 950.80, quantity: 60, exchange: 'NSE', symbol: 'TANLA' },
  { id: '14', name: 'Happiest Minds', sector: 'Technology', purchasePrice: 850.40, quantity: 80, exchange: 'NSE', symbol: 'HAPPSTMNDS' },
  { id: '15', name: 'DMart', sector: 'Consumer', purchasePrice: 3850.75, quantity: 40, exchange: 'NSE', symbol: 'DMART' },
  { id: '16', name: 'Tata Consumer', sector: 'Consumer', purchasePrice: 1150.90, quantity: 100, exchange: 'NSE', symbol: 'TATACONSUM' },
  { id: '17', name: 'Pidilite Industries', sector: 'Consumer', purchasePrice: 2850.45, quantity: 35, exchange: 'NSE', symbol: 'PIDILITIND' },
  { id: '18', name: 'Tata Power', sector: 'Power', purchasePrice: 350.60, quantity: 300, exchange: 'NSE', symbol: 'TATAPOWER' },
  { id: '19', name: 'KPI Green Energy', sector: 'Power', purchasePrice: 1150.30, quantity: 50, exchange: 'NSE', symbol: 'KPIGREEN' },
  { id: '20', name: 'Suzlon Energy', sector: 'Power', purchasePrice: 45.80, quantity: 1000, exchange: 'NSE', symbol: 'SUZLON' },
  { id: '21', name: 'Gensol Engineering', sector: 'Power', purchasePrice: 850.20, quantity: 60, exchange: 'NSE', symbol: 'GENSOL' },
  { id: '22', name: 'Hariom Pipe', sector: 'Pipes', purchasePrice: 550.40, quantity: 150, exchange: 'NSE', symbol: 'HARIOMPIPE' },
  { id: '23', name: 'Astral Limited', sector: 'Pipes', purchasePrice: 1850.90, quantity: 45, exchange: 'NSE', symbol: 'ASTRAL' },
  { id: '24', name: 'Polycab India', sector: 'Pipes', purchasePrice: 4850.60, quantity: 30, exchange: 'NSE', symbol: 'POLYCAB' },
  { id: '25', name: 'Clean Science', sector: 'Chemicals', purchasePrice: 1450.30, quantity: 40, exchange: 'NSE', symbol: 'CLEAN' },
  { id: '26', name: 'Deepak Nitrite', sector: 'Chemicals', purchasePrice: 2150.80, quantity: 35, exchange: 'NSE', symbol: 'DEEPAKNTR' },
  { id: '27', name: 'Fine Organic', sector: 'Chemicals', purchasePrice: 4850.40, quantity: 20, exchange: 'NSE', symbol: 'FINEORG' },
  { id: '28', name: 'Gravita India', sector: 'Chemicals', purchasePrice: 950.60, quantity: 80, exchange: 'NSE', symbol: 'GRAVITA' },
  { id: '29', name: 'SBI Life Insurance', sector: 'Insurance', purchasePrice: 1450.90, quantity: 50, exchange: 'NSE', symbol: 'SBILIFE' },
  { id: '30', name: 'Easy Trip Planners', sector: 'Travel', purchasePrice: 45.20, quantity: 2000, exchange: 'NSE', symbol: 'EASEMYTRIP' }
];

app.get('/api/portfolio', (req, res) => {
  try {
    console.log('Fetching portfolio data...');
    
    const stockDataMap = new Map();
    stocks.forEach(stock => {
      stockDataMap.set(stock.symbol, getMarketData(stock.symbol));
    });

    let totalInvestment = 0;
    let totalPresentValue = 0;

    const portfolioStocks = stocks.map(stock => {
      const stockData = stockDataMap.get(stock.symbol) || {};
      const cmp = stockData.cmp || stock.purchasePrice;
      const investment = stock.purchasePrice * stock.quantity;
      const presentValue = cmp * stock.quantity;
      const gainLoss = presentValue - investment;
      const gainLossPercentage = (gainLoss / investment) * 100;

      totalInvestment += investment;
      totalPresentValue += presentValue;

      return {
        ...stock,
        cmp: cmp,
        change: stockData.change || 0,
        peRatio: stockData.peRatio || 20,
        latestEarnings: stockData.latestEarnings || '15 Jan 2024',
        investment,
        presentValue,
        gainLoss,
        gainLossPercentage,
        portfolioPercentage: 0
      };
    });

    portfolioStocks.forEach(stock => {
      stock.portfolioPercentage = (stock.investment / totalInvestment) * 100;
    });

    const sectorMap = new Map();
    portfolioStocks.forEach(stock => {
      if (!sectorMap.has(stock.sector)) {
        sectorMap.set(stock.sector, {
          sector: stock.sector,
          totalInvestment: 0,
          totalPresentValue: 0,
          totalGainLoss: 0,
          stocks: []
        });
      }
      const sector = sectorMap.get(stock.sector);
      sector.totalInvestment += stock.investment;
      sector.totalPresentValue += stock.presentValue;
      sector.totalGainLoss += stock.gainLoss;
      sector.stocks.push(stock);
    });

    const sectorSummaries = Array.from(sectorMap.values()).map(sector => ({
      ...sector,
      gainLossPercentage: ((sector.totalPresentValue - sector.totalInvestment) / sector.totalInvestment) * 100
    }));

    res.json({
      stocks: portfolioStocks,
      sectorSummaries,
      summary: {
        totalInvestment,
        totalPresentValue,
        totalGainLoss: totalPresentValue - totalInvestment,
        totalGainLossPercentage: ((totalPresentValue - totalInvestment) / totalInvestment) * 100
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch portfolio data' });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log('=================================');
  console.log('Server running on port ' + PORT);
  console.log('=================================');
});
