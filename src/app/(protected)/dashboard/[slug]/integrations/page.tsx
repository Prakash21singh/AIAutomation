import IntegrationCard from './_components/integration-card'
import { INTEGRATION_CARDS } from '@/constants/integrations'
import React from 'react'

type Props = {}

function Page({}: Props) {
  return (
    <div className='flex justify-center flex-1  border'>
        <div className='flex flex-col '>
            {INTEGRATION_CARDS.map((card,key)=>(
                <IntegrationCard key={key} {...card}/>
            ))}
        </div>
    </div>
  )
}

export default Page