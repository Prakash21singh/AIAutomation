import React from 'react'
import PaymentButton from '../payment-button'

type Props = {}

function UpgradeCard({}: Props) {
  return (
    <div className='bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3'>
        <span className='text-sm'>
            Upgrade to {''}
            <span className='bg-gradient-to-r
            from-[#CC3BD4]
            font-bold
            to-[#D064AC]
            bg-clip-text
            text-transparent
            '>
                Smart AI
            </span>
        </span>
        <p className='text-[#9B9CA0] font-light text-sm'>
            Unlock All Features <br /> Including AI and More
        </p>
        <PaymentButton/>
    </div>
  )
}

export default UpgradeCard