"use client";
// import Head from 'next/head';
import Image from 'next/image';

import React from 'react';
// , useState, useEffect , { useRef }
// import { useInView } from 'framer-motion'; // Import motion and useInView
// motion, 

import AirCanadaLogo from '../../../public/png/aircanada.png'
import AirCanadaPlane from '../../../public/png/plane.svg'
import AirCanadaQRCode from '../../../public/png/qrcode.png'

// import CurvedDottedLine  from './CurvedDottedLineOLD'
import CurvedDottedLine from './CurvedDottedLineOLD'

import { Landmark, Star, CircleCheckBig, Clock9, CircleArrowRight } from 'lucide-react';
        //  ChevronDown, Banknote, CreditCard, DollarSign, ArrowDownCircle, ArrowUpCircle, Home, Briefcase, ShoppingBag,
        //  MoreHorizontal, Car, Send, FileText, User, Settings, LifeBuoy, ChartSpline, , Check, CircleCheck
// FilePlus, LogOut, Bell,  TrendingUp, House
// import NextLink from 'next/link'; // Renamed to avoid conflict if Link is imported from lucide or elsewhere

// import { inter, lora } from '../../fonts';
// , aldrich, pt_sans_narrow
import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
const futuraLight = localFont({ src: '../../fontFiles/FuturaCyrillicLight.ttf' })
// const futuraBold = localFont({ src: '../../fontFiles/FuturaCyrillicBold.ttf' })
// import pixelMap from '../../images/pixelmap2.png'

import Header from '../../components/Header'; 
// import Footer from '../../components/Footer'; 

import FlightAnimation from '../../components/Wallet/FlightAnimation'
import { ScrollReveal } from '../../components/Wallet/ScrollReveal'
// import { StaggeredReveal } from '../../components/Wallet/StaggeredReveal'
import ScrollAnimatedWrapper from '../../components/Wallet/ScrollAnimatedWrapper'
import SpotlightStage from '../../components/Wallet/SpotlightStage'

import DuaLipa from '../../../public/jpg/DuaLipa.jpg'
import Presto from '../../../public/png/Presto_Card.svg'

import { CheckmarkDrawingAnimationOnScroll } from '../../components/Wallet/CheckmarkDrawingAnimation'

// import LogoBox from '../../components//Wallet/LogoBox'; // Adjust path as needed
// import { logoData } from '../../data/logos'; // Adjust path as needed

import LoyaltyRewards from '../../components/Wallet/LoyaltyRewards'
import BuyItAll from '../../components/Wallet/BuyItAll'

import KlarnaLogo from '../../../public/png/klarna.svg'

const CellularIcon = () => {
    return (
        <svg fill="#20293b" width="12px" height="12px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M472,432H424a24,24,0,0,1-24-24V104a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,472,432Z"/><path d="M344,432H296a24,24,0,0,1-24-24V184a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,344,432Z"/><path d="M216,432H168a24,24,0,0,1-24-24V248a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,216,432Z"/><path d="M88,432H40a24,24,0,0,1-24-24V312a24,24,0,0,1,24-24H88a24,24,0,0,1,24,24v96A24,24,0,0,1,88,432Z"/></svg>                         
    )
}

const XLCellularIcon = () => {
    return (
        <svg fill="#20293b" width="14px" height="14px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M472,432H424a24,24,0,0,1-24-24V104a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,472,432Z"/><path d="M344,432H296a24,24,0,0,1-24-24V184a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,344,432Z"/><path d="M216,432H168a24,24,0,0,1-24-24V248a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,216,432Z"/><path d="M88,432H40a24,24,0,0,1-24-24V312a24,24,0,0,1,24-24H88a24,24,0,0,1,24,24v96A24,24,0,0,1,88,432Z"/></svg>                         
    )
}

const WifiIcon = () => {
    return (
        <svg fill="#20293b" height="12px" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 365.892 365.892" xmlSpace="preserve">
            <g>
                <circle cx="182.945" cy="286.681" r="41.494"/>
                <path d="M182.946,176.029c-35.658,0-69.337,17.345-90.09,46.398c-5.921,8.288-4.001,19.806,4.286,25.726
                    c3.249,2.321,6.994,3.438,10.704,3.438c5.754,0,11.423-2.686,15.021-7.724c13.846-19.383,36.305-30.954,60.078-30.954
                    c23.775,0,46.233,11.571,60.077,30.953c5.919,8.286,17.437,10.209,25.726,4.288c8.288-5.92,10.208-17.438,4.288-25.726
                    C252.285,193.373,218.606,176.029,182.946,176.029z"/>
                <path d="M182.946,106.873c-50.938,0-99.694,21.749-133.77,59.67c-6.807,7.576-6.185,19.236,1.392,26.044
                    c3.523,3.166,7.929,4.725,12.32,4.725c5.051-0.001,10.082-2.063,13.723-6.116c27.091-30.148,65.849-47.439,106.336-47.439
                    s79.246,17.291,106.338,47.438c6.808,7.576,18.468,8.198,26.043,1.391c7.576-6.808,8.198-18.468,1.391-26.043
                    C282.641,128.621,233.883,106.873,182.946,106.873z"/>
                <path d="M360.611,112.293c-47.209-48.092-110.305-74.577-177.665-74.577c-67.357,0-130.453,26.485-177.664,74.579
                    c-7.135,7.269-7.027,18.944,0.241,26.079c3.59,3.524,8.255,5.282,12.918,5.281c4.776,0,9.551-1.845,13.161-5.522
                    c40.22-40.971,93.968-63.534,151.344-63.534c57.379,0,111.127,22.563,151.343,63.532c7.136,7.269,18.812,7.376,26.08,0.242
                    C367.637,131.238,367.745,119.562,360.611,112.293z"/>
            </g>
        </svg>
    )
}

