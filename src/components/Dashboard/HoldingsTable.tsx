import React from 'react';
import Card from '../UI/Card';
import Table from '../UI/Table';
import { InvestmentHolding } from '../../lib/investTypes';

interface HoldingsTableProps {
  holdings: InvestmentHolding[];
}

export default function HoldingsTable({ holdings }: HoldingsTableProps) {
  const columns = [
    { key: 'ticker', header: 'Symbol' },
    { key: 'name', header: 'Company Name' },
    { key: 'quantity', header: 'Shares' },
    { key: 'avgCostBasis', header: 'Avg. Cost', render: (h: InvestmentHolding) => `$${h.avgCostBasis.toFixed(2)}` },
    { key: 'currentPrice', header: 'Last Price', render: (h: InvestmentHolding) => `$${h.currentPrice.toFixed(2)}` },
    { key: 'marketValue', header: 'Market Value', render: (h: InvestmentHolding) => `$${h.marketValue.toFixed(2)}` },
    {
      key: 'dailyChangePercent',
      header: 'Daily Change',
      render: (h: InvestmentHolding) => (
        <span className={h.dailyChangePercent >= 0 ? 'text-green-600' : 'text-red-600'}>
          {h.dailyChangePercent >= 0 ? '↑' : '↓'} {h.dailyChangePercent.toFixed(2)}%
        </span>
      ),
    },
    {
      key: 'totalGainLossPercent',
      header: 'Total G/L',
      render: (h: InvestmentHolding) => (
        <span className={h.totalGainLossPercent >= 0 ? 'text-green-600' : 'text-red-600'}>
          {h.totalGainLossPercent >= 0 ? '↑' : '↓'} {h.totalGainLossPercent.toFixed(2)}%
        </span>
      ),
    },
  ];

  return (
    <Card title="My Holdings">
      <Table<InvestmentHolding> data={holdings} columns={columns} />
    </Card>
  );
}