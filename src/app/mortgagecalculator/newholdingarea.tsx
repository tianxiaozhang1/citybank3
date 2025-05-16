// 'use client';
// import React, { useState, useEffect } from 'react'; // Import useEffect
// import { lora } from '../../fonts'

// const paymentFrequencyMultiplier: { [key: string]: number } = {
//     monthly: 12,
//     'semi-monthly': 24, // Twice a month
//     'bi-weekly': 26,     // Every two weeks
//     weekly: 52,          // Every week
// };

// function MortgageCalculator() {

//     // State for input values
//     const [principalInput, setPrincipalInput] = useState<number | ''>('');
//     const [principalDropdown, setPrincipalDropdown] = useState<number>(5000); // Default to the first option
//     const [downPaymentInput, setDownPaymentInput] = useState<number | ''>('');
//     const [interestRateInput, setInterestRateInput] = useState<number | ''>('');
//     const [interestRateDropdown, setInterestRateDropdown] = useState<number>(8.00); // Default to the first numerical option
//     const [loanTerm, setLoanTerm] = useState<number>(6); // Default to the first option (6 months)
//     const [paymentFrequency, setPaymentFrequency] = useState<string>('monthly'); // Default to monthly
//     const [paymentAmount, setPaymentAmount] = useState<number | null>(null); // Renamed from monthlyPayment for clarity

//     // State for validation errors
//     const [principalError, setPrincipalError] = useState<string | null>(null);
//     const [downPaymentError, setDownPaymentError] = useState<string | null>(null);
//     const [interestRateError, setInterestRateError] = useState<string | null>(null);
//     const [calculationError, setCalculationError] = useState<string | null>(null); // New state for general calculation error

//     // Options for Principal dropdown
//     const principalOptions = [
//         5000, 10000, 25000, 50000, 100000, 150000, 200000, 250000, 300000, 350000,
//         400000, 450000, 500000, 550000, 600000, 650000, 700000, 750000, 800000,
//         850000, 900000, 950000, 1000000, 1050000, 1100000, 1150000, 1200000,
//         1250000, 1300000, 1350000, 1400000, 1450000, 1500000, 1600000, 1700000, 1800000, 1900000, 2000000
//     ];

//     // Options for Loan Term dropdown (in months)
//     const loanTermOptions = [
//         { label: '6 Months', value: 6 },
//         { label: '1 Year', value: 12 },
//         { label: '2 Years', value: 24 },
//         { label: '3 Years', value: 36 },
//         { label: '4 Years', value: 48 },
//         { label: '5 Years', value: 60 },
//         { label: '6 Years', value: 72 },
//         { label: '7 Years', value: 84 },
//         { label: '8 Years', value: 96 },
//         { label: '9 Years', value: 108 },
//         { label: '10 Years', value: 120 },
//         { label: '11 Years', value: 132 },
//         { label: '12 Years', value: 144 },
//         { label: '13 Years', value: 156 },
//         { label: '14 Years', value: 168 },
//         { label: '15 Years', value: 180 },
//         { label: '16 Years', value: 192 },
//         { label: '17 Years', value: 204 },
//         { label: '18 Years', value: 216 },
//         { label: '19 Years', value: 228 },
//         { label: '20 Years', value: 240 },
//         { label: '21 Years', value: 252 },
//         { label: '22 Years', value: 264 },
//         { label: '23 Years', value: 276 },
//         { label: '24 Years', value: 288 },
//         { label: '25 Years', value: 300 },
//         { label: '26 Years', value: 312 },
//         { label: '27 Years', value: 324 },
//         { label: '28 Years', value: 336 },
//         { label: '29 Years', value: 348 },
//         { label: '30 Years', value: 360 },
//     ];