const XLWifiIcon = () => {
    return (
        <svg fill="#20293b" height="14px" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 365.892 365.892" xmlSpace="preserve">
            <g>
                <circle cx="182.945" cy="286.681" r="41.494"/>
                <path d="M182.946,176.029c-35.658,0-69.337,17.345-90.09,46.398c-5.921,8.288-4.001,19.806,4.286,25.726
                    c3.249,2.321,6.994,3.438,10.704,3.438c5.754,0,11.423-2.686,15.021-7.724c13.846-19.383,36.305-30.954,60.078-30.954
                    c23.775,0,46.233,11.571,60.077,30.953c5.919,8.286,17.437,10.209,25.726,4.288c8.288-5.92,10.208-17.438,4.288-25.726
                    C252.285,193.373,218.606,176.029,182.946,176.029z"/>
                <path d="M182.946,106.873c-50.938,0-99.694,21.749-133.77,59.67c-6.807,7.576-6.185,19.236,1.392,26.044
                    c3.523,3.166,7.929,4.725,12.32,4.725c5.051-0.001,10.082-2.063,13.723-6.116c27.091-30.148,65.849-47.439,106.336-47.439
                    s79.246,17.291,106.338,47.438c6.808,7.576,18.468,8.198,26.043,1.391c7.576-6.808,8.198-18.468,1.391-26.043
                    C282.641,128.621,233.883,106.873,182.946,106.873z"/>
                <path d="M360.611,112.293c-47.209-48.092-110.305-74.577-177.665-74.577c-67.357,0-130.453,26.485-177.664,74.579
                    c-7.135,7.269-7.027,18.944,0.241,26.079c3.59,3.524,8.255,5.282,12.918,5.281c4.776,0,9.551-1.845,13.161-5.522
                    c40.22-40.971,93.968-63.534,151.344-63.534c57.379,0,111.127,22.563,151.343,63.532c7.136,7.269,18.812,7.376,26.08,0.242
                    C367.637,131.238,367.745,119.562,360.611,112.293z"/>
            </g>
        </svg>
    )
}

const BatteryIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" 
            fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 258.25" fill="currentColor"><path fillRule="nonzero" fill="currentColor"
            d="M472.06 38.53v29.62h27.84c3.36 0 6.38 1.37 8.55 3.55 2.19 2.19 3.55 5.25 3.55 8.55v97.76c0 3.32-1.39 6.37-3.56 8.54-2.17 2.16-5.22 3.56-8.54 3.56h-27.84v29.61c0 21.2-17.35 38.53-38.53 38.53h-395C17.33 258.25 0 240.93 0 219.72V38.53C0 17.35 17.37 0 38.53 0h395c21.22 0 38.53 17.31 38.53 38.53zm-69.88 10.01c8.57 0 15.59 7.13 15.59 15.59v129.99c0 8.46-7.13 15.59-15.59 15.59H69.88c-8.46 0-15.58-7.02-15.58-15.59V64.13c0-8.57 7.01-15.59 15.58-15.59h332.3zm44.42 168.41V41.3c0-8.69-7.15-15.84-15.83-15.84H41.3c-8.71 0-15.84 7.13-15.84 15.84v175.65c0 8.68 7.17 15.84 15.84 15.84h389.47c8.69 0 15.83-7.12 15.83-15.84z"/>
        </svg>
    )
}

