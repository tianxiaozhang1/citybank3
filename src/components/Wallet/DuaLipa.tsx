import React from 'react'
import Image from 'next/image';

import { ScrollReveal } from './ScrollReveal'
import SpotlightStage from './SpotlightStage'

import DuaLipa from '../../../public/jpg/DuaLipa.jpg'

import { CellularIcon, XLCellularIcon, WifiIcon, XLWifiIcon, BatteryIcon } from '../../components/graphics/PhoneIcons';
import { Landmark, Star } from 'lucide-react';

import localFont from 'next/font/local'
// const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
const futuraLight = localFont({ src: '../../fontFiles/FuturaCyrillicLight.ttf' })

function DuaLipaSection() {
    return (
        <div className='flex'>
            <div className='w-1/2 pr-2 pt-3 h-full '>
                <div className='pt-30 pl-18 h-full'>
                    <div className='shadow-lg rounded-xl flex-grow flex justify-center h-full'>

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
    )
}

export default DuaLipaSection
