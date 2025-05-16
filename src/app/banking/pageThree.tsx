"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

type Account = {
  id: string;
  name: string;
  balance: number;
  available: number;
  accountNumber: string;
  type: 'chequing' | 'savings' | 'credit' | 'investment';
};

type Transaction = {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  account: string;
};

type Mortgage = {
  balance: number;
  interestRate: number;
  payment: number;
  nextPaymentDate: string;
  remainingTerm: string;
};

type Investment = {
  totalValue: number;
  dailyChange: number;
  annualReturn: number;
  breakdown: {
    stocks: number;
    bonds: number;
    mutualFunds: number;
    etfs: number;
  };
};

type Insurance = {
  type: 'home' | 'auto';
  policyNumber: string;
  renewalDate: string;
  premium: number;
  coverage: string;
};

export default function Dashboard() {
  const [timeOfDay, setTimeOfDay] = useState('');
  const [activeTab, setActiveTab] = useState('accounts');
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [mortgage, setMortgage] = useState<Mortgage | null>(null);
  const [investment, setInvestment] = useState<Investment | null>(null);
  const [insurances, setInsurances] = useState<Insurance[]>([]);

  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay('morning');
    else if (hour < 17) setTimeOfDay('afternoon');
    else setTimeOfDay('evening');

    // Mock data - in a real app, this would come from an API
    setAccounts([
      {
        id: '1',
        name: 'Everyday Chequing',
        balance: 5423.87,
        available: 5423.87,
        accountNumber: '•••• 4567',
        type: 'chequing',
      },
      {
        id: '2',
        name: 'High-Interest Savings',
        balance: 12500.0,
        available: 12500.0,
        accountNumber: '•••• 8910',
        type: 'savings',
      },
      {
        id: '3',
        name: 'Platinum Credit Card',
        balance: -1243.21,
        available: 8756.79,
        accountNumber: '•••• 3456',
        type: 'credit',
      },
      {
        id: '4',
        name: 'Investment Account',
        balance: 48765.43,
        available: 48765.43,
        accountNumber: '•••• 7890',
        type: 'investment',
      },
    ]);

    setTransactions([
      {
        id: '1',
        date: new Date(Date.now() - 86400000),
        description: 'Grocery Store',
        amount: -125.67,
        category: 'Food',
        account: 'Everyday Chequing',
      },
      {
        id: '2',
        date: new Date(Date.now() - 2 * 86400000),
        description: 'Salary Deposit',
        amount: 3500.0,
        category: 'Income',
        account: 'Everyday Chequing',
      },
      {
        id: '3',
        date: new Date(Date.now() - 3 * 86400000),
        description: 'Online Purchase',
        amount: -89.99,
        category: 'Shopping',
        account: 'Platinum Credit Card',
      },
      {
        id: '4',
        date: new Date(Date.now() - 4 * 86400000),
        description: 'Utility Bill',
        amount: -156.32,
        category: 'Bills',
        account: 'Everyday Chequing',
      },
      {
        id: '5',
        date: new Date(Date.now() - 5 * 86400000),
        description: 'Coffee Shop',
        amount: -4.95,
        category: 'Food',
        account: 'Platinum Credit Card',
      },
    ]);

    setMortgage({
      balance: 325000,
      interestRate: 3.25,
      payment: 1856.23,
      nextPaymentDate: 'June 1, 2023',
      remainingTerm: '22 years, 4 months',
    });

    setInvestment({
      totalValue: 48765.43,
      dailyChange: 1.23,
      annualReturn: 8.76,
      breakdown: {
        stocks: 45,
        bonds: 20,
        mutualFunds: 25,
        etfs: 10,
      },
    });

    setInsurances([
      {
        type: 'home',
        policyNumber: 'HM-••••-2023',
        renewalDate: 'May 15, 2024',
        premium: 1200,
        coverage: '$1,000,000',
      },
      {
        type: 'auto',
        policyNumber: 'AU-••••-2023',
        renewalDate: 'November 20, 2023',
        premium: 960,
        coverage: '$2,000,000',
      },
    ]);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-CA', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const getGreeting = () => {
    switch (timeOfDay) {
      case 'morning':
        return 'Good morning';
      case 'afternoon':
        return 'Good afternoon';
      case 'evening':
        return 'Good evening';
      default:
        return 'Good day';
    }
  };

  const getAccountIcon = (type: Account['type']) => {
    switch (type) {
      case 'chequing':
        return '🏦';
      case 'savings':
        return '💰';
      case 'credit':
        return '💳';
      case 'investment':
        return '📈';
      default:
        return '🏛️';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>My Banking Dashboard</title>
        <meta name="description" content="Your personal banking dashboard" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {getGreeting()}, <span className="text-blue-600">Alex</span>
              </h1>
              <p className="text-gray-500">Today is {new Date().toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                A
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <span className="text-sm font-medium">Pay Bills</span>
            </button>
            <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Make a Transfer</span>
            </button>
            <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="bg-purple-100 p-3 rounded-full mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Interac e-Transfer®</span>
            </button>
            <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="bg-yellow-100 p-3 rounded-full mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-sm font-medium">View Statements</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('accounts')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'accounts' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Accounts
            </button>
            <button
              onClick={() => setActiveTab('transactions')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'transactions' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Transactions
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'products' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              My Products
            </button>
          </nav>
        </div>

        {/* Accounts Tab */}
        {activeTab === 'accounts' && (
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">My Accounts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {accounts.map((account) => (
                <div key={account.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">{getAccountIcon(account.type)}</span>
                        <h3 className="text-lg font-medium">{account.name}</h3>
                      </div>
                      <p className="text-gray-500 text-sm">{account.accountNumber}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-6">
                    <p className="text-2xl font-semibold">{formatCurrency(account.balance)}</p>
                    {account.type === 'credit' && (
                      <p className="text-sm text-gray-500">Available: {formatCurrency(account.available)}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-lg font-medium text-gray-900 mb-4">My Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mortgage && (
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">🏠</span>
                        <h3 className="text-lg font-medium">Mortgage</h3>
                      </div>
                      <p className="text-gray-500 text-sm">Balance: {formatCurrency(mortgage.balance)}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Interest Rate</span>
                      <span>{mortgage.interestRate}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Payment</span>
                      <span>{formatCurrency(mortgage.payment)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Next Payment</span>
                      <span>{mortgage.nextPaymentDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Remaining Term</span>
                      <span>{mortgage.remainingTerm}</span>
                    </div>
                  </div>
                </div>
              )}

              {investment && (
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">📊</span>
                        <h3 className="text-lg font-medium">Investments</h3>
                      </div>
                      <p className="text-gray-500 text-sm">Total Value: {formatCurrency(investment.totalValue)}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Today's Change</span>
                      <span className={investment.dailyChange >= 0 ? 'text-green-600' : 'text-red-600'}>
                        {investment.dailyChange >= 0 ? '+' : ''}{investment.dailyChange}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Annual Return</span>
                      <span className={investment.annualReturn >= 0 ? 'text-green-600' : 'text-red-600'}>
                        {investment.annualReturn >= 0 ? '+' : ''}{investment.annualReturn}%
                      </span>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-sm font-medium mb-2">Asset Allocation</h4>
                      <div className="flex h-2 rounded-full overflow-hidden bg-gray-200">
                        <div className="bg-blue-500" style={{ width: `${investment.breakdown.stocks}%` }}></div>
                        <div className="bg-green-500" style={{ width: `${investment.breakdown.bonds}%` }}></div>
                        <div className="bg-purple-500" style={{ width: `${investment.breakdown.mutualFunds}%` }}></div>
                        <div className="bg-yellow-500" style={{ width: `${investment.breakdown.etfs}%` }}></div>
                      </div>
                      <div className="grid grid-cols-4 gap-2 mt-2 text-xs">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 mr-1"></div>
                          <span>Stocks</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 mr-1"></div>
                          <span>Bonds</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 mr-1"></div>
                          <span>MF</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-500 mr-1"></div>
                          <span>ETFs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">🛡️</span>
                      <h3 className="text-lg font-medium">Insurance</h3>
                    </div>
                    <p className="text-gray-500 text-sm">{insurances.length} active policies</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-4 space-y-4">
                  {insurances.map((insurance, index) => (
                    <div key={index} className="border-t pt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium capitalize">{insurance.type} Insurance</span>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded">{insurance.policyNumber}</span>
                      </div>
                      <div className="mt-2 space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Renewal</span>
                          <span>{insurance.renewalDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Premium</span>
                          <span>{formatCurrency(insurance.premium)}/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Coverage</span>
                          <span>{insurance.coverage}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Recent Transactions</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
            </div>
            <div className="bg-white shadow-sm rounded-xl overflow-hidden">
              <div className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full ${transaction.amount >= 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                          {transaction.amount >= 0 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-gray-500">
                            {formatDate(transaction.date)} • {transaction.category} • {transaction.account}
                          </p>
                        </div>
                      </div>
                      <div className={`font-medium ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatCurrency(transaction.amount)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">My Banking Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium mb-4">Credit Cards</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white">
                    <div>
                      <p className="font-medium">Platinum Credit Card</p>
                      <p className="text-xs opacity-80">•••• 3456</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">Balance</p>
                      <p className="font-medium">{formatCurrency(-1243.21)}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                    <div>
                      <p className="font-medium">Apply for New Card</p>
                      <p className="text-xs text-gray-500">Explore our credit card options</p>
                    </div>
                    <button className="text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium mb-4">Loans</h3>
                <div className="space-y-4">
                  {mortgage && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div>
                        <p className="font-medium">Home Mortgage</p>
                        <p className="text-xs text-gray-500">Balance: {formatCurrency(mortgage.balance)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">Rate</p>
                        <p className="font-medium">{mortgage.interestRate}%</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                    <div>
                      <p className="font-medium">Apply for Loan</p>
                      <p className="text-xs text-gray-500">Personal, auto, or home equity</p>
                    </div>
                    <button className="text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium mb-4">Investments</h3>
                {investment && (
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">Investment Portfolio</p>
                        <p className="font-medium">{formatCurrency(investment.totalValue)}</p>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Annual Return: {investment.annualReturn}%</span>
                        <span className={investment.dailyChange >= 0 ? 'text-green-600' : 'text-red-600'}>
                          {investment.dailyChange >= 0 ? '+' : ''}{investment.dailyChange}% today
                        </span>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                      <span className="font-medium">Open New Account</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium mb-4">Insurance</h3>
                <div className="space-y-4">
                  {insurances.map((insurance, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-medium capitalize">{insurance.type} Insurance</p>
                        <p className="text-sm bg-gray-200 px-2 py-1 rounded">{insurance.policyNumber}</p>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Renewal: {insurance.renewalDate}</span>
                        <span>{formatCurrency(insurance.premium)}/year</span>
                      </div>
                    </div>
                  ))}
                  <button className="w-full flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                    <span className="font-medium">Get Insurance Quote</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span className="text-xl font-bold text-gray-800">BankName</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Security</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Contact</a>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left text-xs text-gray-500">
            <p>© {new Date().getFullYear()} BankName. All rights reserved. Member FDIC.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
