"use client";
import Head from 'next/head';
import React, { useState } from 'react';
import { Home, Calendar, RefreshCw, DollarSign, Percent, FileText, PlusCircle, TrendingUp } from 'lucide-react';
// , ChevronRight
import { inter } from '../../fonts';
import Header from '../../components/Header'; // Adjusted path
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

const paymentHistoryData: PaymentHistoryItem[] = [
  { id: 'ph1', date: '2025-05-01', principal: 1200.50, interest: 750.25, total: 1950.75, balance: 348500 },
  { id: 'ph2', date: '2025-04-01', principal: 1195.30, interest: 755.45, total: 1950.75, balance: 349700.50 },
  { id: 'ph3', date: '2025-03-01', principal: 1190.10, interest: 760.65, total: 1950.75, balance: 350895.80 },
  { id: 'ph4', date: '2025-02-01', principal: 1184.90, interest: 765.85, total: 1950.75, balance: 352085.90 },
];

// Detail Item Component
const DetailItem: React.FC<{ icon: React.ElementType; label: string; value: string | number; accent?: boolean }> = ({ icon: Icon, label, value, accent }) => (
  <div className={`flex items-start space-x-3 p-3 rounded-lg ${accent ? 'bg-green-50' : ''}`}>
    <Icon className={`mt-1 ${accent ? themeAccentTextColor : 'text-gray-500'}`} size={20} />
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`font-semibold ${accent ? themeAccentTextColor : 'text-gray-800'}`}>{value}</p>
    </div>
  </div>
);

const MortgagePage = () => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <>
      <Head>
        <title>Mortgage Details - MyBank</title>
        <meta name="description" content="View your mortgage details and history." />
      </Head>
      <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
        <Header />
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Mortgage Details</h1>
              <p className="text-gray-600 mt-1">{mortgageData.propertyAddress}</p>
            </div>
            <NextLink href="/dashboard" className="text-sm text-indigo-600 hover:text-indigo-800">
                &larr; Back to Dashboard
            </NextLink>
          </div>

          {/* Summary Section */}
          <section style={{borderColor: themeColor}} className="mb-10 p-6 bg-white rounded-xl shadow-lg border-l-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DetailItem icon={Home} label="Current Balance" value={formatCurrency(mortgageData.currentBalance)} accent/>
              <DetailItem icon={DollarSign} label="Next Payment" value={`${formatCurrency(mortgageData.paymentAmount)} on ${new Date(mortgageData.nextPaymentDate).toLocaleDateString('en-CA')}`} />
              <DetailItem icon={Percent} label="Interest Rate" value={`${mortgageData.interestRate}%`} />
              <DetailItem icon={Calendar} label="Term End Date" value={new Date(mortgageData.termEndDate).toLocaleDateString('en-CA')} />
              <DetailItem icon={RefreshCw} label="Payment Frequency" value={mortgageData.paymentFrequency} />
              <DetailItem icon={TrendingUp} label="Original Loan Amount" value={formatCurrency(mortgageData.originalAmount)} />
            </div>
          </section>

          {/* Actions Section */}
          <section className="mb-10">
             <h2 className="text-xl font-semibold text-gray-700 mb-4">Manage Your Mortgage</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <button style={{ backgroundColor: themeColor }} className={`${themeTextColor} px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center shadow-md`}>
                <PlusCircle size={20} className="mr-2"/> Make an Extra Payment
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center shadow-sm">
                <FileText size={20} className="mr-2"/> View Mortgage Statement
              </button>
               <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center shadow-sm">
                <RefreshCw size={20} className="mr-2"/> Renewal Information
              </button>
            </div>
          </section>

          {/* Payment History Section */}
          <section className="mb-12 bg-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Payment History</h2>
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                {showHistory ? 'Hide History' : `Show Last ${paymentHistoryData.length} Payments`}
              </button>
            </div>
            {showHistory && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal Paid</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest Paid</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Payment</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remaining Balance</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paymentHistoryData.map((payment) => (
                      <tr key={payment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{new Date(payment.date).toLocaleDateString('en-CA')}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formatCurrency(payment.principal)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formatCurrency(payment.interest)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">{formatCurrency(payment.total)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formatCurrency(payment.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
             {!showHistory && <p className="text-center text-gray-500 py-4">Click to expand payment history.</p>}
          </section>

        </main>
        <footer className="py-10 mt-12 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MyBank. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default MortgagePage;