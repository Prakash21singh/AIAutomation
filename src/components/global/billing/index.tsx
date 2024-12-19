import React from 'react'
import PaymentCard from './payment-card'

type Props = {}

function Billing({}: Props) {
  return (
    // WIP: Fetch billing information for the customer
    <div className='flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container'>
        <PaymentCard
            current='FREE'
            label='FREE'
            
        />
    </div>
  )
}

export default Billing