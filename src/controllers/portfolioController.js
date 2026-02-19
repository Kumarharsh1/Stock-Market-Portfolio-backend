const { stocks } = require('../data/portfolioData');
const { fetchMultipleStockData } = require('../services/financeService');

async function getPortfolio(req, res) {
  try {
    const symbols = stocks.map(s => s.symbol);
    const stockDataMap = await fetchMultipleStockData(symbols);

    let totalInvestment = 0;
    let totalPresentValue = 0;

    const portfolioStocks = stocks.map(stock => {
      const stockData = stockDataMap.get(stock.symbol);
      const investment = stock.purchasePrice * stock.quantity;
      const presentValue = stockData ? stockData.cmp * stock.quantity : investment;
      const gainLoss = presentValue - investment;
      const gainLossPercentage = (gainLoss / investment) * 100;

      totalInvestment += investment;
      totalPresentValue += presentValue;

      return {
        ...stock,
        ...stockData,
        investment,
        portfolioPercentage: 0,
        presentValue,
        gainLoss,
        gainLossPercentage
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

    const sectorSummaries = Array.from(sectorMap.values());

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
}

module.exports = { getPortfolio };
