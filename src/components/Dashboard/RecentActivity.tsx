import React from 'react';
import Card from '../UI/Card';
import { Transaction } from '../../lib/investTypes';

interface RecentActivityProps {
  transactions: Transaction[];
}

export default function RecentActivity({ transactions }: RecentActivityProps) {
  const formatTransaction = (tx: Transaction) => {
    const date = new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const time = new Date(tx.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    let description = tx.description;
    let amountClass = 'text-gray-900 dark:text-gray-100';

    if (tx.type === 'BUY' || tx.type === 'SELL') {
      amountClass = tx.type === 'BUY' ? 'text-red-600' : 'text-green-600';
      description = `${tx.type === 'BUY' ? 'Bought' : 'Sold'} ${tx.quantity} shares of ${tx.ticker}`;
    } else if (tx.type === 'DIVIDEND' || tx.type === 'DEPOSIT') {
      amountClass = 'text-green-600';
    } else if (tx.type === 'WITHDRAWAL') {
      amountClass = 'text-red-600';
    }

    return (
      <div key={tx.id} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
        <div>
          <p className="font-medium">{description}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{date} at {time}</p>
        </div>
        <span className={`font-semibold ${amountClass}`}>
          {tx.type === 'BUY' || tx.type === 'WITHDRAWAL' ? '-' : '+'}
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Math.abs(tx.amount))}
        </span>
      </div>
    );
  };

  return (
    <Card title="Recent Activity">
      {transactions.length > 0 ? (
        <div className="space-y-2">
          {transactions.map(formatTransaction)}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 text-center py-4">No recent activity.</p>
      )}
      <button className="mt-4 w-full text-blue-600 dark:text-blue-400 hover:underline text-center">
        View All Transactions
      </button>
    </Card>
  );
}