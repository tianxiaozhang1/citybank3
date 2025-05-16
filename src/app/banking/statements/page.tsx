"use client";
import Head from 'next/head';
import React, { useState } from 'react';
import { FileText, Download, CreditCard as CreditCardIcon, Home, DollarSign as SavingsIcon, TrendingUp as InvestmentIcon } from 'lucide-react';
// Filter, CalendarDays, 
import { inter, lora } from '../../../fonts'; // Import Lora
import Header from '../../../components/Header';
import NextLink from 'next/link';
import localFont from 'next/font/local';

const futura = localFont({ src: '../../../fontFiles/FuturaCyrillicBook.ttf' });

interface DocumentItem {
    id: string;
    title: string;
    date: string;
    type: 'Statement' | 'Tax Document' | 'Notice';
    accountName?: string; // For statements
    accountTypeIcon?: React.ElementType;
    fileUrl: string; // Mock URL
    year: number;
}

const allAccountsInfo = [
    { id: 'all', name: 'All Accounts', icon: undefined },
    { id: 'acc1', name: 'Everyday Chequing', icon: CreditCardIcon },
    { id: 'acc2', name: 'High-Interest Savings', icon: SavingsIcon },
    { id: 'acc3', name: 'Growth Portfolio', icon: InvestmentIcon },
    { id: 'mortgage1', name: 'Mortgage Account', icon: Home },
];

const documentsData: DocumentItem[] = [
    { id: 'doc1', title: 'Chequing Account Statement - April 2025', date: '2025-05-01', type: 'Statement', accountName: 'Everyday Chequing', accountTypeIcon: CreditCardIcon, fileUrl: '/documents/chequing-apr2025.pdf', year: 2025 },
    { id: 'doc2', title: 'Savings Account Statement - April 2025', date: '2025-05-01', type: 'Statement', accountName: 'High-Interest Savings', accountTypeIcon: SavingsIcon, fileUrl: '/documents/savings-apr2025.pdf', year: 2025 },
    { id: 'doc3', title: 'T5 Statement - 2024', date: '2025-02-28', type: 'Tax Document', accountName: 'Growth Portfolio', accountTypeIcon: InvestmentIcon, fileUrl: '/documents/t5-2024-portfolio.pdf', year: 2024 },
    { id: 'doc4', title: 'RRSP Contribution Receipt - 2024', date: '2025-02-15', type: 'Tax Document', fileUrl: '/documents/rrsp-2024.pdf', year: 2024 },
    { id: 'doc5', title: 'Mortgage Annual Statement - 2024', date: '2025-01-20', type: 'Statement', accountName: 'Mortgage Account', accountTypeIcon: Home, fileUrl: '/documents/mortgage-2024.pdf', year: 2024 },
    { id: 'doc6', title: 'Important Notice: Terms Update', date: '2025-03-10', type: 'Notice', fileUrl: '/documents/terms-update-mar2025.pdf', year: 2025 },
    { id: 'doc7', title: 'Chequing Account Statement - March 2025', date: '2025-04-01', type: 'Statement', accountName: 'Everyday Chequing', accountTypeIcon: CreditCardIcon, fileUrl: '/documents/chequing-mar2025.pdf', year: 2025 },
];

const mainTitleClasses = 'text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 text-center lg:text-left text-stone-800';
// const sectionTitleClasses = 'text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-6 text-stone-800';
const labelTextClasses = 'block text-base lg:text-xl font-semibold mb-1 lg:mb-2 text-stone-700';
const inputBaseClasses = 'bg-white h-12 lg:h-16 w-full text-base lg:text-xl border-2 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-stone-300';
const inputDefaultBorder = 'border-stone-300';
// const primaryButtonClasses = `h-12 lg:h-16 w-full text-base sm:text-lg lg:text-xl border-2 border-stone-400 bg-stone-100 hover:bg-white text-stone-700 font-semibold rounded-xl py-2 px-6 lg:px-8 cursor-pointer transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-opacity-50 flex items-center justify-center`;
const secondaryButtonClasses = `h-10 lg:h-12 text-sm sm:text-base lg:text-xl border-2 border-stone-300 bg-stone-50 hover:bg-white text-stone-500 rounded-xl py-2 px-4 lg:px-6 cursor-pointer transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-stone-300 flex items-center justify-center`;

