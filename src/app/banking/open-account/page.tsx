"use client";
import Head from 'next/head';
import React, { useState } from 'react';
import { ChevronRight, CreditCard, DollarSign, TrendingUp, Home as HomeIcon, Shield, Check } from 'lucide-react';
// PlusCircle, User, 
import { inter } from '../../../fonts';
import Header from '../../../components/Header';
import NextLink from 'next/link';

interface AccountType {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  interestRate?: string; // For savings/investment
  monthlyFee?: string; // For chequing
}

const accountTypesData: AccountType[] = [
  {
    id: 'chequing',
    name: 'Everyday Chequing Account',
    description: 'Perfect for your daily banking needs, bill payments, and direct deposits.',
    icon: CreditCard,
    features: ['Unlimited transactions', 'Free Interac e-Transfers®', 'Mobile cheque deposit', 'Access to 3,000+ ATMs'],
    monthlyFee: '$4.95 (Waived with $3,000 minimum balance)',
  },
  {
    id: 'savings',
    name: 'High-Interest Savings Account',
    description: 'Grow your money faster with our competitive interest rates. No monthly fees.',
    icon: DollarSign,
    features: ['High interest rate', 'No monthly fees', 'No minimum balance', 'Easy online transfers'],
    interestRate: 'Up to 3.50%',
  },
  {
    id: 'investment',
    name: 'Self-Directed Investing (TFSA/RRSP)',
    description: 'Take control of your investments with our easy-to-use platform. Trade stocks, ETFs, and more.',
    icon: TrendingUp,
    features: ['Low commission fees', 'Wide range of investment options', 'TFSA, RRSP, and non-registered accounts', 'Research tools & insights'],
  },
   {
    id: 'mortgage',
    name: 'Mortgage Solutions',
    description: 'Whether buying your first home or renewing, we offer competitive rates and flexible terms.',
    icon: HomeIcon,
    features: ['Fixed and variable rates', 'Flexible payment options', 'Pre-approval available', 'Expert advice'],
  },
];

