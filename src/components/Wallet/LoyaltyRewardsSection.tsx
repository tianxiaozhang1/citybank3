import React from 'react'

import { ScrollReveal } from './ScrollReveal'
import LoyaltyRewards from './LoyaltyRewards'

function LoyaltyRewardsSection() {
    return (
        <div className='lg:flex py-8 lg:py-0 w-full'>
            <div className='w-full flex justify-center md:mt-6 lg:mt-0 lg:justify-end lg:w-1/2 lg:h-full pl-12 pr-14 lg:pl-12 lg:pr-0 lg:py-20 '>
                <LoyaltyRewards/>
            </div>
            <div className='w-full lg:w-1/2 text-3xl lg:text-7xl px-8 md:text-center lg:text-start lg:px-0 lg:pl-12 lg:pr-22 flex md:justify-center lg:justify-start items-end lg:pb-32 py-6 lg:py-0 text-gray-50'>
                <ScrollReveal>
                    <div>
                        <div>Loyalty and rewards.</div>
                        <div>You reap what you store.</div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    )
}

export default LoyaltyRewardsSection
