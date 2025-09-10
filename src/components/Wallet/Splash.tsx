import React from 'react'

import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
const futuraBold = localFont({ src: '../../fontFiles/FuturaCyrillicBold.ttf' })

import SplashPhone from './SplashPhone'

function Splash() {
    return (
        <div className={`text-center flex justify-center ${futura.className}`}>
            <div>
                <div className='flex justify-center'>
                    <div className='text-5xl w-fit font-semibold lg:mt-24 bg-[#108B96] text-gray-100 px-3 py-1 lg:px-4 lg:py-2 rounded-2xl uppercase'>City Wallet</div>
                </div>
                <div className='text-9xl font-semibold text-gray-800'>Carry one thing.</div>
                <div className='text-9xl font-semibold text-gray-800'>Everything.</div>

                <div className='mx-auto w-full flex justify-center scale-110 lg:mt-24'><SplashPhone/></div>
            </div>
        </div>
    )
}

export default Splash