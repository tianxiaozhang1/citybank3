"use client";
import Head from 'next/head';
import { Metadata } from 'next';

import { ChevronDown, Banknote, CreditCard, DollarSign, TrendingUp, ArrowDownCircle, ArrowUpCircle, Home, Briefcase, ShoppingBag, MoreHorizontal, Car, Send, FileText, User, Settings, LifeBuoy, ChartSpline } from 'lucide-react';
// FilePlus, LogOut, Bell, 
import React, { useState, useEffect } from 'react';
import NextLink from 'next/link'; // Renamed to avoid conflict if Link is imported from lucide or elsewhere

import { inter, lora } from '../../fonts';
// , aldrich, pt_sans_narrow
import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
// const futuraLight = localFont({ src: '../../fontFiles/FuturaCyrillicLight.ttf' })
// const futuraBold = localFont({ src: '../../fontFiles/FuturaCyrillicBold.ttf' })

// import pixelMap from '../../images/pixelmap2.png'

import Header from '../../components/Header'; 

// const CreditCardChip = () => {
//   return (
//       <div className='h-17 xl:h-24 pl-7 xl:pl-8 flex md:pt-3 lg:pt-2 xl:pt-4'>
//           <div className='h-7 w-9 xl:h-8 xl:w-10 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-md flex justify-between xl:mt-0.5 xl:ml-0.5'>
//               <div className='w-1/3 border-r-1.5 border-yellow-300'>
//                   <div className='h-1/4 border-b-1.5 border-yellow-300'></div>
//                   <div className='h-1/4 border-b-1.5 border-yellow-300'></div>
//                   <div className='h-1/4 border-b-1.5 border-yellow-300'></div>
//               </div>
//               <div className='w-1/3 border-yellow-300'>
//                   <div className='h-1/4'></div>
//                   <div className='h-1/4 border-l-1.5 border-t-1.5 border-yellow-400'></div>
//                   <div className='h-1/4 border-l-1.5 border-t-1.5 border-yellow-400'></div>
//                   <div className='h-1/4 border-l-1.5 border-t-1.5 border-yellow-400'></div>
//               </div>
//           </div>

//           <div className='xl:hidden mt-0.5 ml-0.5'>
//               <svg width="26" height="26" viewBox="0 0 24 24" fill="#dcdcdc" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M16.3 19.5002C17.4 17.2002 18 14.7002 18 12.0002C18 9.30024 17.4 6.70024 16.3 4.50024M12.7 17.8003C13.5 16.0003 14 14.0003 14 12.0003C14 10.0003 13.5 7.90034 12.7 6.10034M9.1001 16.1001C9.7001 14.8001 10.0001 13.4001 10.0001 12.0001C10.0001 10.6001 9.7001 9.10015 9.1001 7.90015M5.5 14.3003C5.8 13.6003 6 12.8003 6 12.0003C6 11.2003 5.8 10.3003 5.5 9.60034" stroke="#b7c1ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//           </div>

//           <div className='hidden xl:flex mt-0.5 ml-0.5'>
//               <svg width="32" height="32" viewBox="0 0 24 24" fill="#dcdcdc" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M16.3 19.5002C17.4 17.2002 18 14.7002 18 12.0002C18 9.30024 17.4 6.70024 16.3 4.50024M12.7 17.8003C13.5 16.0003 14 14.0003 14 12.0003C14 10.0003 13.5 7.90034 12.7 6.10034M9.1001 16.1001C9.7001 14.8001 10.0001 13.4001 10.0001 12.0001C10.0001 10.6001 9.7001 9.10015 9.1001 7.90015M5.5 14.3003C5.8 13.6003 6 12.8003 6 12.0003C6 11.2003 5.8 10.3003 5.5 9.60034" stroke="#b7c1ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//           </div>
//       </div>
//   )
// }

