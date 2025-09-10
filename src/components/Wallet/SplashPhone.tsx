import React from 'react'
import Image from 'next/image'

import { CellularIcon, XLCellularIcon, WifiIcon, XLWifiIcon, BatteryIcon } from '../../components/graphics/PhoneIcons';
import { Aldrich, Cinzel, PT_Sans_Narrow } from 'next/font/google';
const aldrich = Aldrich({ subsets: ['latin'], weight: "400" })
const cinzel = Cinzel({ subsets: ['latin'], weight: "400" })
const pt_sans_narrow = PT_Sans_Narrow({ subsets: ['latin'], weight: "400" })

const topThreeCards = "w-56 h-28 lg:w-56 lg:h-28 xl:w-70 xl:h-28 rounded-t-2xl mx-auto"
import pixelMap from '../../../public/png/pixelmap2.png'

import Starbucks from '../../../public/creditcardlogos/Starbucks.png';
import CAA from '../../../public/creditcardlogos/CAA.png';
import Shell from '../../../public/creditcardlogos/Shell.png';
import AirCanada from '../../../public/creditcardlogos/AirCanada.png';
import BurgerShack from '../../../public/creditcardlogos/BurgerShack.png';
import Indigo from '../../../public/creditcardlogos/Indigo.svg';

const CreditCardChip = () => {
    return (
        <div className='h-17 xl:h-24 pl-7 xl:pl-8 flex md:pt-3 lg:pt-2 xl:pt-4'>
            <div className='h-7 w-9 xl:h-8 xl:w-10 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-md flex justify-between xl:mt-0.5 xl:ml-0.5'>
                <div className='w-1/3 border-r-1.5 border-yellow-300'>
                    <div className='h-1/4 border-b-1.5 border-yellow-300'></div>
                    <div className='h-1/4 border-b-1.5 border-yellow-300'></div>
                    <div className='h-1/4 border-b-1.5 border-yellow-300'></div>
                </div>
                <div className='w-1/3 border-yellow-300'>
                    <div className='h-1/4'></div>
                    <div className='h-1/4 border-l-1.5 border-t-1.5 border-yellow-400'></div>
                    <div className='h-1/4 border-l-1.5 border-t-1.5 border-yellow-400'></div>
                    <div className='h-1/4 border-l-1.5 border-t-1.5 border-yellow-400'></div>
                </div>
            </div>

            <div className='xl:hidden mt-0.5 ml-0.5'>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#dcdcdc" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3 19.5002C17.4 17.2002 18 14.7002 18 12.0002C18 9.30024 17.4 6.70024 16.3 4.50024M12.7 17.8003C13.5 16.0003 14 14.0003 14 12.0003C14 10.0003 13.5 7.90034 12.7 6.10034M9.1001 16.1001C9.7001 14.8001 10.0001 13.4001 10.0001 12.0001C10.0001 10.6001 9.7001 9.10015 9.1001 7.90015M5.5 14.3003C5.8 13.6003 6 12.8003 6 12.0003C6 11.2003 5.8 10.3003 5.5 9.60034" stroke="#b7c1ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <div className='hidden xl:flex mt-0.5 ml-0.5'>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#dcdcdc" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3 19.5002C17.4 17.2002 18 14.7002 18 12.0002C18 9.30024 17.4 6.70024 16.3 4.50024M12.7 17.8003C13.5 16.0003 14 14.0003 14 12.0003C14 10.0003 13.5 7.90034 12.7 6.10034M9.1001 16.1001C9.7001 14.8001 10.0001 13.4001 10.0001 12.0001C10.0001 10.6001 9.7001 9.10015 9.1001 7.90015M5.5 14.3003C5.8 13.6003 6 12.8003 6 12.0003C6 11.2003 5.8 10.3003 5.5 9.60034" stroke="#b7c1ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

function SplashPhone() {
    return (
        <div>
            <div className='md:mr-8 md:w-32 md:h-115 lg:w-68 lg:h-115 xl:w-82 xl:h-139 flex'>
                <div className='w-1 h-115 xl:w-1 xl:h-139'>
                    <div className='w-1 mt-26 h-6 xl:mt-32 xl:h-7 bg-slate-700 rounded-l-xl'></div>
                    <div className='w-1 mt-5 h-11 xl:mt-6 xl:h-14 bg-slate-700 rounded-l-xl'></div>
                    <div className='w-1 mt-3 h-11 xl:mt-4 xl:h-14 bg-slate-700 rounded-l-xl'></div>
                </div>
                <div className='w-66 h-115 xl:w-80 xl:h-139 bg-slate-600 flex justify-center items-end rounded-t-[6vw] lg:rounded-t-[3vw] xl:rounded-t-[1.5vw]'>
                    <div className='w-64 h-114 lg:w-64 lg:h-114 xl:w-78 xl:h-138 bg-white border-t-8 border-l-8 border-r-8 border-slate-800 overflow-hidden  rounded-t-[6vw] lg:rounded-t-[3vw] xl:rounded-t-[1.5vw]'>
                        <div className='h-8 md:h-10 lg:h-12 w-full text-slate-800 flex justify-between px-7 lg:px-7 pt-2.5 md:pt-3'>
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
                        <div className='px-4 py-0 md:pt-0 md:pb-1 lg:pb-2 flex justify-between mt-1'>
                            <div className={`${aldrich.className}`}><div className='font-bold lg:text-xl xl:text-2xl py-1 text-rouLan'>CITY WALLET</div></div>
                            <div className='text-rouLan flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 md:size-6 lg:size-7 xl:size-8">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        <div className={`bg-gradient-to-br from-black to-guanLv ${topThreeCards}`}>
                            <div className='text-slate-200 px-4  pt-2 xl:pt-2 text-sm lg:h-9 xl:h-10'>
                                <div className={`${aldrich.className}`}>
                                    <div className='font-bold flex xl:text-lg'>
                                        <div className='text-stone-300'>CITY</div><div className='text-stone-200'>&nbsp;PREFERRED</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`hidden md:flex bg-gradient-to-br from-red-800 to-luoShenZhu -mt-20 lg:-mt-20 xl:-mt-18 ${topThreeCards}`}>
                            <div className='text-slate-200 px-4 pt-2 xl:pt-2 text-sm lg:h-9 xl:h-10'>
                                <div className={`${aldrich.className}`}>
                                    <div className='font-bold flex xl:text-lg'>
                                        <div className='text-slate-200'>CITY</div><div className='text-slate-50'>&nbsp;EVERYDAY</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`hidden  bg-black -mt-20 xl:-mt-18 ${topThreeCards}`}>
                        {/* md:flex */}
                            <div className='text-slate-200 px-4 pt-2 xl:pt-2 text-sm lg:h-9 xl:h-10'>
                                <div className={`${aldrich.className}`}>
                                    <div className='font-bold flex xl:text-lg'>
                                        <div className='text-slate-300'>CITY</div><div className='text-slate-200'>&nbsp;RESERVE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-56 h-35 lg:w-56 lg:h-35 xl:w-70 xl:h-44 rounded-2xl mx-auto -mt-20 lg:-mt-20 xl:-mt-18 overflow-hidden'
                            style={{
                                background: `url(${pixelMap.src})`,
                                backgroundColor: "#0b284d",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 1,
                            }} 
                        >
                            <div className='text-slate-200 px-4 pt-2 xl:pt-2 text-sm lg:h-9 xl:h-10'>
                                <div className={`${aldrich.className}`}>
                                    <div className='font-bold flex xl:text-lg'>
                                        <div className='text-slate-300'>CITY</div><div className='text-slate-300'>&nbsp;TRAVEL</div>
                                    </div>
                                </div>
                            </div>

                            <div className='hidden md:flex'><CreditCardChip/></div>

                            <div className='hidden md:flex items-end justify-between pl-4 pr-3 lg:h-9 xl:h-10'>
                                <div className={`${pt_sans_narrow.className} text-slate-300 mb-2.5`}>A. NAME</div>
                                <div className='-mb-1'>
                                    <svg fill="#dcdcdc" width="52px" height="52px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199 6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* <div className='border-kongQueLan border-2 bg-white md:hidden w-56 h-35 lg:w-56 lg:h-35 xl:w-70 xl:h-44 rounded-2xl mx-auto -mt-20 lg:-mt-20 xl:-mt-18 overflow-hidden'>



                            <div className=' w-full h-full text-center text-kongQueLan text-xl font-bold rounded-xl'>
                                <div>
                                    <div className=''>Carry</div>
                                    <div className='flex justify-center'>
                                        <Emojis/>
                                    </div>
                                    <div className='mt-1'>all at once.</div>
                                </div>
                            </div>



                        </div> */}

                        <div className='hidden md:flex mt-2 md:px-1 lg:px-0'>
                            <div className='w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-40 lg:mr-0.5 xl:mr-1 rounded-2xl mx-auto bg-gradient-to-b from-green-950 to-slate-200 flex justify-between px-3'>
                                <div className='md:w-7 lg:w-7 xl:w-9 md:pt-1.5 lg:pt-1.5 xl:pt-1'>
                                        <Image
                                            src={Starbucks}
                                            alt="X"
                                            className='w-full '
                                        />
                                    </div>
                                    <div className='flex text-slate-200 font-semibold xl:pt-3 lg:pt-2 md:pt-2 xl:scale-110 xl:mt-1'>
                                        <div className='text-sm mt-0.5'>$50.38</div>
                                    </div>
                                </div>
                            <div className='w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-40 lg:ml-0.5 xl:ml-1 rounded-2xl mx-auto bg-gradient-to-r from-sky-600 to-sky-950 flex justify-between px-3 '>
                                <div className='md:w-8 lg:w-8 xl:w-10 lg:pt-2.5 md:pt-2'>
                                    <Image
                                        src={CAA}
                                        alt="X"
                                        className='w-full'
                                    />
                                </div>
                                <div className='flex text-slate-200 xl:pt-3 font-semibold lg:pt-2 md:pt-2 xl:scale-110 xl:mt-1'>
                                    <div className='text-sm mt-0.5'>$50.00</div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:flex xl:-mt-29 lg:-mt-21 md:-mt-15p md:px-1 lg:px-0'>
                            <div className='w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-44 lg:mr-0.5 xl:mr-1 rounded-2xl mx-auto bg-[#f6ce1e] flex justify-between px-3'>                                            
                                <div className='md:w-7 lg:w-7 xl:w-9 pt-1.5'>
                                    <Image
                                        src={Shell}
                                        alt="X"
                                        className='w-full mt-0 -ml-0'
                                    />
                                </div>
                                <div className='flex text-luoShenZhu font-semibold xl:scale-110 xl:mt-1.5 xl:pt-3 md:pt-2'>
                                    <div className='text-sm mt-0.5'>$64.22</div>
                                </div>
                            </div>
                                
                            <div className='w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-44 lg:ml-0.5 xl:ml-1 rounded-2xl mx-auto bg-slate-900  pt-1.5 pl-0 '>
                                <div className='flex justify-between px-3'>
                                    <div className='md:text-xxs lg:text-xs xl:text-sm text-slate-300 md:pt-0.25 md:mt-0.5 lg:mt-0 lg:-ml-0.5 md:scale-125 lg:scale-100'>PRESTO</div>
                                    <div className='md:text-xs lg:text-xs xl:text-sm text-slate-100 lg:-mr-0.5 md:mt-0 lg:mt-0'>$15.68</div>
                                </div>
                                <div>
                                    <div className='w-full md:h-0.5 xl:h-1 bg-slate-100 mt-0.5'></div>
                                    <div className='w-full md:h-0.5 xl:h-1 md:bg-lime-500 xl:bg-lime-400 mt-0.5'></div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:flex xl:-mt-33 lg:-mt-21 md:-mt-15p md:px-1 lg:px-0'>
                            <div className='w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-44 lg:mr-0.5 xl:mr-1 rounded-2xl mx-auto bg-slate-50 border-4 border-red-600 flex justify-between'>                                            
                                <div className='flex justify-between px-2 pt-0 w-full text-slate-500'>
                                    <div className='md:w-7 lg:w-6 xl:w-8 '>
                                        <Image
                                            src={AirCanada}
                                            alt="X"
                                            className='w-full mt-1 lg:ml-0.25 md:-ml-0.25'
                                        />
                                    </div>
                                    <div className='text-xxs flex md:pt-2 lg:pt-2.5 xl:pt-3.5 mt-0.25  pr-0'>
                                        <div className='text-end flex scale-110'>
                                            <div>
                                                <div className='font-semibold'>GATE</div>
                                                <div className='md:text-xs xl:text-sm -mt-1.5 text-slate-700'>D20</div>
                                            </div>
                                        </div>
                                        <div className='text-end flex ml-2 scale-110 xl:mr-0.5 pr-0.25'>
                                            <div>
                                                <div className='font-semibold'>SEAT</div>
                                                <div className='md:text-xs xl:text-sm -mt-1.5 md:-ml-1 lg:ml-0 text-slate-700'>12D</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-44 lg:ml-0.5 xl:ml-1 rounded-2xl mx-auto bg-mainBurgerBG pl-0 '>
                                <div className='w-full flex justify-between px-3'>
                                    <div className='md:w-7 lg:w-7 xl:w-9 pt-0 mt-1.5 '>
                                        <Image
                                            src={BurgerShack}
                                            alt="X"
                                            className='w-full mt-0.25'
                                        />
                                    </div>
                                    <div className='flex text-burgerMainText lg:pt-2 xl:pt-3 mt-1 xl:scale-110 xl:mt-0.5'>
                                        <div className='md:text-xs lg:text-xs xl:text-sm md:mt-2 lg:-mt-0.5 font-semibold'>$56.12</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:flex xl:-mt-33 lg:-mt-21 md:-mt-15p md:px-1 lg:px-0'>
                            <div className='lg:pt-1.5 xl:pt-2 w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-44 lg:mr-0.5 xl:mr-1 rounded-2xl mx-auto bg-[#1c29ba] flex justify-between px-3'>                                            
                                <div className='md:w-7 lg:w-8 xl:w-10 md:mt-3 lg:mt-0.5'>
                                    <Image
                                        src={Indigo}
                                        alt="X"
                                        className='w-full mt-0.25'
                                    />
                                </div>
                                <div className='flex text-slate-200 xl:scale-110 xl:mt-2'>
                                    <div className='md:text-xs xl:text-sm lg:mt-0.5 md:mt-2.5 '>862pts</div>
                                </div>
                            </div>
                                
                            <div className='lg:pt-1 xl:pt-2 w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-44 lg:ml-0.5 xl:ml-1 rounded-2xl mx-auto bg-gradient-to-br from-slate-600 to-black flex justify-between px-3'>
                                <div className={`w-9 ${cinzel.className} text-slate-50 flex text-center`}>
                                    <div className='md:mt-1.5 lg:mt-0'>
                                        <div className='text-xs '>venus</div>
                                        <div className='text-xxs -mt-1.5'>jewelery</div>
                                    </div>
                                </div>
                                <div className='flex text-slate-200 lg:pt-0.5 xl:scale-110 xl:mt-2'>
                                    <div className='text-xs lg:mt-0.5 md:mt-2.5'>722pts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1 h-101 xl:w-1 xl:h-128 '>
                    <div className='w-1 mt-41 h-17 xl:mt-51 xl:h-21 bg-slate-700 rounded-r-xl'></div>
                </div>
            </div>
        
        </div>
    )
}

export default SplashPhone