function Wallet() {

    // // FOR BRAND ICONS FALLING START
    // const containerRef = useRef(null);
    // // Trigger animation when 60% of the container is in view, only once
    // const isInView = useInView(containerRef, { once: true, amount: 0.6 });

    // // Define animation variants for each LogoBox
    // const fallAnimationVariants = {
    //     hidden: { y: -1000, opacity: 1 }, // Starts 50px above and invisible
    //     visible: { y: 0, opacity: 1 },  // Ends at its natural position, fully visible
    // };

    // // Calculate total number of rows
    // const totalRows = logoData.length;
    // // Base delay for each LogoBox
    // const baseDelay = 0.04; // Adjust for faster/slower individual fall
    // // Delay increment for each row
    // const rowDelayIncrement = 0.15; // Adjust for more/less staggering between rows
    // // FOR BRAND ICONS FALLING END

    return (
        <div className='bg-stone-200'>
            <Header/>

            <div className='lg:py-12'>
                <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default space-y-12 px-6 lg:px-0'>
                    {/* TITLE */}
                    <>
                        <div className={`lg:w-2/3 mx-auto font-semibold ${futura.className} bg-[#4994C4] px-12 lg:px-36 py-32 lg:py-36 rounded-4xl lg:rounded-[62px]`}>
                            <ScrollReveal>
                                <div className='text-gray-50 text-8xl'>                         
                                    Payments and Rewards
                                </div>
                                <div className='text-[#06436F] text-8xl'>
                                    Start here.
                                </div><div className='text-[#06436F] text-8xl'>
                                    Pay anywhere.
                                </div>
                            </ScrollReveal>
                        </div>
                    </>

                    <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default'>
                        <div className={`lg:w-2/3 mx-auto font-semibold ${futura.className} grid lg:grid-cols-2 gap-x-8 overflow-hidden h-186`}>
                            <div className='rounded-4xl lg:rounded-[62px] bg-gray-700 text-gray-50 py-20 px-16 text-5xl lg:space-y-3'>
                                <ScrollReveal>
                                    <div className='px-4 lg:space-y-4'>
                                        <div className='border-2 border-gray-400 px-3 py-0.5 rounded-2xl uppercase w-fit text-base mb-8'>New</div>
                                        <div className='text-[#a6caf8]'>Flexible payments.</div>
                                        <div>For all the ways you pay.</div>
                                    </div>

                                    <div className='p-6 flex bg-gray-50 text-gray-700 text-lg rounded-3xl mt-12 shadow-md'>
                                        <div className='w-1/6 flex items-center'>
                                            <Image 
                                                src={KlarnaLogo} 
                                                
                                                alt="" 
                                                className="xl:w-full rounded-md" 
                                            />
                                        </div>

                                        <div className='flex justify-between w-4/6'>
                                            <div className=' pl-2'>
                                                <div className='-mb-1'>Klarna</div>
                                                <div className='border-2 border-gray-300 rounded-lg px-1.5 text-sm'>Pay Later</div>
                                            </div>
                                            <div className='flex items-center text-lg'>
                                                &middot;&middot;&middot;&middot;1234
                                            </div>
                                        </div>
                                        
                                        <div className='w-1/6 flex items-center justify-end'>
                                            <CircleArrowRight 
                                                color="#9ca3af" 
                                                size={8} 
                                                strokeWidth={2} 
                                                className="text-gray-100 xl:w-[36px] xl:h-[36px] w-[32px] h-[32px] p-1.5" 
                                            />
                                        </div>
                                    </div>

                                    <div className='p-6 flex bg-gray-50 text-gray-700 text-lg rounded-3xl mt-2 shadow-md'>
                                        <div className='w-1/6 flex items-center justify-center'>
                                            <Clock9 
                                                color="#fff" 
                                                size={8} 
                                                strokeWidth={2} 
                                                className="text-gray-100 xl:w-[36px] xl:h-[36px] w-[32px] h-[32px] bg-[#5976BA] rounded-full p-1.5" 
                                            />
                                        </div>
                                        <div className='w-4/6 pl-2'>
                                            <div className='-mb-1'>6 Payments</div>
                                            <div>$24.56 per month</div>
                                        </div>
                                        <div className='w-1/6 flex items-center justify-end'>
                                            <CircleArrowRight 
                                                color="#9ca3af" 
                                                size={8} 
                                                strokeWidth={2} 
                                                className="text-gray-100 xl:w-[36px] xl:h-[36px] w-[32px] h-[32px] p-1.5" 
                                            />
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                            <div className='rounded-4xl lg:rounded-[62px] bg-gray-50 text-gray-600 py-20 px-20 text-5xl'>
                                <ScrollReveal>
                                    <div className='mb-3 text-[#108B96]'>City Wallet.</div>
                                    <div className=''>Buy all the <BuyItAll/> and more. Anywhere you see&nbsp;<div className='shadow-sm inline-block text-3xl items-center border-2 border-[#108B96] px-3 py-1 rounded-2xl uppercase mr-0.25'>City Pay</div>.</div> 
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>

                    {/* LoyaltyRewards */}
                    <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default  '>
                        <div className={`lg:w-2/3 mx-auto font-semibold ${futura.className} bg-[#003460] rounded-4xl lg:rounded-[62px] flex overflow-hidden`}>
                            <div className='w-1/2 h-full lg:pl-12 lg:py-20 '>
                                <LoyaltyRewards/>
                            </div>
                            <div className='w-1/2 text-7xl lg:pl-12 lg:pr-22  flex items-end pb-32 text-gray-50'>
                                <ScrollReveal>
                                    <div>
                                        <div>Loyalty and rewards.</div>
                                        <div>You reap what you store.</div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default px-6 lg:px-0 text-gray-50 text-6xl'>
                    <div className={`bg-gray-900 rounded-4xl lg:w-2/3 mx-auto px-4 lg:px-32 ${futura.className} lg:space-y-12 lg:pt-24 lg:pb-32`}>
                        <div>
                            <div className='p-1 border-4 border-[#4994C4] rounded-full w-16'>
                                <CheckmarkDrawingAnimationOnScroll/>
                            </div>
                            <div className=' mt-3'>
                                Faster and easier than using cards or cash.
                            </div>
                        </div>
                        <div>
                            <div className='p-1 border-4 border-[#4994C4] rounded-full w-16'>
                                <CheckmarkDrawingAnimationOnScroll/>
                            </div>
                            <div className='mt-3'>
                                Pay in full or over time.
                            </div>
                        </div>
                        <div>
                            <div className='p-1 border-4 border-[#4994C4] rounded-full w-16'>
                                <CheckmarkDrawingAnimationOnScroll/>
                            </div>
                            <div className=' mt-3'>
                                Privacy and security built in.
                            </div>
                        </div>
                        <div>
                            <div className='p-1 border-4 border-[#4994C4] rounded-full w-16'>
                                <CheckmarkDrawingAnimationOnScroll/>
                            </div>
                            <div className=' mt-3'>
                                Accepted on a growing number of websites and apps.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* TRANSIT */}
            <div className='lg:py-12'>
                <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default space-y-12 px-6 lg:px-0'>
                    {/* TITLE */}
                    <>
                        <div className={`lg:w-2/3 mx-auto font-semibold ${futura.className} bg-[#6d8c3f] px-12 lg:px-36 py-32 lg:py-36 rounded-4xl lg:rounded-[62px]`}>
                            <ScrollReveal>
                                <div className='text-gray-50 text-8xl'>
                                    Transit and Tickets
                                </div>
                                <div className='text-[#C0D695] text-8xl'>
                                    Your even more mobile device.
                                </div>
                            </ScrollReveal>
                        </div>
                    </>

                    {/* PRESTO */}
                    <ScrollAnimatedWrapper>
                        <div className={`lg:w-2/3 mx-auto font-semibold flex ${futura.className} bg-black rounded-4xl lg:rounded-[62px] overflow-hidden`}>
                            <div className='w-1/2  h-full'>
                                <div className='bg-amber-600 w-full '>
                                    <div className='bg-[#6d8c3f] h-4 lg:h-8 w-full mt-18 lg:mt-32 mb-32 flex'>
                                        <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-4 lg:w-8 ml-12 lg:ml-22'></div>
                                        <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-4 lg:w-8 ml-13 lg:ml-22'></div>
                                        <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-8 lg:w-8 ml-12 lg:ml-22 hidden lg:flex'></div>
                                        <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-4 lg:w-8 ml-12 lg:ml-22 hidden lg:flex'></div>
                                    </div>
                                </div>
                                <div className='w-full px-6 lg:px-22 pt-0 pb-12 lg:pt-22 lg:pb-22 text-4xl lg:text-7xl font-semibold'>
                                    <ScrollReveal>
                                        <div className='text-[#C0D695]'>Express Mode.</div>
                                        <div className='text-gray-50'>Tap. Ride. Done.</div>
                                    </ScrollReveal>
                                </div>
                            </div>
                            <div className='w-1/2 flex '>
                                <div className='w-1/12'>
                                    <div className='bg-[#6d8c3f] h-4 lg:h-8 w-full mt-18 lg:mt-32'>
                                        
                                    </div>
                                </div>
                                <div className='w-10/12 h-full '>
                                    <div className='w-full h-52 flex justify-center'>
                                        <div className='bg-[#6d8c3f] h-4 lg:h-8 w-full mt-18 lg:mt-32 '>
                                            <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-4 lg:w-8 ml-0 lg:ml-12'></div>
                                        </div>
                                        <div className='w-8 lg:w-16 bg-[#f0b733]'>

                                            <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-4 lg:w-8 mt-4 lg:mt-12'></div>

                                            <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-4 lg:w-8 mt-10 lg:mt-12 flex justify-center items-center'>
                                                <div className='bg-gray-800 rounded-full h-2 lg:h-4 w-2 lg:w-4'></div>
                                            </div>

                                            <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-4 lg:w-8 mt-12 lg:mt-18 lg:hidden'></div>
                                        </div>
                                        <div className='bg-[#6d8c3f] h-4 lg:h-8 w-full mt-18 lg:mt-32 '>
                                            <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-4 lg:w-8 ml-12 lg:ml-32'></div>
                                        </div>
                                    </div>
                                    <div className='h-full mx-auto '>
                                        <div className='lg:h-106 lg:w-106 w-32 h-32 mx-auto bg-neutral-800 rounded-4xl flex justify-center pt-6 overflow-visible'>
                                            <div className='bg-[#363739] rounded-t-[52px] w-90 flex justify-center pt-0.5 border-t-2 border-x-2 border-[#121214] overflow-visible'>
                                                <div className='bg-gray-100 rounded-t-[48px] w-88 pt-2 border-t-8 border-x-8 border-black overflow-visible'>
                                                    <div className='h-8 md:h-10 lg:h-12 w-full text-slate-900 flex justify-between px-7 lg:pl-10.5 lg:pr-7 pt-2.5 md:pt-1.25'>
                                                        <div className='text-xs xl:text-sm font-semibold xl:mt-0.25'>10:20</div>
                                                        <div className='flex space-x-0.5 xl:space-x-1.5'>
                                                            <div className='mt-0.5 pt-0.25 xl:hidden'>
                                                                <CellularIcon/>
                                                            </div>
                                                            <div className='mt-0.5 pt-0.25 hidden xl:flex'>
                                                                <XLCellularIcon/>
                                                            </div>
                                                            <div className='mt-0.5 xl:hidden'>
                                                                <WifiIcon/>
                                                            </div>
                                                            <div className='mt-0.5 hidden xl:flex'>
                                                                <XLWifiIcon/>
                                                            </div>
                                                            <div className='text-slate-700 w-5 h-5 mt-1 xl:w-6 xl:h-6'>
                                                                <BatteryIcon/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='px-4 pb-3 -mt-1.5'>
                                                        <Image
                                                            src={Presto}
                                                            alt=""
                                                            className='w-full'
                                                        />

                                                        <div className='h-10 bg-white rounded-2xl mt-2 shadow-md flex justify-between items-center px-4 text-gray-800'>
                                                            <div>Cash Value</div>
                                                            <div>$20.00</div>
                                                        </div>

                                                        <div className='flex justify-center mt-4'>
                                                            <div>
                                                                <CircleCheckBig 
                                                                    color="#fff" 
                                                                    size={16} 
                                                                    strokeWidth={2} 
                                                                    className="text-gray-100 xl:w-[42px] xl:h-[42px] w-[32px] h-[32px] bg-[#5976BA] rounded-full p-1.5" 
                                                                />
                                                                <div className='text-[#5976BA] text-center'>Done</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className=' flex justify-center h-full'>
                                            <div className='h-full w-4 lg:w-8 bg-[#f0b733]'>   
                                                <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-4 lg:w-8 lg:mt-12 hidden lg:flex'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/12'>
                                    <div className='bg-[#6d8c3f] h-4 lg:h-8 w-full mt-18 lg:mt-32 '></div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimatedWrapper>

                    <div className={`hidden lg:w-2/3 mx-auto font-semibold  ${futura.className} lg:py-18 rounded-4xl lg:rounded-[62px] bg-gray-100 flex`}>

                        
                            <div className='z-10 w-full'>
                                {/* <CurvedDottedLine pathData={"M 0 60 Q 50 10 100 15"} strokeWidth={1} dashArray="1 2" /> */}
                            </div>

                            <div className='shadow-lg rounded-xl border-2 border-gray-300 p-6 z-20'>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <Image
                                            src={AirCanadaLogo}
                                            className='w-full'
                                            alt=""
                                        />
                                    </div>
                                    <div className='w-1/2 flex justify-end space-x-3 pt-0.5'>
                                        <div className='flex justify-end'>
                                            <div>
                                                <div className='text-gray-400 text-sm flex justify-end -mb-2'>GATE</div>
                                                <div className={`text-2xl text-gray-600 ${futuraLight.className}`}>G62</div>
                                            </div>
                                        </div>
                                        <div className='flex justify-end'>
                                            <div>
                                                <div className='text-gray-400 text-sm flex justify-end -mb-2'>SEAT</div>
                                                <div className={`text-2xl text-gray-600 ${futuraLight.className}`}>1D</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex items-end justify-between mt-2'>
                                    <div className='w-1/3'>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Toronto</div>
                                        <div className={`text-4xl text-gray-600 ${futuraLight.className}`}>YYZ</div>
                                    </div>
                                    <div className='flex justify-center items-end -mb-1'>
                                        <Image
                                            src={AirCanadaPlane}
                                            className='w-1/3'
                                            alt=""
                                        />
                                    </div>
                                    <div className='w-1/3 text-end'>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Montreal</div>
                                        <div className={`text-4xl text-gray-600 ${futuraLight.className}`}>YUL</div>
                                    </div>
                                </div>
                                <div className='flex items-end justify-between mt-2'>
                                    <div className='w-1/4'>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Flight</div>
                                        <div className={`text-xl text-gray-600 ${futuraLight.className}`}>AC 420</div>
                                    </div>
                                    <div className='w-1/4 '>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Date</div>
                                        <div className={`text-xl text-gray-600 ${futuraLight.className}`}>Aug 12</div>
                                    </div>
                                    <div className='w-1/4 '>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Boarding</div>
                                        <div className={`text-xl text-gray-600 ${futuraLight.className}`}>11:32</div>
                                    </div>

                                    <div className='w-1/4 text-end'>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Zone</div>
                                        <div className={`text-xl text-gray-600 ${futuraLight.className}`}>1</div>
                                    </div>
                                </div>
                                <div className='flex items-end justify-between mt-2'>
                                    <div className='w-1/2'>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Passenger</div>
                                        <div className={`text-xl text-gray-600 ${futuraLight.className}`}>Tianxiao Zhang</div>
                                    </div>

                                    <div className='w-1/2 text-end'>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Class</div>
                                        <div className={`text-xl text-gray-600 ${futuraLight.className}`}>Priority</div>
                                    </div>
                                </div>
                                <div className='w-full pt-28 pb-22 flex justify-center opacity-50'>
                                    <Image
                                        src={AirCanadaQRCode}
                                        className='w-1/4'
                                        alt=""
                                    />
                                </div>
                            </div>
                        
                    </div>

                    <div className={`hidden lg:w-2/3 mx-auto font-semibold  ${futura.className} lg:py-18 rounded-4xl lg:rounded-[62px] bg-gray-100 flex`}>
                        <div className='w-1/2 p-0 flex'>
                            <div className='w-16 lg:w-40 h-full overflow-hidden'>
                                {/* LEFT CURVE RIGHT HERE */}
                                {/* <CurvedDottedLine pathData="M 0 80 Q 50 10 100 0" /> */}
                                <CurvedDottedLine pathData="M 0 52 Q 75 25 1860 10" strokeWidth={0.75} dashArray="22 6" /> 
                                {/* M 0 52 Q 75 20 1860 40 */}
                            </div>
                            <div className=' shadow-lg rounded-xl border-2 border-gray-300 p-6'>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <Image
                                            src={AirCanadaLogo}
                                            className='w-full'
                                            alt=""
                                        />
                                    </div>
                                    <div className='w-1/2 flex justify-end space-x-3 pt-0.5'>
                                        <div className='flex justify-end'>
                                            <div>
                                                <div className='text-gray-400 text-sm flex justify-end -mb-2'>GATE</div>
                                                <div className={`text-2xl text-gray-600 ${futuraLight.className}`}>G62</div>
                                            </div>
                                        </div>
                                        <div className='flex justify-end'>
                                            <div>
                                                <div className='text-gray-400 text-sm flex justify-end -mb-2'>SEAT</div>
                                                <div className={`text-2xl text-gray-600 ${futuraLight.className}`}>1D</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex items-end justify-between mt-2'>
                                    <div className='w-1/3'>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Toronto</div>
                                        <div className={`text-4xl text-gray-600 ${futuraLight.className}`}>YYZ</div>
                                    </div>
                                    <div className='flex justify-center items-end -mb-1'>
                                        <Image
                                            src={AirCanadaPlane}
                                            className='w-1/4 mt-2'
                                            alt=""
                                        />
                                    </div>
                                    <div className='w-1/3 text-end'>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Montreal</div>
                                        <div className={`text-4xl text-gray-600 ${futuraLight.className}`}>YUL</div>
                                    </div>
                                </div>
                                <div className='flex items-end justify-between mt-2'>
                                    <div className='w-1/4'>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Flight</div>
                                        <div className={`text-xl text-gray-600 ${futuraLight.className}`}>AC 420</div>
                                    </div>
                                    <div className='w-1/4 '>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Date</div>
                                        <div className={`text-xl text-gray-600 ${futuraLight.className}`}>Aug 12</div>
                                    </div>
                                    <div className='w-1/4 '>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Boarding</div>
                                        <div className={`text-xl text-gray-600 ${futuraLight.className}`}>11:32</div>
                                    </div>

                                    <div className='w-1/4 text-end'>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Zone</div>
                                        <div className={`text-xl text-gray-600 ${futuraLight.className}`}>1</div>
                                    </div>
                                </div>
                                <div className='flex items-end justify-between mt-2'>
                                    <div className='w-1/2'>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Passenger</div>
                                        <div className={`text-xl text-gray-600 ${futuraLight.className}`}>Tianxiao Zhang</div>
                                    </div>

                                    <div className='w-1/2 text-end'>
                                        <div className='text-gray-400 text-base -mb-2 uppercase'>Class</div>
                                        <div className={`text-xl text-gray-600 ${futuraLight.className}`}>Priority</div>
                                    </div>
                                </div>
                                <div className='w-full pt-28 pb-22 flex justify-center opacity-50'>
                                    <Image
                                        src={AirCanadaQRCode}
                                        className='w-1/4'
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`w-1/2 text-3xl lg:text-7xl flex items-center justify-center text-gray-800`}>
                            <div className='w-full'>
                                <div className='w-full  h-24 lg:h-42'>
                                    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                                        <CurvedDottedLine pathData={"M 0 60 Q 50 10 100 50"} />
                                    </div>
                                </div>
                                <div className='pl-12 lg:pl-22 pr-12 lg:pr-18 hidden lg:flex'>
                                    <div>
                                        <div className='text-[#6d8c3f] lg:mb-6'>
                                            Boarding passes.
                                        </div>
                                        <div>
                                            Easier on the fly.
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-12 lg:h-22'></div>
                            </div>
                        </div>
                    </div>

                    {/* AIR CANADA */}
                    <ScrollAnimatedWrapper>
                        <FlightAnimation  />
                    </ScrollAnimatedWrapper>                       

                    {/* DUALIPA */}
                    <ScrollAnimatedWrapper>
                        <div className={`lg:w-2/3 mx-auto font-semibold flex ${futura.className} bg-gray-950 text-white text-3xl rounded-4xl lg:rounded-[62px] overflow-hidden`}>
                            <div className='w-1/2 pr-2 pt-3 h-full '>
                                <div className='pt-30 pl-18 h-full'>
                                    <div className='shadow-lg rounded-xl flex-grow flex justify-center h-full'>

                                        {/* <div className='flex items-end justify-between mt-2'>
                                            <div className='w-1/3'>
                                                <div className='text-gray-400 text-base -mb-2 uppercase'>Toronto</div>
                                                <div className={`text-4xl text-gray-600 ${futuraLight.className}`}>YYZ</div>
                                            </div>
                                            <div className='flex justify-center items-end -mb-1'>
                                                <Image src={AirCanadaPlane} className='w-1/3 hidden ' alt="" />
                                            </div>
                                            <div className='w-1/3 text-end'>
                                                <div className='text-gray-400 text-base -mb-2 uppercase'>Montreal</div>
                                                <div className={`text-4xl text-gray-600 ${futuraLight.className}`}>YUL</div>
                                            </div>
                                        </div> */}

                                        <div className='flex w-full h-full justify-center lg:justify-end items-start md:items-end '>

                                            {/* PHONE TEMPLATE */}
                                            <div className='hidden md:mr-0 md:w-32 md:h-115 lg:w-68 lg:h-115 xl:w-82 xl:h-120  '>
                                                <div className='w-1 h-115 xl:w-1 xl:h-139'>
                                                    <div className='w-1 mt-26 h-6 xl:mt-32 xl:h-7 bg-slate-800 rounded-l-xl'></div>
                                                    <div className='w-1 mt-5 h-11 xl:mt-6 xl:h-14 bg-slate-800 rounded-l-xl'></div>
                                                    <div className='w-1 mt-3 h-11 xl:mt-4 xl:h-14 bg-slate-800 rounded-l-xl'></div>
                                                </div>
                                                <div className='w-66 h-165 xl:w-80 xl:h-139 bg-slate-700 flex justify-center items-end rounded-t-[6vw] lg:rounded-t-[3vw] xl:rounded-t-[1.5vw]'>
                                                    <div className='w-64 h-114 lg:w-64 lg:h-114 xl:w-78 xl:h-138 bg-gray-50 border-t-8 border-l-8 border-r-8 border-slate-800 overflow-hidden  rounded-t-[6vw] lg:rounded-t-[3vw] xl:rounded-t-[1.5vw]'>
                                                        <div className='h-8 md:h-10 lg:h-12 w-full text-slate-900 flex justify-between px-7 lg:px-7 pt-2.5 md:pt-3'>
                                                            <div className='text-xs xl:text-sm font-semibold xl:mt-0.25'>10:20</div>
                                                            <div className='flex space-x-0.5 xl:space-x-1.5'>
                                                                <div className='mt-0.5 pt-0.25 xl:hidden'>
                                                                    <CellularIcon/>
                                                                </div>
                                                                <div className='mt-0.5 pt-0.25 hidden xl:flex'>
                                                                    <XLCellularIcon/>
                                                                </div>
                                                                <div className='mt-0.5 xl:hidden'>
                                                                    <WifiIcon/>
                                                                </div>
                                                                <div className='mt-0.5 hidden xl:flex'>
                                                                    <XLWifiIcon/>
                                                                </div>
                                                                <div className='text-slate-700 w-5 h-5 mt-1 xl:w-6 xl:h-6'>
                                                                    <BatteryIcon/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-1 h-101 xl:w-1 xl:h-128 '>
                                                    <div className='w-1 mt-41 h-17 xl:mt-51 xl:h-21 bg-slate-700 rounded-r-xl'></div>
                                                </div>
                                            </div>

                                            <div className='bg-[#363739] rounded-t-[52px] w-90 flex justify-center pt-0.5 border-t-2 border-x-2 border-[#121214]'>
                                                <div className='bg-gray-100 rounded-t-[48px] w-88 pt-2 border-t-8 border-x-8 border-black'>
                                                    <div className='h-8 md:h-10 lg:h-12 w-full text-slate-900 flex justify-between px-7 lg:pl-10.5 lg:pr-7 pt-2.5 md:pt-1.25'>
                                                        <div className='text-xs xl:text-sm font-semibold xl:mt-0.25'>10:20</div>
                                                        <div className='flex space-x-0.5 xl:space-x-1.5'>
                                                            <div className='mt-0.5 pt-0.25 xl:hidden'>
                                                                <CellularIcon/>
                                                            </div>
                                                            <div className='mt-0.5 pt-0.25 hidden xl:flex'>
                                                                <XLCellularIcon/>
                                                            </div>
                                                            <div className='mt-0.5 xl:hidden'>
                                                                <WifiIcon/>
                                                            </div>
                                                            <div className='mt-0.5 hidden xl:flex'>
                                                                <XLWifiIcon/>
                                                            </div>
                                                            <div className='text-slate-700 w-5 h-5 mt-1 xl:w-6 xl:h-6'>
                                                                <BatteryIcon/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='px-4 pb-3 -mt-1.5'>
                                                        <Image
                                                            src={DuaLipa}
                                                            alt=""
                                                            className='rounded-t-xl'
                                                        />
                                                        <div className='bg-gradient-to-b from-[#cbafce] to-[#c1a4c3] px-4 py-0.5 rounded-b-xl'>
                                                            <div className='flex justify-between items-center pt-1'>
                                                                <div className={`${futuraLight.className} text-white`}>West</div>
                                                                <div>
                                                                    <div className='text-gray-100 text-sm -mb-1 text-center'>Sec</div>
                                                                    <div className={`${futuraLight.className} text-white`}>102</div>
                                                                </div>
                                                                <div>
                                                                    <div className='text-gray-100 text-sm -mb-1 text-center'>Row</div>
                                                                    <div className={`${futuraLight.className} text-white`}>3</div>
                                                                </div>
                                                                <div>
                                                                    <div className='text-gray-100 text-sm -mb-1 text-center'>Seat</div>
                                                                    <div className={`${futuraLight.className} text-white`}>6</div>
                                                                </div>
                                                            </div>
                                                            <div className='flex justify-between pt-0 pb-1 text-base'>
                                                                <div>Rogers Centre</div>
                                                                <div className={`${futuraLight.className} italic`}>Ticketmaster</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='px-4 flex space-x-3 pb-3.5 pt-0'>
                                                        <div className='bg-white rounded-2xl w-1/2 h-22 shadow-sm text-sm text-gray-800 px-5 pt-3'>
                                                            <div>
                                                                <Landmark 
                                                                    color="#fff" 
                                                                    size={16} 
                                                                    strokeWidth={2} 
                                                                    className="text-gray-100 xl:w-[32px] xl:h-[32px] w-[32px] h-[32px] bg-[#5D8351] rounded-full p-1.5" 
                                                                />
                                                            </div>
                                                            <div>Rogers Centre</div>
                                                            <div className='-mt-1 text-gray-400'>Open in Maps</div>
                                                        </div>
                                                        <div className='bg-white rounded-2xl w-1/2 h-22 shadow-sm text-sm text-gray-800 px-5 pt-3'>
                                                            <div>
                                                                <Star 
                                                                    color="#fff" 
                                                                    size={16} 
                                                                    strokeWidth={2} 
                                                                    className="text-gray-100 xl:w-[32px] xl:h-[32px] w-[32px] h-[32px] bg-[#DD6B7B] rounded-full p-1.5" 
                                                                />
                                                            </div>
                                                            <div>Radical Optimism</div>
                                                            <div className='-mt-1 text-gray-400'>Event Guide</div>
                                                        </div>
                                                    </div>

                                                    {/* <div className='h-4 bg-gradient-to-b from-gray-100 to-gray-950'></div> */}


                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2 flex items-center'>
                            <SpotlightStage>
                                <div className='w-full px-6 lg:px-0 pt-0 pb-12 lg:pt-40 lg:pb-30 text-4xl lg:text-7xl font-semibold'>
                                    <ScrollReveal>
                                        <div className='px-12 mt-28 text-shadow-xl'>
                                            <div className='text-white'>Music and live events.</div>
                                            <div className='text-[#FFF799]'>Just show.</div>
                                            <div className='text-[#FFF799]'>And go.</div>
                                        </div>
                                        <div className="h-[36px] w-full"></div>

                                    </ScrollReveal>
                                </div>
                            </SpotlightStage>
                            </div>
                        </div>
                    </ScrollAnimatedWrapper>
                </div>

            </div>

            {/* PADDING */}
            <div className='h-120 w-full'></div>
        
        </div>
    )
}

export default Wallet
