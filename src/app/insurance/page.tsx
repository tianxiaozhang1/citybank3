// app/dashboard/insurance/page.tsx
"use client";
import Head from 'next/head';
import React from 'react';
import { Shield, Car, Home as HomeIcon, FileText, PlusCircle, AlertTriangle, Phone } from 'lucide-react';
// , MinusCircle, DollarSign
import { inter, lora } from '../../fonts';
import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
// const futuraBold = localFont({ src: '../../fontFiles/FuturaCyrillicBold.ttf' })
import Header from '../../components/Header'; // Adjusted path
import NextLink from 'next/link';

const themeColor = "#7d948c"; // Desaturated Cyan/Greyish Green
const themeTextColor = "text-white";
// const themeAccentTextColor = "text-[#596a65]"; // Darker shade for text emphasis

const formatCurrency = (amount: number) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount);

interface Policy {
  id: string;
  type: 'Auto' | 'Home';
  policyNumber: string;
  coverageSummary: string;
  premium: number;
  renewalDate: string;
  status: 'Active' | 'Pending' | 'Expired';
  icon: React.ElementType;
  detailsLink: string;
  documentLink: string;
}

const policiesData: Policy[] = [
  { id: 'ins1', type: 'Auto', policyNumber: 'AUT-7890123', coverageSummary: 'Comprehensive - 2023 Honda Civic', premium: 125.50, renewalDate: '2026-01-15', status: 'Active', icon: Car, detailsLink: '/dashboard/insurance/auto-policy-details', documentLink: '/documents/auto-policy-7890123.pdf' },
  { id: 'ins2', type: 'Home', policyNumber: 'HOM-4567890', coverageSummary: 'Standard Homeowners - Condo Unit', premium: 75.00, renewalDate: '2025-09-30', status: 'Active', icon: HomeIcon, detailsLink: '/dashboard/insurance/home-policy-details', documentLink: '/documents/home-policy-4567890.pdf' },
];

