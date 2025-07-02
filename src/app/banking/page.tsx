"use client";
import Head from 'next/head';

import { ChevronDown, Banknote, CreditCard, DollarSign, ArrowDownCircle, ArrowUpCircle, Home, Briefcase, ShoppingBag,
         MoreHorizontal, Car, Send, FileText, User, Settings, LifeBuoy, ChartSpline } from 'lucide-react';
// FilePlus, LogOut, Bell,  TrendingUp, House
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
import Footer from '../../components/Footer'; 

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
  // href?: string; // Optional link for the account card
  href: string; // Now it's always a string
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

interface HelpItem {
  id: string;
  name: string;
  text: string;
  icon: React.ElementType;
  bgColor: string;
  textColor?: string;
  href: string; 
}

// Helper function to format currency
const formatCurrency = (amount: number, currency: string = 'CAD') => {
  return new Intl.NumberFormat('en-CA', { style: 'currency', currency }).format(amount);
};

// Data (removed "sample" from names)
const accountsData: Account[] = [
  { id: 'acc1', name: 'Everyday Chequing', href: '/mortgage', type: 'Chequing', balance: 12530.75, currency: 'CAD', bgColor: 'bg-[#106898]', textColor: 'text-white', icon: Banknote },
  // [#106898] #abc8be
  { id: 'acc2', name: 'High-Interest Savings', href: '/mortgage', type: 'Savings', balance: 85200.00, currency: 'CAD', bgColor: 'bg-[#5D8351]', textColor: 'text-white', icon: DollarSign },
  { id: 'acc3', name: 'Platinum Rewards Card', href: '/mortgage', type: 'Credit Card', balance: -1250.20, currency: 'CAD', bgColor: 'bg-[#32302f]', textColor: 'text-white', icon: CreditCard },
];

