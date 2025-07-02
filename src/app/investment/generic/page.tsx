'use client'; // This is a Client Component

import { useEffect, useState } from 'react';
import OverviewCard from '../../../components/Dashboard/OverviewCard';
import PortfolioAllocationChart from '../../../components/Dashboard/PortfolioAllocationChart';
import PerformanceChart from '../../../components/Dashboard/PerformanceChart';
import HoldingsTable from '../../../components/Dashboard/HoldingsTable';
import RecentActivity from '../../../components/Dashboard/RecentActivity';
import { fetchPortfolioData } from '../../../lib/investData';
import { PortfolioData } from '../../../lib/investTypes';
// import LoadingSpinner from '../../components/UI/LoadingSpinner'; // You'd create this component

export default function DashboardPage() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPortfolioData();
        setPortfolioData(data);
      } catch (err) {
        setError('Failed to fetch portfolio data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        {/* <LoadingSpinner /> */}
        <p className="ml-2 text-lg text-gray-600 dark:text-gray-300">Loading dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 dark:text-red-400 text-xl py-8">
        Error: {error} Please try again later.
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="text-center text-gray-600 dark:text-gray-300 text-xl py-8">
        No portfolio data available.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewCard
          title="Total Portfolio Value"
          value={portfolioData.totalValue}
          change={portfolioData.dailyChangeAmount}
          changeType={portfolioData.dailyChangeAmount >= 0 ? 'positive' : 'negative'}
        />
        <OverviewCard
          title="Daily Change (%)"
          value={portfolioData.dailyChangePercent}
          changeType={portfolioData.dailyChangePercent >= 0 ? 'positive' : 'negative'}
          currency="%" // Special handling for percentage
        />
        <OverviewCard
          title="Available Cash"
          value={portfolioData.availableCash}
        />
        <OverviewCard
          title="Total Gain/Loss (YTD)"
          value={portfolioData.totalValue - portfolioData.performanceHistory[0].value} // Simplified YTD calc
          changeType={portfolioData.totalValue - portfolioData.performanceHistory[0].value >= 0 ? 'positive' : 'negative'}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PortfolioAllocationChart data={portfolioData.assetAllocation} />
        <PerformanceChart data={portfolioData.performanceHistory} />
      </div>

      {/* Holdings and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <HoldingsTable holdings={portfolioData.holdings} />
        </div>
        <RecentActivity transactions={portfolioData.recentTransactions} />
      </div>

      {/* Future Sections: Watchlist, News, etc. */}
      {/*
      <Card title="My Watchlist">
        <p className="text-gray-500 dark:text-gray-400">Manage your watched stocks here.</p>
      </Card>
      <Card title="Market News">
        <p className="text-gray-500 dark:text-gray-400">Latest financial news updates.</p>
      </Card>
      */}
    </div>
  );
}