// "use client";
// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import { format, isToday, isYesterday } from 'date-fns';

// type Account = {
//   id: string;
//   name: string;
//   balance: number;
//   available: number;
//   accountNumber: string;
//   type: 'chequing' | 'savings' | 'credit' | 'investment';
// };

// type Transaction = {
//   id: string;
//   date: Date;
//   description: string;
//   amount: number;
//   category: string;
//   account: string;
// };

// type Mortgage = {
//   balance: number;
//   interestRate: number;
//   payment: number;
//   nextPaymentDate: string;
//   remainingTerm: string;
// };

// type Investment = {
//   totalValue: number;
//   dailyChange: number;
//   annualReturn: number;
//   breakdown: {
//     stocks: number;
//     bonds: number;
//     mutualFunds: number;
//     etfs: number;
//   };
// };

// type Insurance = {
//   type: 'home' | 'auto';
//   policyNumber: string;
//   renewalDate: string;
//   premium: number;
//   coverage: string;
// };

// export default function Dashboard() {
//   const [timeOfDay, setTimeOfDay] = useState('');
//   const [activeTab, setActiveTab] = useState('accounts');
//   const [accounts, setAccounts] = useState<Account[]>([
//     {
//       id: '1',
//       name: 'Chequing',
//       balance: 5498.23,
//       available: 5498.23,
//       accountNumber: '**** **** **** 3456',
//       type: 'chequing',
//     },
//     {
//       id: '2',
//       name: 'Savings',
//       balance: 12876.54,
//       available: 12876.54,
//       accountNumber: '**** **** **** 7890',
//       type: 'savings',
//     },
//     {
//       id: '3',
//       name: 'Credit Card',
//       balance: -876.90,
//       available: -1000,
//       accountNumber: '**** **** **** 1234',
//       type: 'credit',
//     },
//   ]);
//   const [transactions, setTransactions] = useState<Transaction[]>([
//     {
//       id: '1',
//       date: new Date(),
//       description: 'Groceries at Loblaws',
//       amount: -123.45,
//       category: 'Food',
//       account: 'Chequing',
//     },
//     {
//       id: '2',
//       date: new Date(new Date().setDate(new Date().getDate() - 1)),
//       description: 'Salary Deposit',
//       amount: 4500.00,
//       category: 'Income',
//       account: 'Chequing',
//     },
//     {
//       id: '3',
//       date: new Date(new Date().setDate(new Date().getDate() - 2)),
//       description: 'Netflix Subscription',
//       amount: -15.99,
//       category: 'Entertainment',
//       account: 'Credit Card',
//     },
//   ]);
//   const [mortgage, setMortgage] = useState<Mortgage>({
//     balance: 245000.00,
//     interestRate: 0.029,
//     payment: 1250.00,
//     nextPaymentDate: '2024-03-15',
//     remainingTerm: '18 years',
//   });
//   const [investment, setInvestment] = useState<Investment>({
//     totalValue: 56789.34,
//     dailyChange: 234.56,
//     annualReturn: 0.12,
//     breakdown: {
//       stocks: 0.5,
//       bonds: 0.2,
//       mutualFunds: 0.2,
//       etfs: 0.1,
//     },
//   });
//   const [insurances, setInsurances] = useState<Insurance[]>([
//     {
//       type: 'home',
//       policyNumber: 'HP-2024-1234',
//       renewalDate: '2024-12-31',
//       premium: 1200.00,
//       coverage: 'Comprehensive',
//     },
//     {
//       type: 'auto',
//       policyNumber: 'AP-2024-5678',
//       renewalDate: '2024-11-15',
//       premium: 950.00,
//       coverage: 'Full Coverage',
//     },
//   ]);

//   useEffect(() => {
//     const hour = new Date().getHours();
//     if (hour < 12) {
//       setTimeOfDay('Good morning');
//     } else if (hour < 18) {
//       setTimeOfDay('Good afternoon');
//     } else {
//       setTimeOfDay('Good evening');
//     }
//   }, []);

//   const formatDate = (date: Date) => {
//     if (isToday(date)) {
//       return 'Today';
//     } else if (isYesterday(date)) {
//       return 'Yesterday';
//     } else {
//       return format(date, 'MMM dd');
//     }
//   };

