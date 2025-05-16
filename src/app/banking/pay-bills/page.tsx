"use client";
import Head from 'next/head';
import React, { useState } from 'react';
import { CreditCard, ListPlus, Search } from 'lucide-react';
// DollarSign, Calendar, Repeat, Users, , PlusCircle
import { inter, lora } from '../../../fonts';
import Header from '../../../components/Header';
// import NextLink from 'next/link';
// import localFont from 'next/font/local';

// const futura = localFont({ src: '../../../fontFiles/FuturaCyrillicBook.ttf' });

const formatCurrency = (amount: number) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount);

interface Payee {
    id: string;
    name: string;
    accountNumber: string;
    category: string;
}

interface ScheduledPayment {
    id: string;
    payeeName: string;
    amount: number;
    date: string;
    frequency: string;
}

const payeesData: Payee[] = [
    { id: 'p1', name: 'City Hydro', accountNumber: '*** **** 1234', category: 'Utilities' },
    { id: 'p2', 'name': 'MyBank Visa', accountNumber: '**** **** **** 5678', category: 'Credit Card' },
    { id: 'p3', name: 'TeleCom Rogers', accountNumber: '*** *** 9012', category: 'Phone/Internet' },
];

const scheduledPaymentsData: ScheduledPayment[] = [
    { id: 'sp1', payeeName: 'City Hydro', amount: 85.50, date: '2025-06-01', frequency: 'Monthly' },
    { id: 'sp2', payeeName: 'Netflix Subscription', amount: 16.99, date: '2025-05-20', frequency: 'Monthly' },
];

const accountsForPayment = [
    { id: 'acc1', name: 'Everyday Chequing (Balance: $12,530.75)', balance: 12530.75 },
    { id: 'acc2', name: 'Savings Account (Balance: $85,200.00)', balance: 85200.00 },
];

const mainTitleClasses = 'text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 text-center lg:text-left';
const sectionTitleClasses = 'text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-6 text-stone-800';
const labelTextClasses = 'block text-base lg:text-xl font-semibold mb-1 lg:mb-2 text-stone-700';
const inputBaseClasses = 'bg-white h-12 lg:h-16 w-full text-base lg:text-xl border-2 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-stone-300';
const inputDefaultBorder = 'border-stone-300';
const primaryButtonClasses = `h-12 lg:h-16 w-full text-base sm:text-lg lg:text-xl border-2 border-stone-400 bg-stone-100 hover:bg-white text-stone-700 font-semibold rounded-xl py-2 px-6 lg:px-8 cursor-pointer transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-opacity-50 flex items-center justify-center`;
const secondaryButtonClasses = `h-10 lg:h-12 text-sm sm:text-base lg:text-xl border-2 border-stone-300 bg-stone-50 hover:bg-white text-stone-500 rounded-xl py-2 px-4 lg:px-6 cursor-pointer transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-stone-300 flex items-center justify-center`;

