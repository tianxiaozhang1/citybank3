// "use client";
import React from 'react';
// , { useState, useEffect }
import Head from 'next/head';
// import Image from 'next/image'; 
import Header from '../components/Header'
import Footer from '../components/Footer'

import localFont from 'next/font/local'
const futura = localFont({ src: '../fontFiles/FuturaCyrillicBook.ttf' })
// const futuraLight = localFont({ src: '../fontFiles/FuturaCyrillicLight.ttf' })
// const futuraBold = localFont({ src: '../fontFiles/FuturaCyrillicBold.ttf' })
import { lora } from '../fonts'; 
// , inter
import { Check, ArrowRight, PiggyBank, Banknote, CreditCard, ChartNoAxesCombined, HousePlus, 
          BanknoteArrowDown, LaptopMinimalCheckIcon, MessageCircleHeart, CirclePercent, CircleDollarSign, 
          CircleCheck, CirclePlus, CircleUserRound, CircleParking } from 'lucide-react';
// , CircleUser

// Define a type for our feature cards for better type safety
// type FeatureCardProps = {
//   title: string;
//   description: string;
//   ctaText: string;
//   ctaLink: string;
//   backgroundColor?: string;
//   textColor?: string;
//   imageUrl?: string; // Optional image for the card
// };

// Reusable Feature Card Component
// const FeatureCard: React.FC<FeatureCardProps> = ({
//   title,
//   description,
//   ctaText,
//   ctaLink,
//   backgroundColor = 'bg-gray-100', // Default background
//   textColor = 'text-gray-900', // Default text color
//   imageUrl,
// }) => {
//   return (
//     <div className={`p-6 md:p-8 rounded-lg shadow-lg ${backgroundColor} ${textColor} flex flex-col justify-between h-full`}>
//       <div>
//         {imageUrl && (
//           <div className="mb-4">
//             {/* In a real app, use Next/Image for optimization */}
//             <img src={imageUrl} alt={title} className="rounded w-full h-40 object-cover" />
//           </div>
//         )}
//         <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
//         <p className="text-sm md:text-base mb-4">{description}</p>
//       </div>
//       <a
//         href={ctaLink}
//         className={`inline-block mt-auto px-6 py-3 rounded-md font-semibold
//                     ${textColor === 'text-white' || textColor === 'text-gray-100' ? 'bg-white text-slate-800 hover:bg-gray-200' : 'bg-slate-800 text-white hover:bg-slate-700'}
//                     transition-colors duration-300`}
//       >
//         {ctaText}
//       </a>
//     </div>
//   );
// };

const InfoBoxText: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className='space-y-4 text-stone-700'>
      <div className={`text-4xl font-semibold lg:text-5xl`}>{title}</div>
      <div className='text-xl lg:text-2xl leading-5 lg:leading-7 my-6 lg:my-0'>{description}</div>
    </div>
  );
};

