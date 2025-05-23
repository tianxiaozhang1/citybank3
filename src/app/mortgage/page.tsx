"use client";
import Head from 'next/head';
import React, { useState } from 'react';
import { Home, Calendar, RefreshCw, DollarSign, Percent, FileText, PlusCircle, TrendingUp, ChevronDown, ChartSpline, ChevronLeft } from 'lucide-react';
import { inter, lora } from '../../fonts';
import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
const futuraBold = localFont({ src: '../../fontFiles/FuturaCyrillicBold.ttf' })
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NextLink from 'next/link';

const themeColor = "#6d7844"; // Olive Green
const themeTextColor = "text-white"; // For buttons with themeColor bg
const themeAccentTextColor = "text-[#586037]"; // Darker shade of theme for text

const formatCurrency = (amount: number) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount);

interface MortgageDetails {
  propertyAddress: string;
  originalAmount: number;
  currentBalance: number;
  interestRate: number;
  termEndDate: string;
  paymentAmount: number;
  paymentFrequency: string;
  nextPaymentDate: string;
  paymentsMade: number;
  paymentsRemaining: number;
  lender: string;
}

interface PaymentHistoryItem {
  id: string;
  date: string;
  principal: number;
  interest: number;
  total: number;
  balance: number;
}

const mortgageData: MortgageDetails = {
  propertyAddress: "123 Willow Creek Rd, Toronto, ON",
  originalAmount: 450000,
  currentBalance: 348500,
  interestRate: 3.25,
  termEndDate: "2027-08-15",
  paymentAmount: 1950.75,
  paymentFrequency: "Monthly",
  nextPaymentDate: "2025-06-01",
  paymentsMade: 34,
  paymentsRemaining: 206,
  lender: "MyBank Financial",
};

// const paymentHistoryData: PaymentHistoryItem[] = [
//   { id: 'ph1', date: '2025-05-01', principal: 1200.50, interest: 750.25, total: 1950.75, balance: 348500 },
//   { id: 'ph2', date: '2025-04-01', principal: 1195.30, interest: 755.45, total: 1950.75, balance: 349700.50 },
//   { id: 'ph3', date: '2025-03-01', principal: 1190.10, interest: 760.65, total: 1950.75, balance: 350895.80 },
//   { id: 'ph4', date: '2025-02-01', principal: 1184.90, interest: 765.85, total: 1950.75, balance: 352085.90 },
// ];

// Detail Item Component

// Function to generate payment history data
const generatePaymentHistory = (
  initialBalance: number,
  monthlyPayment: number,
  annualInterestRate: number,
  numberOfMonths: number,
  startDate: Date
): PaymentHistoryItem[] => {
  const history: PaymentHistoryItem[] = [];
  let currentBalance = initialBalance;
  const monthlyInterestRate = annualInterestRate / 100 / 12;

  for (let i = 0; i < numberOfMonths; i++) {
    const interestPaid = currentBalance * monthlyInterestRate;
    let principalPaid = monthlyPayment - interestPaid;

    // Ensure principal paid does not exceed current balance
    if (principalPaid > currentBalance) {
      principalPaid = currentBalance;
    }
    
    currentBalance -= principalPaid;

    const paymentDate = new Date(startDate.getFullYear(), startDate.getMonth() - i, startDate.getDate());

    history.push({
      id: `ph${numberOfMonths - i}`,
      date: paymentDate.toISOString().split('T')[0],
      principal: principalPaid,
      interest: interestPaid,
      total: monthlyPayment,
      balance: Math.max(0, currentBalance), // Ensure balance doesn't go below zero
    });
  }
  return history.reverse(); // Reverse to show most recent first
};

// Generate 3 years (36 months) of payment history
const threeYearsAgo = new Date();
threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);
// Start date for generating history (e.g., 3 years before current next payment date)
const historyStartDate = new Date(new Date(mortgageData.nextPaymentDate).setMonth(new Date(mortgageData.nextPaymentDate).getMonth() - mortgageData.paymentsMade));

const paymentHistoryData: PaymentHistoryItem[] = generatePaymentHistory(
    mortgageData.originalAmount,
    mortgageData.paymentAmount,
    mortgageData.interestRate,
    36, // 3 years * 12 months/year
    new Date('2025-05-01') // A fixed date to ensure consistent history generation
);

