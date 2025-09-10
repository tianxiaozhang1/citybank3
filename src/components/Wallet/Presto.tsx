import React from 'react'
import Image from 'next/image';

import { ScrollReveal } from './ScrollReveal'

import { CircleCheckBig } from 'lucide-react';
import { CellularIcon, XLCellularIcon, WifiIcon, XLWifiIcon, BatteryIcon } from '../../components/graphics/PhoneIcons';
import PrestoImage from '../../../public/png/Presto_Card.svg'

function PrestoComponent() {
    return (
        <div className='w-full flex'>
            <div className='w-1/2  h-full'>
                <div className=' w-full '>
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
                                            src={PrestoImage}
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
    )
}

export default PrestoComponent
