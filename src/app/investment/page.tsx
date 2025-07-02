"use client";
import Head from 'next/head';
import React, { useState, useEffect, useMemo } from 'react';
import { DollarSign, ArrowUpRight, ArrowDownRight, PlusCircle, MinusCircle, BarChart2, ArrowUpDown, CirclePlus, CircleMinus } from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart, Area
  // CartesianGrid // Removed as per request for sleek design
} from 'recharts';
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

// const timeRanges = ["1D", "1W", "1M", "3M", "1Y", "ALL"];

interface ActionItem {
  title: string;
  // value: string;
  icon: React.ElementType;
  bgColor: string;
  textColor?: string;
  href: string; // Link for the summary card
}

const actionItemsData: ActionItem[] = [
  { title: 'Buy Investments', icon: PlusCircle, bgColor: 'bg-[#4f6cb0]', textColor: 'text-white', href: '/mortgage' },
  { title: 'Sell Investments', icon: MinusCircle, bgColor: 'bg-[#4f6cb0]', textColor: 'text-white', href: '/investment' },
  { title: 'Fund Account', icon: DollarSign, bgColor: 'bg-[#4f6cb0]', textColor: 'text-white', href: '/insurance' },
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







interface ChartData {
  name: string;
  value: number;
}

// Hard-written data for each time range with decimal amounts
const hardcodedData: { [key: string]: ChartData[] } = {
  '1W': [
    { name: 'Mon', value: 244800.55 },
    { name: 'Tue', value: 245100.82 },
    { name: 'Wed', value: 244950.31 },
    { name: 'Thu', value: 245300.90 },
    { name: 'Fri', value: 245050.15 },
    { name: 'Sat', value: 245200.73 },
    { name: 'Sun', value: 245400.05 },
  ],
  '1M': [
    { name: '1', value: 244500.23 }, { name: '2', value: 244700.45 }, { name: '3', value: 244650.10 },
    { name: '4', value: 244850.78 }, { name: '5', value: 244900.62 }, { name: '6', value: 244800.01 },
    { name: '7', value: 244980.50 }, { name: '8', value: 245050.93 }, { name: '9', value: 245100.28 },
    { name: '10', value: 245200.70 }, { name: '11', value: 245150.33 }, { name: '12', value: 245300.67 },
    { name: '13', value: 245250.41 }, { name: '14', value: 245380.99 }, { name: '15', value: 245450.08 },
    { name: '16', value: 245300.20 }, { name: '17', value: 245400.75 }, { name: '18', value: 245350.11 },
    { name: '19', value: 245500.88 }, { name: '20', value: 245600.03 }, { name: '21', value: 245550.60 },
    { name: '22', value: 245700.18 }, { name: '23', value: 245650.55 }, { name: '24', value: 245750.92 },
    { name: '25', value: 245800.37 }, { name: '26', value: 245700.68 }, { name: '27', value: 245850.04 },
    { name: '28', value: 245900.49 }, { name: '29', value: 245950.81 }, { name: '30', value: 246000.12 },
  ],
  '3M': [
    { name: '1', value: 243000.11 }, { name: '2', value: 243100.22 }, { name: '3', value: 243200.33 },
    { name: '4', value: 243300.44 }, { name: '5', value: 243400.55 }, { name: '6', value: 243500.66 },
    { name: '7', value: 243600.77 }, { name: '8', value: 243700.88 }, { name: '9', value: 243800.99 },
    { name: '10', value: 243900.10 }, { name: '11', value: 244000.21 }, { name: '12', value: 244100.32 },
    { name: '13', value: 244200.43 }, { name: '14', value: 244300.54 }, { name: '15', value: 244400.65 },
    { name: '16', value: 244500.76 }, { name: '17', value: 244600.87 }, { name: '18', value: 244700.98 },
    { name: '19', value: 244800.09 }, { name: '20', value: 244900.20 }, { name: '21', value: 245000.31 },
    { name: '22', value: 245100.42 }, { name: '23', value: 245200.53 }, { name: '24', value: 245300.64 },
    { name: '25', value: 245400.75 }, { name: '26', value: 245500.86 }, { name: '27', value: 245600.97 },
    { name: '28', value: 245700.08 }, { name: '29', value: 245800.19 }, { name: '30', value: 245900.30 },
    { name: '31', value: 246000.41 }, { name: '32', value: 246100.52 }, { name: '33', value: 246200.63 },
    { name: '34', value: 246300.74 }, { name: '35', value: 246400.85 }, { name: '36', value: 246500.96 },
    { name: '37', value: 246600.07 }, { name: '38', value: 246700.18 }, { name: '39', value: 246800.29 },
    { name: '40', value: 246900.40 }, { name: '41', value: 247000.51 }, { name: '42', value: 247100.62 },
    { name: '43', value: 247200.73 }, { name: '44', value: 247300.84 }, { name: '45', value: 247400.95 },
    { name: '46', value: 247500.06 }, { name: '47', value: 247600.17 }, { name: '48', value: 247700.28 },
    { name: '49', value: 247800.39 }, { name: '50', value: 247900.50 }, { name: '51', value: 248000.61 },
    { name: '52', value: 248100.72 }, { name: '53', value: 248200.83 }, { name: '54', value: 248300.94 },
    { name: '55', value: 248400.05 }, { name: '56', value: 248500.16 }, { name: '57', value: 248600.27 },
    { name: '58', value: 248700.38 }, { name: '59', value: 248800.49 }, { name: '60', value: 248900.60 },
    { name: '61', value: 249000.71 }, { name: '62', value: 248950.82 }, { name: '63', value: 249050.93 },
    { name: '64', value: 249150.04 }, { name: '65', value: 249250.15 }, { name: '66', value: 249350.26 },
    { name: '67', value: 249450.37 }, { name: '68', value: 249550.48 }, { name: '69', value: 249650.59 },
    { name: '70', value: 249750.70 }, { name: '71', value: 249850.81 }, { name: '72', value: 249950.92 },
    { name: '73', value: 250050.03 }, { name: '74', value: 250150.14 }, { name: '75', value: 250250.25 },
    { name: '76', value: 250350.36 }, { name: '77', value: 250450.47 }, { name: '78', value: 250550.58 },
    { name: '79', value: 250650.69 }, { name: '80', value: 250750.80 }, { name: '81', value: 250850.91 },
    { name: '82', value: 250950.02 }, { name: '83', value: 251050.13 }, { name: '84', value: 251150.24 },
    { name: '85', value: 251250.35 }, { name: '86', value: 251350.46 }, { name: '87', value: 251450.57 },
    { name: '88', value: 251550.68 }, { name: '89', value: 251650.79 }, { name: '90', value: 251750.90 },
  ],
  '1Y': [
    { name: 'Jan', value: 240000.12 },
    { name: 'Feb', value: 241500.56 },
    { name: 'Mar', value: 240800.34 },
    { name: 'Apr', value: 242500.91 },
    { name: 'May', value: 241900.77 },
    { name: 'Jun', value: 243500.21 },
    { name: 'Jul', value: 243000.65 },
    { name: 'Aug', value: 244700.08 },
    { name: 'Sep', value: 244122.42 },
    { name: 'Oct', value: 245800.89 },
    { name: 'Nov', value: 245200.17 },
    { name: 'Dec', value: 246500.50 },
  ],
  'All': [
    { name: '2020', value: 191234.00 },
    { name: '2021', value: 215343.75 },
    { name: '2022', value: 228430.30 },
    { name: '2023', value: 235043.90 },
    { name: '2024', value: 248232.10 },
    { name: '2025', value: 249999.25 },
  ],
};

const timeRanges = ['1W', '1M', '3M', '1Y', 'All'];
const mainColor = '#4f6cb0';
const secondaryColor = '#5976BA';
const labelColor = '#6b7280';

const PortfolioPerformanceLineChart: React.FC = () => {
  const [activeTimeRange, setActiveTimeRange] = useState<string>('All');
  const [isDesktop, setIsDesktop] = useState(false);

  // Directly access the hardcoded data based on the activeTimeRange
  const portfolioData = hardcodedData[activeTimeRange];

  // Calculate portfolioValue and earnings based on 'All' data, once.
  // These will be constant across all views.
  const portfolioValue = useMemo(() => {
    const allRangeData = hardcodedData['All'];
    return allRangeData.length > 0 ? allRangeData[allRangeData.length - 1].value : 0;
  }, []); // Empty dependency array, so this runs only once

  const earnings = useMemo(() => {
    const allRangeData = hardcodedData['All'];
    if (allRangeData.length > 0) {
      const latestValue = allRangeData[allRangeData.length - 1].value;
      const initialValue = allRangeData[0].value;
      return parseFloat((latestValue - initialValue).toFixed(2));
    }
    return 0;
  }, []); // Empty dependency array, so this runs only once

  // Calculate dynamic Y-axis domain based on current portfolioData
  const yDomain = useMemo(() => {
    if (!portfolioData || portfolioData.length === 0) {
      return [0, 100]; // Default domain if no data
    }
    const values = portfolioData.map(d => d.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const range = maxValue - minValue;

    // Add a small percentage buffer to the min and max
    const buffer = range * 0.10; // 10% buffer
    return [
      Math.floor(minValue - buffer), // Round down to nearest whole number
      Math.ceil(maxValue + buffer)   // Round up to nearest whole number
    ];
  }, [portfolioData]); // Recalculate if portfolioData changes (i.e., activeTimeRange changes)


  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const desktopFontSize = 16;
  const mobileFontSize = 12;
  const currentFontSize = isDesktop ? desktopFontSize : mobileFontSize;

  return (
    <div className="">
      <div className="relative flex h-64 lg:h-120 w-full rounded-t-2xl bg-white p-2 lg:p-4 text-lg">
      {/* border-t-2 border-x-2 border-white */}
        <div className="absolute top-4 left-4 z-10 text-[#4f6cb0] lg:mt-16 lg:ml-26">
          <p className="text-xl lg:text-3xl font-bold">
            Portfolio value: ${portfolioValue.toLocaleString()}
          </p>
          <p className="text-lg lg:text-2xl text-gray-500 -mt-1 lg:mt-0">
            Earnings: ${earnings.toLocaleString()}
          </p>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={portfolioData}
            margin={
              isDesktop
                ? {
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }
                : {
                    top: 100,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }
            }
          >
            {isDesktop && (
              <XAxis
                dataKey="name"
                tick={{ fill: labelColor, fontSize: currentFontSize, dy: 10 }}
                axisLine={{ stroke: labelColor }}
                tickLine={false}
                interval="preserveStartEnd"
                padding={{ left: 20, right: 20 }}
              />
            )}

            {isDesktop && (
              <YAxis
                tick={{ fill: labelColor, fontSize: currentFontSize, dx: 0 }}
                axisLine={{ stroke: labelColor }}
                tickLine={false}
                domain={yDomain} // Use the dynamically calculated domain here
                tickFormatter={(value: number) => `$${value.toFixed(0)}`} // Still format as whole for cleaner axis
                tickCount={3}
                orientation="left"
              />
            )}

            <Tooltip
              cursor={{
                stroke: secondaryColor,
                strokeWidth: 2,
                strokeDasharray: '3 3',
              }}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '0px solid #d1d5db',
                borderRadius: '0px',
                padding: '0px',
              }}
              labelStyle={{ color: labelColor, fontWeight: 'bold' }}
              itemStyle={{ color: mainColor }}
              formatter={(value: number) => `$${value.toFixed(2)}`} // Format value with decimals in tooltip
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#6f9e56"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: secondaryColor, stroke: mainColor, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex space-x-1 mb-0 bg-white rounded-b-2xl overflow-x-auto pb-1 hide-scrollbar justify-center  lg:pt-2 lg:pb-4 shadow-md">
      {/* border-b-2 border-x-2 border-white */}
        {timeRanges.map((range) => (
          <button
            key={range}
            onClick={() => setActiveTimeRange(range)}
            className={`
                             px-2 lg:px-4 py-2 text-sm lg:text-xl font-medium rounded-xl transition-all cursor-pointer
                             whitespace-nowrap focus:outline-none}
                             ${
                               activeTimeRange === range
                                 ? `bg-white text-white`
                                 : `text-gray-600 hover:text-gray-800 hover:bg-gray-100`
                             }
                           `}
            style={activeTimeRange === range ? { backgroundColor: mainColor, color: 'white' } : {}}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

interface AccountItemProps {
  accountName: string;
  balance: string;
  managed?: boolean;
}

const AccountItem: React.FC<AccountItemProps> = ({ accountName, balance, managed }) => {
  return (
      <div className='flex w-full'>
          <div className='w-3/4 lg:w-3/5 bg-white rounded-3xl h-10 lg:h-12 my-0.5 lg:my-0 opacity-95 flex justify-between items-center px-4 lg:px-4 text-sm lg:text-lg shadow-md'>
            <div className='flex items-center font-semibold'>
                {accountName}
                {managed && (
                    <div className='text-xs font-semibold text-slate-500 ml-1 lg:ml-1.5 px-1 py-0.5 bg-slate-200 rounded-2xl'>Managed</div>
                )}
            </div>
            <div>{balance}</div>
          </div>

          <div className='flex w-1/4 lg:w-2/5 space-x-2 pl-1 h-10 lg:h-12 font-semibold text-sm lg:text-lg '>
              <div className='w-1/2 px-2 py-0.5 rounded-3xl text-[#779649] bg-white hidden lg:flex justify-center items-center mx-2 shadow-md'>
                  Buy
              </div>
              

              <div className='w-1/2 px-2 py-0.5 rounded-3xl text-[#e67762] bg-white hidden lg:flex justify-center items-center shadow-md'>
                  Sell
              </div>

              <div className='w-full bg-white rounded-3xl flex justify-between px-3 items-center shadow-md space-x-2 lg:hidden'>
                  <button className=' text-[#779649]'>
                    <CirclePlus size={20} strokeWidth={2} />
                  </button>
                  <button className='text-[#e67762]'>
                    <CircleMinus size={20} strokeWidth={2} />
                  </button>
              </div>
          </div>
      </div>

  );
};



interface MarketDataItemProps {
  title: string;
  value: number;
  change: string; // e.g., "+6.10(0.04)" or "-6.10(0.04)"
  isPositiveChange: boolean;
}

const MarketDataItem: React.FC<MarketDataItemProps> = ({
  title,
  value,
  change,
  isPositiveChange,
}) => {
  const changeColorClass = isPositiveChange ? 'text-[#779649]' : 'text-[#e67762]';
  const ArrowIcon = isPositiveChange ? ArrowUpRight : ArrowDownRight;

  return (
    <div className='bg-white rounded-2xl shadow-md p-3 xl:p-3'>
      <div className='flex justify-between items-center'>
        <div className='2xl:text-xl text-gray-600'>{title}</div>
        <button className={changeColorClass}>
          <ArrowIcon size={20} strokeWidth={2} />
        </button>
      </div>
      <div className='2xl:text-lg text-gray-600'>{value.toFixed(2)}</div>
      <div className={changeColorClass}>{change}</div>
    </div>
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
          <section style={{borderColor: themeColor}} className="hidden mb-10 p-6 rounded-xl shadow-lg border-l-4">
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

          {/* LINE GRAPH AND VALUES */}
          <div className='lg:flex lg:space-x-4 space-y-4 lg:space-y-0'>

              <div className={`mb-0 lg:mb-0 rounded-3xl shadow-md bg-[#d4e5ef] p-2 lg:p-4 lg:w-2/3 ${futura.className}`}>
              {/* [#dee5ec] */}
                  <PortfolioPerformanceLineChart/>
              </div>

              <div className={`lg:w-1/3 rounded-3xl bg-[#88abda] mx-1 lg:mx-0 px-4 pt-3 pb-4 lg:py-4 lg:px-6 mt-4 lg:mt-0 ${futura.className} shadow-md`}>
              {/*  */}
                  <div className='text-center text-xl lg:text-xl font-semibold text-white'>
                      Your Investments
                  </div>
                  <div className='space-y-2 lg:space-y-4 mt-2 lg:mt-0'>
                      <AccountItem accountName="Chequing" balance="$5682.50" />
                      <AccountItem accountName="USD Savings" balance="$52000.00" />
                      <AccountItem accountName="TFSA" balance="$85682.80" managed />
                      <AccountItem accountName="RRSP" balance="$143652.15" />
                      <AccountItem accountName="Chequing" balance="$5682.50" />
                      <AccountItem accountName="USD Savings" balance="$52000.00" />
                      <AccountItem accountName="TFSA" balance="$85682.80" managed />
                      <AccountItem accountName="RRSP" balance="$143652.15" />
                  </div>
              </div>

          </div>
          
          {/* MARKET */}
          <div className={`lg:flex lg:space-x-4 space-y-4 lg:space-y-0 my-8 ${futura.className}`}>
              <div className='w-full lg:w-2/3 grid grid-cols-2 lg:grid-cols-6 gap-x-2 gap-y-2 lg:gap-x-2 lg:gap-y-2 bg-[#aed0ee] font-semibold p-3 lg:p-4 rounded-3xl'>
                <MarketDataItem
                  title='TSX COMP'
                  value={16432.50}
                  change='+6.10(0.04)'
                  isPositiveChange={true}
                />
                <MarketDataItem
                  title='S&P 500'
                  value={2997.05}
                  change='+6.10(0.04)'
                  isPositiveChange={true}
                />
                <MarketDataItem
                  title='DJIA'
                  value={2997.05}
                  change='+6.10(0.04)'
                  isPositiveChange={true}
                />
                <MarketDataItem
                  title='NASDAQ'
                  value={2997.05}
                  change='-6.10(0.04)'
                  isPositiveChange={false}
                />
                <MarketDataItem
                  title='GOLD'
                  value={2997.05}
                  change='-6.10(0.04)'
                  isPositiveChange={false}
                />
                <MarketDataItem
                  title='OIL (USD)'
                  value={2997.05}
                  change='+6.10(0.04)'
                  isPositiveChange={true}
                />
              </div>
              <div className='bg-slate-600 w-1/3 '></div>
          </div>

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