const DetailItem: React.FC<{ icon: React.ElementType; label: string; value: string | number; accent?: boolean }> = ({ icon: Icon, label, value, accent }) => (
  <div className={`flex p-3 rounded-lg items-center space-x-4 lg:py-2 ${futura.className}`}>
    <div className={`p-2 xl:p-4 rounded-full border-2 border-stone-200 text-[#779649]`}>
      <Icon size={22} strokeWidth={1} className="lg:w-[42px] lg:h-[42px]" />
    </div>
    <div className="flex-1 min-w-0 px-2">
      <p className="text-sm lg:text-2xl font-semibold text-gray-600 truncate">{label}</p>
      <p className="text-xs lg:text-xl text-gray-500">
        {value}
      </p>
    </div>
  </div>
);

interface ActionItem {
  title: string;
  // value: string;
  icon: React.ElementType;
  bgColor: string;
  textColor?: string;
  href: string; // Link for the summary card
}

const actionItemsData: ActionItem[] = [
  { title: 'Make an Extra Payment', icon: PlusCircle, bgColor: 'bg-[#6d7844]', textColor: 'text-white', href: '/mortgage' },
  { title: 'View Mortgage Statement', icon: FileText, bgColor: 'bg-[#6d7844]', textColor: 'text-white', href: '/investment' },
  { title: 'Renewal Information', icon: RefreshCw, bgColor: 'bg-[#6d7844]', textColor: 'text-white', href: '/insurance' },
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

const MortgagePage = () => {
  // const [showHistory, setShowHistory] = useState(false);

  const [showHistory, setShowHistory] = useState(true); // Default to true to show 6 months
  const [currentPage, setCurrentPage] = useState(0); // 0 for initial 6 months, 1 for year 1, 2 for year 2, 3 for year 3
  const paymentsPerPage = 12; // 12 months per year for full history pages

  const initialSixMonths = paymentHistoryData.slice(-6); // Display the most recent 6 payments

  const paginatedHistory = () => {
    if (currentPage === 0) {
      return initialSixMonths;
    } else {
      const startIndex = (currentPage - 1) * paymentsPerPage;
      return paymentHistoryData.slice(startIndex, startIndex + paymentsPerPage);
    }
  };

  const totalPages = Math.ceil(paymentHistoryData.length / paymentsPerPage);

  const handleShowMoreClick = () => {
    if (currentPage === 0) {
      setCurrentPage(1); // Show first year when "Show More" is clicked from initial view
      setShowHistory(true);
    } else if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (currentPage === 1) {
      setCurrentPage(0); // Go back to initial 6 months view
    }
  };

  return (
    <>
      <Head>
        <title>Mortgage Details - MyBank</title>
        <meta name="description" content="View your mortgage details and history." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`min-h-screen bg-stone-50 ${inter.className}`}>
        <Header />
        <main className="container mx-auto p-4 px-6 lg:px-8 pt-6 lg:pt-8">
          <div className="mb-6 md:mb-12 flex justify-between items-center ">
            <div>
              <h1 className={`text-xl lg:text-4xl font-bold text-gray-800 ${lora.className}`}>Mortgage Details</h1>
              <p className={`text-gray-600 mt-1 lg:text-xl ${futura.className}`}>{mortgageData.propertyAddress}</p>
            </div>
            {/* <NextLink href="/dashboard" className={`text-sm lg:text-2xl text-indigo-600 hover:text-indigo-800 ${futura.className}`}>
                &larr; Back to Dashboard
            </NextLink> */}
          </div>

          {/* Summary Section */}
          <section id="summary-overview" className="mb-6 md:mb-12 ">
            <h2 className={`lg:text-lg xl:text-3xl font-semibold text-gray-700 mb-4 ${futura.className}`}>Mortgage Overview</h2>
            <div className="bg-white shadow-md rounded-xl p-3 lg:p-6 border-stone-200 border-2 py-3 lg:py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                <DetailItem icon={Home} label="Current Balance" value={formatCurrency(mortgageData.currentBalance)} accent/>
                <DetailItem icon={DollarSign} label="Next Payment" value={`${formatCurrency(mortgageData.paymentAmount)} on ${new Date(mortgageData.nextPaymentDate).toLocaleDateString('en-CA')}`} />
                <DetailItem icon={Percent} label="Interest Rate" value={`${mortgageData.interestRate}%`} />
                <DetailItem icon={Calendar} label="Term End Date" value={new Date(mortgageData.termEndDate).toLocaleDateString('en-CA')} />
                <DetailItem icon={RefreshCw} label="Payment Frequency" value={mortgageData.paymentFrequency} />
                <DetailItem icon={TrendingUp} label="Original Loan Amount" value={formatCurrency(mortgageData.originalAmount)} />
                </div>
            </div>
          </section>

          {/* Actions Section */}
          {actionItemsData.length > 0 && (
            <section id="summary-overview" className="mb-6 md:mb-12 ">
                <h2 className={`lg:text-lg xl:text-3xl font-semibold text-gray-700 ${futura.className}`}>Manage Your Mortgage</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 lg:pt-6">
                    {actionItemsData.map((item, index) => (
                      <ActionCard key={index} item={item} />
                    ))}
                </div>
            </section>
          )}

          {/* Payment History Section */}
          <div className="flex justify-between items-center mb-3 lg:mb-6 ">
            <h2 className={`lg:text-lg xl:text-3xl font-semibold text-gray-700 ${futura.className}`}>Payment History</h2>
            {/* <button
              onClick={() => setShowHistory(!showHistory)}
              className={`flex items-center text-sm lg:text-2xl font-medium text-gray-600 hover:text-gray-800 ${futura.className}`}
            >
              {showHistory ? 'Hide History' : `Show Last ${paymentHistoryData.length} Payments`} <ChevronDown size={18} className="ml-1" />
            </button> */}
            <div className="flex items-center">
              {currentPage > 0 && (
                <button
                  onClick={handlePrevPage}
                  className={`flex items-center text-sm lg:text-xl font-medium text-gray-600 hover:text-gray-800 cursor-pointer ${futura.className} mr-4`}
                >
                  <ChevronLeft size={18} className="mr-1" /> Previous
                </button>
              )}
              {currentPage < totalPages && (
                <button
                  onClick={handleShowMoreClick}
                  className={`flex items-center text-sm lg:text-xl font-medium text-gray-600 hover:text-gray-800 cursor-pointer ${futura.className}`}
                >
                  {currentPage === 0 ? 'Show More' : 'Next Year'} <ChevronDown size={18} className="ml-1" />
                </button>
              )}
                {currentPage > 0 && (
                <button
                  onClick={() => setCurrentPage(0)}
                  className={`flex items-center text-sm lg:text-xl font-medium text-gray-600 hover:text-gray-800 cursor-pointer ${futura.className} ml-4`}
                >
                  Hide Full History
                </button>
              )}
            </div>
          </div>

          {/* bg-white */}
          <section className="mb-12 p-4 lg:p-6 rounded-xl shadow-lg border-stone-200 border-2 ">
            <div className="flex justify-between items-center mb-4">
              {/* <h2 className={`lg:text-lg xl:text-3xl font-semibold text-gray-700 ${futura.className}`}>Payment History</h2> */}
              
            </div>
            {showHistory && (
              <div className="overflow-x-auto lg:overflow-x-visible">
                <div className={`min-w-full inline-block align-middle ${futura.className}`}>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 rounded-t-xl">
                      <tr>
                        <th scope="col" className="px-6 py-4 xl:py-6 text-left text-sm lg:text-2xl font-medium text-gray-500 tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-4 xl:py-6 text-left text-sm lg:text-2xl font-medium text-gray-500 tracking-wider">Principal Paid</th>
                        <th scope="col" className="px-6 py-4 xl:py-6 text-left text-sm lg:text-2xl font-medium text-gray-500 tracking-wider">Interest Paid</th>
                        <th scope="col" className="px-6 py-4 xl:py-6 text-left text-sm lg:text-2xl font-medium text-gray-500 tracking-wider">Total Payment</th>
                        <th scope="col" className="px-6 py-4 xl:py-6 text-left text-sm lg:text-2xl font-medium text-gray-500 tracking-wider">Remaining Balance</th>
                      </tr>
                    </thead>
                    <tbody className={`bg-white divide-y divide-gray-200`}>
                      {paginatedHistory().map((payment) => (
                        <tr key={payment.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 xl:py-6 lg:py-6 whitespace-nowrap text-sm lg:text-2xl text-gray-600">{new Date(payment.date).toLocaleDateString('en-CA')}</td>
                          <td className="px-6 py-4 xl:py-6 lg:py-6 whitespace-nowrap text-sm lg:text-2xl text-gray-600">{formatCurrency(payment.principal)}</td>
                          <td className="px-6 py-4 xl:py-6 lg:py-6 whitespace-nowrap text-sm lg:text-2xl text-gray-600">{formatCurrency(payment.interest)}</td>
                          <td className="px-6 py-4 xl:py-6 lg:py-6 whitespace-nowrap text-sm lg:text-2xl font-semibold text-gray-600">{formatCurrency(payment.total)}</td>
                          <td className="px-6 py-4 xl:py-6 lg:py-6 whitespace-nowrap text-sm lg:text-2xl text-gray-600">{formatCurrency(payment.balance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {!showHistory && <p className={`text-center text-gray-500 py-4 text-sm lg:text-2xl ${futura.className}`}>Click to expand payment history.</p>}
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default MortgagePage;