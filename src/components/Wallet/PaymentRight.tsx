import React from 'react'

import BuyItAll from './BuyItAll'

function PaymentRight() {
    return (
        <div>
            <div className='lg:mb-3 text-[#108B96]'>City Wallet.</div>
            <div className=''>Buy all the <BuyItAll/> and more. Anywhere you see&nbsp;
                <div className='shadow-sm inline-block text-2xl lg:text-3xl items-center bg-[#108B96] text-gray-100 px-3 py-0.5 lg:py-1 rounded-2xl uppercase mr-0.25'>
                    City Pay
                </div>
            .
            </div>                 
        </div>
    )
}

export default PaymentRight