const summaryItemsData: SummaryItem[] = [
  { title: 'Mortgage Balance', value: formatCurrency(348500, 'CAD'), icon: Home, bgColor: 'bg-[#6C8650]', textColor: 'text-white', href: '/mortgage' },
  { title: 'Portfolio Value', value: formatCurrency(47300.50, 'CAD'), icon: ChartSpline, bgColor: 'bg-[#4f6cb0]', textColor: 'text-white', href: '/investment' },
  { title: 'Insurance (Home & Auto)', value: 'View Policies', icon: FileText, bgColor: 'bg-[#7d948c]', textColor: 'text-white', href: '/insurance' },
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

// Account Card Component
const AccountCard: React.FC<{ account: Account; index: number }> = ({ account }) => {
  const IconComponent = account.icon;
  return (
    <NextLink href={account.href} className={``}>
        <div className={`${futura.className} ${account.bgColor} ${account.textColor} rounded-xl py-4 lg:py-12 shadow-sm flex justify-center `}>
            <div className='flex w-full px-6 xl:px-8 2xl:px-12'>
                <div className='flex justify-center'>
                    <IconComponent size={88} strokeWidth={1} className='border-2 border-gray-300 rounded-full p-1 md:p-4 mt-1 md:mt-0 mb-1 w-[46px] h-[46px] md:w-[68px] md:h-[68px] xl:w-[88px] xl:h-[88px]'/>
                </div>
                <div className='items-center flex ml-2 md:ml-4'>
                    <div>
                        <div className={`text-lg lg:text-xl 2xl:text-2xl ${futura.className}`}>{account.name}</div>
                        <div className='text-lg lg:text-2xl font-semibold'>{formatCurrency(account.balance, account.currency)}</div>
                    </div>
                </div>
            </div>
        </div>
    </NextLink>
  );
};

const helpData: HelpItem[] = [
  { id: '1', name: 'Profile & Settings', href: '/mortgage', text: 'Manage your personal information and security settings.', bgColor: 'bg-[#e0e8ef]', textColor: 'text-stone-600', icon: User },
  { id: '2', name: 'FAQs & Support', href: '/mortgage', text: 'Find answers to common questions or contact support.', bgColor: 'bg-[#e5ecc7]', textColor: 'text-stone-600', icon: LifeBuoy },
  { id: '3', name: 'Financial Tools', href: '/mortgage', text: 'Access budgeting calculators and planning resources.', bgColor: 'bg-[#e4e2dd]', textColor: 'text-stone-600', icon: Settings },
];

const HelpCard: React.FC<{ item: HelpItem; index: number }> = ({ item }) => {
  // const IconComponent = item.icon;
  return (
    <NextLink href={item.href} className={``}>
        <div className={`${futura.className} ${item.bgColor} rounded-xl py-2 lg:py-16 shadow-md flex justify-center text-gray-700`}>
            <div>
                {/* <div className='flex justify-center'>
                    <IconComponent size={88} strokeWidth={1} className='border-2 border-gray-400 rounded-full p-4  mb-1' />
                </div> */}
                <div className='text-xl lg:text-3xl text-center font-semibold'>{item.name}</div>
                <div className='text-center text-lg lg:text-2xl lg:px-8 lg:leading-5 lg:my-2'>{item.text}</div>
            </div>
        </div>
    </NextLink>
  );
};

// Transaction Row Component
const TransactionRow: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
  const isPositive = transaction.amount > 0;
  const IconComponent = transaction.icon;

  return (
    <li className={`py-3 lg:py-3 px-0 lg:px-2 xl:px-8 rounded-3xl bg-stone-100 my-1 lg:my-2 hover:bg-white transition-colors duration-150 ${futura.className}`}>
      <div className="flex items-center space-x-4 lg:py-2">
        <div className={`p-2 xl:p-4 rounded-full border-2 border-stone-200 ${isPositive ? ' text-[#779649]' : ' text-[#e67762]'}`}>
          <IconComponent size={22} className="lg:w-[42px] lg:h-[42px]" />
        </div>
        <div className="flex-1 min-w-0 px-2">
          <p className="text-sm lg:text-2xl font-semibold text-gray-600 truncate">{transaction.description}</p>
          <p className="text-xs lg:text-xl text-gray-500">
            {new Date(transaction.date).toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' })}
            {' - '}
            {transaction.accountName ? `${transaction.accountName} - ` : ''}
            {transaction.category}
          </p>
        </div>
        <div className={`text-sm lg:text-2xl font-semibold ${isPositive ? 'text-[#779649]' : 'text-gray-600'}`}>
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
    <NextLink href={item.href} className={``}>
        <div className={`${futura.className} ${item.bgColor} ${item.textColor} rounded-xl py-2 lg:py-12 shadow-sm flex justify-center border-2 border-stone-200`}>
            <div className='flex w-full px-6 xl:px-8 2xl:px-12'>
                <div className='flex justify-center'>
                    <IconComponent size={88} strokeWidth={1} className='border-2 border-gray-300 rounded-full p-1 md:p-4 mt-1 md:mt-0 mb-1 w-[46px] h-[46px] md:w-[68px] md:h-[68px] xl:w-[88px] xl:h-[88px]'/>
                </div>
                <div className='items-center flex ml-2 md:ml-4'>
                    <div>
                        <div className='text-lg lg:text-xl 2xl:text-2xl'>{item.title}</div>
                        <div className='text-lg lg:text-2xl font-semibold'>{item.value}</div>
                    </div>
                </div>
            </div>
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
  <NextLink href={href} className={`flex flex-col justify-between pl-6 pt-4 space-y-2 bg-[#7d948c] hover:bg-[#eaf2f9] text-gray-50 border border-gray-300 
                                       hover:text-gray-950 px-4 lg:pb-2 rounded-xl text-sm lg:text-2xl
                                      transition-all duration-200 shadow-sm ${futura.className}`}>
      <div className='w-full h-full'>
          <span>{label}</span>
          <div className='flex justify-end'>
              <Icon size={36} strokeWidth={1} className="mb-1 text-gray-50 " />
          </div>
      </div>
  </NextLink>
);

// interface IconProps extends React.SVGProps<SVGSVGElement> {
//   size?: number;
//   strokeWidth?: number;
// }

// interface QuickActionProps {
//   title: string;
//   icon: React.FC<IconProps>;
// }

// const quickActionData = [
//   {
//       title: 'Pay Bills',
//       icon: CreditCard,
//   },
//   {
//       title: 'Make a Transfer',
//       icon: ArrowUpCircle,
//   },
//   {
//       title: 'Interac e-Transfer®',
//       icon: Send,
//   },
//   {
//       title: 'View Statements',
//       icon: FileText,
//   }
// ]

// const QuickAction: React.FC<QuickActionProps> = ({ title, icon: Icon }) => {
//   return (
//     <div className='lg:min-h-24 xl:min-h-32 flex bg-stone-200 hover:bg-white rounded-4xl mx-8 lg:mx-0 py-4 lg:py-8 px-6 lg:px-8 space-x-4 lg:space-x-4 shadow-lg items-center'>
//       <div className='w-1/4 xl:w-1/3 -ml-1 lg:ml-0 flex justify-end lg:justify-center'>
//         <div className='rounded-full h-14 w-14 2xl:h-22 2xl:w-22 border-2 border-stone-300 flex justify-center items-center'>
//           <Icon 
//             color="currentColor" 
//             size={32} 
//             strokeWidth={1} 
//             className="text-stone-600 2xl:w-[52px] 2xl:h-[52px] w-[32px] h-[32px]" 
//           />
//         </div>
//       </div>
//       <div className={`w-3/4 xl:w-2/3 ml-4 lg:-ml-2 2xl:-ml-0 flex items-center ${futura.className}`}>
//           <div className={`text-stone-700`}>
//               <div className='lg:font-semibold text-lg md:text-xl 2xl:text-2xl leading-5 mb-0.5 xl:leading-8 lg:mb-2'>{title}</div>
//           </div>
//       </div>
//     </div>
//   );
// };

export default function DashboardPage() {
  // const [accounts, setAccounts] = useState<Account[]>(accountsData);
  // const [transactions, setTransactions] = useState<Transaction[]>(transactionsData);
  const accounts = accountsData;
  const transactions = transactionsData;
  
  const [greeting, setGreeting] = useState<string>('Good Day');

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

      <div className={`min-h-screen bg-stone-50 ${inter.className}`}>
        <Header />
        <main className="container mx-auto p-4 px-6 lg:px-8 pt-6 lg:pt-8">
          <div className="mb-6 md:mb-12">
            <h1 className={`text-xl lg:text-4xl font-bold text-gray-800 ${lora.className}`}>{greeting}!</h1>
          </div>

          {/* AccountCard SECTION */}
          <section id="accounts-overview" className="mb-6 md:mb-12">
            <div className="flex justify-between items-center mb-3 md:mb-6">
              <h2 className={`lg:text-lg xl:text-3xl font-semibold text-gray-700 ${futura.className}`}>Your Accounts</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 relative">
              {accounts.map((account, index) => (
                <AccountCard key={account.id} account={account} index={index} />
              ))}
            </div>

          </section>

          <section id="quick-actions" className="mb-6 md:mb-12">
            <h2 className={`lg:text-lg xl:text-3xl font-semibold text-gray-700 ${futura.className}`}>Quick Actions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 pt-3 lg:pt-6">
                <ActionButton href="/banking/pay-bills" icon={CreditCard} label="Pay Bills" />
                <ActionButton href="/banking/transfer" icon={ArrowUpCircle} label="Make a Transfer" />
                <ActionButton href="/banking/etransfer" icon={Send} label="Interac e-Transfer®" />
                <ActionButton href="/banking/statements" icon={FileText} label="View Statements" />
            </div>
          </section>

          {summaryItemsData.length > 0 && (
            <section id="summary-overview" className="mb-6 md:mb-12">
                <h2 className={`lg:text-lg xl:text-3xl font-semibold text-gray-700 ${futura.className}`}>Holdings & Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-3 lg:py-6">
                    {summaryItemsData.map((item, index) => (
                      <SummaryCard key={index} item={item} />
                    ))}
                </div>
            </section>
          )}

          <section id="recent-transactions" className=''>
          {/* mb-6 md:mb-12 */}
            <div className="flex justify-between items-center ">
              <h2 className={`lg:text-lg xl:text-3xl font-semibold text-gray-700 ${futura.className} `}>Recent Transactions</h2>
              <NextLink href="/banking/all-transactions" className={`flex items-center text-sm lg:text-xl font-medium text-gray-600 hover:text-gray-800 ${futura.className}`}>
                View All Transactions <ChevronDown size={18} className="ml-1" />
              </NextLink>
            </div>
            <div className="mt-3 lg:mt-6 shadow-md rounded-xl p-3 lg:p-6 border-stone-200 border-2">
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

          {/* Help SECTION */}
          <section id="help-overview" className="mb-6 md:mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`lg:text-lg xl:text-3xl font-semibold text-gray-700 mt-4 lg:mt-12 ${futura.className}`}>Need Help?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 relative">
              {helpData.map((item, index) => (
                <HelpCard key={item.id} item={item} index={index} />
              ))}
            </div>

          </section>

        </main>
      </div>

      <Footer />
    </>
  );
}