// Define interfaces for our data structures
interface Account {
  id: string;
  name: string;
  type: 'Chequing' | 'Savings' | 'Investment' | 'Credit Card';
  balance: number;
  currency: 'CAD' | 'USD';
  bgColor: string; // For card background
  textColor?: string; // Optional: for text on dark backgrounds
  icon: React.ElementType;
  href?: string; // Optional link for the account card
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  accountId: string;
  accountName?: string;
  category: 'Groceries' | 'Salary' | 'Utilities' | 'Entertainment' | 'Transfer' | 'Automotive' | 'Investment' | 'Other';
  icon: React.ElementType;
}

interface SummaryItem {
  title: string;
  value: string;
  icon: React.ElementType;
  bgColor: string;
  textColor?: string;
  href: string; // Link for the summary card
}

// Helper function to format currency
const formatCurrency = (amount: number, currency: string = 'CAD') => {
  return new Intl.NumberFormat('en-CA', { style: 'currency', currency }).format(amount);
};

// Data (removed "sample" from names)
const accountsData: Account[] = [
  { id: 'acc1', name: 'Everyday Chequing', type: 'Chequing', balance: 12530.75, currency: 'CAD', bgColor: 'bg-gradient-to-br from-[#106898] to-[#06436F]', textColor: 'text-white', icon: Banknote },
  { id: 'acc2', name: 'High-Interest Savings', type: 'Savings', balance: 85200.00, currency: 'CAD', bgColor: 'bg-gradient-to-br from-[#5D8351] to-[#4F794A]', textColor: 'text-white', icon: DollarSign },
  { id: 'acc3', name: 'Growth Portfolio', type: 'Investment', balance: 47300.50, currency: 'CAD', bgColor: 'bg-gradient-to-br from-[#D3A237] to-[#D08635]', textColor: 'text-white', icon: TrendingUp, href: '/investment' },
  { id: 'acc4', name: 'Platinum Rewards Card', type: 'Credit Card', balance: -1250.20, currency: 'CAD', bgColor: 'bg-gradient-to-br from-[#32302f] to-[#45465E]', textColor: 'text-white', icon: CreditCard },
];

const transactionsData: Transaction[] = [
  { id: 'txn1', date: '2025-05-10', description: 'Salary Deposit - Acme Corp', amount: 4500.00, accountId: 'acc1', category: 'Salary', icon: ArrowUpCircle },
  { id: 'txn2', date: '2025-05-09', description: 'Hydro Bill Payment', amount: -85.50, accountId: 'acc1', category: 'Utilities', icon: ArrowDownCircle },
  { id: 'txn3', date: '2025-05-09', description: 'Metro Groceries', amount: -157.30, accountId: 'acc4', category: 'Groceries', icon: ShoppingBag },
  { id: 'txn4', date: '2025-05-08', description: 'Transfer to Savings', amount: -500.00, accountId: 'acc1', category: 'Transfer', icon: ArrowDownCircle },
  { id: 'txn5', date: '2025-05-08', description: 'Received from Chequing', amount: 500.00, accountId: 'acc2', category: 'Transfer', icon: ArrowUpCircle },
  { id: 'txn6', date: '2025-05-07', description: 'Dinner at "The Local"', amount: -75.00, accountId: 'acc4', category: 'Entertainment', icon: ArrowDownCircle },
  { id: 'txn7', date: '2025-05-06', description: 'Stock Purchase - XYZ Inc.', amount: -1200.00, accountId: 'acc3', category: 'Investment', icon: Briefcase },
  { id: 'txn8', date: '2025-05-05', description: 'Esso Gas', amount: -62.50, accountId: 'acc4', category: 'Automotive', icon: Car },
];

const summaryItemsData: SummaryItem[] = [
  { title: 'Mortgage Balance', value: formatCurrency(348500, 'CAD'), icon: Home, bgColor: 'bg-[#6d7844]', textColor: 'text-white', href: '/mortgage' },
  { title: 'Portfolio Value', value: formatCurrency(47300.50, 'CAD'), icon: ChartSpline, bgColor: 'bg-[#90826b]', textColor: 'text-white', href: '/investment' },
  { title: 'Insurance (Home & Auto)', value: 'View Policies', icon: FileText, bgColor: 'bg-[#7d948c]', textColor: 'text-white', href: '/insurance' },
];

