'use client';
import React, { useState, useEffect } from 'react';
import { lora } from '../../fonts'; // Assuming this import is correct for your project structure
import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
const futuraLight = localFont({ src: '../../fontFiles/FuturaCyrillicLight.ttf' })
const futuraBold = localFont({ src: '../../fontFiles/FuturaCyrillicBold.ttf' })

import Header from '../../components/Header'

const paymentFrequencyMultiplier: { [key: string]: number } = {
    monthly: 12,
    'semi-monthly': 24,
    'bi-weekly': 26,
    weekly: 52,
};

interface PaymentFrequencyData {
    frequency: string;
    paymentAmount: number;
    paymentsPerYear: number;
    totalPayments: number;
    amortization: number;
    interestCostTerm: number;
    totalInterestCost: number;
    interestSavings: number | null;
}

interface AmortizationEntry {
    year: number;
    startingBalance: number;
    payment: number;
    interestPaid: number;
    principalPaid: number;
    endingBalance: number;
}

function MortgageCalculator() {
    // MARK: Tailwind CSS Class Constants (with mobile-first responsive adjustments)
    const containerPaddingClasses = 'px-4 sm:px-6 lg:px-8 py-6 lg:py-8';
    const mainTitleClasses = 'text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 text-center lg:text-left';

    const inputBaseClasses = 'bg-white h-12 lg:h-16 w-full text-base lg:text-xl border-2 rounded-xl py-2 focus:outline-none focus:ring-2 focus:ring-stone-300';
    const inputDefaultBorder = 'border-stone-300';
    const inputErrorBorder = 'border-red-500';
    const inputIconLeftPadding = 'pl-10 pr-4'; // For inputs with a left icon ($)
    const inputIconRightPadding = 'pl-4 pr-10'; // For inputs with a right icon (%)
    const selectInputPadding = 'px-4';

    const labelTextClasses = 'text-base lg:text-xl font-semibold mb-1 lg:mb-2 cursor-default';
    const customInputLabelTextClasses = `${labelTextClasses} text-stone-700`;
    const errorTextClasses = 'text-red-500 text-xs lg:text-sm mt-1';

    const sectionTitleClasses = `text-xl sm:text-2xl lg:text-3xl mb-3 lg:mb-4 ${lora.className}`;
    const formGroupGridClasses = 'grid lg:grid-cols-2 gap-4 lg:gap-8';
    const formElementGroupSpacing = 'space-y-6 lg:space-y-8'; // Overall spacing for input groups

    // const calculateButtonClasses = 'h-12 lg:h-16 w-full sm:w-auto text-base sm:text-lg lg:text-xl border-2 border-stone-400 bg-stone-200 hover:bg-stone-300 font-semibold rounded-xl py-2 px-6 lg:px-8 cursor-pointer transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-opacity-50';

    const paymentDisplayContainerClasses = 'w-full flex flex-col justify-center items-center border-2 border-stone-300 rounded-2xl p-4 lg:p-8 mt-6 lg:mt-12 space-y-1 lg:space-y-0 lg:min-h-[150px]';
    const paymentDisplayLabelClasses = 'capitalize text-base sm:text-lg lg:text-2xl mb-1 lg:mb-2 text-center';
    const paymentDisplayAmountClasses = 'text-2xl sm:text-3xl lg:text-5xl font-bold text-stone-700 text-center';
    const paymentDisplayPlaceholderClasses = 'text-center text-stone-500 text-base lg:text-2xl';

    const tabsContainerClasses = 'flex flex-wrap border-b border-stone-300 mb-4 lg:mb-8';
    const tabButtonBaseClasses = 'py-2 lg:py-3 px-3 sm:px-4 lg:px-6 text-sm sm:text-base lg:text-2xl font-semibold focus:outline-none cursor-pointer transition-colors duration-200 whitespace-nowrap';
    const tabButtonActiveClasses = 'border-b-2 border-stone-700 text-stone-700';
    const tabButtonInactiveClasses = 'text-stone-500 hover:text-stone-600';

    const tableContainerClasses = 'overflow-x-auto border border-stone-300 rounded-xl p-2 lg:p-4';
    // For Payment Frequency Table
    const paymentFreqTableHeaderCellClasses = 'py-2 px-2 text-xs sm:text-sm lg:text-2xl font-semibold text-stone-700 capitalize whitespace-nowrap';
    const paymentFreqTableLabelCellClasses = `py-2 px-2 text-xs sm:text-sm lg:text-2xl font-semibold text-stone-700`; 
    const paymentFreqTableValueCellClasses = `py-2 px-2 text-xs sm:text-sm lg:text-xl whitespace-nowrap`;
    // For Amortization Table
    const amortizationTableHeaderCellClasses = 'py-2 px-2 text-xs sm:text-sm lg:text-xl font-semibold text-stone-700 whitespace-nowrap';
    const amortizationTableBodyCellClasses = 'py-2 px-2 text-xs sm:text-sm lg:text-xl whitespace-nowrap';

    const tableRowClasses = "border-b border-stone-200 last:border-b-0 ";

    const amortizationViewButtonContainerClasses = 'flex justify-center mb-4 lg:mb-8';
    const amortizationViewButtonClasses = `py-3 px-4 sm:px-4 lg:py-3 lg:px-6 text-xs sm:text-sm lg:text-xl focus:outline-none cursor-pointer transition-colors duration-200`;
    const amortizationViewButtonActiveClasses = 'bg-stone-500 text-white';
    const amortizationViewButtonInactiveClasses = 'bg-stone-200 text-stone-700 hover:bg-stone-300';

    const paginationContainerClasses = 'flex justify-center items-center mt-4 lg:mt-8 space-x-2 lg:space-x-4 text-xs sm:text-sm lg:text-xl';
    const paginationButtonClasses = `py-2 px-3 lg:px-4 bg-stone-200 rounded-lg lg:rounded-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:bg-stone-300 text-xs sm:text-sm lg:text-xl`;

    // MARK: STATE VARIABLES
    const [principalInput, setPrincipalInput] = useState<number | ''>('');
    const [principalDropdown, setPrincipalDropdown] = useState<number>(5000);
    const [downPaymentInput, setDownPaymentInput] = useState<number | ''>('');
    const [interestRateInput, setInterestRateInput] = useState<number | ''>('');
    const [interestRateDropdown, setInterestRateDropdown] = useState<number>(8.00);
    const [loanTerm, setLoanTerm] = useState<number>(6); // Defaulting to 6 months
    const [paymentFrequency, setPaymentFrequency] = useState<string>('monthly');
    const [selectedPaymentAmount, setSelectedPaymentAmount] = useState<number | null>(null);
    const [paymentFrequencyData, setPaymentFrequencyData] = useState<PaymentFrequencyData[] | null>(null);
    const [amortizationSchedule, setAmortizationSchedule] = useState<AmortizationEntry[] | null>(null);
    const [activeTab, setActiveTab] = useState<string>('paymentFrequency');
    const [amortizationView, setAmortizationView] = useState<'annual' | 'full'>('annual');
    const [amortizationPage, setAmortizationPage] = useState<number>(1);
    const itemsPerPage = 12;
    const [principalError, setPrincipalError] = useState<string | null>(null);
    const [downPaymentError, setDownPaymentError] = useState<string | null>(null);
    const [interestRateError, setInterestRateError] = useState<string | null>(null);
    const [calculationError, setCalculationError] = useState<string | null>(null);

    // MARK: OPTIONS ARRAYS
    const principalOptions = [
        5000, 10000, 25000, 50000, 100000, 150000, 200000, 250000, 300000, 350000,
        400000, 450000, 500000, 550000, 600000, 650000, 700000, 750000, 800000,
        850000, 900000, 950000, 1000000, 1050000, 1100000, 1150000, 1200000,
        1250000, 1300000, 1350000, 1400000, 1450000, 1500000, 1600000, 1700000, 1800000, 1900000, 2000000
    ];
    const loanTermOptions = [
        { label: '6 Months', value: 6 }, { label: '1 Year', value: 12 }, { label: '2 Years', value: 24 },
        { label: '3 Years', value: 36 }, { label: '4 Years', value: 48 }, { label: '5 Years', value: 60 },
        { label: '6 Years', value: 72 }, { label: '7 Years', value: 84 }, { label: '8 Years', value: 96 },
        { label: '9 Years', value: 108 }, { label: '10 Years', value: 120 }, { label: '11 Years', value: 132 },
        { label: '12 Years', value: 144 }, { label: '13 Years', value: 156 }, { label: '14 Years', value: 168 },
        { label: '15 Years', value: 180 }, { label: '16 Years', value: 192 }, { label: '17 Years', value: 204 },
        { label: '18 Years', value: 216 }, { label: '19 Years', value: 228 }, { label: '20 Years', value: 240 },
        { label: '21 Years', value: 252 }, { label: '22 Years', value: 264 }, { label: '23 Years', value: 276 },
        { label: '24 Years', value: 288 }, { label: '25 Years', value: 300 }, { label: '26 Years', value: 312 },
        { label: '27 Years', value: 324 }, { label: '28 Years', value: 336 }, { label: '29 Years', value: 348 },
        { label: '30 Years', value: 360 },
    ];
    const interestRateOptions = [
        { label: 'Fixed Rate Mortgages', value: '', disabled: true }, { label: '1 year open - 8.00%', value: 8.00 },
        { label: '6 month closed - 6.09%', value: 6.09 }, { label: '1 year closed - 6.09%', value: 6.09 },
        { label: '2 year closed - 5.39%', value: 5.39 }, { label: '3 year closed - 6.05%', value: 6.05 },
        { label: '4 year closed - 5.99%', value: 5.99 }, { label: '5 year closed - 6.09%', value: 6.09 },
        { label: '6 year closed - 6.29%', value: 6.29 }, { label: '7 year closed - 6.40%', value: 6.40 },
        { label: '10 year closed - 6.80%', value: 6.80 }, { label: 'Variable Rate Mortgages', value: '', disabled: true },
        { label: '5 year open variable - 6.10%', value: 6.10 }, { label: '5 year closed variable - 4.89%', value: 4.89 },
        { label: 'Special Fixed Rate Mortgages', value: '', disabled: true }, { label: '3 year closed - 4.69%', value: 4.69 },
        { label: '5 year closed - 4.69%', value: 4.69 },
    ];
    const paymentFrequencyOptions = [
        { label: 'Monthly', value: 'monthly' }, { label: 'Semi-Monthly', value: 'semi-monthly' },
        { label: 'Bi-Weekly', value: 'bi-weekly' }, { label: 'Weekly', value: 'weekly' },
    ];

    // MARK: CALCULATED VALUES
    const effectivePrincipal = principalInput !== '' && principalError === null
        ? Number(principalInput)
        : Number(principalDropdown);

    // MARK: INPUT HANDLERS
    const handlePrincipalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPrincipalInput(value === '' ? '' : Number(value));
        if (value === '') {
            setPrincipalError(null);
            if (downPaymentInput !== '') { setDownPaymentError('Please enter a valid down payment'); } else { setDownPaymentError(null); }
        } else {
            const numValue = Number(value);
            if (isNaN(numValue) || !Number.isInteger(numValue) || numValue < 1 || numValue > 5000000) {
                setPrincipalError('Please enter a valid principal (1 - 5,000,000)');
                if (downPaymentInput !== '') { setDownPaymentError('Please enter a valid down payment'); }
            } else {
                setPrincipalError(null);
                if (downPaymentInput !== '') {
                    const downPaymentValue = Number(downPaymentInput);
                    if (isNaN(downPaymentValue) || !Number.isInteger(downPaymentValue) || downPaymentValue < 0 || downPaymentValue >= numValue) {
                        setDownPaymentError(`Down payment must be less than principal ($${numValue.toLocaleString()})`);
                    } else { setDownPaymentError(null); }
                } else { setDownPaymentError(null); }
            }
        }
        setCalculationError(null);
    };

    const handleDownPaymentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setDownPaymentInput(value === '' ? '' : Number(value));
        if (value === '') { setDownPaymentError(null); } else {
            const numValue = Number(value);
            const currentPrincipal = effectivePrincipal;
            if (isNaN(numValue) || !Number.isInteger(numValue) || numValue < 0 || numValue >= currentPrincipal) {
                setDownPaymentError(`Down payment must be less than principal ($${currentPrincipal.toLocaleString()})`);
            } else { setDownPaymentError(null); }
        }
        setCalculationError(null);
    };

    const handleInterestRateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInterestRateInput(value === '' ? '' : Number(value));
        if (value === '') { setInterestRateError(null); } else {
            const numValue = Number(value);
            if (isNaN(numValue) || numValue < 0.01 || numValue > 20) {
                setInterestRateError('Please enter a valid interest rate (0.01% - 20%)');
            } else { setInterestRateError(null); }
        }
        setCalculationError(null);
    };

    const handlePaymentFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPaymentFrequency(e.target.value);
        setCalculationError(null);
        setAmortizationPage(1);
    };

    const handleLoanTermChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLoanTerm(Number(e.target.value));
        setCalculationError(null);
        setAmortizationPage(1);
    };

    // MARK: CALCULATION LOGIC
    const calculateMortgage = () => {
        const p = effectivePrincipal;
        const d = downPaymentInput !== '' && downPaymentError === null ? Number(downPaymentInput) : 0;
        const loanAmount = p - d;
        const annualInterestRate = interestRateInput !== '' && interestRateError === null ? Number(interestRateInput) : Number(interestRateDropdown);
        const loanTermInMonths = Number(loanTerm);
        const loanTermInYears = loanTermInMonths / 12;

        setSelectedPaymentAmount(null);
        setPaymentFrequencyData(null);
        setAmortizationSchedule(null);
        setCalculationError(null);
        setAmortizationPage(1);

        if (isNaN(p) || isNaN(d) || isNaN(annualInterestRate) || isNaN(loanTermInMonths) || p <= 0 || loanAmount <= 0 || annualInterestRate <= 0 || loanTermInMonths <= 0 || principalError !== null || downPaymentError !== null || interestRateError !== null) {
            setCalculationError("Please fix the errors above to calculate.");
            return;
        }

        const annualRateDecimal = annualInterestRate / 100;
        const compoundingFrequency = 2; // Typically semi-annually for Canadian mortgages
        const rateCompoundedPerPeriod = annualRateDecimal / compoundingFrequency;

        const comparisonData: PaymentFrequencyData[] = [];
        let monthlyTotalInterestCost = 0;
        let calculatedSelectedPayment = 0;

        for (const freq in paymentFrequencyMultiplier) {
            const paymentsPerYear = paymentFrequencyMultiplier[freq];
            const totalPayments = loanTermInYears * paymentsPerYear;

            if (totalPayments <= 0) {
                console.warn(`Cannot calculate for frequency ${freq}: total payments is zero or less.`);
                continue;
            }
            const ratePerPeriod = Math.pow(1 + rateCompoundedPerPeriod, (compoundingFrequency / paymentsPerYear)) - 1;

            let paymentValue = 0;
            let totalInterest = 0;

            if (ratePerPeriod <= 0) { // Handles 0% interest rate scenario more robustly
                paymentValue = loanAmount / totalPayments;
                totalInterest = 0;
            } else {
                const numerator = ratePerPeriod * Math.pow(1 + ratePerPeriod, totalPayments);
                const denominator = Math.pow(1 + ratePerPeriod, totalPayments) - 1;
                if (denominator <= 0) {
                     console.warn(`Cannot calculate for frequency ${freq}: formula denominator is zero or less.`);
                     continue;
                }
                paymentValue = loanAmount * (numerator / denominator);
                totalInterest = (paymentValue * totalPayments) - loanAmount;
                if (totalInterest < 0) totalInterest = 0;
            }

            if (freq === 'monthly') {
                monthlyTotalInterestCost = totalInterest;
            }
            if (freq === paymentFrequency) {
                calculatedSelectedPayment = paymentValue;
            }

            comparisonData.push({
                frequency: freq,
                paymentAmount: paymentValue,
                paymentsPerYear: paymentsPerYear,
                totalPayments: totalPayments,
                amortization: loanTermInYears,
                interestCostTerm: totalInterest,
                totalInterestCost: totalInterest,
                interestSavings: null,
            });
        }

        setSelectedPaymentAmount(calculatedSelectedPayment);

        const finalComparisonData = comparisonData.map(data => ({
            ...data,
            interestSavings: data.frequency === 'monthly' ? null : monthlyTotalInterestCost - data.totalInterestCost,
        }));
        setPaymentFrequencyData(finalComparisonData);

        const detailedAmortization: AmortizationEntry[] = [];
        let currentBalance = loanAmount;
        const paymentsPerYearForSelected = paymentFrequencyMultiplier[paymentFrequency];
        const totalPaymentsForSelected = loanTermInYears * paymentsPerYearForSelected;
        const ratePerPeriodForSelected = Math.pow(1 + rateCompoundedPerPeriod, (compoundingFrequency / paymentsPerYearForSelected)) - 1;
        const amortizationPayment = calculatedSelectedPayment > 0 ? calculatedSelectedPayment : 0;


        if (amortizationPayment > 0 && totalPaymentsForSelected > 0 && ratePerPeriodForSelected >= 0) { // Ensure rate is not negative
            for (let i = 1; i <= totalPaymentsForSelected; i++) {
                const interestPayment = currentBalance * ratePerPeriodForSelected;
                let principalPayment = amortizationPayment - interestPayment;

                if (currentBalance - principalPayment < -0.01) {
                    principalPayment = currentBalance;
                }
                 // Ensure last payment matches remaining balance if slightly off
                if (i === totalPaymentsForSelected && (currentBalance - principalPayment) > 0.01) {
                    principalPayment = currentBalance; // Pay off remaining balance
                }


                const newBalance = currentBalance - principalPayment;

                detailedAmortization.push({
                    year: Math.ceil(i / paymentsPerYearForSelected),
                    startingBalance: currentBalance,
                    payment: principalPayment + interestPayment, // Actual payment might adjust slightly for last payment
                    interestPaid: interestPayment,
                    principalPaid: principalPayment,
                    endingBalance: Math.max(0, newBalance),
                });
                currentBalance = Math.max(0, newBalance);

                if (currentBalance < 0.01) {
                     if (detailedAmortization.length > 0) {
                        const lastEntry = detailedAmortization[detailedAmortization.length - 1];
                        if (lastEntry.endingBalance !== 0) { // If not already zeroed out by the logic above
                            const adjustment = lastEntry.endingBalance;
                            lastEntry.endingBalance = 0;
                            lastEntry.principalPaid += adjustment;
                            // Payment amount is generally fixed, adjustment is on principal.
                            // If the calculated payment was slightly off, this corrects it.
                            // lastEntry.payment = lastEntry.principalPaid + lastEntry.interestPaid;
                        }
                    }
                    break;
                }
            }
        }
        setAmortizationSchedule(detailedAmortization);
    };

    // MARK: useEffect FOR AUTOMATIC RECALCULATION
    useEffect(() => {
        calculateMortgage();
    }, [principalInput, principalDropdown, downPaymentInput, interestRateInput, interestRateDropdown, loanTerm, paymentFrequency, principalError, downPaymentError, interestRateError]);
 
    // MARK: PAGINATION LOGIC
    const annualAmortization = amortizationSchedule?.reduce((acc, entry) => {
        const yearEntry = acc.find(e => e.year === entry.year);
        if (yearEntry) {
            yearEntry.payment += entry.payment;
            yearEntry.principalPaid += entry.principalPaid;
            yearEntry.interestPaid += entry.interestPaid;
            yearEntry.endingBalance = entry.endingBalance; // Ending balance of the last payment in the year
        } else {
            // For the first entry of a year, starting balance is correct.
            // For subsequent entries, it would be the previous month's ending balance.
            // The first entry for the year will have the correct starting balance.
            acc.push({ ...entry });
        }
        return acc;
    }, [] as AmortizationEntry[]) || [];

    const fullAmortization = amortizationSchedule || [];
    const totalPages = Math.ceil(fullAmortization.length / itemsPerPage);
    const paginatedAmortization = fullAmortization.slice((amortizationPage - 1) * itemsPerPage, amortizationPage * itemsPerPage);
    const handleNextPage = () => { if (amortizationPage < totalPages) { setAmortizationPage(amortizationPage + 1); } };
    const handlePrevPage = () => { if (amortizationPage > 1) { setAmortizationPage(amortizationPage - 1); } };

    return (
        <div className='bg-stone-50 min-h-screen'> 
            {/* Header Section */}
            {/* <div className='h-24 lg:h-32 bg-stone-500 w-full'></div>  */}
            <Header/>

            {/* Main Page Content */}
            <div className={`${futura.className} ${containerPaddingClasses} container mx-auto`}>
                <h1 className={`${mainTitleClasses} ${lora.className}`}>Mortgage Calculator</h1>

                {/* Mortgage Details Input Section */}
                <div className={formElementGroupSpacing}>
                    {/* <div className={sectionTitleClasses}>Your Mortgage Details</div> */}

                    {/* Principal Amount Inputs */}
                    <div className={formGroupGridClasses}>
                        <div className='w-full'>
                            <div className={labelTextClasses}>Mortgage Amount</div>
                            <select
                                id="principalDropdown"
                                value={principalDropdown}
                                onChange={(e) => setPrincipalDropdown(Number(e.target.value))}
                                className={`${inputBaseClasses} ${inputDefaultBorder} ${selectInputPadding}`}
                            >
                                {principalOptions.map((option) => (
                                    <option key={option} value={option}>${option.toLocaleString()}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full'>
                            <div className={customInputLabelTextClasses}>Custom Principal</div>
                            <div className='relative'>
                                <div className='absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-base lg:text-xl text-stone-500'>$</div>
                                <input
                                    type="number"
                                    id="principalInput"
                                    value={principalInput}
                                    onChange={handlePrincipalInputChange}
                                    className={`${inputBaseClasses} ${principalError ? inputErrorBorder : inputDefaultBorder} ${inputIconLeftPadding}`}
                                    placeholder="Enter custom amount"
                                />
                            </div>
                            {principalError && <p className={errorTextClasses}>{principalError}</p>}
                        </div>
                    </div>

                    {/* Down Payment Input */}
                    <div className='lg:w-1/2'> {/* Stacks on mobile, half width on lg */}
                        <div className={labelTextClasses}>Down Payment</div>
                        <div className='relative lg:pr-4'>
                            <div className='absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-base lg:text-xl text-stone-500'>$</div>
                            <input
                                type="number"
                                id="downPaymentInput"
                                value={downPaymentInput}
                                onChange={handleDownPaymentInputChange}
                                className={`${inputBaseClasses} ${downPaymentError ? inputErrorBorder : inputDefaultBorder} ${inputIconLeftPadding}`}
                                placeholder="Enter amount"
                            />
                        </div>
                        {downPaymentError && <p className={errorTextClasses}>{downPaymentError}</p>}
                    </div>

                    {/* Interest Rate Inputs */}
                    <div className={formGroupGridClasses}>
                        <div className='w-full'>
                            <div className={labelTextClasses}>Interest Rate</div>
                            <select
                                id="interestRateDropdown"
                                value={interestRateDropdown}
                                onChange={(e) => setInterestRateDropdown(Number(e.target.value))}
                                className={`${inputBaseClasses} ${inputDefaultBorder} ${selectInputPadding}`}
                            >
                                <option value="" disabled>Select Rate</option>
                                {interestRateOptions.map((option) => (
                                    <option key={option.label} value={option.value} disabled={option.disabled} style={option.disabled ? { fontWeight: 'bold', fontStyle: 'italic' } : {}} >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full'>
                            <div className={customInputLabelTextClasses}>Custom Interest Rate (%)</div>
                            <div className='relative'>
                                <input
                                    type="number"
                                    id="interestRateInput"
                                    step="0.01"
                                    value={interestRateInput}
                                    onChange={handleInterestRateInputChange}
                                    className={`${inputBaseClasses} ${interestRateError ? inputErrorBorder : inputDefaultBorder} ${inputIconRightPadding}`}
                                    placeholder="Enter custom rate"
                                />
                                <div className='absolute right-3 lg:right-4 top-1/2 transform -translate-y-1/2 text-base lg:text-xl text-stone-500'>%</div>
                            </div>
                            {interestRateError && <p className={errorTextClasses}>{interestRateError}</p>}
                        </div>
                    </div>

                    {/* Loan Term and Payment Frequency Inputs */}
                    <div className={formGroupGridClasses}>
                        <div className='w-full'>
                            <div className={labelTextClasses}>Interest Term</div>
                            <select
                                id="loanTerm"
                                value={loanTerm}
                                onChange={handleLoanTermChange}
                                className={`${inputBaseClasses} ${inputDefaultBorder} ${selectInputPadding}`}
                            >
                                {loanTermOptions.map((option) => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full'>
                            <div className={labelTextClasses}>Payment Frequency</div>
                            <select
                                id="paymentFrequency"
                                value={paymentFrequency}
                                onChange={handlePaymentFrequencyChange}
                                className={`${inputBaseClasses} ${inputDefaultBorder} ${selectInputPadding}`}
                            >
                                {paymentFrequencyOptions.map((option) => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Selected Payment Amount Display */}
                    <div className={paymentDisplayContainerClasses}>
                        {selectedPaymentAmount !== null && !calculationError ? (
                            <>
                                <h2 className={paymentDisplayLabelClasses}>Your {paymentFrequency.replace('-', ' ')} Payment:</h2>
                                <p className={paymentDisplayAmountClasses}>${selectedPaymentAmount.toFixed(2)}</p>
                            </>
                        ) : (
                            <div className={paymentDisplayPlaceholderClasses}>
                                {calculationError ? calculationError : "Enter details above to calculate your payment."}
                            </div>
                        )}
                    </div>
                </div>

                {/* Mortgage Details Overview Section (Charts/Tables) */}
                {(paymentFrequencyData || amortizationSchedule || calculationError) && (
                    <div className='mt-8 lg:mt-12 mb-12 lg:mb-32'>
                        <div className={sectionTitleClasses}>Mortgage Details Overview</div>

                        {/* Tabs for Switching Views */}
                        <div className={tabsContainerClasses}>
                            <button
                                className={`${tabButtonBaseClasses} ${activeTab === 'paymentFrequency' ? tabButtonActiveClasses : tabButtonInactiveClasses}`}
                                onClick={() => setActiveTab('paymentFrequency')}
                            >
                                Payment Options
                            </button>
                            <button
                                className={`${tabButtonBaseClasses} ${activeTab === 'amortizationTable' ? tabButtonActiveClasses : tabButtonInactiveClasses}`}
                                onClick={() => setActiveTab('amortizationTable')}
                            >
                                Amortization
                            </button>
                        </div>

                        {/* Content Area for Tabs */}
                        <div className='chart-content'>
                            {!paymentFrequencyData && !amortizationSchedule && calculationError && activeTab !== 'paymentFrequency' && activeTab !== 'amortizationTable' ? ( // Show general error if no data and no specific tab error
                                <div className='text-red-500 text-center text-base lg:text-xl py-8'>{calculationError}</div>
                            ) : (
                                <>
                                    {/* Payment Frequency Comparison Table */}
                                    {activeTab === 'paymentFrequency' && (
                                        paymentFrequencyData ? (
                                            <div className={tableContainerClasses}>
                                                <table className='w-full text-left border-collapse'>
                                                    <thead>
                                                        <tr>
                                                            <th className={paymentFreqTableHeaderCellClasses}></th>     
                                                            {paymentFrequencyOptions.map(option => (
                                                                <th key={option.value} className={paymentFreqTableHeaderCellClasses}>{option.label}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className={tableRowClasses}>
                                                            <td className={paymentFreqTableLabelCellClasses}>Payment Amount</td>
                                                            {paymentFrequencyData.map(data => (<td key={`${data.frequency}-payment`} className={paymentFreqTableValueCellClasses}>${data.paymentAmount.toFixed(2)}</td>))}
                                                        </tr>
                                                        <tr className={tableRowClasses}>
                                                            <td className={paymentFreqTableLabelCellClasses}>Payments Per Year</td>
                                                            {paymentFrequencyData.map(data => (<td key={`${data.frequency}-peryear`} className={paymentFreqTableValueCellClasses}>{data.paymentsPerYear}</td>))}
                                                        </tr>
                                                        <tr className={tableRowClasses}>
                                                            <td className={paymentFreqTableLabelCellClasses}>Total Payments (Term)</td>
                                                            {paymentFrequencyData.map(data => (<td key={`${data.frequency}-totalpayments`} className={paymentFreqTableValueCellClasses}>{Math.round(data.totalPayments)}</td>))}
                                                        </tr>
                                                        <tr className={tableRowClasses}>
                                                            <td className={paymentFreqTableLabelCellClasses}>Amortization (Years)</td>
                                                            {paymentFrequencyData.map(data => (<td key={`${data.frequency}-amort`} className={paymentFreqTableValueCellClasses}>{data.amortization.toFixed(1)}</td>))}
                                                        </tr>
                                                        <tr className={tableRowClasses}>
                                                            <td className={paymentFreqTableLabelCellClasses}>Total Interest (Term)</td>
                                                            {paymentFrequencyData.map(data => (<td key={`${data.frequency}-interest`} className={paymentFreqTableValueCellClasses}>${data.totalInterestCost.toFixed(2)}</td>))}
                                                        </tr>
                                                        <tr className={tableRowClasses}>
                                                            <td className={paymentFreqTableLabelCellClasses}>Interest Savings</td>
                                                            {paymentFrequencyData.map(data => (
                                                                <td key={`${data.frequency}-savings`} className={paymentFreqTableValueCellClasses}>
                                                                    {data.interestSavings !== null ? (data.interestSavings > 0 ? `$${data.interestSavings.toFixed(2)}` : (data.interestSavings < 0 ? `-$${Math.abs(data.interestSavings).toFixed(2)}` : '-')) : '-'}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        ) : (
                                            <div className='text-center text-stone-500 text-base lg:text-xl py-8'>
                                                {calculationError ? calculationError : "Calculate your mortgage to see payment frequency comparison."}
                                            </div>
                                        )
                                    )}

                                    {/* Amortization Table */}
                                    {activeTab === 'amortizationTable' && (
                                        amortizationSchedule ? (
                                            <div>
                                                <div className={amortizationViewButtonContainerClasses}>
                                                    <button
                                                        className={`${amortizationViewButtonClasses} rounded-l-md ${amortizationView === 'annual' ? amortizationViewButtonActiveClasses : amortizationViewButtonInactiveClasses}`}
                                                        onClick={() => { setAmortizationView('annual'); setAmortizationPage(1); }}
                                                    >
                                                        Annual View
                                                    </button>
                                                    <button
                                                        className={`${amortizationViewButtonClasses} rounded-r-md ${amortizationView === 'full' ? amortizationViewButtonActiveClasses : amortizationViewButtonInactiveClasses}`}
                                                        onClick={() => { setAmortizationView('full'); setAmortizationPage(1); }}
                                                    >
                                                        Full View
                                                    </button>
                                                </div>

                                                <div className={tableContainerClasses}>
                                                    <table className='w-full text-left border-collapse'>
                                                        <thead>
                                                            <tr>
                                                                <th className={amortizationTableHeaderCellClasses}>Year</th>
                                                                {amortizationView === 'full' && <th className={amortizationTableHeaderCellClasses}>Start Balance</th>}
                                                                <th className={amortizationTableHeaderCellClasses}>Payment</th>
                                                                <th className={amortizationTableHeaderCellClasses}>Principal Paid</th>
                                                                <th className={amortizationTableHeaderCellClasses}>Interest Paid</th>
                                                                <th className={amortizationTableHeaderCellClasses}>End Balance</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {amortizationView === 'annual' ? (
                                                                annualAmortization.map((entry, index) => {
                                                                    const prevYearEndBalance = index === 0
                                                                        ? effectivePrincipal - (downPaymentInput !== '' && downPaymentError === null ? Number(downPaymentInput) : 0)
                                                                        : annualAmortization[index-1]?.endingBalance || 0;

                                                                    return (
                                                                    <tr key={`annual-${index}`} className={tableRowClasses}>
                                                                        <td className={amortizationTableBodyCellClasses}>{entry.year}</td>
                                                                        {/* For annual view, starting balance is previous year's end or initial loan amount */}
                                                                        {/* <td className={amortizationTableBodyCellClasses}>${prevYearEndBalance.toFixed(2)}</td> */}
                                                                        <td className={amortizationTableBodyCellClasses}>${entry.payment.toFixed(2)}</td>
                                                                        <td className={amortizationTableBodyCellClasses}>${entry.principalPaid.toFixed(2)}</td>
                                                                        <td className={amortizationTableBodyCellClasses}>${entry.interestPaid.toFixed(2)}</td>
                                                                        <td className={amortizationTableBodyCellClasses}>${entry.endingBalance.toFixed(2)}</td>
                                                                    </tr>
                                                                )})
                                                            ) : (
                                                                paginatedAmortization.map((entry, index) => (
                                                                    <tr key={`full-${index}`} className={tableRowClasses}>
                                                                        <td className={amortizationTableBodyCellClasses}>{entry.year}</td>
                                                                        <td className={amortizationTableBodyCellClasses}>${entry.startingBalance.toFixed(2)}</td>
                                                                        <td className={amortizationTableBodyCellClasses}>${entry.payment.toFixed(2)}</td>
                                                                        <td className={amortizationTableBodyCellClasses}>${entry.principalPaid.toFixed(2)}</td>
                                                                        <td className={amortizationTableBodyCellClasses}>${entry.interestPaid.toFixed(2)}</td>
                                                                        <td className={amortizationTableBodyCellClasses}>${entry.endingBalance.toFixed(2)}</td>
                                                                    </tr>
                                                                ))
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>

                                                {/* Pagination for Full Amortization View */}
                                                {amortizationView === 'full' && totalPages > 1 && (
                                                    <div className={paginationContainerClasses}>
                                                        <button className={paginationButtonClasses} onClick={handlePrevPage} disabled={amortizationPage === 1}>Previous</button>
                                                        <span>Page {amortizationPage} of {totalPages}</span>
                                                        <button className={paginationButtonClasses} onClick={handleNextPage} disabled={amortizationPage === totalPages}>Next</button>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className='text-center text-stone-500 text-base lg:text-xl py-8'>
                                                 {calculationError ? calculationError : "Calculate your mortgage to see the amortization schedule."}
                                            </div>
                                        )
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MortgageCalculator;