//     // Options for Interest Rate dropdown
//     const interestRateOptions = [
//         { label: 'Fixed Rate Mortgages **', value: '', disabled: true },
//         { label: '1 year open - 8.00%', value: 8.00 },
//         { label: '6 month closed - 6.09%', value: 6.09 },
//         { label: '1 year closed - 6.09%', value: 6.09 },
//         { label: '2 year closed - 5.39%', value: 5.39 },
//         { label: '3 year closed - 6.05%', value: 6.05 },
//         { label: '4 year closed - 5.99%', value: 5.99 },
//         { label: '5 year closed - 6.09%', value: 6.09 },
//         { label: '6 year closed - 6.29%', value: 6.29 },
//         { label: '7 year closed - 6.40%', value: 6.40 },
//         { label: '10 year closed - 6.80%', value: 6.80 },
//         { label: 'Variable Rate Mortgages **', value: '', disabled: true },
//         { label: '5 year open variable - 6.10%', value: 6.10 },
//         { label: '5 year closed variable - 4.89%', value: 4.89 },
//         { label: 'Special Fixed Rate Mortgages **', value: '', disabled: true },
//         { label: '3 year closed - 4.69%', value: 4.69 },
//         { label: '5 year closed - 4.69%', value: 4.69 },
//     ];

//     // Options for Payment Frequency dropdown
//     const paymentFrequencyOptions = [
//         { label: 'Monthly', value: 'monthly' },
//         { label: 'Semi-Monthly', value: 'semi-monthly' },
//         { label: 'Bi-Weekly', value: 'bi-weekly' },
//         { label: 'Weekly', value: 'weekly' },
//     ];

//     // Determine the effective principal value (prioritizing valid input)
//     const effectivePrincipal = principalInput !== '' && principalError === null
//     ? Number(principalInput)
//     : Number(principalDropdown);

//     // Handle Principal Input Change and Validation
//     const handlePrincipalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;
//         setPrincipalInput(value === '' ? '' : Number(value));

//         if (value === '') {
//         setPrincipalError(null); // No error if input is empty
//         // Also clear down payment error as validation depends on principal
//         if (downPaymentInput !== '') {
//             setDownPaymentError('Please enter a valid down payment');
//         } else {
//             setDownPaymentError(null);
//         }
//         } else {
//         const numValue = Number(value);
//         if (isNaN(numValue) || !Number.isInteger(numValue) || numValue < 1 || numValue > 5000000) {
//             setPrincipalError('Please enter a valid principal');
//             // Set down payment error if there's an invalid principal that affects its range
//             if (downPaymentInput !== '') {
//                 setDownPaymentError('Please enter a valid down payment');
//             }
//         } else {
//             setPrincipalError(null);
//             // Re-validate down payment if principal becomes valid
//             if (downPaymentInput !== '') {
//                 const downPaymentValue = Number(downPaymentInput);
//                 if (isNaN(downPaymentValue) || !Number.isInteger(downPaymentValue) || downPaymentValue < 1 || downPaymentValue >= numValue) {
//                     setDownPaymentError('Please enter a valid down payment');
//                 } else {
//                     setDownPaymentError(null);
//                 }
//             } else {
//                 setDownPaymentError(null);
//             }
//         }
//         }
//         setCalculationError(null); // Clear calculation error on any input change
//         // No automatic calculation here, will calculate on button click or frequency change
//     };

//     // Handle Down Payment Input Change and Validation
//     const handleDownPaymentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;
//         setDownPaymentInput(value === '' ? '' : Number(value));

//         if (value === '') {
//             setDownPaymentError(null); // No error if input is empty
//         } else {
//             const numValue = Number(value);
//             // Use the currently determined effective principal for validation
//             const currentPrincipal = effectivePrincipal;

//             if (isNaN(numValue) || !Number.isInteger(numValue) || numValue < 1 || numValue >= currentPrincipal) {
//                 setDownPaymentError('Please enter a valid down payment');
//             } else {
//                 setDownPaymentError(null);
//             }
//         }
//         setCalculationError(null); // Clear calculation error on any input change
//         // No automatic calculation here, will calculate on button click or frequency change
//     };

//     // Handle Interest Rate Input Change and Validation
//     const handleInterestRateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;
//         setInterestRateInput(value === '' ? '' : Number(value));

//         if (value === '') {
//         setInterestRateError(null); // No error if input is empty
//         } else {
//         const numValue = Number(value);
//         if (isNaN(numValue) || numValue < 0.01 || numValue > 20) {
//             setInterestRateError('Please enter a valid interest rate');
//         } else {
//             setInterestRateError(null);
//         }
//         }
//         setCalculationError(null); // Clear calculation error on any input change
//         // No automatic calculation here, will calculate on button click or frequency change
//     };

