
// "use client"
// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';

// // Sample data - replace with your actual API calls
// const accountsData = [
//   { id: 1, name: 'Chequing Account', balance: 1250.75, currency: 'CAD' },
//   { id: 2, name: 'Savings Account', balance: 15780.22, currency: 'CAD' },
//   { id: 3, name: 'Credit Card', balance: -450.50, currency: 'CAD', limit: 5000 },
//   { id: 4, name: 'USD Account', balance: 385.10, currency: 'USD' },
// ];

// const mortgageData = { balance: 285000.00, interestRate: 0.035 };
// const investmentData = { value: 52340.80, performance: '+1.2%' };
// const insuranceData = [
//   { type: 'Home Insurance', provider: 'TD Insurance', expiry: '2025-12-31' },
//   { type: 'Auto Insurance', provider: 'Aviva', expiry: '2026-03-15' },
// ];

// const transactionsData = [
//   { id: 1, date: '2025-05-12', description: 'Grocery Store', amount: -52.30 },
//   { id: 2, date: '2025-05-11', description: 'Salary Deposit', amount: 2500.00 },
//   { id: 3, date: '2025-05-10', description: 'Online Purchase', amount: -125.99 },
//   { id: 4, date: '2025-05-09', description: 'Restaurant', amount: -35.75 },
//   { id: 5, date: '2025-05-08', description: 'Interest Earned', amount: 15.20 },
// ];

// const Dashboard: React.FC = () => {
//   const [greeting, setGreeting] = useState('');

//   useEffect(() => {
//     const now = new Date();
//     const hour = now.getHours();

//     if (hour >= 5 && hour < 12) {
//       setGreeting('Good morning');
//     } else if (hour >= 12 && hour < 17) {
//       setGreeting('Good afternoon');
//     } else if (hour >= 17 && hour < 21) {
//       setGreeting('Good evening');
//     } else {
//       setGreeting('Good day');
//     }
//   }, []);

//   return (
//     <div className="font-sans bg-gray-100 min-h-screen flex flex-col p-6">
//       <Head>
//         <title>Banking Dashboard</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Head>

//       <header className="pb-6 mb-6 border-b border-gray-200">
//         <h1 className="text-2xl font-bold text-gray-800">{greeting}</h1>
//       </header>

//       <main className="flex-grow">
//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           {accountsData.map((account) => (
//             <div key={account.id} className="bg-white rounded-lg shadow-md p-5">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">{account.name}</h3>
//               <p className={`text-xl font-bold ${account.balance < 0 ? 'text-red-500' : 'text-green-500'}`}>
//                 {account.currency}
//                 {account.balance.toLocaleString(undefined, {
//                   minimumFractionDigits: 2,
//                   maximumFractionDigits: 2,
//                 })}
//               </p>
//               {account.limit && (
//                 <p className="text-sm text-gray-500 mt-1">
//                   Limit: {account.currency}
//                   {account.limit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//                 </p>
//               )}
//             </div>
//           ))}
//         </section>

//         <section className="mb-8">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//               Pay Bills
//             </button>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//               Make a Transfer
//             </button>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//               Interac e-Transfer®
//             </button>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//               View Statements
//             </button>
//             {/* Add more quick links as needed */}
//           </div>
//         </section>

//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//           <div className="bg-white rounded-lg shadow-md p-5">
//             <h3 className="text-lg font-semibold text-gray-700 mb-2">Mortgage</h3>
//             <p className="text-xl font-bold text-gray-800">
//               CAD
//               {mortgageData.balance.toLocaleString(undefined, {
//                 minimumFractionDigits: 2,
//                 maximumFractionDigits: 2,
//               })}
//             </p>
//             <p className="text-sm text-gray-500 mt-1">Interest Rate: {(mortgageData.interestRate * 100).toFixed(2)}%</p>
//           </div>

//           <div className="bg-white rounded-lg shadow-md p-5">
//             <h3 className="text-lg font-semibold text-gray-700 mb-2">Investment Portfolio</h3>
//             <p className="text-xl font-bold text-green-500">
//               CAD
//               {investmentData.value.toLocaleString(undefined, {
//                 minimumFractionDigits: 2,
//                 maximumFractionDigits: 2,
//               })}
//             </p>
//             <p className="text-sm text-gray-500 mt-1">Performance: {investmentData.performance}</p>
//           </div>

//           <div className="bg-white rounded-lg shadow-md p-5">
//             <h3 className="text-lg font-semibold text-gray-700 mb-2">Insurance</h3>
//             {insuranceData.map((insurance, index) => (
//               <div key={index} className="mb-1">
//                 <p className="text-gray-600">{insurance.type}: <span className="font-semibold">{insurance.provider}</span></p>
//                 <p className="text-xs text-gray-500">Expiry: {insurance.expiry}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="bg-white rounded-lg shadow-md p-5 mb-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
//           {transactionsData.length > 0 ? (
//             <ul className="divide-y divide-gray-200">
//               {transactionsData.map((transaction) => (
//                 <li key={transaction.id} className="py-3 flex items-center justify-between">
//                   <span className="text-gray-700">{transaction.date}</span>
//                   <span className="text-gray-600">{transaction.description}</span>
//                   <span className={`font-semibold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
//                     {transaction.amount.toLocaleString(undefined, {
//                       minimumFractionDigits: 2,
//                       maximumFractionDigits: 2,
//                       signDisplay: 'always',
//                     })}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500">No recent transactions.</p>
//           )}
//         </section>

//         {/* Include other essential banking data and services here */}
//       </main>

//       <footer className="text-center mt-8 py-4 border-t border-gray-200 text-gray-500 text-sm">
//         &copy; {new Date().getFullYear()} Your Bank. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;