interface InvestmentCardProps {
  titleText: string;
  premiumText: string;
  feature1Text: string;
  feature2Text: string;
  feature3Text: string;
  bgColorClass: string;
  bgHover: string;
  innerBgColorClass: string;
  textColorClass: string;
  iconColorClass?: string; // Optional Tailwind class for icon color
  // barOne: string;
  // barTwo: string;
  // barThree: string;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({
  titleText,  premiumText,  feature1Text,  feature2Text,  feature3Text,  bgColorClass, bgHover, innerBgColorClass,  textColorClass, iconColorClass= 'text-gray-500', 
}) => {
// ,  barOne, barTwo, barThree
  return (
    <div className={`h-full m-6 lg:m-0  lg:space-y-4 rounded-3xl pb-6 lg:pb-0 ${bgHover} ${bgColorClass} ${textColorClass}`}>
      <div className='pt-8 px-8'>
          <div className={`p-2 w-full xl:w-3/4 2xl:w-1/2 rounded-2xl lg:text-lg my-4 lg:my-6 text-center ${futura.className} ${innerBgColorClass}`}>
            {titleText}
          </div>
          <div className={`${lora.className} flex text-4xl items-center mb-4`}>
            {premiumText} <ArrowRight color="currentColor" size={30} className={`ml-2 mt-1 ${iconColorClass}`} />
          </div>
          <div className={`${futura.className} text-xl leading-5 space-y-2`}>
            <div className='flex items-center'>
              <Check color="currentColor" size={24} className={`mr-2 ${iconColorClass}`} />
              {feature1Text}
            </div>
            <div className='flex items-center'>
              <Check color="currentColor" size={20} className={`mr-2 ${iconColorClass}`} />
              {feature3Text}
            </div>
            <div className='hidden items-center'>
              <Check color="currentColor" size={20} className={`mr-2 ${iconColorClass}`} />
              {feature3Text}
            </div>
          </div>
      </div>

      <div className={`py-2 px-4 mx-8 rounded-2xl text-lg lg:text-xl mt-6 mb-4 lg:mt-8 lg:mb-6 lg:py-8 lg:px-6 ${futura.className} ${innerBgColorClass}`}>
          <div className={`text-3xl lg:text-4xl ${lora.className}`}>{feature2Text}</div>
          Chequing account interest
      </div>

      {/* <div className='h-24 xl:mt-12 w-full overflow-hidden '>
          <div className={barOne}></div>
          <div className={barTwo}></div>
          <div className={barThree}></div>
      </div>  */}
    </div>
  );
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

interface HelpItemProps {
  title: string;
  description: string;
  icon: React.FC<IconProps>;
}

const HelpItem: React.FC<HelpItemProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className='lg:min-h-34 xl:min-h-40 flex bg-stone-50 hover:bg-white rounded-4xl mx-8 lg:mx-0 py-4 lg:py-8 px-6 lg:px-8 space-x-4 lg:space-x-4 shadow-lg items-center'>
      <div className='w-1/4 xl:w-1/3 -ml-1 lg:ml-0 flex justify-center'>
        <div className='rounded-full h-16 w-16 xl:h-22 xl:w-22 border-2 border-stone-300 flex justify-center items-center'>
          <Icon 
            color="currentColor" 
            size={32} 
            strokeWidth={1} 
            className="text-stone-600 xl:w-[52px] xl:h-[52px] w-[32px] h-[32px]" 
          />
        </div>
      </div>
      <div className={`w-3/4 xl:w-2/3 ml-2 lg:-ml-2 xl:-ml-6 flex items-center ${futura.className}`}>
          <div className={`text-stone-700`}>
              <div className='font-semibold xl:text-xl 2xl:text-2xl leading-4 mb-0.5 xl:leading-8 lg:mb-2'>{title}</div>
              <div className='xl:text-lg 2xl:text-xl leading-4 xl:leading-5'>{description}</div>
          </div>
      </div>
    </div>
  );
};

const helpItemsData = [
  {
      title: 'Find a chequing account',
      description: 'For daily spending, making bill payments and more',
      icon: Banknote,
  },
  {
      title: 'Find a savings account',
      description: 'Accounts to help you grow your savings',
      icon: PiggyBank,
  },
  {
      title: 'Find a credit card',
      description: 'TD credit cards offer a host of benefits and features',
      icon: CreditCard,
  },
  {
      title: 'Explore mortgage options',
      description: 'Specialized advice to help with your home ownership journey',
      icon: HousePlus,
  },
  {
      title: 'Personal investing',
      description: 'Registered plans and investments to help you reach your goals',
      icon: ChartNoAxesCombined,
  },
  {
      title: 'Borrowing',
      description: 'Find a borrowing option that fits your life',
      icon: BanknoteArrowDown,
  },
  {
      title: 'Invest and trade online',
      description: 'TD Direct Investing – innovative tools for self-directed investors',
      icon: LaptopMinimalCheckIcon,
  },
  {
      title: 'Personalized wealth advice',
      description: 'Goals-based planning and advice with a TD Wealth advisor',
      icon: MessageCircleHeart,
  },
  {
      title: "Today's rates",
      description: 'Current rates for borrowing & investing products',
      icon: CirclePercent,
  },
]

interface AccountItemProps {
  accountName: string;
  balance: string;
  managed?: boolean;
}

const AccountItem: React.FC<AccountItemProps> = ({ accountName, balance, managed }) => {
  return (
      <div className='bg-white rounded-3xl w-full h-10 lg:h-12 opacity-95 flex justify-between items-center px-4 lg:px-4 text-sm lg:text-lg shadow-lg'>
          <div className='flex items-center font-semibold'>
              {accountName}
              {managed && (
                  <div className='text-xs font-semibold text-slate-500 ml-1 lg:ml-1.5 px-1 py-0.5 bg-slate-200 rounded-2xl'>Managed</div>
              )}
          </div>
          <div>{balance}</div>
      </div>
  );
};