// Account Card Component
const AccountCard: React.FC<{ account: Account; index: number }> = ({ account, index }) => {
  const IconComponent = account.icon;
  const cardContent = (
    <>
      <div className={`flex justify-between items-start mb-4 ${futura.className}`}>
        <h3 className={`text-xl font-semibold ${account.textColor || 'text-gray-800'}`}>{account.name}</h3>
        <IconComponent size={28} className={`${account.textColor || 'text-gray-700'} opacity-90`} />
      </div>
      <p className={`text-sm opacity-90 mb-1 ${account.textColor || 'text-gray-600'}`}>{account.type}</p>
      <div className="flex justify-between items-center">
        <p className={`text-3xl font-bold tracking-tight ${account.textColor || 'text-gray-900'}`}>{formatCurrency(account.balance, account.currency)}</p>
        {account.type === 'Credit Card' && account.balance < 0 && (
          <p className={`text-xs opacity-80 mt-1 ${account.textColor || 'text-gray-500'}`}>Amount Owing</p>
        )}
      </div>
    </>
  );

  let cardStyle = `rounded-xl p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 ${account.bgColor}`;

  // Mobile-specific styling for stacking cards
  if (typeof window !== 'undefined' && window.innerWidth < 640) { // Simple mobile detection (adjust as needed)
    //  const topPercentage = Math.max(0, 1 - (index * 0.20)); // Calculate visible height percentage (min 20%)
    // const topPercentage = index < accounts.length - 1 ? 0.20 : 1; // Show 20% of top cards, 100% of last card
    // const cardTop = index * 20; // Offset for stacking effect

    cardStyle = `absolute w-full h-full rounded-xl p-4 shadow-lg transition-all duration-300 ease-in-out ${account.bgColor}`;
  }

  return (
    <div className={cardStyle} style={{
      // height: typeof window !== 'undefined' && window.innerWidth < 640 ? `${topPercentage * 100}%` : 'auto',
      overflow: 'hidden',
      position: typeof window !== 'undefined' && window.innerWidth < 640 ? 'absolute' : 'relative',
      bottom: typeof window !== 'undefined' && window.innerWidth < 640 ? `${index * 20}%` : '0',
      // position: 'absolute',
      // bottom: `${index * 20}%`,
      // left: 0,
      // width: '100%',
      // height: '100%',
      // height: typeof window !== 'undefined' && window.innerWidth < 640 ? `${topPercentage * 100}%` : 'auto',
      // overflow: 'hidden',
    }}>
      {account.href ? (
        <NextLink href={account.href} className="block">
          {cardContent}
        </NextLink>
      ) : (
        cardContent
      )}
    </div>
  );
};

// Transaction Row Component
const TransactionRow: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
  const isPositive = transaction.amount > 0;
  const IconComponent = transaction.icon;

  return (
    <li className="py-4 px-1 hover:bg-gray-50 rounded-md transition-colors duration-150">
      <div className="flex items-center space-x-4">
        <div className={`p-2.5 rounded-full ${isPositive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          <IconComponent size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-800 truncate">{transaction.description}</p>
          <p className="text-xs text-gray-500">
            {new Date(transaction.date).toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' })}
            {' - '}
            {transaction.accountName ? `${transaction.accountName} - ` : ''}
            {transaction.category}
          </p>
        </div>
        <div className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-gray-800'}`}>
          {isPositive ? '+' : ''}{formatCurrency(transaction.amount)}
        </div>
        <button className="text-gray-400 hover:text-gray-600 p-1">
          <MoreHorizontal size={20} />
        </button>
      </div>
    </li>
  );
};

// Summary Card Component
const SummaryCard: React.FC<{ item: SummaryItem }> = ({ item }) => {
  const IconComponent = item.icon;
  return (
    <NextLink href={item.href} className={`rounded-xl p-6 shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-0.5 ${item.bgColor} ${item.textColor || 'text-white'}`}>
        <div className={`p-3 rounded-lg text-white`}> {/* Ensured icon container is translucent white, icon color from parent */}
            <IconComponent size={28} /> {/* Icon will inherit text color from parent, which is item.textColor or white */}
        </div>
        <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-xl font-bold tracking-tight">{item.value}</p>
        </div>
    </NextLink>
  );
};