const PayBillsPage = () => {
    const [selectedPayee, setSelectedPayee] = useState<Payee | null>(payeesData[0]);
    const [amount, setAmount] = useState('');
    const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);
    const [fromAccount, setFromAccount] = useState(accountsForPayment[0].id);
    const [frequency, setFrequency] = useState('once');

    const handlePaymentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPayee || !amount || !paymentDate || !fromAccount) {
            alert("Please fill in all fields.");
            return;
        }
        alert(`Payment of ${formatCurrency(parseFloat(amount))} to ${selectedPayee.name} scheduled for ${paymentDate} from account ${fromAccount}. Frequency: ${frequency}.`);
        setAmount('');
    };

    return (
        <>
            <Head>
                <title>Pay Bills - MyBank</title>
            </Head>
            <div className={`min-h-screen bg-stone-50 ${inter.className}`}>
                <Header />
                <main className={`container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 ${lora.className}`}>
                    <div className="mb-2 flex justify-between items-center">
                        <div>
                            <h1 className={`${mainTitleClasses} text-stone-800 ${lora.className}`}>Pay Bills</h1>
                        </div>
                        {/* <NextLink href="/banking" className={`${futura.className} text-lg text-stone-400 ${secondaryButtonClasses}`}>
                            &larr; Back to Dashboard
                        </NextLink> */}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Payment Form Section */}
                        <section className="lg:col-span-2 bg-white rounded-xl shadow-xl border-2 border-stone-200 p-6 sm:p-8 lg:p-10">
                            <h2 className={`${sectionTitleClasses}`}>Make a Payment</h2>
                            <form onSubmit={handlePaymentSubmit} className="space-y-6 lg:space-y-8">
                                <div>
                                    <label htmlFor="payee" className={labelTextClasses}>Pay To</label>
                                    <select
                                        id="payee"
                                        value={selectedPayee?.id || ''}
                                        onChange={(e) => setSelectedPayee(payeesData.find(p => p.id === e.target.value) || null)}
                                        className={`${inputBaseClasses} ${inputDefaultBorder}`}
                                    >
                                        <option value="" disabled>Select a payee</option>
                                        {payeesData.map(p => <option key={p.id} value={p.id}>{p.name} ({p.accountNumber})</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="fromAccount" className={labelTextClasses}>Pay From</label>
                                    <select
                                        id="fromAccount"
                                        value={fromAccount}
                                        onChange={(e) => setFromAccount(e.target.value)}
                                        className={`${inputBaseClasses} ${inputDefaultBorder}`}
                                    >
                                        {accountsForPayment.map(acc => <option key={acc.id} value={acc.id}>{acc.name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="amount" className={labelTextClasses}>Amount</label>
                                    <div className="relative">
                                        <span className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-base lg:text-xl text-stone-500">$</span>
                                        <input
                                            type="number"
                                            id="amount"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className={`${inputBaseClasses} ${inputDefaultBorder} pl-8 lg:pl-10 pr-4`}
                                            placeholder="0.00"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="paymentDate" className={labelTextClasses}>Payment Date</label>
                                        <input
                                            type="date"
                                            id="paymentDate"
                                            value={paymentDate}
                                            min={new Date().toISOString().split('T')[0]}
                                            onChange={(e) => setPaymentDate(e.target.value)}
                                            className={`${inputBaseClasses} ${inputDefaultBorder}`}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="frequency" className={labelTextClasses}>Frequency</label>
                                        <select
                                            id="frequency"
                                            value={frequency}
                                            onChange={(e) => setFrequency(e.target.value)}
                                            className={`${inputBaseClasses} ${inputDefaultBorder}`}
                                        >
                                            <option value="once">Once</option>
                                            <option value="monthly">Monthly</option>
                                            <option value="bi-weekly">Bi-Weekly</option>
                                            <option value="weekly">Weekly</option>
                                        </select>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className={`${primaryButtonClasses} mt-4 lg:mt-6`}
                                >
                                    <CreditCard size={20} className="mr-2 hidden" /> Review & Pay
                                </button>
                            </form>
                        </section>

                        {/* Payees & Scheduled Payments Section */}
                        <aside className="space-y-8">
                            <section className="bg-white rounded-xl shadow-xl border-2 border-stone-200 p-6 sm:p-8 lg:p-10">
                                <div className="flex justify-between items-center mb-4 lg:mb-6">
                                    <h2 className={`${sectionTitleClasses}`}>Your Payees</h2>
                                    <button className={`${secondaryButtonClasses} ${inter.className}`}>
                                        <ListPlus size={18} className="mr-2" /> Add Payee
                                    </button>
                                </div>
                                <ul className="space-y-3 max-h-60 overflow-y-auto">
                                    {payeesData.map(p => (
                                        <li key={p.id} className="p-4 lg:p-5 border-2 border-stone-200 rounded-xl flex justify-between items-center hover:border-stone-300 transition-colors cursor-pointer" onClick={() => setSelectedPayee(p)}>
                                            <div>
                                                <p className="font-semibold text-stone-800 text-base lg:text-xl">{p.name}</p>
                                                <p className="text-xs lg:text-sm text-stone-500">{p.category} - {p.accountNumber}</p>
                                            </div>
                                            <Search size={18} className="text-stone-400" />
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="bg-white rounded-xl shadow-xl border-2 border-stone-200 p-6 sm:p-8 lg:p-10">
                                <h2 className={`${sectionTitleClasses}`}>Scheduled Payments</h2>
                                {scheduledPaymentsData.length > 0 ? (
                                    <ul className="space-y-4">
                                        {scheduledPaymentsData.map(sp => (
                                            <li key={sp.id} className="p-4 lg:p-5 border-2 border-stone-200 rounded-xl flex justify-between items-center">
                                                <div>
                                                    <p className="font-semibold text-stone-800 text-base lg:text-xl">{sp.payeeName}</p>
                                                    <p className="text-xs lg:text-sm text-stone-500">Next on: {new Date(sp.date).toLocaleDateString('en-CA')} ({sp.frequency})</p>
                                                </div>
                                                <p className="text-sm font-semibold text-indigo-600">{formatCurrency(sp.amount)}</p>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-stone-600 text-base lg:text-xl">No upcoming scheduled payments.</p>
                                )}
                            </section>
                        </aside>
                    </div>
                </main>
                <footer className={`py-10 mt-12 lg:mt-16 border-t-2 border-stone-200 ${inter.className}`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-500 text-sm">
                        &copy; {new Date().getFullYear()} MyBank.
                    </div>
                </footer>
            </div>
        </>
    );
};

export default PayBillsPage;