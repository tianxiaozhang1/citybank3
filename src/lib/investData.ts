import { PortfolioData } from './investTypes';


export const mockPortfolioData: PortfolioData = {
  totalValue: 125000.50,
  dailyChangeAmount: 750.25,
  dailyChangePercent: 0.61,
  availableCash: 5230.15,
  assetAllocation: [
    { type: 'Stocks', value: 70000 },
    { type: 'ETFs', value: 30000 },
    { type: 'Bonds', value: 15000 },
    { type: 'Cash', value: 5000 },
  ],
  holdings: [
    {
      id: 'h1',
      ticker: 'AAPL',
      name: 'Apple Inc.',
      quantity: 50,
      avgCostBasis: 150.00,
      currentPrice: 175.50,
      marketValue: 8775.00,
      dailyChangeAmount: 12.30,
      dailyChangePercent: 0.07,
      totalGainLossAmount: 1275.00,
      totalGainLossPercent: 17.00,
      dividendYield: 0.56,
    },
    {
      id: 'h2',
      ticker: 'MSFT',
      name: 'Microsoft Corp.',
      quantity: 30,
      avgCostBasis: 280.00,
      currentPrice: 295.20,
      marketValue: 8856.00,
      dailyChangeAmount: -5.00,
      dailyChangePercent: -0.02,
      totalGainLossAmount: 456.00,
      totalGainLossPercent: 5.42,
    },
    {
      id: 'h3',
      ticker: 'SPG',
      name: 'S&P 500 ETF',
      quantity: 100,
      avgCostBasis: 400.00,
      currentPrice: 405.00,
      marketValue: 40500.00,
      dailyChangeAmount: 200.00,
      dailyChangePercent: 0.50,
      totalGainLossAmount: 500.00,
      totalGainLossPercent: 1.25,
    },
  ],
  recentTransactions: [
    { id: 't1', type: 'BUY', date: '2025-05-24T10:30:00Z', description: 'Bought 5 AAPL shares', amount: -877.50, ticker: 'AAPL', quantity: 5, price: 175.50 },
    { id: 't2', type: 'DIVIDEND', date: '2025-05-23T14:00:00Z', description: 'Dividend from MSFT', amount: 15.00, ticker: 'MSFT' },
    { id: 't3', type: 'SELL', date: '2025-05-22T09:15:00Z', description: 'Sold 10 SPG shares', amount: 4050.00, ticker: 'SPG', quantity: 10, price: 405.00 },
  ],
  performanceHistory: [
    { date: '2025-01-01', value: 100000, benchmarkValue: 100000 },
    { date: '2025-02-01', value: 105000, benchmarkValue: 103000 },
    { date: '2025-03-01', value: 110000, benchmarkValue: 106000 },
    { date: '2025-04-01', value: 118000, benchmarkValue: 110000 },
    { date: '2025-05-01', value: 120000, benchmarkValue: 112000 },
    { date: '2025-05-25', value: 125000.50, benchmarkValue: 113500 },
  ],
};

// Simulate API call
export const fetchPortfolioData = async (): Promise<PortfolioData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPortfolioData);
    }, 500); // Simulate network delay
  });
};