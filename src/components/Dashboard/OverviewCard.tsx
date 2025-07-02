import React from 'react';
import Card from '../UI/Card';

interface OverviewCardProps {
  title: string;
  value: number;
  change?: number;
  changeType?: 'positive' | 'negative' | 'neutral';
  currency?: string;
}

export default function OverviewCard({ title, value, change, changeType = 'neutral', currency = '$' }: OverviewCardProps) {
  const changeColor =
    changeType === 'positive'
      ? 'text-green-600 dark:text-green-400'
      : changeType === 'negative'
      ? 'text-red-600 dark:text-red-400'
      : 'text-gray-500 dark:text-gray-400';

  const formatValue = (num: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
  };

  return (
    <Card className="flex flex-col justify-between">
      <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <div className="mt-1">
        <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {formatValue(value)}
        </p>
        {change !== undefined && (
          <p className={`text-sm ${changeColor} mt-1`}>
            {change > 0 ? '↑' : change < 0 ? '↓' : ''} {formatValue(change)}
          </p>
        )}
      </div>
    </Card>
  );
}