"use client";
import Head from 'next/head';
import React, { useState } from 'react';
import { Send, UserPlus, Mail, Phone, Info, CheckCircle } from 'lucide-react';
// , History, DollarSign, MessageSquare, ShieldCheck
import localFont from 'next/font/local'
const futura = localFont({ src: '../../../fontFiles/FuturaCyrillicBook.ttf' })
// const futuraLight = localFont({ src: '../../../fontFiles/FuturaCyrillicLight.ttf' })
// const futuraBold = localFont({ src: '../../../fontFiles/FuturaCyrillicBold.ttf' })
import { lora, inter } from '../../../fonts'; 
import Header from '../../../components/Header';
import NextLink from 'next/link';

const formatCurrency = (amount: number) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount);

interface Contact {
  id: string;
  name: string;
  email?: string;
  phone?: string;
}

interface ETransferHistoryItem {
    id: string;
    contactName: string;
    amount: number;
    date: string;
    status: 'Sent' | 'Pending' | 'Deposited' | 'Cancelled' | 'Expired';
    type: 'Sent' | 'Received' | 'Request';
}

const userAccounts = [
  { id: 'acc1', name: 'Everyday Chequing', balance: 12530.75 },
  { id: 'acc2', name: 'High-Interest Savings', balance: 85200.00 },
];

const contactsData: Contact[] = [
  { id: 'c1', name: 'Jane Doe', email: 'jane.doe@example.com' },
  { id: 'c2', name: 'John Smith', phone: '555-123-4567' },
  { id: 'c3', name: 'Alex Taylor', email: 'alex.t@example.com', phone: '555-987-6543' },
];

const eTransferHistoryData: ETransferHistoryItem[] = [
    {id: 'et1', contactName: 'Jane Doe', amount: 50.00, date: '2025-05-10', status: 'Deposited', type: 'Sent'},
    {id: 'et2', contactName: 'Service Canada', amount: 350.00, date: '2025-05-08', status: 'Deposited', type: 'Received'},
    {id: 'et3', contactName: 'John Smith', amount: 100.00, date: '2025-05-05', status: 'Pending', type: 'Sent'},
    {id: 'et4', contactName: 'Alex Taylor', amount: 25.00, date: '2025-05-02', status: 'Cancelled', type: 'Request'},
];

const mainTitleClasses = 'text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 text-center lg:text-left';
const sectionTitleClasses = 'text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-6 text-stone-800'; 
const labelTextClasses = 'block text-base lg:text-xl font-semibold mb-1 lg:mb-2 text-stone-700';
const inputBaseClasses = 'bg-white h-12 lg:h-16 w-full text-base lg:text-xl border-2 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-stone-300';
const inputDefaultBorder = 'border-stone-300';
const errorTextClasses = 'text-red-500 text-xs lg:text-sm mt-1';
const primaryButtonClasses = `h-12 lg:h-16 w-full text-base sm:text-lg lg:text-xl border-2 border-stone-400 bg-stone-100 hover:bg-white text-stone-700 font-semibold rounded-xl py-2 px-6 lg:px-8 cursor-pointer transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-opacity-50 flex items-center justify-center`;
const secondaryButtonClasses = `h-10 lg:h-12 text-sm sm:text-base lg:text-xl border-2 border-stone-300 bg-stone-50 hover:bg-white text-stone-500 rounded-xl py-2 px-4 lg:px-6 cursor-pointer transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-stone-300 flex items-center justify-center`;

const tabButtonBaseClasses = 'flex-1 py-2 lg:py-5 px-3 sm:px-4 lg:px-6 text-sm sm:text-base lg:text-xl font-semibold focus:outline-none cursor-pointer transition-colors duration-200 whitespace-nowrap';
const tabButtonActiveClasses = 'border-b-2 border-stone-700 text-stone-700';
const tabButtonInactiveClasses = 'text-stone-500 hover:text-stone-600 border-b-2 border-transparent hover:border-stone-300';

