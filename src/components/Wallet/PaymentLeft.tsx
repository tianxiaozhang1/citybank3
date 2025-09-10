import React from 'react'
import Image from 'next/image';

import KlarnaLogo from '../../../public/png/klarna.svg'
import { Clock9, CircleArrowRight } from 'lucide-react';

function PaymentLeft() {
    return (
        <div className=''>
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
        </div>
    )
}

export default PaymentLeft
