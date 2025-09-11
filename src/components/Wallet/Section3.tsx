import React from 'react'

import {CheckmarkDrawingAnimationOnScroll} from './CheckmarkDrawingAnimation'
import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })

function Section3() {
    return (
        <div className={`bg-gray-900 w-full ${futura.className} space-y-12 lg:space-y-12`}>
            <div>
                <div className='p-1 border-4 border-[#4994C4] rounded-full w-12 lg:w-16 mt-4 lg:mt-0'>
                    <CheckmarkDrawingAnimationOnScroll/>
                </div>
                <div className=' mt-3'>
                    Faster and easier than using cards or cash.
                </div>
            </div>
            <div>
                <div className='p-1 border-4 border-[#4994C4] rounded-full w-12 lg:w-16 mt-4 lg:mt-0'>
                    <CheckmarkDrawingAnimationOnScroll/>
                </div>
                <div className='mt-3'>
                    Pay in full or over time.
                </div>
            </div>
            <div>
                <div className='p-1 border-4 border-[#4994C4] rounded-full w-12 lg:w-16 mt-4 lg:mt-0'>
                    <CheckmarkDrawingAnimationOnScroll/>
                </div>
                <div className=' mt-3'>
                    Privacy and security built in.
                </div>
            </div>
            <div>
                <div className='p-1 border-4 border-[#4994C4] rounded-full w-12 lg:w-16 mt-4 lg:mt-0'>
                    <CheckmarkDrawingAnimationOnScroll/>
                </div>
                <div className=' mt-3'>
                    Accepted on a growing number of websites and apps.
                </div>
            </div>
        </div>
    )
}

export default Section3
