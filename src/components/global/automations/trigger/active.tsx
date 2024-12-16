import { InstagramBlue, PlaneBlue } from '@/icons';
import React from 'react'

type Props = {
    type:string;
    keywords:{
        id:string
        word:string;
        automationId:string | null
    }[]
}

function ActiveTrigger({
    keywords,
    type
}: Props) {
  return (
    <div className='bg-background-80 p-3 rounded-xl w-full'>
        <div className='flex gap-x-2 items-center'>
            {type === "COMMENT" ? <InstagramBlue/> : <PlaneBlue/>}
            <p className='text-lg'>{
            type === "COMMENT"
            ? 'User comments on my post' 
            : 'Sends me a direct message'
            }</p>
        </div>
        <p className='text-text-secondary'>
            {
                type === "COMMENT"
                ? 'If user comments on a video that is setup to listen for keywords, this automation will fire.' 
                : 'If user send you a message that listen for keywords, this automation will fire.'
            }
        </p>
        <div className='flex gap-2 mt-5 flex-wrap'>
            {
                keywords.map((keyword,i)=>(
                    <div className="
                    bg-gradient-to-r
                    from-[#3352CC]
                    to-[#1C2D70]
                    flex
                    items-center
                    gap-x-2
                    capitalize
                    text-white
                    font-light
                    py-1
                    px-4
                    rounded-full
                    " key={keyword.id}>
                       <p>{keyword.word}</p>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default ActiveTrigger