//   const Color = {
//     shallowCloud: "#EAEEF1", //浅云
//     suCai: "#D4DDE1", //素采
//     taJian: "#151D29", //獭见
//     jiLan: "#3C4654", //霁蓝
//     yuYangRan: "#576470", //育阳染
//     shanFan: "#F5F3F2", //山矾
//     gaoYu: "#EFEFEF", //缟羽
//     luoShenZhu: "#D23918", //洛神珠
//     huangDan: "#EA5514", //黄丹
//     juYi: "#D3A237", //鞠衣
//     cuiWei: "#4C8045", //翠微
//     rouLan: "#106898", //柔蓝
//     qieLan: "#88ABDA", //窃蓝
//     biCheng: "#12507B", //碧城
//     youTanRui: "#615EA8", //优昙瑞
//     tangLiHe: "#955A42", //棠梨褐
//     ruanCui: "#006D87", //软翠
//     ouBi: "#C0D695", //欧碧
//     huangSuLiu: "#FEDC5E", //黄粟留
//     huangBaiYou: "#FFF799", //黄白游
//     huangBuLao: "#DB9B34", //黄不老
//     biShan: "#779649", //碧山
//     zhuCao: "#A64036", //朱草
//     zengQing: "#535164", //曾青
//     guanLv: "#2A6E3F", //官绿
//     diShiQing: "#003460", //帝释青
//     lanCaiHe: "#06436F", //蓝采和
//     tianShuiBi: "#5AA4AE", //天水碧
//     xiZi: "#87C0CA", //西子
//     yunMen: "#A2E2D2", //云门
//     zhiZi: "#FAC03D", //栀子
//     qiGu: "#5D8351", //漆姑
//     shiFa: "#6A8D52", //石发
//     chunChen: "#A9BE7B", //春辰
//     meiMei: "#4E8548", //莓莓
//     woZhu: "#DD6B7B", //渥赭
//     cangJia: "#A8BF8F", //苍葭
//     tingWuLv: "#68945C", //庭芜绿
//     cuiQiu: "#446A37", //翠虬
//     weiHong: "#A73766", //魏红
//     kuJin: "#E18A3B", //库金
//     queMei: "#788A6F", //雀梅
//     ziBoHan: "#BBA1CB", //紫薄汗
//     ziPu: "#A6559D", //紫蒲
//     songHua: "#FFEE6F", //松花
//     xiangYe: "#ECD452", //缃叶
//     qingMing: "#3271AE", //青冥
//     shuiLongYin: "#84A729", //水龙吟
//     kongQueLan: "#4994C4", //孔雀蓝
//     renLai: "#9EBC19", //人籁
//     zheHuang: "#C67915", //柘黄
//     qiLin: "#12264F", //骐驎
//     changChun: "#DC6B82", //长春
//     royalPink: "#B83570",
//     zhengQing: "#6CA8AF", //正青
//     qunQing: "#2E59A7", //群青
//     diLai: "#DFCEB4",
//     daKuai: "#BFA782",
//     longZhan: "#5F4321",
//     liuHuang: "#8B7042",
//     danShu: "#873424",
//     huangHeLiuLi: "#E5A84B",
//     tealOne: "#007175",
//     erLv: "#5DA39D",
//     tealTwo: "#88BFB8",
//     jianDe: "#6F94CD",
//     cangCang: "#5976BA",
//     bianQing: "#509296",
//     yaoSe: "#226b68",
//   };

//   return (
//     <div className={`bg-${Color.shanFan} min-h-screen py-8 px-4 sm:px-6 lg:px-8`}>
//       <Head>
//         <title>Banking Dashboard</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Head>

//       <header className="mb-8">
//         <div className="max-w-6xl mx-auto">
//           <h1 className={`text-3xl font-bold text-${Color.taJian}`}>{timeOfDay}, User</h1>
//         </div>
//       </header>

//       <main className="max-w-6xl mx-auto">
//         {/* Account Summary */}
//         <section className="mb-12">
//           <h2 className={`text-2xl font-semibold text-${Color.taJian} mb-6`}>Accounts</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {accounts.map((account) => (
//               <div key={account.id} className={`bg-white rounded-2xl shadow-md p-6`}>
//                 <div className="flex items-start justify-between mb-4">
//                   <h3 className={`text-xl font-semibold text-${Color.yuYangRan}`}>{account.name}</h3>
//                   {account.type === 'chequing' && <div className="w-10 h-10 rounded-full" style={{ backgroundColor: Color.rouLan }}></div>}
//                   {account.type === 'savings' && <div className="w-10 h-10 rounded-full" style={{ backgroundColor: Color.cuiWei }}></div>}
//                   {account.type === 'credit' && <div className="w-10 h-10 rounded-full" style={{ backgroundColor: Color.luoShenZhu }}></div>}
//                   {account.type === 'investment' && <div className="w-10 h-10 rounded-full" style={{ backgroundColor: Color.huangDan }}></div>}
//                 </div>
//                 <p className={`text-4xl font-bold text-${Color.taJian} mb-2`}>
//                   ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
//                 </p>
//                 <p className={`text-sm text-${Color.yuYangRan}`}>Available: ${account.available.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
//                 <p className={`text-xs text-${Color.yuYangRan} mt-2`}>Account Number: {account.accountNumber}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Quick Actions */}
//         <section className="mb-12">
//           <h2 className={`text-2xl font-semibold text-${Color.taJian} mb-6`}>Quick Actions</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//             <button className={`bg-<span class="math-inline">\{Color\.rouLan\} hover\:bg\-</span>{Color.biCheng} text-white font-semibold py-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-${Color.rouLan} focus:ring-offset-2 transition-colors`}>
//               Pay Bills
//             </button>
//             <button className={`bg-<span class="math-inline">\{Color\.cuiWei\} hover\:bg\-</span>{Color.guanLv} text-white font-semibold py-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-${Color.cuiWei} focus:ring-offset-2 transition-colors`}>
//               Transfer
//             </button>
//             <button className={`bg-<span class="math-inline">\{Color\.youTanRui\} hover\:bg\-</span>{Color.ziPu} text-white font-semibold py-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-${Color.youTanRui} focus:ring-offset-2 transition-colors`}>
//               e-Transfer
//             </button>
//             <button className={`bg-<span class="math-inline">\{Color\.qingMing\} hover\:bg\-</span>{Color.diShiQing} text-white font-semibold py-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-${Color.qingMing} focus:ring-offset-2 transition-colors`}>
//               Statements
//             </button>
//           </div>
//         </section>