//     // Handle Payment Frequency Change
//     const handlePaymentFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         setPaymentFrequency(e.target.value);
//         setCalculationError(null); // Clear calculation error on any input change
//         // The useEffect hook will trigger the calculation when paymentFrequency changes
//     };

//     const handleLoanTermChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         setLoanTerm(Number(e.target.value));
//         setCalculationError(null); // Clear calculation error on any input change
//         // No automatic calculation here, will calculate on button click or frequency change
//     };

//     // Function to calculate the mortgage payment
//     const calculateMortgage = () => {
//         // Determine the principal value to use (input takes precedence)
//         const p = effectivePrincipal; // Use the derived effective principal

//         // Determine the down payment value to use (input)
//         // Only use downPaymentInput if it's a valid number and there's no validation error
//         const d = downPaymentInput !== '' && downPaymentError === null ? Number(downPaymentInput) : 0; // Default to 0 if invalid/empty

//         // Calculate the actual loan amount
//         const loanAmount = p - d;

//         // Determine the interest rate to use (input takes precedence)
//         // Only use interestRateInput if it's a valid number and there's no validation error
//         const annualInterestRate = interestRateInput !== '' && interestRateError === null ? Number(interestRateInput) : Number(interestRateDropdown);

//         // Loan term comes solely from the dropdown (in months)
//         const loanTermInMonths = Number(loanTerm);

//         const paymentsPerYear = paymentFrequencyMultiplier[paymentFrequency];
//         // Calculate the total number of payments
//         const totalPayments = (loanTermInMonths / 12) * paymentsPerYear;

//         // Calculate the interest rate per payment period
//         // Note: Mortgage interest is often compounded semi-annually in Canada,
//         // regardless of payment frequency. The formula needs to be adjusted for this.
//         // A common way to handle this is to find the equivalent periodic rate.

//         // Assuming semi-annual compounding for the annual rate
//         const annualRateDecimal = annualInterestRate / 100;
//         const compoundingFrequency = 2; // Semi-annual compounding
//         const rateCompoundedPerPeriod = annualRateDecimal / compoundingFrequency;


//         // Calculate the effective rate per payment period based on semi-annual compounding
//         // Effective periodic rate = (1 + (Annual Rate / Compounding Frequency)) ^ (Compounding Frequency / Payments Per Year) - 1
//         const ratePerPeriod = Math.pow(1 + rateCompoundedPerPeriod, (compoundingFrequency / paymentsPerYear)) - 1;


//         // Validate inputs before calculation
//         if (isNaN(p) || isNaN(d) || isNaN(annualInterestRate) || isNaN(loanTermInMonths) || isNaN(totalPayments) || p <= 0 || loanAmount <= 0 || annualInterestRate < 0 || loanTermInMonths <= 0 || principalError !== null || downPaymentError !== null || interestRateError !== null || !paymentFrequencyMultiplier[paymentFrequency]) {
//             setPaymentAmount(null);
//             setCalculationError("Please fix the errors above to calculate."); // Set the general error message
//             return;
//         }
//         // If no errors, clear the calculation error
//         setCalculationError(null);

//         // Use ratePerPeriod and totalPayments in the formula
//         if (ratePerPeriod === 0) {
//             // Handle zero interest rate separately
//             setPaymentAmount(loanAmount / totalPayments);
//         } else {
//             // Mortgage payment formula using periodic rate and total payments:
//             // M = P [ i(1 + i)^N ] / [ (1 + i)^N – 1]
//             // Where:
//             // P = Loan Amount
//             // i = Interest rate per payment period
//             // N = Total number of payments
//             const paymentValue = loanAmount * (ratePerPeriod * Math.pow(1 + ratePerPeriod, totalPayments)) / (Math.pow(1 + ratePerPeriod, totalPayments) - 1);
//             setPaymentAmount(paymentValue); // This is the payment *per frequency period*
//         }
//     };

//     // Use useEffect to recalculate when paymentFrequency changes
//     useEffect(() => {
//         // Only recalculate if there are no input errors
//         if (principalError === null && downPaymentError === null && interestRateError === null) {
//             calculateMortgage();
//         } else {
//              setPaymentAmount(null); // Clear payment if inputs are invalid
//         }
//     }, [paymentFrequency, principalInput, principalDropdown, downPaymentInput, interestRateInput, interestRateDropdown, loanTerm, principalError, downPaymentError, interestRateError]); // Added relevant dependencies

