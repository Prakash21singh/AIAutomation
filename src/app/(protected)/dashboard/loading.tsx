import Loader from '@/components/global/loader'
import React from 'react'

type Props = {}

function Loading({}: Props) {
  return (
    <div className='h-screen flex-center'>
        <Loader state>Loading...</Loader>
    </div>
  )
}

export default Loading