export interface InvestmentHolding {
    id: string;
    ticker: string;
    name: string;
    quantity: number;
    avgCostBasis: number;
    currentPrice: number;
    marketValue: number;
    dailyChangeAmount: number;
    dailyChangePercent: number;
    totalGainLossAmount: number;
    totalGainLossPercent: number;
    dividendYield?: number;
  }
  
  export interface Transaction {
    id: string;
    type: 'BUY' | 'SELL' | 'DIVIDEND' | 'DEPOSIT' | 'WITHDRAWAL';
    date: string; // ISO string
    description: string;
    amount: number;
    ticker?: string;
    quantity?: number;
    price?: number;
  }
  
  export interface PortfolioData {
    totalValue: number;
    dailyChangeAmount: number;
    dailyChangePercent: number;
    availableCash: number;
    assetAllocation: { type: string; value: number }[];
    holdings: InvestmentHolding[];
    recentTransactions: Transaction[];
    performanceHistory: { date: string; value: number; benchmarkValue: number }[];
  }