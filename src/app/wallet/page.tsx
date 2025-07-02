"use client";
import Head from 'next/head';
import Image from 'next/image';

import AirCanadaLogo from '../../../public/png/aircanada.png'
import AirCanadaPlane from '../../../public/png/plane.svg'
import AirCanadaQRCode from '../../../public/png/qrcode.png'

// import CurvedDottedLine  from './CurvedDottedLineOLD'
import CurvedDottedLine from './CurvedDottedLineOLD'

import { ChevronDown, Banknote, CreditCard, DollarSign, ArrowDownCircle, ArrowUpCircle, Home, Briefcase, ShoppingBag,
         MoreHorizontal, Car, Send, FileText, User, Settings, LifeBuoy, ChartSpline } from 'lucide-react';
// FilePlus, LogOut, Bell,  TrendingUp, House
import React, { useState, useEffect } from 'react';
import NextLink from 'next/link'; // Renamed to avoid conflict if Link is imported from lucide or elsewhere

import { inter, lora } from '../../fonts';
// , aldrich, pt_sans_narrow
import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
const futuraLight = localFont({ src: '../../fontFiles/FuturaCyrillicLight.ttf' })
// const futuraBold = localFont({ src: '../../fontFiles/FuturaCyrillicBold.ttf' })
// import pixelMap from '../../images/pixelmap2.png'

import Header from '../../components/Header'; 
import Footer from '../../components/Footer'; 

import FlightAnimation from '../../components/Wallet/FlightAnimation'

function Wallet() {
    return (
        <div className='bg-stone-200'>
            <Header/>

            {/* TRANSIT */}
            <div>
                <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default space-y-12 px-6 lg:px-0'>
                    {/* TITLE */}
                    <div className={`lg:w-2/3 mx-auto font-semibold ${futura.className} bg-[#6d8c3f] px-12 lg:px-36 py-32 lg:py-36 rounded-4xl lg:rounded-[62px]`}>
                        <div className='text-gray-50 text-8xl'>
                            Transit and Tickets
                        </div>
                        <div className='text-[#C0D695] text-8xl'>
                            Your even more mobile device.
                        </div>
                    </div>

                    {/* PRESTO */}
                    <div className={`lg:w-2/3 mx-auto font-semibold flex ${futura.className} bg-gray-900 rounded-4xl lg:rounded-[62px] overflow-hidden`}>
                        <div className='w-1/2  h-full'>
                            <div className='bg-amber-600 w-full '>
                                <div className='bg-[#6d8c3f] h-4 lg:h-8 w-full mt-18 lg:mt-32 mb-32 flex'>
                                    <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-4 lg:w-8 ml-12 lg:ml-22'></div>
                                    <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-4 lg:w-8 ml-13 lg:ml-22'></div>
                                    <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-8 lg:w-8 ml-12 lg:ml-22 hidden lg:flex'></div>
                                    <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-4 lg:w-8 ml-12 lg:ml-22 hidden lg:flex'></div>
                                </div>
                            </div>
                            <div className=' w-full px-6 lg:px-22 pt-0 pb-12 lg:pt-22 lg:pb-22 text-4xl lg:text-7xl font-semibold'>
                                <div className='text-[#C0D695]'>Express Mode.</div>
                                <div className='text-gray-50'>Tap. Ride. Done.</div>
                            </div>
                        </div>
                        <div className='w-1/2 flex '>
                            <div className='w-1/12 '>
                                <div className='bg-[#6d8c3f] h-4 lg:h-8 w-full mt-18 lg:mt-32'>
                                    
                                </div>
                            </div>
                            <div className='w-10/12 h-full '>
                                <div className='w-full h-52 flex justify-center'>
                                    <div className='bg-[#6d8c3f] h-4 lg:h-8 w-full mt-18 lg:mt-32 '>
                                        <div className='bg-gray-50 rounded-full h-4 lg:h-8 w-4 lg:w-8 ml-0 lg:ml-12'></div>
                                    </div>
                                    <div className='w-8 lg:w-16 bg-[#FAC03D]'>

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
                                <div className='h-full'>
                                    <div className='bg-stone-500 lg:h-full w-full h-52'></div>
                                    <div className='lg:hidden flex justify-center h-full'>
                                        <div className='h-full w-4 lg:w-16 bg-[#FAC03D]'>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/12'>
                                <div className='bg-[#6d8c3f] h-4 lg:h-8 w-full mt-18 lg:mt-32 '></div>
                            </div>
                        </div>
                    </div>

                    {/* AIR CANADA */}

                    
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

                    <div className=''>
                        <FlightAnimation  />
                    </div>
                </div>

            </div>

            {/* PADDING */}
            <div className='h-120 w-full'></div>
        
        </div>
    )
}

export default Wallet