const StatementsPage = () => {
    const [selectedAccount, setSelectedAccount] = useState<string>('all');
    const [selectedYear, setSelectedYear] = useState<string>(new Date().getFullYear().toString());
    const [selectedDocType, setSelectedDocType] = useState<string>('all');

    const availableYears = Array.from(new Set(documentsData.map(doc => doc.year.toString()))).sort((a, b) => parseInt(b) - parseInt(a));

    const filteredDocuments = documentsData.filter(doc => {
        const accountMatch = selectedAccount === 'all' || (doc.accountName && allAccountsInfo.find(a => a.name === doc.accountName)?.id === selectedAccount);
        const yearMatch = selectedYear === 'all' || doc.year.toString() === selectedYear;
        const typeMatch = selectedDocType === 'all' || doc.type === selectedDocType;
        return accountMatch && yearMatch && typeMatch;
    });

    return (
        <>
            <Head>
                <title>Statements & Documents - MyBank</title>
            </Head>
            <div className={`min-h-screen bg-stone-50 ${inter.className} ${lora.className}`}>
                <Header />
                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                    <div className="mb-8 flex justify-between items-center">
                        <div>
                            <h1 className={`${mainTitleClasses}`}>{`Statements & Documents`}</h1>
                            <p className="text-stone-600 mt-1">Access your account statements, tax documents, and important notices.</p>
                        </div>
                        <NextLink href="/banking" className={`${futura.className} text-lg text-stone-400 ${secondaryButtonClasses}`}>
                            &larr; Back to Dashboard
                        </NextLink>
                    </div>

                    {/* Filters Section */}
                    <section className="mb-8 bg-white rounded-xl shadow-xl border-2 border-stone-200 p-6 sm:p-8 lg:p-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                            <div>
                                <label htmlFor="accountFilter" className={labelTextClasses}>Account</label>
                                <select id="accountFilter" value={selectedAccount} onChange={e => setSelectedAccount(e.target.value)} className={`${inputBaseClasses} ${inputDefaultBorder}`}>
                                    {allAccountsInfo.map(acc => <option key={acc.id} value={acc.id}>{acc.name}</option>)}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="yearFilter" className={labelTextClasses}>Year</label>
                                <select id="yearFilter" value={selectedYear} onChange={e => setSelectedYear(e.target.value)} className={`${inputBaseClasses} ${inputDefaultBorder}`}>
                                    <option value="all">All Years</option>
                                    {availableYears.map(year => <option key={year} value={year}>{year}</option>)}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="docTypeFilter" className={labelTextClasses}>Document Type</label>
                                <select id="docTypeFilter" value={selectedDocType} onChange={e => setSelectedDocType(e.target.value)} className={`${inputBaseClasses} ${inputDefaultBorder}`}>
                                    <option value="all">All Types</option>
                                    <option value="Statement">Statement</option>
                                    <option value="Tax Document">Tax Document</option>
                                    <option value="Notice">Notice</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* Documents List Section */}
                    <section className="bg-white rounded-xl shadow-xl border-2 border-stone-200 p-4 sm:p-6 lg:p-8">
                        {filteredDocuments.length > 0 ? (
                            <ul className="space-y-4">
                                {filteredDocuments.map(doc => {
                                    const Icon = doc.accountTypeIcon || FileText;
                                    return (
                                        <li key={doc.id} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-stone-50 px-2 rounded-xl border-2 border-stone-200">
                                            <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                                                <Icon className="h-7 w-7 text-stone-500 flex-shrink-0" />
                                                <div>
                                                    <p className="text-base font-semibold text-stone-800">{doc.title}</p>
                                                    <p className="text-sm text-stone-500">
                                                        {doc.type} - {doc.accountName ? `${doc.accountName} - ` : ''}
                                                        Dated: {new Date(doc.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                    </p>
                                                </div>
                                            </div>
                                            <a
                                                href={doc.fileUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`${secondaryButtonClasses} ${inter.className}`}
                                            >
                                                <Download size={16} className="mr-2" /> Download
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <div className="text-center py-10">
                                <FileText size={48} className="mx-auto text-stone-400 mb-4" />
                                <p className="text-xl font-medium text-stone-700">No Documents Found</p>
                                <p className="text-stone-500 mt-2">Try adjusting your filters or check back later.</p>
                            </div>
                        )}
                    </section>
                </main>
                <footer className={`py-10 mt-12 lg:mt-16 border-t-2 border-stone-200 ${inter.className}`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-500 text-sm">
                        For official tax purposes, please refer to documents mailed to you or available through CRA My Account.
                    </div>
                </footer>
            </div>
        </>
    );
};

export default StatementsPage;