//     // Recalculate when other inputs change, but don't clear payment amount immediately
//     useEffect(() => {
//          // No need to call calculateMortgage here directly, the other useEffect handles it
//          // based on the dependencies. This useEffect is more for initial calculation or
//          // if other inputs changed in a way that should trigger a recalc (which the previous useEffect covers).
//     }, [principalInput, principalDropdown, downPaymentInput, interestRateInput, interestRateDropdown, loanTerm]);


//     return (
//         <div className='bg-white min-h-screen'> {/* Added min-h-screen to ensure background covers the page */}
//             {/* HEADER */}
//             <div className='h-32 bg-stone-500 w-full'></div>

//             {/* PAGE */}
//             <div className={`pt-8 px-32 max-w-[1200px] mx-auto ${lora.className}`}> {/* Added lora.className here */}

//                 <h1 className={`text-5xl mb-6`}>Mortgage Calculator</h1> {/* Removed lora.className here */}

//                 {/* MAIN */}
//                 <div className=''> {/* Added gap and flex-col/md:flex-row for responsiveness */}

//                     <div className='text-3xl my-2'>Your Mortgage Details</div>

//                     <div className='grid lg:grid-cols-2 gap-8'>
//                         {/* Principal Input */}
//                         <div className='mb-4 w-full'>
//                             <div className='text-lg font-semibold my-2'>Mortgage Amount</div>
//                             <select
//                                 id="principalDropdown"
//                                 value={principalDropdown}
//                                 onChange={(e) => setPrincipalDropdown(Number(e.target.value))}
//                                 className='h-16 w-full text-lg border-2 border-stone-200 rounded-xl py-2 px-4'
//                             >
//                                 {/* Removed the empty default option */}
//                                 {principalOptions.map((option) => (
//                                     <option key={option} value={option}>${option.toLocaleString()}</option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Custom Principal Input */}
//                             <div className='mb-4 w-full'>
//                                 <div className='text-lg font-semibold my-2 text-stone-500'>Custom Principal</div>
//                                 <div className='flex'>
//                                     <div className='h-16 w-16 bg-stone-200 flex justify-center items-center text-lg rounded-l-xl'>$</div>
//                                     <input
//                                         type="number"
//                                         id="principalInput"
//                                         value={principalInput}
//                                         onChange={handlePrincipalInputChange}
//                                         className={`h-16 w-full text-lg border-2 ${principalError ? 'border-red-500' : 'border-stone-200'} rounded-r-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-stone-300`} // Added Tailwind classes for styling and error highlight
//                                     />
//                                 </div>
//                                 {principalError && (
//                                     <p className='text-red-500 text-sm mt-1'>{principalError}</p>
//                                 )}
//                             </div>
//                     </div>

//                     {/* Down Payment Input */}
//                     <div className='lg:w-1/2 lg:pr-4 gap-8'>

//                         <div className='text-lg font-semibold mb-2 pt-2'>Down Payment</div>
//                         <div className='flex pb-4'>
//                             <div className='h-16 w-16 bg-stone-200 flex justify-center items-center text-lg rounded-l-xl'>$</div>
//                             <input
//                                 type="number"
//                                 id="downPaymentInput"
//                                 value={downPaymentInput}
//                                 onChange={handleDownPaymentInputChange}
//                                     className={`h-16 w-full text-lg border-2 ${downPaymentError ? 'border-red-500' : 'border-stone-200'} rounded-r-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-stone-300`} // Added Tailwind classes for styling and error highlight
//                             />
//                         </div>
//                         {downPaymentError && (
//                             <p className='text-red-500 text-sm mt-1'>{downPaymentError}</p>
//                         )}
//                     </div>

