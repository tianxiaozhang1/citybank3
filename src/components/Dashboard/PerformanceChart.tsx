import React from 'react';
import Card from '../UI/Card';
import ChartPlaceholder from '../UI/ChartPlaceholder';
import { PortfolioData } from '../../lib/investTypes';

// interface PerformanceChartProps {
//   // data: PortfolioData['performanceHistory'];
// }

export default function PerformanceChart() {
  // { data }: PerformanceChartProps
  // In a real application, you would use Chart.js, Recharts, or Nivo here for a Line Chart.
  // Example data transformation for a Line Chart:
  // const chartLabels = data.map(d => new Date(d.date).toLocaleDateString());
  // const portfolioValues = data.map(d => d.value);
  // const benchmarkValues = data.map(d => d.benchmarkValue);

  return (
    <Card title="Portfolio Performance">
      <div className="flex justify-end space-x-2 mb-4">
        {['1D', '1W', '1M', '3M', 'YTD', '1Y', '5Y', 'MAX'].map((range) => (
          <button
            key={range}
            className="px-3 py-1 text-sm rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-200 dark:hover:bg-blue-600 hover:text-blue-800 dark:hover:text-white transition-colors"
          >
            {range}
          </button>
        ))}
      </div>
      <div className="h-80">
        <ChartPlaceholder title="Performance Over Time" height="h-full" />
      </div>
    </Card>
  );
}