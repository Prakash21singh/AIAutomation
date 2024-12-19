import React from 'react'
import PopOver from '../../pop-over';
import { BlueAddIcon } from '@/icons';

type Props = {
    label:string;
    children:React.ReactNode
}

function TriggerButton({
    children,
    label
}: Props) {
  return (
    <PopOver 
    className='w-[400px]' 
    trigger={
    <div className='border-2 border-dashed w-full border-[#3352cc] hover:opacity-80
    cursor-pointer transition duration-400 rounded-xl flex gap-x-2 justify-center items-center p-5
    mt-4
    '>
        <BlueAddIcon/>
        <p className='font-bold text-[#768BDD]'>{label}</p>
    </div>
}>
    {children}
    </PopOver>
  )
}

export default TriggerButton