const OpenAccountPage = () => {
  const [selectedAccountType, setSelectedAccountType] = useState<AccountType | null>(null);
  const [currentStep, setCurrentStep] = useState(1); // 1: Select Type, 2: Personal Info, 3: Review, 4: Confirmation

  const handleSelectAccountType = (accountType: AccountType) => {
    setSelectedAccountType(accountType);
    setCurrentStep(2); // Move to personal info step
  };

  // Mock form data for step 2 & 3
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', sin: '', address: '', city: '', province: '', postalCode: ''
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 2) { // Moving from Personal Info to Review
        // Add validation here if needed
        setCurrentStep(3);
    } else if (currentStep === 3) { // Submitting from Review
        if (!agreedToTerms) {
            alert("Please agree to the terms and conditions.");
            return;
        }
        // Mock submission
        setCurrentStep(4);
    }
  };


  const AccountTypeCard: React.FC<{ accountType: AccountType; onSelect: () => void; }> = ({ accountType, onSelect }) => {
    const Icon = accountType.icon;
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 mb-2">
            <Icon className="h-8 w-8 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-800">{accountType.name}</h2>
          </div>
          <p className="text-sm text-gray-600 mb-3">{accountType.description}</p>
          {accountType.interestRate && <p className="text-sm text-green-600 font-medium">Interest Rate: {accountType.interestRate}</p>}
          {accountType.monthlyFee && <p className="text-sm text-gray-500">Monthly Fee: {accountType.monthlyFee}</p>}
        </div>
        <div className="p-6 space-y-2 flex-grow">
          <h4 className="text-sm font-medium text-gray-700">Key Features:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {accountType.features.slice(0,3).map(feature => <li key={feature}>{feature}</li>)}
            {accountType.features.length > 3 && <li>And more...</li>}
          </ul>
        </div>
        <div className="p-6 bg-gray-50">
          <button onClick={onSelect} className="w-full bg-indigo-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center">
            Select & Continue <ChevronRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Open an Account - MyBank</title>
      </Head>
      <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
        <Header />
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          <div className="mb-8 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    {currentStep === 1 && "Open a New Account"}
                    {currentStep === 2 && `Application: ${selectedAccountType?.name}`}
                    {currentStep === 3 && "Review Your Application"}
                    {currentStep === 4 && "Application Submitted!"}
                </h1>
                <p className="text-gray-600 mt-1">
                    {currentStep === 1 && "Choose the account type that best suits your needs."}
                    {currentStep === 2 && "Please provide your personal information."}
                    {currentStep === 3 && "Please review your details before submitting."}
                    {currentStep === 4 && "Thank you for choosing MyBank!"}
                </p>
            </div>
             {currentStep > 1 &&
                <button onClick={() => { if(currentStep > 1 && currentStep < 4) setCurrentStep(currentStep -1); else if (currentStep ===4) setCurrentStep(1);}} className="text-sm text-indigo-600 hover:text-indigo-800">
                    {currentStep === 4 ? "Open Another Account" : "← Go Back"}
                </button>
             }
             {currentStep === 1 &&
                <NextLink href="/banking" className="text-sm text-indigo-600 hover:text-indigo-800">
                    &larr; Back to Dashboard
                </NextLink>
             }
          </div>

          {/* Progress Bar (Simplified) */}
            {currentStep > 1 && currentStep < 4 && (
                <div className="mb-8 w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${(currentStep -1 / 3) * 100}%` }}></div>
                    <div className="flex justify-between text-xs mt-1">
                        <span className={currentStep >= 2 ? 'text-indigo-600 font-semibold': 'text-gray-500'}>Personal Info</span>
                        <span className={currentStep >= 3 ? 'text-indigo-600 font-semibold': 'text-gray-500'}>Review</span>
                        <span className={currentStep >= 4 ? 'text-indigo-600 font-semibold': 'text-gray-500'}>Confirmation</span>
                    </div>
                </div>
            )}


          {currentStep === 1 && (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {accountTypesData.map(accType => (
                <AccountTypeCard key={accType.id} accountType={accType} onSelect={() => handleSelectAccountType(accType)} />
              ))}
            </section>
          )}

          {currentStep === 2 && selectedAccountType && (
            <section className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-lg font-semibold text-gray-700 mb-6">Step 1: Personal Information</h3>
                <form onSubmit={handleSubmitApplication} className="space-y-5">
                    {/* Simplified form fields */}
                    <div><label className="block text-sm font-medium">Full Name</label><input type="text" name="fullName" onChange={handleInputChange} className="mt-1 w-full p-2.5 border rounded-md"/></div>
                    <div><label className="block text-sm font-medium">Email Address</label><input type="email" name="email" onChange={handleInputChange} className="mt-1 w-full p-2.5 border rounded-md"/></div>
                    <div><label className="block text-sm font-medium">Phone Number</label><input type="tel" name="phone" onChange={handleInputChange} className="mt-1 w-full p-2.5 border rounded-md"/></div>
                    <div><label className="block text-sm font-medium">Social Insurance Number (SIN)</label><input type="text" name="sin" pattern="\d{3}-\d{3}-\d{3}" placeholder="000-000-000" onChange={handleInputChange} className="mt-1 w-full p-2.5 border rounded-md"/></div>
                    <div><label className="block text-sm font-medium">Street Address</label><input type="text" name="address" onChange={handleInputChange} className="mt-1 w-full p-2.5 border rounded-md"/></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div><label className="block text-sm font-medium">City</label><input type="text" name="city" onChange={handleInputChange} className="mt-1 w-full p-2.5 border rounded-md"/></div>
                        <div><label className="block text-sm font-medium">Province</label>
                            <select name="province" onChange={handleInputChange} className="mt-1 w-full p-2.5 border rounded-md bg-white">
                                <option value="">Select</option><option value="ON">ON</option><option value="QC">QC</option><option value="BC">BC</option> {/* Add other provinces */}
                            </select>
                        </div>
                        <div><label className="block text-sm font-medium">Postal Code</label><input type="text" name="postalCode" onChange={handleInputChange} className="mt-1 w-full p-2.5 border rounded-md"/></div>
                    </div>
                    <p className="text-xs text-gray-500 flex items-start"><Shield size={24} className="mr-2 text-green-500 flex-shrink-0"/> Your information is protected and encrypted. We require this information to verify your identity and comply with federal regulations.</p>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700">Next: Review Application</button>
                </form>
            </section>
          )}
          {currentStep === 3 && selectedAccountType && (
             <section className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Step 2: Review & Submit</h3>
                <p className="text-sm text-gray-600 mb-6">You are applying for: <span className="font-semibold">{selectedAccountType.name}</span></p>
                <div className="space-y-3 mb-6 border p-4 rounded-md bg-gray-50">
                    <h4 className="font-medium text-gray-800">Personal Details:</h4>
                    <p className="text-sm"><strong>Full Name:</strong> {formData.fullName || 'N/A'}</p>
                    <p className="text-sm"><strong>Email:</strong> {formData.email || 'N/A'}</p>
                    <p className="text-sm"><strong>Phone:</strong> {formData.phone || 'N/A'}</p>
                    <p className="text-sm"><strong>Address:</strong> {formData.address}, {formData.city}, {formData.province} {formData.postalCode || 'N/A'}</p>
                </div>
                <div className="space-y-3 mb-6">
                    <label className="flex items-start space-x-2 text-sm">
                        <input type="checkbox" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className="mt-1 form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                        <span>I have read and agree to the <a href="/terms-and-conditions" target="_blank" className="text-indigo-600 hover:underline">Account Agreement</a> and <a href="/privacy-policy" target="_blank" className="text-indigo-600 hover:underline">Privacy Policy</a>.</span>
                    </label>
                </div>
                <button onClick={handleSubmitApplication} className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700">Submit Application</button>
             </section>
          )}
          {currentStep === 4 && selectedAccountType && (
            <section className="max-w-xl mx-auto text-center bg-white p-10 rounded-xl shadow-xl">
                <Check size={60} className="mx-auto text-green-500 mb-4"/>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Application Received!</h2>
                <p className="text-gray-600 mb-2">Thank you for applying for the {selectedAccountType.name}.</p>
                <p className="text-gray-600 mb-6">We will review your application and contact you within 1-2 business days with next steps. Your reference number is <span className="font-semibold">MBA-{Math.floor(Math.random()*90000) + 10000}</span>.</p>
                <NextLink href="/banking" className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700">Return to Dashboard</NextLink>
            </section>
          )}

        </main>
        <footer className="py-10 mt-12 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            MyBank is a member of CDIC. Certain conditions apply.
          </div>
        </footer>
      </div>
    </>
  );
};

export default OpenAccountPage;