interface DayItemProps {
  day: number;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  // Change from string (hex) to string (tailwind class)
  iconColor?: string; // Tailwind text color class like "text-[#RRGGBB]"
  isDesktopOnly?: boolean;
}

const DayItem: React.FC<DayItemProps> = ({ day, icon: Icon, iconColor }) => {
  const containerClasses = `h-16 w-16 md:h-20 md:w-20 bg-white border-2 border-gray-200 pl-1.5 pr-1 pb-1 md:pb-1.5 md:pl-2 md:pr-1 md:pb-1.5 pt-1 rounded-lg shadow-sm`;
  // const iconContainerClasses = `h-2/3 flex justify-end items-center ${iconColor ? `text-[${iconColor}]` : 'text-gray-300'}`;

  return (
      <div className={containerClasses}>
          <div className='h-1/3 flex md:text-lg font-semibold text-gray-600'>
              {day}
          </div>
          <div className={`h-2/3 flex justify-end items-center ${iconColor || 'text-gray-300'}`}>
              {Icon && <Icon strokeWidth={2} className={`md:stroke-2 w-[32px] h-[32px] md:w-[46px] md:h-[46px]`} />}
          </div>
      </div>
  );
};

// Main Page Component
export default function HomePage() {
  // Wealthsimple-inspired color palette (approximate)
  // const colors = {
  //   primaryDark: '#000000', // Black for text and some backgrounds
  //   primaryLight: '#FFFFFF', // White for text and backgrounds
  //   accentPurple: '#583AE2', // A vibrant purple (adjust as needed)
  //   accentGreen: '#00C853', // A vibrant green for CTAs or highlights
  //   lightGray: '#F3F4F6',   // For backgrounds
  //   mediumGray: '#E5E7EB', // For borders or subtle elements
  //   darkGrayText: '#1F2937', // Darker text for readability
  //   mediumGrayText: '#4B5563',
  // };

  const infoBOX = `rounded-3xl h-full w-full py-6 px-8 lg:px-12 lg:py-12 flex items-center`

  return (
    <>
      <Head>
        <title>City Bank - Smart Banking for Everyone</title>
        <meta name="description" content="Digital tools, daily interest accounts, and more. Bank smarter with City Bank." />
        <link rel="icon" href="/favicon.ico" /> {/* Replace with your bank's favicon */}
      </Head>

      <Header/>

      <main className='bg-stone-50'>

          <section className='lg:grid lg:grid-cols-2 xl:h-166 w-full lg:pt-2 xl:pt-8 px-4 lg:px-36'>
              <div className='h-full lg:flex lg:justify-end px-6 lg:px-0'>
                <div className='w-full h-full lg:max-w-[600px] xl:max-w-[750px] flex text-center lg:text-start lg:justify-end items-center'>
                  <div className='px-4 lg:px-12'>
                    <div className={`text-4xl md:text-5xl xl:text-7xl font-semibold mt-8 lg:mt-0 ${lora.className}`}>Your money&apos;s worth more.</div>
                    <div className={`${futura.className} text-lg lg:text-2xl xl:text-4xl my-4 lg:my-8`}>Get the most out of your money with smart investing products and personalized advice to build long-term wealth.</div>
                    <div className='w-full flex justify-center lg:justify-start mx-auto mb-8 lg:mb-0'>
                      <div className={`bg-gray-800 px-8 py-4 rounded-3xl text-stone-50 text-xl ${futura.className}`}>Get Started</div>
                    </div>
                  </div>
                </div>

              </div>
              <div className='h-full flex items-center justify-center lg:justify-start'>
                  <div className={`border-2 border-stone-200 flex items-center mx-6 md:mx-10 lg:mx-0 py-6 lg:py-0 lg:h-120 xl:h-140 px-6 md:px-8 lg:w-176 rounded-4xl justify-center bg-slate-50 shadow-sm ${futura.className}`}>
                      <div>
                          <div className='text-lg lg:text-2xl xl:text-3xl'>Good morning.</div>
                          <div className='text-lg lg:text-2xl xl:text-3xl'>Sign in to your account</div>

                          <input
                                // type="number"
                                id="downPaymentInput"
                                // value={downPaymentInput}
                                // onChange={handleDownPaymentInputChange}
                                className={`bg-white h-12 xl:h-18 w-full text-base lg:text-xl border-2 rounded-xl py-2 focus:outline-none 
                                              focus:ring-2 focus:ring-stone-300 pl-10 pr-4 placeholder:text-gray-400 mt-3 mb-2 lg:mt-6 lg:mb-3 border-stone-300`}
                                placeholder="Username"
                          />
                          <input
                              type="password"
                              id="password"
                              // value={password}
                              // onChange={(e) => setPassword(e.target.value)}
                              placeholder="Enter your password"
                              className="bg-white h-12 xl:h-18 w-full text-base lg:text-xl border-2 rounded-xl py-2 focus:outline-none focus:ring-2 focus:ring-stone-300 pl-10 pr-4
                                           border-stone-300 placeholder:text-gray-400 mb-2 lg:mb-3"
                              required
                          />

                          <div className='w-full flex justify-end md:justify-end mx-auto mb-2 lg:mb-4'>
                              <div className={`bg-white border-2 border-stone-300 px-8 py-2 xl:py-4 rounded-3xl text-stone-600 text-lg lg:text-xl ${futura.className}`}>Sign In</div>
                          </div>

                          <div className='hidden items-center space-x-2'>
                              <input
                                  type="checkbox"
                                  className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 bg-gray-100 dark:bg-gray-900 focus:ring-2"
                              />

                              <div className='lg:text-lg xl:text-xl'>Remember me</div>
                          </div>

                          <div className='text-lg lg:text-xl xl:text-2xl'>Forgot password?</div>
                          <div className='text-base lg:text-xl xl:text-2xl'>Don&apos;t have an account yet? Sign up</div>

                      </div>
                  </div>
              </div>
              
          </section>

          <section className={`lg:max-w-[1200px] xl:max-w-[1500px] mx-auto lg:grid lg:grid-cols-3 lg:gap-16 px-10 lg:px-12 mb-18 lg:mt-12 text-stone-700 ${futura.className}`}>
              <div>
                <div className='hidden lg:flex h-0.25 w-full bg-stone-800 mt-6 lg:mt-0 mb-6'></div>
                <div className='text-xl lg:text-4xl font-semibold mt-12 lg:mt-0'>The best of chequing & saving</div>
                <div className='lg:text-2xl mt-2'>Earn up to 2.75% in interest, with no everyday account fees. Plus, access your cash from ATMs Canada-wide and we&apos;ll cover the fees up to $5.</div>
              </div>
              <div>
                <div className='h-0.25 w-full bg-stone-800 mt-6 lg:mt-0 mb-6'></div>
                <div className='text-xl lg:text-4xl font-semibold'>Low-fee trading</div>
                <div className='lg:text-2xl mt-2'>Build your own portfolio with over 14,000 stocks, ETFs, and options, commission-free. Plus, trade over 90 cryptocurrencies, too.</div>
              </div>
              <div>
                <div className='h-0.25 w-full bg-stone-800 mt-6 lg:mt-0 mb-6'></div>
                <div className='text-xl lg:text-4xl font-semibold'>Expert portfolios</div>
                <div className='lg:text-2xl mt-2'>Access pre-built, customizable portfolios and investment strategies once reserved for the ultra-wealthy, now available to more Canadians.</div>
              </div>
          </section>

          <section className='bg-[#eae6da] lg:h-180'>
              <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto h-full'>
                  <div className='h-full lg:py-16 lg:px-6 w-full flex justify-center items-center'>
                      <div className='h-full w-full'>
                          <div className={`pt-10 pb-4 lg:pb-0 lg:pt-2 text-2xl lg:text-4xl text-center flex items-center justify-center ${lora.className}`}>How can we help you today?</div>
                          <div className='lg:mt-8 mb-12 lg:mb-0 w-full grid grid-cols-1 gap-4 my-6 lg:my-0 lg:grid-cols-3 lg:gap-6'>
                              {helpItemsData.map((item, index) => (
                                  <div key={index} > 
                                      <HelpItem
                                          title={item.title}
                                          description={item.description}
                                          icon={item.icon}
                                      />
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
              
          </section>

          <section className={`xl:h-260 lg:max-w-[1200px] xl:max-w-[1500px] mx-auto xl:grid xl:grid-cols-2 xl:gap-0 xl:px-24 my-8 xl:my-6 px-2 ${futura.className}`}>
              <div className='h-full '>
                  <div className='xl:h-1/3 px-4 xl:p-8'>
                    <div className={`${infoBOX} bg-[#e4e9d3] py-12 lg:py-0`}>
                      <InfoBoxText
                        title="$0 monthly fees"
                        description="Why pay recurring fees for a basic chequing account? Your Wealthsimple chequing account has no monthly fees, $0 minimum, and no overdraft penalties, either."
                      />
                    </div>
                  </div>
                  <div className='xl:h-2/3 pt-4 px-4 lg:p-8 '>
                    <div className={`rounded-3xl h-full w-full pt-12 px-8 lg:py-12 lg:px-12 flex items-center border-2 border-stone-300 xl:py-0`}>
                      <div className='space-y-6 lg:space-y-8'>
                        <InfoBoxText
                          title="Automate your pay"
                          description="Set up direct deposit and automatically move some of your money to different chequing and investment accounts, or auto-buy stocks, ETFs, or crypto as soon as your paycheque lands."
                        />
                        <div className='flex justify-center items-start'>
                            <div className=' grid grid-cols-4 md:grid-cols-5 xl:grid-cols-4 2xl:grid-cols-5 gap-1 mb-12 lg:mb-0
                                              lg:gap-2 overflow-hidden'
                            >
                                <DayItem day={12} icon={CircleCheck} iconColor="text-[#88abda]" />
                                <DayItem day={13} />
                                <DayItem day={14} icon={CirclePlus} iconColor="text-[#fac03d]" />
                                <DayItem day={15} icon={CircleUserRound} iconColor="text-[#a4abd6]" />
                                <DayItem day={16} />
                                <DayItem day={17} />
                                <DayItem day={18} icon={CircleDollarSign} iconColor="text-[#ecb0c1]" />
                                <DayItem day={19} />
                                <DayItem day={20} />
                                <DayItem day={21} icon={CircleCheck} iconColor="text-[#88abda]" />
                                <DayItem day={22} icon={CircleParking} iconColor="text-[#c0d695]"/>
                                <DayItem day={23} />
                                <div className='hidden md:flex xl:hidden 2xl:flex w-20'>
                                  <DayItem day={24}/>
                                </div>
                                <div className='hidden md:flex xl:hidden 2xl:flex w-20'>
                                  <DayItem day={25} icon={CircleCheck} iconColor="text-[#88abda]"/>
                                </div>
                                <div className='hidden md:flex xl:hidden 2xl:flex w-20'>
                                  <DayItem day={26}/>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className='h-full '>
                  <div className='xl:h-2/3 pt-4 px-4 lg:p-8'>
                    <div className={`lg:pt-12 lg:pb-12 xl:pb-0 rounded-3xl h-full w-full pt-12 px-8 lg:px-12 flex items-center bg-slate-200 xl:py-0`}>
                      <div className='space-y-6'>
                        <InfoBoxText
                          title="Access all your wealth in one place"
                          description="Manage your USD alongside your investments, savings, and more — with smooth transfers from external USD accounts and your other Wealthsimple accounts."
                        />
                        <div className='h-60 lg:h-72 w-full bg-[#aed0ee] rounded-t-3xl lg:rounded-3xl overflow-hidden flex items-end justify-center'>
                              <div className='w-10/12 text-slate-600 bg-[#d4e5ef] h-11/12 shadow-lg border-t-2 border-x-2 border-white opacity-100 px-2.5 lg:px-6 pt-3 md:pt-4 rounded-t-2xl grid grid-cols-1'>
                                  <AccountItem accountName="Chequing" balance="$5682.50" />
                                  <AccountItem accountName="USD Savings" balance="$52000.00" />
                                  <AccountItem accountName="TFSA" balance="$85682.80" managed />
                                  <AccountItem accountName="RRSP" balance="$143652.15" />
                              </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='xl:h-1/3 p-4 lg:p-8'>
                    <div className={`${infoBOX} bg-[#e0dcd0] py-12 lg:py-0`}>
                      <InfoBoxText
                        title="Pay Bills"
                        description="Credit card, mortgage, hydro, and other payments can be made using pre-authorized debit or sent directly to payees from your Wealthsimple chequing account."
                      />
                    </div>
                  </div>
              </div>
          </section>

          <section className='lg:h-180 bg-[#262626] py-12 lg:py-0'>
            <div className='lg:grid lg:grid-cols-3 lg:max-w-[1200px] xl:max-w-[1500px] items-center h-full mx-auto lg:px-32 lg:gap-8 lg:py-32'>

              <div className='text-stone-100 h-full p-8 lg:p-4 flex justify-center text-center lg:text-start lg:justify-start'>
                  <div className='space-y-2 lg:space-y-6'>
                      <div className={`${lora.className} text-4xl xl:text-7xl xl:leading-16`}>Benefits that grow with you</div>
                      <div className={`${futura.className} text-xl leading-6 lg:text-2xl my-4 lg:my-0 lg:leading-7`}>Bringing all your investments to Wealthsimple means better access to exclusive benefits and partner rewards.</div>
                      <div className='flex justify-center lg:justify-start'>
                          <div className={`p-4 bg-stone-300 text-stone-900 rounded-3xl w-1/2 text-center mt-4 lg:mt-4 text-lg lg:text-xl ${futura.className}`}>See all benefits</div>
                      </div>
                  </div>
              </div>

              <InvestmentCard
                titleText="$100,000 in assets"
                premiumText="Premium"
                feature1Text="0.4% management fees on managed investing accounts"
                feature2Text="2.25%"
                feature3Text="On-demand advice"
                bgColorClass="bg-stone-200"
                bgHover='hover:text-gray-950'
                innerBgColorClass="bg-gray-50"
                textColorClass="text-gray-800"
                iconColorClass="text-gray-500"
                // barOne='w-2/3 h-1/4 bg-[#ac9f8a] opacity-60'
                // barTwo='w-full h-1/2 bg-[#88abda] opacity-80'
                // barThree='w-4/5 ml-20 h-1/4 bg-[#547689] opacity-80'
              />

              <InvestmentCard
                titleText="$500,000 in assets"
                premiumText="Generation"
                feature1Text="0.2%*-0.4% management fees on managed investing accounts"
                feature2Text="2.75%"
                feature3Text="On-demand advice"
                bgColorClass="bg-black"
                bgHover='hover:text-gray-50'
                innerBgColorClass="bg-neutral-800"
                textColorClass="text-gray-200"
                iconColorClass="text-gray-500"
                // barOne='w-4/5 h-1/4 bg-[#c6beb1] opacity-60'
                // barTwo='w-full h-1/2 bg-[#2e59a7] opacity-80'
                // barThree='w-3/5 ml-40 h-1/4 bg-[#66889e] opacity-80'
              />
            </div>
          </section>

          <section className='bg-[#eaf2f9] lg:h-180 flex items-center'>
              <div className={`   lg:max-w-[1200px] xl:max-w-[1500px] mx-auto px-10 lg:px-12 mb-18  text-stone-700 ${futura.className}`}>
                <div className={`text-3xl lg:text-6xl lg:text-start py-0 lg:py-12 lg:mb-4 lg:w-3/5 mt-12 -mb-2  ${lora.className}`}>Our business is supporting your business</div>
                <div className='lg:grid grid-cols-1 lg:grid-cols-3 lg:gap-16 gap-12 '>
                  <div>
                    <div className='text-xl lg:text-4xl font-semibold mt-12 lg:mt-0'>Open an account in minutes</div>
                    <div className='lg:text-2xl mt-2 mb-6'>Open your account without any bank appointments or paperwork. Making your contributions (or withdrawing when the time comes) only takes a few taps.</div>
                  </div>
                  <div>
                    <div className='text-xl lg:text-4xl font-semibold'>Reach out to us for support</div>
                    <div className='lg:text-2xl mt-2 mb-6'>Questions about your Corporate account? Our team is here to help — just get in touch.</div>
                  </div>
                  <div>
                    <div className='text-xl lg:text-4xl font-semibold'>Keep more of your returns</div>
                    <div className='lg:text-2xl mt-2'>Whether you&apos;re picking your own stocks, or letting us manage your investments, you won&apos;t need to worry about high fees eating into your returns.</div>
                  </div>
                </div>
              </div>
          </section>

      </main>
      
      <Footer/>
    </>
  );
}