//         {/* Recent Transactions */}
//         <section className={`bg-white rounded-2xl shadow-md p-6 mb-12`}>
//           <h2 className={`text-2xl font-semibold text-${Color.taJian} mb-6`}>Recent Transactions</h2>
//           {transactions.length > 0 ? (
//             <ul className={`divide-y divide-${Color.suCai}`}>
//               {transactions.map((transaction) => (
//                 <li key={transaction.id} className="py-4 flex items-center justify-between">
//                   <div>
//                     <p className={`text-sm text-${Color.yuYangRan}`}>{formatDate(transaction.date)}</p>
//                     <p className={`font-medium text-${Color.taJian}`}>{transaction.description}</p>
//                   </div>
//                   <p className={`font-semibold ${transaction.amount < 0 ? `text-${Color.luoShenZhu}` : `text-${Color.cuiWei}`}`}>
//                     {transaction.amount.toLocaleString('en-US', {
//                       signDisplay: 'always',
//                       minimumFractionDigits: 2,
//                     })}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className={`text-${Color.yuYangRan}`}>No recent transactions.</p>
//           )}
//         </section>

//         {/* Additional Financial Overview */}
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {/* Mortgage */}
//           <div className={`bg-white rounded-2xl shadow-md p-6`}>
//             <h3 className={`text-xl font-semibold text-${Color.yuYangRan} mb-4`}>Mortgage</h3>
//             <p className={`text-4xl font-bold text-${Color.taJian} mb-2`}>
//               ${mortgage.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
//             </p>
//             <p className={`text-sm text-${Color.yuYangRan}`}>
//               Next Payment: {format(new Date(mortgage.nextPaymentDate), 'MMM dd, yyyy')}, ${mortgage.payment}
//             </p>
//             <p className={`text-xs text-${Color.yuYangRan} mt-2`}>Interest Rate: {(mortgage.interestRate * 100).toFixed(2)}%</p>
//           </div>

//           {/* Investment */}
//           <div className={`bg-white rounded-2xl shadow-md p-6`}>
//             <h3 className={`text-xl font-semibold text-${Color.yuYangRan} mb-4`}>Investment</h3>
//             <p className={`text-4xl font-bold text-${Color.taJian} mb-2`}>
//               ${investment.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
//             </p>
//             <div className="flex items-center space-x-2">
//               <p className={`text-sm font-semibold ${investment.dailyChange > 0 ? `text-${Color.cuiWei}` : `text-${Color.luoShenZhu}`}`}>
//                 {investment.dailyChange > 0 ? '+' : ''}
//                 {investment.dailyChange.toLocaleString('en-US', { signDisplay: 'always', minimumFractionDigits: 2 })}
//               </p>
//               <p className={`text-xs text-${Color.yuYangRan}`}>Daily Change</p>
//             </div>
//             <p className={`text-sm text-${Color.yuYangRan} mt-2`}>Annual Return: {(investment.annualReturn * 100).toFixed(2)}%</p>
//           </div>

//           {/* Insurance */}
//           <div className={`bg-white rounded-2xl shadow-md p-6`}>
//             <h3 className={`text-xl font-semibold text-${Color.yuYangRan} mb-4`}>Insurance</h3>
//             {insurances.map((insurance, index) => (
//               <div key={index} className="mb-3">
//                 <p className={`text-sm font-semibold text-${Color.taJian}`}>{insurance.type === 'home' ? 'Home' : 'Auto'} Insurance</p>
//                 <p className={`text-xs text-${Color.yuYangRan}`}>Policy: {insurance.policyNumber}</p>
//                 <p className={`text-xs text-${Color.yuYangRan}`}>Renewal: {format(new Date(insurance.renewalDate), 'MMM dd, yyyy')}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       <footer className="max-w-6xl mx-auto mt-8 py-4 text-center text-sm text-yuYangRan border-t border-suCai">
//         © {new Date().getFullYear()} Your Bank. All rights reserved.
//       </footer>
//     </div>
//   );
// }