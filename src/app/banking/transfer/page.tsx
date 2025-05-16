"use client";
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { ArrowRightLeft, DollarSign, Calendar, Repeat, Info, CheckCircle } from 'lucide-react';
import { inter, lora } from '../../../fonts'; // Import Lora
import Header from '../../../components/Header';
import NextLink from 'next/link';
import localFont from 'next/font/local';

const futura = localFont({ src: '../../../fontFiles/FuturaCyrillicBook.ttf' });

const formatCurrency = (amount: number) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount);

interface BankAccount {
    id: string;
    name: string;
    balance: number;
    type: string; // e.g. Chequing, Savings
}

const userAccountsData: BankAccount[] = [
    { id: 'acc1', name: 'Everyday Chequing', balance: 12530.75, type: 'Chequing Account **** 1234' },
    { id: 'acc2', name: 'High-Interest Savings', balance: 85200.00, type: 'Savings Account **** 5678' },
    { id: 'acc3', name: 'Vacation Fund', balance: 5300.00, type: 'Savings Account **** 9012' },
];

const mainTitleClasses = 'text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 text-center lg:text-left text-stone-800';
const sectionTitleClasses = 'text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-6 text-stone-800';
const labelTextClasses = 'block text-base lg:text-xl font-semibold mb-1 lg:mb-2 text-stone-700';
const inputBaseClasses = 'bg-white h-12 lg:h-16 w-full text-base lg:text-xl border-2 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-stone-300';
const inputDefaultBorder = 'border-stone-300';
const primaryButtonClasses = `h-12 lg:h-16 w-full text-base sm:text-lg lg:text-xl border-2 border-stone-400 bg-stone-100 hover:bg-white text-stone-700 font-semibold rounded-xl py-2 px-6 lg:px-8 cursor-pointer transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-opacity-50 flex items-center justify-center`;
const secondaryButtonClasses = `h-10 lg:h-12 text-sm sm:text-base lg:text-xl border-2 border-stone-300 bg-stone-50 hover:bg-white text-stone-500 rounded-xl py-2 px-4 lg:px-6 cursor-pointer transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-stone-300 flex items-center justify-center`;