// Quick Action Button Component
interface ActionButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
}
const ActionButton: React.FC<ActionButtonProps> = ({ href, icon: Icon, label }) => (
  <NextLink href={href} className={`flex pl-6 pt-4 justify-between space-y-2 bg-white text-gray-700 border border-gray-200 
                                       hover:text-gray-900 px-4 lg:pb-12 rounded-xl text-sm lg:text-2xl font-medium 
                                      transition-all duration-200 shadow-sm ${futura.className}`}>

{/* flex-col items-center justify-center */}
    
    <span>{label}</span>
    <Icon size={28} className="mb-1 text-gray-400" />
  </NextLink>
);

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

interface QuickActionProps {
  title: string;
  icon: React.FC<IconProps>;
}

const quickActionData = [
  {
      title: 'Pay Bills',
      icon: CreditCard,
  },
  {
      title: 'Make a Transfer',
      icon: ArrowUpCircle,
  },
  {
      title: 'Interac e-Transfer®',
      icon: Send,
  },
  {
      title: 'View Statements',
      icon: FileText,
  }
]

const QuickAction: React.FC<QuickActionProps> = ({ title, icon: Icon }) => {
  return (
    <div className='lg:min-h-24 xl:min-h-32 flex bg-stone-50 hover:bg-white rounded-4xl mx-8 lg:mx-0 py-4 lg:py-8 px-6 lg:px-8 space-x-4 lg:space-x-4 shadow-lg items-center'>
      <div className='w-1/4 xl:w-1/3 -ml-1 lg:ml-0 flex justify-end lg:justify-center'>
        <div className='rounded-full h-14 w-14 2xl:h-22 2xl:w-22 border-2 border-stone-300 flex justify-center items-center'>
          <Icon 
            color="currentColor" 
            size={32} 
            strokeWidth={1} 
            className="text-stone-600 2xl:w-[52px] 2xl:h-[52px] w-[32px] h-[32px]" 
          />
        </div>
      </div>
      <div className={`w-3/4 xl:w-2/3 ml-4 lg:-ml-2 2xl:-ml-0 flex items-center ${futura.className}`}>
          <div className={`text-stone-700`}>
              <div className='lg:font-semibold text-lg md:text-xl 2xl:text-2xl leading-5 mb-0.5 xl:leading-8 lg:mb-2'>{title}</div>
          </div>
      </div>
    </div>
  );
};

