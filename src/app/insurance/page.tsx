// app/dashboard/insurance/page.tsx
"use client";
import Head from 'next/head';
import React from 'react';
import { Shield, Car, Home as HomeIcon, FileText, PlusCircle, AlertTriangle, Phone } from 'lucide-react';
import { inter } from '../../fonts';
import Header from '../../components/Header'; // Adjusted path
import NextLink from 'next/link';

const themeColor = "#7d948c"; // Desaturated Cyan/Greyish Green
const themeTextColor = "text-white";
const themeAccentTextColor = "text-[#596a65]"; // Darker shade for text emphasis

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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div style={{ backgroundColor: themeColor }} className={`${themeTextColor} p-5 flex items-center space-x-4`}>
        <IconComponent size={32} />
        <div>
          <h3 className="text-xl font-semibold">{policy.type} Insurance</h3>
          <p className="text-sm opacity-90">Policy #: {policy.policyNumber}</p>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <p><span className="font-medium text-gray-700">Coverage:</span> <span className="text-gray-600">{policy.coverageSummary}</span></p>
        <p><span className="font-medium text-gray-700">Premium:</span> <span className="text-gray-600">{formatCurrency(policy.premium)} / month</span></p>
        <p><span className="font-medium text-gray-700">Renewal:</span> <span className="text-gray-600">{new Date(policy.renewalDate).toLocaleDateString('en-CA')}</span></p>
        <p><span className="font-medium text-gray-700">Status:</span> <span className={`font-semibold ${policy.status === 'Active' ? 'text-green-600' : 'text-amber-600'}`}>{policy.status}</span></p>
        <div className="pt-3 border-t border-gray-200 flex space-x-3">
            <NextLink href={policy.detailsLink} className="text-sm text-indigo-600 hover:text-indigo-800 font-medium py-2 px-3 rounded-md hover:bg-indigo-50 transition-colors">View Details</NextLink>
            <NextLink href={policy.documentLink} target="_blank" className="text-sm text-gray-600 hover:text-indigo-600 font-medium py-2 px-3 rounded-md hover:bg-indigo-50 transition-colors flex items-center">
                <FileText size={16} className="mr-1.5" /> View Policy Doc
            </NextLink>
        </div>
      </div>
    </div>
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
                <h1 className="text-3xl font-bold text-gray-800">Your Insurance Policies</h1>
                <p className="text-gray-600 mt-1">Overview of your active policies with MyBank Insurance.</p>
            </div>
            <NextLink href="/dashboard" className="text-sm text-indigo-600 hover:text-indigo-800">
                &larr; Back to Dashboard
            </NextLink>
          </div>

          {/* Quick Actions */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Insurance Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <button style={{ backgroundColor: themeColor }} className={`${themeTextColor} px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center shadow-md`}>
                    <PlusCircle size={20} className="mr-2"/> Get a New Quote
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center shadow-sm">
                    <AlertTriangle size={20} className="mr-2"/> File a Claim
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center shadow-sm">
                    <Phone size={20} className="mr-2"/> Contact Insurance Advisor
                </button>
            </div>
          </section>

          {/* Policies List */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Active Policies</h2>
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