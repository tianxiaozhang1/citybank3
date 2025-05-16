"use client"
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { FiCreditCard, FiDollarSign, FiHome, FiTrendingUp, FiFileText, FiSend, FiShield, FiLogOut, FiSettings, FiHelpCircle, FiBell, FiArrowRight } from 'react-icons/fi';

const getGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good morning";
  } else if (currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening"; // Current time is 8:54 PM EDT
  }
};

interface Account {
  id: string;
  name: string;
  type: string;
  balance: number;
  currency: string;
  lastFourDigits: string;
  bgColor: string; // For card background variation
  textColor: string; // For primary text on card
  accentColor: string; // For icons or highlights on card
}

interface Mortgage {
  id: string;
  propertyAddress: string;
  remainingBalance: number;
  nextPaymentDate: string;
  nextPaymentAmount: number;
}

interface Investment {
  id: string;
  name: string;
  currentValue: number;
  changePercentage: number;
}

interface Insurance {
  id: string;
  type: 'Home' | 'Auto';
  policyNumber: string;
  premium: number;
  renewalDate: string;
  coverageDetails?: string;
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'debit' | 'credit';
  accountName?: string;
}

const DashboardPage = () => {
  const [greeting, setGreeting] = useState("Good day");
  const [userName, setUserName] = useState("Alex");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  const accounts: Account[] = [
    { id: '1', name: 'Chequing Account', type: 'Chequing', balance: 5830.75, currency: 'CAD', lastFourDigits: '1234', bgColor: 'bg-shallowCloud', textColor: 'text-taJian', accentColor: 'text-biCheng' },
    { id: '2', name: 'Savings Account', type: 'Savings', balance: 27500.00, currency: 'CAD', lastFourDigits: '5678', bgColor: 'bg-yunMen', textColor: 'text-taJian', accentColor: 'text-cuiQiu' },
    { id: '3', name: 'U.S. Dollar Account', type: 'Foreign Currency', balance: 3200.50, currency: 'USD', lastFourDigits: '9012', bgColor: 'bg-suCai', textColor: 'text-taJian', accentColor: 'text-rouLan' },
    { id: '4', name: 'Student Line of Credit', type: 'Credit Line', balance: -7500.00, currency: 'CAD', lastFourDigits: '3456', bgColor: 'bg-diLai', textColor: 'text-taJian', accentColor: 'text-zheHuang' },
  ];

  const mortgage: Mortgage = {
    id: 'm1',
    propertyAddress: '123 Main Street, Toronto, ON',
    remainingBalance: 375000.00,
    nextPaymentDate: 'June 1, 2025',
    nextPaymentAmount: 2100.50,
  };

  const investments: Investment[] = [
    { id: 'inv1', name: 'Global Equity Fund', currentValue: 45000.00, changePercentage: 1.2 },
    { id: 'inv2', name: 'Canadian Bond Index', currentValue: 15200.75, changePercentage: -0.3 },
    { id: 'inv3', name: 'Tech Innovators ETF', currentValue: 22000.00, changePercentage: 2.5 },
  ];

  const insurances: Insurance[] = [
    { id: 'ins1', type: 'Home', policyNumber: 'H-987654321', premium: 120.00, renewalDate: 'August 15, 2025', coverageDetails: 'Standard Home Coverage - $1M Liability' },
    { id: 'ins2', type: 'Auto', policyNumber: 'A-123456789', premium: 180.50, renewalDate: 'July 1, 2025', coverageDetails: 'Comprehensive Auto - 2023 Sedan' },
  ];

  const recentTransactions: Transaction[] = [
    { id: 't1', date: 'May 12, 2025', description: 'Hydro Bill Payment', amount: -120.50, type: 'debit', accountName: 'Chequing Account' },
    { id: 't2', date: 'May 11, 2025', description: 'E-transfer from Jane Doe', amount: 300.00, type: 'credit', accountName: 'Chequing Account' },
    { id: 't3', date: 'May 10, 2025', description: 'Grocery Shopping - Loblaws', amount: -85.27, type: 'debit', accountName: 'Chequing Account' },
    { id: 't4', date: 'May 9, 2025', description: 'Investment Contribution', amount: -500.00, type: 'debit', accountName: 'Savings Account' },
    { id: 't5', date: 'May 8, 2025', description: 'Online Purchase - Amazon.ca', amount: -49.99, type: 'debit', accountName: 'U.S. Dollar Account' },
    { id: 't6', date: 'May 7, 2025', description: 'Salary Deposit - Acme Corp', amount: 2500.00, type: 'credit', accountName: 'Chequing Account' },
    { id: 't7', date: 'May 6, 2025', description: 'Coffee Shop - Tim Hortons', amount: -5.75, type: 'debit', accountName: 'Chequing Account' },
  ];

  const formatCurrency = (amount: number, currency: string = 'CAD') => {
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: currency }).format(amount);
  };

  return (
    <>
      <Head>
        <title>My Banking Dashboard</title>
        <meta name="description" content="Your personal banking overview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-stone-50 text-taJian font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="p-4 sm:p-6 md:p-8 flex justify-between items-center sticky top-0 bg-stone-50/80 backdrop-blur-md z-50 border-b border-suCai">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-jiLan">{greeting}, {userName}!</h1>
              <p className="text-sm text-yuYangRan">Welcome back to your financial hub.</p>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button className="p-2 rounded-full hover:bg-shallowCloud transition-colors text-yuYangRan hover:text-biCheng">
                <FiBell size={22} />
              </button>
              <button className="p-2 rounded-full hover:bg-shallowCloud transition-colors text-yuYangRan hover:text-biCheng">
                <FiSettings size={22} />
              </button>
              <button className="p-2 rounded-full hover:bg-shallowCloud transition-colors text-yuYangRan hover:text-biCheng">
                <FiLogOut size={22} />
              </button>
            </div>
          </header>

          <main className="p-4 sm:p-6 md:p-8 space-y-8 md:space-y-10">
            {/* Account Summaries */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-jiLan">Your Accounts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {accounts.map((account) => (
                  <div key={account.id} className={`${account.bgColor} p-5 rounded-xl shadow-lg hover:shadow-suCai/80 transition-all duration-300 ease-in-out transform hover:-translate-y-1`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-lg font-medium ${account.textColor}`}>{account.name}</h3>
                      <FiCreditCard size={24} className={account.accentColor} />
                    </div>
                    <p className={`text-2xl sm:text-3xl font-bold ${account.accentColor}`}>{formatCurrency(account.balance, account.currency)}</p>
                    <p className={`text-xs ${account.textColor}/80 mt-1`}>{account.type} •••• {account.lastFourDigits}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Links */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-jiLan">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { label: 'Pay Bills', icon: FiDollarSign, color: 'text-cuiWei', bgColor: 'bg-cuiWei/10 hover:bg-cuiWei/20' },
                  { label: 'Make a Transfer', icon: FiSend, color: 'text-biCheng', bgColor: 'bg-biCheng/10 hover:bg-biCheng/20' },
                  { label: 'Interac e-Transfer®', icon: FiSend, color: 'text-youTanRui', bgColor: 'bg-youTanRui/10 hover:bg-youTanRui/20' },
                  { label: 'View Statements', icon: FiFileText, color: 'text-zheHuang', bgColor: 'bg-zheHuang/10 hover:bg-zheHuang/20' },
                ].map((link) => (
                  <button key={link.label} className={`p-4 rounded-xl shadow-md hover:shadow-lg flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 ${link.bgColor}`}>
                    <link.icon size={30} className={`${link.color} mb-2`} />
                    <span className={`text-sm font-medium ${link.color}`}>{link.label}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Other Financial Products */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mortgage Card */}
              <div className="bg-gaoYu p-6 rounded-xl shadow-lg hover:shadow-suCai/80 transition-shadow duration-300 ease-in-out">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-jiLan">Mortgage Overview</h3>
                  <FiHome size={24} className="text-tingWuLv" />
                </div>
                <p className="text-xs text-yuYangRan">{mortgage.propertyAddress}</p>
                <p className="text-2xl font-bold text-tingWuLv mt-1">{formatCurrency(mortgage.remainingBalance)}</p>
                <p className="text-sm text-taJian mt-2">Next Payment: {formatCurrency(mortgage.nextPaymentAmount)} on {mortgage.nextPaymentDate}</p>
                <button className="mt-4 text-sm text-tingWuLv hover:text-cuiQiu font-medium transition-colors flex items-center group">
                  View Details <FiArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Investment Portfolio Card */}
              <div className="bg-gaoYu p-6 rounded-xl shadow-lg hover:shadow-suCai/80 transition-shadow duration-300 ease-in-out">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-jiLan">Investment Portfolio</h3>
                  <FiTrendingUp size={24} className="text-youTanRui" />
                </div>
                <div className="space-y-2 mt-2">
                  {investments.slice(0,2).map(inv => (
                      <div key={inv.id} className="flex justify-between items-center text-sm">
                          <span className="text-yuYangRan">{inv.name}</span>
                          <div className="text-right">
                              <span className="font-semibold text-youTanRui">{formatCurrency(inv.currentValue)}</span>
                              <span className={`ml-2 font-medium ${inv.changePercentage >= 0 ? 'text-cuiWei' : 'text-luoShenZhu'}`}>
                                  {inv.changePercentage >= 0 ? '+' : ''}{inv.changePercentage}%
                              </span>
                          </div>
                      </div>
                  ))}
                </div>
                <button className="mt-4 text-sm text-youTanRui hover:text-zengQing font-medium transition-colors flex items-center group">
                  Manage Portfolio <FiArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Insurance Card */}
              <div className="bg-gaoYu p-6 rounded-xl shadow-lg hover:shadow-suCai/80 transition-shadow duration-300 ease-in-out">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-jiLan">Insurance Policies</h3>
                  <FiShield size={24} className="text-huangDan" />
                </div>
                 <div className="space-y-3 mt-2">
                  {insurances.map(ins => (
                      <div key={ins.id} className="text-sm">
                          <p className="text-taJian font-medium">{ins.type} Insurance <span className="text-xs text-yuYangRan">(Policy: {ins.policyNumber})</span></p>
                          <p className="text-huangDan">Premium: {formatCurrency(ins.premium)}/month</p>
                          <p className="text-xs text-yuYangRan">Renews: {ins.renewalDate}</p>
                      </div>
                  ))}
                </div>
                <button className="mt-4 text-sm text-huangDan hover:text-kuJin font-medium transition-colors flex items-center group">
                  View Policies <FiArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </section>

            {/* Recent Transactions */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-jiLan">Recent Transactions</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-suCai">
                <ul className="divide-y divide-shallowCloud">
                  {recentTransactions.map((transaction) => (
                    <li key={transaction.id} className="p-4 sm:p-5 flex justify-between items-center hover:bg-stone-50 transition-colors">
                      <div>
                        <p className="font-medium text-taJian">{transaction.description}</p>
                        <p className="text-xs text-yuYangRan">{transaction.date} {transaction.accountName ? `- ${transaction.accountName}` : ''}</p>
                      </div>
                      <p className={`font-semibold ${transaction.type === 'credit' ? 'text-cuiWei' : 'text-luoShenZhu'}`}>
                        {transaction.type === 'credit' ? '+' : ''}{formatCurrency(transaction.amount)}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="p-4 text-center bg-gaoYu/50">
                  <button className="text-sm text-biCheng hover:text-rouLan font-medium transition-colors">View All Transactions</button>
                </div>
              </div>
            </section>

            {/* Additional Services / Footer links */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-jiLan">Banking Services</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                      { label: 'Apply for Credit Card', icon: FiCreditCard, color: 'text-biCheng' },
                      { label: 'Open New Account', icon: FiDollarSign, color: 'text-cuiQiu' },
                      { label: 'Loan Applications', icon: FiTrendingUp, color: 'text-youTanRui' },
                      { label: 'Book Appointment', icon: FiHelpCircle, color: 'text-huangDan' },
                      { label: 'Security Center', icon: FiShield, color: 'text-taJian' },
                      { label: 'Contact Us', icon: FiHelpCircle, color: 'text-tealOne' },
                  ].map(service => (
                      <button key={service.label} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-transparent hover:border-suCai">
                          <service.icon size={28} className={`${service.color} mb-2`} />
                          <span className={`text-sm text-center text-jiLan`}>{service.label}</span>
                      </button>
                  ))}
              </div>
            </section>
          </main>

          <footer className="p-8 text-center text-yuYangRan border-t border-suCai mt-12">
            <p>&copy; {new Date().getFullYear()} Your Bank Name. All rights reserved.</p>
            <p className="text-xs mt-1">Member of CDIC. For illustrative purposes only.</p>
            <div className="mt-4 space-x-4">
              <a href="#" className="hover:text-biCheng transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-biCheng transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-biCheng transition-colors">Accessibility</a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;