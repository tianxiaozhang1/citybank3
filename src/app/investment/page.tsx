// app/dashboard/portfolio/page.tsx
"use client";
import Head from 'next/head';
import React, { useState } from 'react';
import { DollarSign, ArrowUpRight, ArrowDownRight, PlusCircle, MinusCircle, BarChart2  } from 'lucide-react';
// , Eye, FileText, RefreshCw
// TrendingUp, Briefcase, Calendar, 
import { inter, lora } from '../../fonts';
import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
// const futuraBold = localFont({ src: '../../fontFiles/FuturaCyrillicBold.ttf' })
import Header from '../../components/Header'; // Adjusted path
import NextLink from 'next/link';
// import Image from 'next/image'

const themeColor = "#32302f"; // Dark Grey/Charcoal
const themeTextColor = "text-white";
const themeAccentTextColor = "text-gray-800"; // For text on light backgrounds that needs emphasis based on this theme

const formatCurrency = (amount: number, symbol = true) => new Intl.NumberFormat('en-CA', { style: symbol ? 'currency' : 'decimal', currency: 'CAD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);
const formatPercentage = (value: number) => `${value.toFixed(2)}%`;

interface Holding {
  id: string;
  name: string;
  symbol: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  dayChange: number; // amount
  dayChangePercent: number;
  totalValue: number;
  totalGainLoss: number;
  totalGainLossPercent: number;
  logoUrl?: string; // Optional
}

interface PortfolioOverview {
  totalValue: number;
  dayGainLoss: number;
  dayGainLossPercent: number;
  totalReturn: number;
  totalReturnPercent: number;
  lastUpdated: string;
}

const portfolioOverviewData: PortfolioOverview = {
  totalValue: 47300.50,
  dayGainLoss: 150.25,
  dayGainLossPercent: 0.32,
  totalReturn: 2300.50,
  totalReturnPercent: 5.10,
  lastUpdated: "May 11, 2025, 4:00 PM ET"
};

const holdingsData: Holding[] = [
  { id: 'h1', name: 'Tech Giant Inc.', symbol: 'TECH', quantity: 50, avgPrice: 350.00, currentPrice: 385.50, dayChange: 5.20, dayChangePercent: 1.36, totalValue: 19275.00, totalGainLoss: 1775.00, totalGainLossPercent: 10.14, logoUrl: 'https://via.placeholder.com/32/FFA500/000000?Text=T' },
  { id: 'h2', name: 'Green Energy Co.', symbol: 'GRN', quantity: 200, avgPrice: 40.00, currentPrice: 38.50, dayChange: -0.75, dayChangePercent: -1.91, totalValue: 7700.00, totalGainLoss: -300.00, totalGainLossPercent: -3.75, logoUrl: 'https://via.placeholder.com/32/008000/FFFFFF?Text=G' },
  { id: 'h3', name: 'Global ETF Trust', symbol: 'GLOB', quantity: 100, avgPrice: 198.00, currentPrice: 203.25, dayChange: 1.15, dayChangePercent: 0.57, totalValue: 20325.50, totalGainLoss: 525.50, totalGainLossPercent: 2.65, logoUrl: 'https://via.placeholder.com/32/0000FF/FFFFFF?Text=E' },
];

const timeRanges = ["1D", "1W", "1M", "3M", "1Y", "ALL"];

interface ActionItem {
  title: string;
  // value: string;
  icon: React.ElementType;
  bgColor: string;
  textColor?: string;
  href: string; // Link for the summary card
}

const actionItemsData: ActionItem[] = [
  { title: 'Buy Investments', icon: PlusCircle, bgColor: 'bg-[#90826b]', textColor: 'text-white', href: '/mortgage' },
  { title: 'Sell Investments', icon: MinusCircle, bgColor: 'bg-[#90826b]', textColor: 'text-white', href: '/investment' },
  { title: 'Fund Account', icon: DollarSign, bgColor: 'bg-[#90826b]', textColor: 'text-white', href: '/insurance' },
];

const ActionCard: React.FC<{ item: ActionItem }> = ({ item }) => {
  const IconComponent = item.icon;
  return (
    <NextLink href={item.href} className={``}>
        <div className={`${futura.className} ${item.bgColor} ${item.textColor} rounded-xl py-2 lg:py-8 shadow-sm flex justify-center border-2 border-stone-200`}>
            <div className='flex w-full px-6 xl:px-8 2xl:px-12'>
                <div className='flex justify-center'>
                    <IconComponent size={88} strokeWidth={1} className='border-2 border-gray-300 rounded-full p-1 md:p-4 mt-1 md:mt-0 mb-1 w-[46px] h-[46px] md:w-[68px] md:h-[68px] xl:w-[88px] xl:h-[88px]'/>
                </div>
                <div className='items-center flex ml-2 md:ml-4'>
                    <div>
                        <div className='text-lg lg:text-xl 2xl:text-2xl'>{item.title}</div>
                        {/* <div className='text-lg lg:text-2xl font-semibold'>{item.value}</div> */}
                    </div>
                </div>
            </div>
        </div>
    </NextLink>
  );
};

const PortfolioPage = () => {
  const [activeTimeRange, setActiveTimeRange] = useState("1D");

  return (
    <>
      <Head>
        <title>Investment Portfolio - MyBank</title>
        <meta name="description" content="Track your investment portfolio performance and holdings." />
      </Head>
      <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
        <Header />
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          <div className="mb-8 flex justify-between items-center">
             <div>
                <h1 className={`text-xl lg:text-4xl font-bold text-gray-800 ${lora.className}`}>Investment Portfolio</h1>
                <p className={`text-gray-600 mt-1 lg:text-xl ${futura.className}`}>Last updated: {portfolioOverviewData.lastUpdated}</p>
            </div>
            {/* <NextLink href="/dashboard" className="text-sm text-indigo-600 hover:text-indigo-800">
                &larr; Back to Dashboard
            </NextLink> */}
          </div>

          {/* Overview Section */}
          <section style={{borderColor: themeColor}} className="mb-10 p-6 bg-white rounded-xl shadow-lg border-l-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <p className="text-sm text-gray-500">Total Portfolio Value</p>
                    <p className={`text-4xl font-bold ${themeAccentTextColor}`}>{formatCurrency(portfolioOverviewData.totalValue)}</p>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                    <p className={`text-lg font-semibold ${portfolioOverviewData.dayGainLoss >= 0 ? 'text-[#779649]' : 'text-red-600'}`}>
                        {portfolioOverviewData.dayGainLoss >= 0 ? '+' : ''}{formatCurrency(portfolioOverviewData.dayGainLoss)} ({formatPercentage(portfolioOverviewData.dayGainLossPercent)}) Today
                    </p>
                    <p className="text-sm text-gray-500">
                        Total Return: {formatCurrency(portfolioOverviewData.totalReturn)} ({formatPercentage(portfolioOverviewData.totalReturnPercent)})
                    </p>
                </div>
            </div>
             {/* Placeholder for Chart */}
            <div className="mb-6">
                <div className="flex space-x-1 mb-2 border-b">
                    {timeRanges.map(range => (
                        <button
                            key={range}
                            onClick={() => setActiveTimeRange(range)}
                            className={`px-3 py-2 text-sm font-medium rounded-t-md
                                ${activeTimeRange === range ? `${themeTextColor} ` : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                            style={activeTimeRange === range ? { backgroundColor: themeColor } : {}}
                        >
                            {range}
                        </button>
                    ))}
                </div>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                    <BarChart2 size={48} />
                    <p className="ml-2">Portfolio Performance Chart (Data for {activeTimeRange})</p>
                </div>
            </div>
          </section>

          {/* Actions Section */}
          <section className="hidden mb-10">
            {/* <h2 className={`lg:text-lg xl:text-3xl font-semibold text-gray-700  pb-3 lg:pb-6 ${futura.className}`}>Actions</h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <button style={{backgroundColor: themeColor}} className={`${themeTextColor} px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center shadow-md`}>
                <PlusCircle size={20} className="mr-2"/> Buy Investments
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center shadow-sm">
                <MinusCircle size={20} className="mr-2"/> Sell Investments
              </button>
               <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center shadow-sm">
                <DollarSign size={20} className="mr-2"/> Fund Account
              </button>
              
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 lg:pt-6 mb-6 lg:mb-12">
              {actionItemsData.map((item, index) => (
                <ActionCard key={index} item={item} />
              ))}
          </div>


          {/* Holdings Section */}
          <section className={`bg-white p-4 sm:p-6 rounded-xl shadow-lg ${futura.className}`}>
  <h2 className="text-xl font-semibold text-gray-700 mb-6">Your Holdings ({holdingsData.length})</h2>
  <div className="overflow-x-auto lg:overflow-x-visible">
    <div className={`min-w-full inline-block align-middle ${futura.className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 rounded-t-xl">
          <tr>
            <th scope="col" className="px-6 py-4 xl:py-6 text-left text-sm lg:text-xl font-medium text-gray-500 tracking-wider">Asset</th>
            <th scope="col" className="px-6 py-4 xl:py-6 text-left text-sm lg:text-xl font-medium text-gray-500 tracking-wider">Quantity</th>
            <th scope="col" className="px-6 py-4 xl:py-6 text-left text-sm lg:text-xl font-medium text-gray-500 tracking-wider">Avg. Price</th>
            <th scope="col" className="px-6 py-4 xl:py-6 text-left text-sm lg:text-xl font-medium text-gray-500 tracking-wider">Current Price</th>
            <th scope="col" className="px-6 py-4 xl:py-6 text-left text-sm lg:text-xl font-medium text-gray-500 tracking-wider">Day&apos;s Change</th>
            <th scope="col" className="px-6 py-4 xl:py-6 text-left text-sm lg:text-xl font-medium text-gray-500 tracking-wider">Market Value</th>
            <th scope="col" className="px-6 py-4 xl:py-6 text-left text-sm lg:text-xl font-medium text-gray-500 tracking-wider">Total Gain/Loss</th>
            <th scope="col" className="px-6 py-4 xl:py-6 text-left text-sm lg:text-xl font-medium text-gray-500 tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {holdingsData.map((holding) => (
            <tr key={holding.id} className={`hover:bg-gray-50 `}>
              <td className="px-6 py-4 xl:py-6 lg:py-6 whitespace-nowrap">
                <div className="flex items-center">
                  {/* {holding.logoUrl } */}
                  {/* <Image className="h-8 w-8 rounded-full mr-3" src={holding.logoUrl} alt={`${holding.name} logo`} /> */}
                  <div>
                    <div className="text-sm lg:text-lg font-medium text-gray-900">{holding.name}</div>
                    <div className="text-xs lg:text-base text-gray-500">{holding.symbol}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 xl:py-6 lg:py-6 whitespace-nowrap text-sm lg:text-lg text-gray-600">{holding.quantity}</td>
              <td className="px-6 py-4 xl:py-6 lg:py-6 whitespace-nowrap text-sm lg:text-lg text-gray-600">{formatCurrency(holding.avgPrice)}</td>
              <td className="px-6 py-4 xl:py-6 lg:py-6 whitespace-nowrap text-sm lg:text-lg text-gray-600">{formatCurrency(holding.currentPrice)}</td>
              <td className={`px-6 py-4 xl:py-6 lg:py-6 whitespace-nowrap text-sm lg:text-lg font-medium ${holding.dayChange >= 0 ? 'text-[#779649]' : 'text-[#e67762]'}`}>
                {holding.dayChange >= 0 ? <ArrowUpRight className="inline h-4 w-4 mr-1"/> : <ArrowDownRight className="inline h-4 w-4 mr-1"/>}
                {formatCurrency(holding.dayChange, false)} ({formatPercentage(holding.dayChangePercent)})
              </td>
              <td className="px-6 py-4 xl:py-6 lg:py-6 whitespace-nowrap text-sm lg:text-lg font-semibold text-gray-600">{formatCurrency(holding.totalValue)}</td>
              <td className={`px-6 py-4 xl:py-6 lg:py-6 whitespace-nowrap text-sm lg:text-lg font-medium ${holding.totalGainLoss >= 0 ? 'text-[#779649]' : 'text-[#e67762]'}`}>
                {formatCurrency(holding.totalGainLoss)} ({formatPercentage(holding.totalGainLossPercent)})
              </td>
              <td className="px-6 py-4 xl:py-6 lg:py-6 whitespace-nowrap text-sm lg:text-lg font-medium">
                <button className="text-stone-600 hover:text-stone-800 mr-2 border-2 border-stone-200 py-0.5 px-1 lg:px-3 lg:py-1 rounded-lg cursor-pointer">Trade</button>
                {/* <button className="text-gray-500 hover:text-gray-700"><Eye size={16}/></button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>
        </main>
        <footer className="py-10 mt-12 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MyBank. Investments are not CDIC insured.
          </div>
        </footer>
      </div>
    </>
  );
};

export default PortfolioPage;