const MakeTransferPage = () => {
    const [fromAccount, setFromAccount] = useState<string>(userAccountsData[0]?.id || '');
    const [toAccount, setToAccount] = useState<string>(userAccountsData[1]?.id || '');
    const [amount, setAmount] = useState<string>('');
    const [transferDate, setTransferDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [frequency, setFrequency] = useState<string>('once'); // 'once', 'monthly', etc.
    const [memo, setMemo] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');

    const selectedFromAccount = userAccountsData.find(acc => acc.id === fromAccount);

    useEffect(() => {
        if (fromAccount && toAccount && fromAccount === toAccount) {
            setError("Cannot transfer to the same account. Please select different accounts.");
        } else {
            setError('');
        }
    }, [fromAccount, toAccount]);

    const handleTransferSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (!fromAccount || !toAccount || !amount || !transferDate) {
            setError("Please fill in all required fields.");
            return;
        }
        if (fromAccount === toAccount) {
            setError("Cannot transfer to the same account.");
            return;
        }
        const transferAmount = parseFloat(amount);
        if (transferAmount <= 0) {
            setError("Transfer amount must be greater than zero.");
            return;
        }
        if (selectedFromAccount && transferAmount > selectedFromAccount.balance) {
            setError(`Insufficient funds in ${selectedFromAccount.name}. Available: ${formatCurrency(selectedFromAccount.balance)}`);
            return;
        }

        // Mock transfer submission
        setSuccessMessage(`Transfer of ${formatCurrency(transferAmount)} from ${userAccountsData.find(a => a.id === fromAccount)?.name} to ${userAccountsData.find(a => a.id === toAccount)?.name} scheduled for ${transferDate}. Frequency: ${frequency}. Memo: ${memo || 'N/A'}`);
        setAmount('');
        setMemo('');
        // Potentially reset other fields or redirect
    };

    return (
        <>
            <Head>
                <title>Make a Transfer - MyBank</title>
                <meta name="description" content="Transfer funds between your MyBank accounts." />
            </Head>
            <div className={`min-h-screen bg-stone-50 ${inter.className} ${lora.className}`}>
                <Header />
                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                    <div className="mb-8 flex justify-between items-center">
                        <div>
                            <h1 className={`${mainTitleClasses}`}>Make a Transfer</h1>
                            <p className="text-stone-600 mt-1">Move money between your accounts quickly and easily.</p>
                        </div>
                        <NextLink href="/banking" className={`${futura.className} text-lg text-stone-400 ${secondaryButtonClasses}`}>
                            &larr; Back to Dashboard
                        </NextLink>
                    </div>

                    <div className="mx-auto bg-white rounded-xl shadow-xl border-2 border-stone-200 p-6 sm:p-8 lg:p-10">  {/* Removed max-w-2xl */}
                        <form onSubmit={handleTransferSubmit} className="space-y-6 lg:space-y-8">
                            <div>
                                <label htmlFor="fromAccount" className={labelTextClasses}>From Account</label>
                                <select
                                    id="fromAccount"
                                    value={fromAccount}
                                    onChange={(e) => setFromAccount(e.target.value)}
                                    className={`${inputBaseClasses} ${inputDefaultBorder}`}
                                >
                                    <option value="" disabled>Select account to transfer from</option>
                                    {userAccountsData.map(acc => (
                                        <option key={acc.id} value={acc.id}>
                                            {acc.name} - {formatCurrency(acc.balance)} ({acc.type})
                                        </option>
                                    ))}
                                </select>
                                {selectedFromAccount && <p className="text-xs text-stone-500 mt-1">Available balance: {formatCurrency(selectedFromAccount.balance)}</p>}
                            </div>

                            <div className="flex justify-center my-4 lg:my-6">
                                <ArrowRightLeft className="h-6 w-6 text-stone-400" />
                            </div>

                            <div>
                                <label htmlFor="toAccount" className={labelTextClasses}>To Account</label>
                                <select
                                    id="toAccount"
                                    value={toAccount}
                                    onChange={(e) => setToAccount(e.target.value)}
                                    className={`${inputBaseClasses} ${inputDefaultBorder}`}
                                >
                                    <option value="" disabled>Select account to transfer to</option>
                                    {userAccountsData.map(acc => (
                                        <option key={acc.id} value={acc.id}>
                                            {acc.name} ({acc.type})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="amount" className={labelTextClasses}>Amount</label>
                                <div className="relative">
                                    <div className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-base lg:text-xl text-stone-500">
                                        $
                                    </div>
                                    <input
                                        type="number"
                                        id="amount"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className={`${inputBaseClasses} ${inputDefaultBorder} pl-8 lg:pl-10`}
                                        placeholder="0.00"
                                        step="0.01"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="transferDate" className={labelTextClasses}>Transfer Date</label>
                                    <input
                                        type="date"
                                        id="transferDate"
                                        value={transferDate}
                                        min={new Date().toISOString().split('T')[0]}
                                        onChange={(e) => setTransferDate(e.target.value)}
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
                                        <option value="weekly">Weekly</option>
                                        <option value="bi-weekly">Bi-Weekly</option>
                                        <option value="monthly">Monthly</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="memo" className={labelTextClasses}>Memo (Optional)</label>
                                <input
                                    type="text"
                                    id="memo"
                                    value={memo}
                                    onChange={(e) => setMemo(e.target.value)}
                                    className={`${inputBaseClasses} ${inputDefaultBorder}`}
                                    placeholder="E.g., Savings contribution"
                                    maxLength={50}
                                />
                            </div>

                            {error && (
                                <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-xl flex items-center">
                                    <Info size={20} className="mr-2" />
                                    <span>{error}</span>
                                </div>
                            )}

                            {successMessage && (
                                <div className="p-3 bg-green-50 text-green-700 border border-green-200 rounded-xl flex items-center">
                                    <CheckCircle size={20} className="mr-2" />
                                    <span>{successMessage}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                className={`${primaryButtonClasses}`}
                                disabled={!!error && fromAccount === toAccount} // Disable if accounts are same or other critical error
                            >
                                <ArrowRightLeft size={20} className="mr-2 hidden" /> Review & Transfer
                            </button>
                        </form>
                    </div>
                </main>
                <footer className={`py-10 mt-12 lg:mt-16 border-t-2 border-stone-200 ${inter.className}`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-500 text-sm">
                        &copy; {new Date().getFullYear()} MyBank. Transfers are typically processed instantly.
                    </div>
                </footer>
            </div>
        </>
    );
};

export default MakeTransferPage;