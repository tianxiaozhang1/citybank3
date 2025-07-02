"use client";
import Head from 'next/head';

import { ChevronDown, Banknote, CreditCard, DollarSign, ArrowDownCircle, ArrowUpCircle, Home, Briefcase, ShoppingBag,
         MoreHorizontal, Car, Send, FileText, User, Settings, LifeBuoy, ChartSpline } from 'lucide-react';
// FilePlus, LogOut, Bell,  TrendingUp, House
import React, { useState, useEffect } from 'react';
import NextLink from 'next/link'; // Renamed to avoid conflict if Link is imported from lucide or elsewhere

import { inter, lora } from '../../fonts';
// , aldrich, pt_sans_narrow
import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
// const futuraLight = localFont({ src: '../../fontFiles/FuturaCyrillicLight.ttf' })
// const futuraBold = localFont({ src: '../../fontFiles/FuturaCyrillicBold.ttf' })
// import pixelMap from '../../images/pixelmap2.png'

import Header from '../../components/Header'; 
import Footer from '../../components/Footer'; 

function CreditCardPage() {
    return (
        <div>
            <Header/>

            <div className='bg-gray-950'>
                <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto lg:grid lg:grid-cols-2 w-full lg:py-10 xl:py-16  px-4 lg:px-36 lg:gap-x-12 text-gray-50'>
                    <div className='border-2 border-slate-400 bg-gradient-to-b from-stone-800 to-stone-950 rounded-3xl overflow-hidden'>
                        <div className='p-12 lg:p-16'>
                            <div className={`${lora.className} text-3xl lg:text-6xl mb-2`}>No annual fee</div>
                            <div className={`${futura.className} text-lg lg:text-2xl`}>We'll waive your fees (charged monthly) if you've got $100K+ with us, or when you switch a qualifying paycheque deposit to City Bank.</div>
                        </div>

                        <div className='lg:h-0 grid grid-cols-12 items-end'>
                            {/* <div className='bg-red-300 h-1/12'></div>
                            <div className='bg-red-300 h-2/12'></div>
                            <div className='bg-red-300 h-3/12'></div>
                            <div className='bg-red-300 h-4/12'></div>
                            <div className='bg-red-300 h-5/12'></div>
                            <div className='bg-red-300 h-6/12'></div>
                            <div className='bg-red-300 h-7/12'></div>
                            <div className='bg-red-300 h-8/12'></div>
                            <div className='bg-red-300 h-9/12'></div>
                            <div className='bg-red-300 h-10/12'></div>
                            <div className='bg-red-300 h-11/12'></div>
                            <div className='bg-[#8b6dab] h-12/12'></div> */}

                        </div>
                        
                    </div>
                    
                    <div className='border-2 border-slate-400 bg-gradient-to-b from-stone-800 to-stone-950 rounded-3xl overflow-hidden'>
                        <div className='p-12 lg:p-16'>
                            <div className={`${lora.className} text-3xl lg:text-6xl mb-2`}>No FX fees</div>
                            <div className={`${futura.className} text-lg lg:text-2xl`}>Most other credit cards charge up to 2.5%. With us, it’s always zero. Even on late-night room service.</div>
                        </div>

                        <div className='lg:h-0 grid grid-cols-12 items-end'>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='bg-gray-100'>
                <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto lg:grid lg:grid-cols-3 w-full lg:py-10 xl:py-16 pl-4 lg:pl-36 lg:gap-x-12 text-gray-800'>
                    
                    <div className='bg-[#dbd6e4] rounded-3xl'>
                        <div className='p-12 lg:p-12'>
                            <div className={`${lora.className} text-2xl lg:text-4xl mb-4`}>No tap limit</div>
                            <div className={`${futura.className} text-lg lg:text-lg bg-[#eeebf5] rounded-3xl px-4 py-0.5 w-fit uppercase mt-8`}>Tap freely with virtual card</div>
                            <div className={`${futura.className} text-lg lg:text-lg bg-[#eeebf5] rounded-3xl px-4 py-0.5 w-fit uppercase mt-3`}>Access card details in app</div>
                        </div>                        
                    </div>

                    <div className='bg-[#dbd6e4] rounded-3xl overflow-hidden'>
                        <div className='p-12 lg:p-12'>
                            <div className={`${lora.className} text-2xl lg:text-4xl mb-4 `}>Keep your card secure in-app</div>
                            <div className={`${futura.className} text-lg lg:text-lg bg-[#eeebf5] rounded-3xl px-4 py-0.5 w-fit uppercase mt-8`}>Lock your card instantly</div>
                            <div className={`${futura.className} text-lg lg:text-lg bg-[#eeebf5] rounded-3xl px-4 py-0.5 w-fit uppercase mt-3`}>View and change your pin</div>
                        </div>         
                        <div className='lg:space-y-4 px-8 pb-8 text-gray-300 font-semibold text-xl'>
                            <div className='py-4 px-6 bg-stone-600 rounded-3xl'>Lock Card</div>
                            <div className='py-4 px-6 bg-stone-600 rounded-3xl'>View PIN</div>
                            <div className='py-4 px-6 bg-stone-600 rounded-3xl'>Change PIN</div>
                        </div>               
                    </div>

                    <div className='bg-[#dbd6e4] rounded-3xl'>
                        <div className='p-12 lg:p-12'>
                            <div className={`${lora.className} text-2xl lg:text-4xl mb-4`}>Pay on your schedule</div>
                            <div className={`${futura.className} text-lg lg:text-lg bg-[#eeebf5] rounded-3xl px-4 py-0.5 w-fit uppercase mt-8`}>Set up auto-pay</div>
                            <div className={`${futura.className} text-lg lg:text-lg bg-[#eeebf5] rounded-3xl px-4 py-0.5 w-fit uppercase mt-3`}>Pay flexible amounts</div>
                        </div>                        
                    </div>

                </div>
            </div>

            

            <div className='h-120 w-full bg-slate-800 text-red-600'>yyy</div>
        </div>
    )
}

export default CreditCardPage
