import React from 'react'

import { ScrollReveal } from './ScrollReveal'
import LoyaltyRewards from './LoyaltyRewards'

function LoyaltyRewardsSection() {
    return (
        <div className='flex'>
            <div className='w-1/2 h-full lg:pl-12 lg:py-20 '>
                <LoyaltyRewards/>
            </div>
            <div className='w-1/2 text-7xl lg:pl-12 lg:pr-22  flex items-end pb-32 text-gray-50'>
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