//                     <div className='grid lg:grid-cols-2 gap-8'>
//                         {/* Interest Rate Input */}
//                         <div className='mb-4 w-full'>
//                             <div className='text-lg font-semibold my-2'>Interest Rate</div>
//                             <select
//                                 id="interestRateDropdown"
//                                 value={interestRateDropdown}
//                                 onChange={(e) => setInterestRateDropdown(Number(e.target.value))}
//                                 className='h-16 w-full text-lg border-2 border-stone-200 rounded-xl py-2 px-4'
//                             >
//                                 <option value="" disabled>Select Rate</option>
//                                 {interestRateOptions.map((option, index) => (
//                                     <option
//                                         key={index}
//                                         value={option.value}
//                                         disabled={option.disabled}
//                                         style={option.disabled ? { fontWeight: 'bold', fontStyle: 'italic' } : {}}
//                                     >
//                                         {option.label}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Custom Interest Rate Input */}
//                         <div className='mb-4 w-full'>
//                             <div className='text-lg font-semibold my-2 text-stone-500'>Custom Interest Rate</div>
//                             <div className='flex'>
//                                 <input
//                                     type="number"
//                                     id="interestRateInput"
//                                     step="0.01"
//                                     value={interestRateInput}
//                                     onChange={handleInterestRateInputChange}
//                                         className={`h-16 w-full text-lg border-2 ${interestRateError ? 'border-red-500' : 'border-stone-200'} rounded-l-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-stone-300`} // Added Tailwind classes for styling and error highlight
//                                 />
//                                 <div className='h-16 w-16 bg-stone-200 flex justify-center items-center text-lg rounded-r-xl'>%</div>
//                             </div>
//                             {interestRateError && (
//                                 <p className='text-red-500 text-sm mt-1'>{interestRateError}</p>
//                             )}
//                         </div>
//                     </div>

//                     <div className='grid lg:grid-cols-2 gap-8'>
//                         {/* Loan Term Input (Dropdown only) */}
//                         <div className='mb-4 w-full'>
//                             <div className='text-lg font-semibold my-2'>Interest Term</div>
//                             <select
//                                 id="loanTerm"
//                                 value={loanTerm}
//                                 onChange={handleLoanTermChange} // Use the new handler
//                                 className='h-16 w-full text-lg border-2 border-stone-200 rounded-xl py-2 px-4'
//                             >
//                                 <option value="" disabled>Select Term</option>
//                                 {loanTermOptions.map((option) => (
//                                     <option key={option.value} value={option.value}>{option.label}</option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Payment Frequency Input (Dropdown only) */}
//                         <div className='mb-4 w-full'>
//                             <div className='text-lg font-semibold my-2'>Payment Frequency</div>
//                             <select
//                                 id="paymentFrequency"
//                                 value={paymentFrequency}
//                                 onChange={handlePaymentFrequencyChange} // This now triggers the recalculation via useEffect
//                                 className='h-16 w-full text-lg border-2 border-stone-200 rounded-xl py-2 px-4'
//                             >
//                                 {paymentFrequencyOptions.map((option) => (
//                                     <option key={option.value} value={option.value}>{option.label}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>

//                      {/* Moved the Calculate button above the results display */}
//                     <div className='hidden w-full justify-end'>
//                         <div className='lg:w-1/2 lg:pr-4'>
//                             {/* The button is still here for manual calculation if needed,
//                                  but the useEffect will handle frequency changes automatically */}
//                              <button onClick={calculateMortgage}
//                                 className='h-16 lg:w-full lg:ml-4 text-xl border-2 border-stone-300 font-semibold rounded-xl py-2 px-4 cursor-pointer mt-6 hover:bg-stone-100 transition-colors duration-100' // Adjusted mt and added hover effect
//                             >
//                                 Calculate
//                             </button>

//                             {/* Display general calculation error */}
//                             {calculationError && (
//                                 <p className='text-red-500 text-center mt-4'>{calculationError}</p>
//                             )}
//                         </div>
//                     </div>

//                     <div className='w-full flex justify-center items-center border-2 border-stone-200 rounded-2xl mt-8 p-8 lg:min-h-[150px]'>
//                         {paymentAmount !== null ? (
//                             <div className='mt-0 text-xl text-center'>
//                             <h2 className='capitalize'>Your {paymentFrequency} Payment:</h2>
//                             <p className='text-4xl'>${paymentAmount.toFixed(2)}</p>
//                             </div>
//                         ) : (
//                             // Display placeholder or initial message
//                             <div className='text-2xl text-center text-stone-500'>
//                                 Enter details to calculate your payment.
//                             </div>
//                         )}
//                     </div>

//                     {calculationError && (
//                         <p className='text-red-500 text-center mt-4'>{calculationError}</p>
//                     )}


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MortgageCalculator;