const PolicyCard: React.FC<{ policy: Policy }> = ({ policy }) => {
  const IconComponent = policy.icon;
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg  ${futura.className}`}>
      <div style={{ backgroundColor: themeColor }} className={`${themeTextColor} p-5 flex items-center space-x-4  px-2 lg:px-6 xl:px-8`}>
        <div className='border-2 border-stone-200 rounded-full p-1 lg:p-3'><IconComponent size={32} strokeWidth={1} /></div>
        <div className='lg:ml-1'>
          <h3 className="text-xl xl:text-2xl">{policy.type} Insurance</h3>
          <p className="text-sm xl:text-base opacity-90 font-semibold xl:-mt-1">Policy #: {policy.policyNumber}</p>
        </div>
      </div>
      <div className="p-5 space-y-3 px-2 lg:px-6 xl:px-8 lg:text-xl">
        <p><span className="font-medium text-gray-700">Coverage:</span> <span className="text-gray-600">{policy.coverageSummary}</span></p>
        <p><span className="font-medium  text-gray-700">Premium:</span> <span className="text-gray-600">{formatCurrency(policy.premium)} / month</span></p>
        <p><span className="font-medium  text-gray-700">Renewal:</span> <span className="text-gray-600">{new Date(policy.renewalDate).toLocaleDateString('en-CA')}</span></p>
        <p><span className="font-medium text-gray-700">Status:</span> <span className={`font-semibold ${policy.status === 'Active' ? 'text-[#779649]' : 'text-amber-600'}`}>{policy.status}</span></p>
        <div className="pt-3 border-t border-gray-200 flex space-x-3 text-sm lg:text-lg">
            <NextLink href={policy.detailsLink} className="text-[#615EA8] hover:text-[#4A4B9D] font-medium py-2 px-3 rounded-md hover:bg-indigo-50 transition-colors">View Details</NextLink>
            <NextLink href={policy.documentLink} target="_blank" className="text-gray-600 hover:text-[#615EA8] font-medium py-2 px-3 rounded-md hover:bg-indigo-50 transition-colors flex items-center">
                <FileText size={16} className="mr-1.5" /> View Policy Doc
            </NextLink>
        </div>
      </div>
    </div>
  );
};

interface ActionItem {
  title: string;
  // value: string;
  icon: React.ElementType;
  bgColor: string;
  textColor?: string;
  href: string; // Link for the summary card
}

const actionItemsData: ActionItem[] = [
  { title: 'Get a New Quote', icon: PlusCircle, bgColor: `bg-[#7d948c]`, textColor: 'text-white', href: '/mortgage' },
  { title: 'File a Claim', icon: AlertTriangle, bgColor: 'bg-[#7d948c]', textColor: 'text-white', href: '/investment' },
  { title: 'Contact Insurance Advisor', icon: Phone, bgColor: 'bg-[#7d948c]', textColor: 'text-white', href: '/insurance' },
];

const ActionCard: React.FC<{ item: ActionItem }> = ({ item }) => {
  const IconComponent = item.icon;
  return (
    <NextLink href={item.href} className={``}>
        <div className={`${futura.className} ${item.bgColor} ${item.textColor} rounded-xl py-2 lg:py-8 shadow-sm flex justify-center border-2 border-stone-200`}>
            <div className='flex w-full px-6 xl:px-8 2xl:px-12'>
                <div className='flex justify-center'>
                    <IconComponent size={88} strokeWidth={1} className='border-2 border-gray-300 rounded-full p-1 md:p-4 mt-1 md:mt-0 mb-1 w-[46px] h-[46px] md:w-[68px] md:h-[68px] xl:w-[88px] xl:h-[88px]'/>
                </div>
                <div className='items-center flex ml-2 md:ml-4'>
                    <div>
                        <div className='text-lg lg:text-xl 2xl:text-2xl'>{item.title}</div>
                        {/* <div className='text-lg lg:text-2xl font-semibold'>{item.value}</div> */}
                    </div>
                </div>
            </div>
        </div>
    </NextLink>
  );
};


const InsurancePage = () => {
  return (
    <>
      <Head>
        <title>Insurance Policies - MyBank</title>
        <meta name="description" content="Manage your auto and home insurance policies." />
      </Head>
      <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
        <Header />
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          <div className="mb-8 flex justify-between items-center">
            <div>
                <h1 className={`text-xl lg:text-4xl font-bold text-gray-800 ${lora.className}`}>Your Insurance Policies</h1>
                <p className={`text-gray-600 mt-1 lg:text-xl ${futura.className}`}>Overview of your active policies with City Bank Insurance.</p>
            </div>
            {/* <NextLink href="/dashboard" className="text-sm text-indigo-600 hover:text-indigo-800">
                &larr; Back to Dashboard
            </NextLink> */}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 lg:pt-6 mb-6 lg:mb-12">
              {actionItemsData.map((item, index) => (
                <ActionCard key={index} item={item} />
              ))}
          </div>

          {/* Policies List */}
          <section>
            {/* <h2 className="text-2xl font-semibold text-gray-700 mb-6">Active Policies</h2> */}
            <h2 className={`lg:text-lg xl:text-3xl font-semibold text-gray-700 mb-3 lg:mb-6 ${futura.className}`}>Active Policies</h2>
            {policiesData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {policiesData.map((policy) => (
                  <PolicyCard key={policy.id} policy={policy} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-white rounded-xl shadow-md">
                <Shield size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-xl font-medium text-gray-700">No Active Policies Found</p>
                <p className="text-gray-500 mt-2">Interested in getting coverage? Get a quote today!</p>
              </div>
            )}
          </section>

        </main>
        <footer className="py-10 mt-12 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MyBank Insurance. Terms and conditions apply.
          </div>
        </footer>
      </div>
    </>
  );
};

export default InsurancePage;