const ETransferPage = () => {
  const [activeTab, setActiveTab] = useState<'send' | 'request' | 'history' | 'contacts'>('send');
  // Send Money States
  const [sendContact, setSendContact] = useState<string>(contactsData[0]?.id || '');
  const [sendAmount, setSendAmount] = useState<string>('');
  const [sendFromAccount, setSendFromAccount] = useState<string>(userAccounts[0]?.id || '');
  const [securityQuestion, setSecurityQuestion] = useState<string>('');
  const [securityAnswer, setSecurityAnswer] = useState<string>('');
  const [sendMessage, setSendMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const selectedFromAccount = userAccounts.find(acc => acc.id === sendFromAccount);

  const handleSendMoney = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    if (!sendContact || !sendAmount || !sendFromAccount || !securityQuestion || !securityAnswer) {
        setError('Please fill all required fields for sending money.');
        return;
    }
    const amountNum = parseFloat(sendAmount);
    if (amountNum <= 0) {
        setError('Amount must be greater than zero.');
        return;
    }
    if (selectedFromAccount && amountNum > selectedFromAccount.balance) {
        setError(`Insufficient funds in ${selectedFromAccount.name}. Available: ${formatCurrency(selectedFromAccount.balance)}`);
        return;
    }
    // Mock send money
    setSuccessMessage(`Interac e-Transfer of ${formatCurrency(amountNum)} sent to ${contactsData.find(c=>c.id === sendContact)?.name}.`);
    setSendAmount(''); setSecurityQuestion(''); setSecurityAnswer(''); setSendMessage('');
  };

  const TabButton: React.FC<{ tabName: typeof activeTab; label: string; icon?: React.ElementType }> = ({ tabName, label, icon: Icon }) => ( // Icon is optional now
    <button
      onClick={() => setActiveTab(tabName)}
      className={`${tabButtonBaseClasses} ${lora.className} ${activeTab === tabName ? tabButtonActiveClasses : tabButtonInactiveClasses}`}
    >
      {Icon && <Icon size={18} className="mr-2 sm:mr-0 lg:mr-2" />}
      <span>{label}</span>
    </button>
  );

  return (
    <>
      <Head>
        <title>Interac e-Transfer® - MyBank</title>
      </Head>
      <div className={`min-h-screen bg-stone-50 ${inter.className}`}> {/* Main page uses Inter for consistency with Header etc. */}
        <Header />
        <main className={`container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 ${futura.className}`}> {/* Content area uses Lora */}
          <div className="mb-2 flex justify-between items-center">
            <div>
              <h1 className={`${mainTitleClasses} text-stone-800 ${lora.className}`}>Interac e-Transfer®</h1>
            </div>
            <NextLink href="/banking" className={`${futura.className} text-lg text-stone-400 ${secondaryButtonClasses} hidden`}>
                &larr; Back to Dashboard
            </NextLink>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-stone-200">
            <nav className={`flex border-b-2 border-stone-200 ${futura.className}`}>
              <TabButton tabName="send" label="Send Money" />
              <TabButton tabName="request" label="Request Money" />
              <TabButton tabName="history" label="History" />
              <TabButton tabName="contacts" label="Contacts" />
            </nav>

            <div className="p-6 sm:p-8 lg:p-10">
              {activeTab === 'send' && (
                <form onSubmit={handleSendMoney} className="space-y-6 lg:space-y-8">
                  <h2 className={`${sectionTitleClasses}`}>Send Money</h2>
                  <div>
                    <label htmlFor="sendContact" className={labelTextClasses}>To Contact</label>
                    <select id="sendContact" value={sendContact} onChange={e => setSendContact(e.target.value)} className={`${inputBaseClasses} ${inputDefaultBorder}`}>
                      <option value="" disabled>Select or add contact</option>
                      {contactsData.map(c => <option key={c.id} value={c.id}>{c.name} ({c.email || c.phone})</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="sendFromAccount" className={labelTextClasses}>From Account</label>
                    <select id="sendFromAccount" value={sendFromAccount} onChange={e => setSendFromAccount(e.target.value)} className={`${inputBaseClasses} ${inputDefaultBorder}`}>
                      {userAccounts.map(acc => <option key={acc.id} value={acc.id}>{acc.name} ({formatCurrency(acc.balance)})</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="sendAmount" className={labelTextClasses}>Amount</label>
                    <div className="relative">
                        <span className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-base lg:text-xl text-stone-500">$</span>
                        <input type="number" id="sendAmount" value={sendAmount} onChange={e => setSendAmount(e.target.value)} placeholder="0.00" className={`${inputBaseClasses} ${inputDefaultBorder} pl-8 lg:pl-10 pr-4`} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="securityQuestion" className={labelTextClasses}>Security Question</label>
                    <input type="text" id="securityQuestion" value={securityQuestion} onChange={e => setSecurityQuestion(e.target.value)} placeholder="E.g., What city were we in?" className={`${inputBaseClasses} ${inputDefaultBorder}`} />
                  </div>
                  <div>
                    <label htmlFor="securityAnswer" className={labelTextClasses}>Security Answer <span className="text-sm font-normal text-stone-500">(Case-sensitive)</span></label>
                    <input type="text" id="securityAnswer" value={securityAnswer} onChange={e => setSecurityAnswer(e.target.value)} placeholder="Your secret answer" className={`${inputBaseClasses} ${inputDefaultBorder}`} />
                  </div>
                   <div>
                    <label htmlFor="sendMessage" className={labelTextClasses}>Message <span className="text-sm font-normal text-stone-500">(Optional)</span></label>
                    <textarea id="sendMessage" value={sendMessage} onChange={e => setSendMessage(e.target.value)} rows={3} placeholder="Optional message for recipient" className={`${inputBaseClasses} ${inputDefaultBorder} h-auto lg:h-auto py-3`}></textarea>
                  </div>
                    {error && <p className={`${errorTextClasses} flex items-center`}><Info size={16} className="mr-2"/>{error}</p>}
                    {successMessage && <p className="text-green-600 text-sm lg:text-base mt-1 bg-green-50 p-3 rounded-md flex items-center"><CheckCircle size={16} className="mr-2"/>{successMessage}</p>}
                  <button type="submit" className={`${primaryButtonClasses} mt-4 lg:mt-6`}>
                    <Send size={20} className="mr-2 hidden" /> Send
                  </button>
                </form>
              )}

              {activeTab === 'request' && (
                <div>
                  <h2 className={sectionTitleClasses}>Request Money</h2>
                  <p className="text-stone-600 text-base lg:text-xl">This feature is coming soon. You&apos;ll be able to request money from your contacts via Interac e-Transfer®.</p>
                </div>
              )}

              {activeTab === 'history' && (
                <div>
                  <h2 className={sectionTitleClasses}>Transaction History</h2>
                  {eTransferHistoryData.length > 0 ? (
                    <ul className="space-y-4">
                        {eTransferHistoryData.map(item => (
                            <li key={item.id} className="p-4 lg:p-5 border-2 border-stone-200 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-stone-300 transition-colors">
                                <div className="mb-2 sm:mb-0">
                                    <p className="font-semibold text-stone-800 text-base lg:text-xl">{item.type} {item.type === 'Sent' ? 'to' : 'from'} {item.contactName}</p>
                                    <p className="text-xs lg:text-sm text-stone-500">{new Date(item.date).toLocaleString('en-CA')} - Status: <span className={`font-medium ${item.status === 'Deposited' || item.status === 'Sent' ? 'text-green-600' : item.status === 'Pending' ? 'text-amber-600' : 'text-red-600'}`}>{item.status}</span></p>
                                </div>
                                <p className={`text-lg lg:text-xl font-bold ${item.type === 'Sent' || item.type === 'Request' ? 'text-red-700' : 'text-green-700'}`}>
                                    {item.type === 'Sent' || item.type === 'Request' ? '-' : '+'}{formatCurrency(item.amount)}
                                </p>
                            </li>
                        ))}
                    </ul>
                  ) : (
                    <p className="text-stone-600 text-base lg:text-xl">No e-Transfer history found.</p>
                  )}
                </div>
              )}

              {activeTab === 'contacts' && (
                 <div>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-4 lg:mb-6">
                    <h2 className={`${sectionTitleClasses}`}>Manage Contacts</h2>
                    <button className={`${secondaryButtonClasses} w-full sm:w-auto mt-2 sm:mt-0 lg:mb-6`}>
                        <UserPlus size={18} className="mr-2" /> Add New Contact
                    </button>
                  </div>
                  {contactsData.length > 0 ? (
                    <ul className="space-y-4">
                        {contactsData.map(contact => (
                            <li key={contact.id} className="p-4 lg:p-5 border-2 border-stone-200 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-stone-300 transition-colors">
                                <div className="mb-2 sm:mb-0">
                                    <p className="font-semibold text-stone-800 text-base lg:text-xl">{contact.name}</p>
                                    <p className="text-xs lg:text-sm text-stone-500">
                                        {contact.email && <span className="flex items-center"><Mail size={14} className="mr-1.5"/> {contact.email}</span>}
                                        {contact.phone && <span className="flex items-center mt-0.5"><Phone size={14} className="mr-1.5"/> {contact.phone}</span>}
                                    </p>
                                </div>
                                <button className={`${inter.className} text-sm text-indigo-600 hover:text-indigo-800 font-medium`}>Edit</button>
                            </li>
                        ))}
                    </ul>
                  ) : (
                    <p className="text-stone-600 text-base lg:text-xl">No contacts found. Add one to get started!</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
        <footer className={`py-10 mt-12 lg:mt-16 border-t-2 border-stone-200 ${inter.className}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-500 text-sm">
            Interac e-Transfer® is a registered trademark of Interac Corp. Used under license.
          </div>
        </footer>
      </div>
    </>
  );
};

export default ETransferPage;