export default function DashboardPage() {
  // const [accounts, setAccounts] = useState<Account[]>(accountsData);
  // const [transactions, setTransactions] = useState<Transaction[]>(transactionsData);
  const accounts = accountsData;
  const transactions = transactionsData;
  
  const [greeting, setGreeting] = useState<string>('');

  // const topThreeCards = "w-56 h-28 lg:w-56 lg:h-28 xl:w-70 xl:h-28 rounded-t-2xl mx-auto"

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 5 && hour < 12) setGreeting('Good morning');
    else if (hour >= 12 && hour < 17) setGreeting('Good afternoon');
    else if (hour >= 17 && hour < 21) setGreeting('Good evening');
    else setGreeting('Good day');
  }, []);

  const allTransactionsWithAccountName = transactions.map(t => {
    const account = accounts.find(a => a.id === t.accountId);
    return { ...t, accountName: account?.name };
  });

  return (
    <>
      <Head>
        <title>Personal Banking Dashboard</title>
        <meta name="description" content="Your personal banking overview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
        <Header />
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          <div className="mb-6 lg:mb-10">
            <h1 className="text-xl lg:text-4xl font-bold text-gray-800">{greeting}, User!</h1>
            {/* <p className="text-gray-600 mt-1">Here's your financial snapshot.</p> */}
          </div>


          {/* AccountCard SECTION */}
          <section id="accounts-overview" className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl lg:text-3xl lg:font-bold font-semibold text-gray-700 ${lora.className}`}>Your Accounts</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 relative">
              {accounts.map((account, index) => (
                <AccountCard key={account.id} account={account} index={index} />
              ))}
            </div>

          </section>
 
          <section className='bg-[#eae6da] w-full'>
              <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto h-full'>
                  <div className='h-full lg:py-6 lg:px-6 w-full flex justify-center items-center'>
                      <div className='h-full w-full '>
                          <div className={`pt-2 pb-4 px-6 lg:pb-0 lg:pt-2 text-2xl lg:text-4xl text-center flex items-center justify-center xl:justify-start ${lora.className}`}>Quick Actions</div>
                          <div className='lg:mt-8 mb-12 lg:mb-0 w-full grid grid-cols-1 gap-4 my-6 lg:my-0 md:grid-cols-2 xl:grid-cols-4 lg:gap-6 md:px-4'>
                              {quickActionData.map((item, index) => (
                                  <div key={index} > 
                                      <QuickAction 
                                          title={item.title}
                                          icon={item.icon}
                                      />
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section id="quick-actions" className="mb-12">
             <h2 className={`text-2xl lg:text-3xl font-semibold text-gray-700 mb-5 ${lora.className }`}>Quick Actions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <ActionButton href="/banking/pay-bills" icon={CreditCard} label="Pay Bills" />
                <ActionButton href="/banking/transfer" icon={ArrowUpCircle} label="Make a Transfer" />
                <ActionButton href="/banking/etransfer" icon={Send} label="Interac e-Transfer®" />
                <ActionButton href="/banking/statements" icon={FileText} label="View Statements" />
            </div>
          </section>

          {summaryItemsData.length > 0 && (
            <section id="summary-overview" className="mb-12">
              <h2 className={`text-2xl font-semibold text-gray-700 mb-6 ${lora.className}`}>Other Holdings & Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {summaryItemsData.map((item, index) => (
                  <SummaryCard key={index} item={item} />
                ))}
              </div>
            </section>
          )}

          <section id="recent-transactions">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">Recent Transactions</h2>
              <NextLink href="/banking/all-transactions" className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800">
                View All Transactions <ChevronDown size={18} className="ml-1" />
              </NextLink>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-3 sm:p-6">
              {transactions.length > 0 ? (
                <ul className="divide-y divide-gray-100">
                  {allTransactionsWithAccountName.slice(0, 5).map(transaction => ( // Show top 5
                    <TransactionRow key={transaction.id} transaction={transaction} />
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 p-4 text-center">No recent transactions.</p>
              )}
            </div>
          </section>

        <aside className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Need Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <NextLink href="/banking/profile-settings" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <User className="text-indigo-600 mb-3" size={28}/>
                    <h3 className="font-semibold text-gray-800 mb-1">Profile & Settings</h3>
                    <p className="text-sm text-gray-600">Manage your personal information and security settings.</p>
                </NextLink>
                <NextLink href="/banking/faq" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <LifeBuoy className="text-indigo-600 mb-3" size={28}/>
                    <h3 className="font-semibold text-gray-800 mb-1">FAQs & Support</h3>
                    <p className="text-sm text-gray-600">Find answers to common questions or contact support.</p>
                </NextLink>
                <NextLink href="/banking/tools" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <Settings className="text-indigo-600 mb-3" size={28}/>
                    <h3 className="font-semibold text-gray-800 mb-1">Financial Tools</h3>
                    <p className="text-sm text-gray-600">Access budgeting calculators and planning resources.</p>
                </NextLink>
            </div>
        </aside>


        </main>

        <footer className="py-10 mt-20 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MyBank. All rights reserved.
            <p className="mt-1">MyBank is a fictitious entity. This dashboard is for demonstration purposes only.</p>
            <div className="mt-4 space-x-4">
                <NextLink href="/privacy-policy" className="hover:text-indigo-600">Privacy Policy</NextLink>
                <span>&bull;</span>
                <NextLink href="/terms-of-service" className="hover:text-indigo-600">Terms of Service</NextLink>
                <span>&bull;</span>
                <NextLink href="/contact-us" className="hover:text-indigo-600">Contact Us</NextLink>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}