import React from 'react';
import Card from '../UI/Card';
import ChartPlaceholder from '../UI/ChartPlaceholder';
import { PortfolioData } from '../../lib/investTypes';

interface PortfolioAllocationChartProps {
  data: PortfolioData['assetAllocation'];
}

export default function PortfolioAllocationChart({ data }: PortfolioAllocationChartProps) {
  // In a real application, you would use Chart.js, Recharts, or Nivo here.
  // Example for Chart.js:
  // const chartRef = useRef(null);
  // useEffect(() => {
  //   if (chartRef.current) {
  //     const ctx = chartRef.current.getContext('2d');
  //     new Chart(ctx, {
  //       type: 'doughnut',
  //       data: {
  //         labels: data.map(d => d.type),
  //         datasets: [{
  //           data: data.map(d => d.value),
  //           backgroundColor: ['#4299E1', '#63B3ED', '#A0AEC0', '#CBD5E0'],
  //         }],
  //       },
  //     });
  //   }
  // }, [data]);

  return (
    <Card title="Portfolio Allocation">
      <div className="h-64">
        {/* <canvas ref={chartRef}></canvas> */}
        <ChartPlaceholder title="Asset Allocation" height="h-full" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        {data.map((item, index) => (
          <div key={item.type} className="flex items-center">
            <span
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: ['#4299E1', '#63B3ED', '#A0AEC0', '#CBD5E0'][index % 4] }}
            ></span>
            {item.type}: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.value)}
          </div>
        ))}
      </div>
    </Card>
  );
}