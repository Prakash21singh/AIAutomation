"use client"
import { usePaths } from '@/hooks/use-path'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import GradientButton from '../gradient-button';
import { Button } from '@/components/ui/button';
import { useQueryAutomation } from '@/hooks/use-queries';

type Props = {}

function AutomationList({}: Props) {
    // WIP: get the automation list data
    const {pathname} = usePaths();

    const {data} = useQueryAutomation()


    if(data?.status !== 200){
      return (
        <div className='h-[70vh] flex justify-center items-center flex-col gap-y-3'>
            Error coming bro
        </div>
      )
    }

  return (
    <div className='flex flex-col gap-y-3'>
        <Link href={`${pathname}/132432`} key={1}
        className='bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]'>
            <div className='flex flex-col flex-1 items-start'>
                <h2 className='text-xl font-semibold'>
                    Automation Name
                </h2>
                <p className='text-[#9B9CA0] text-sm font-light mb-2'>
                    This is from the comment
                </p>
                {/* WIP: Automation keywords */}
                <div className='flex gap-x-2 flex-wrap mt-3'>
                     <div className={cn(
                        'rounded-full px-4 py-1 capitalize',
                        (0 + 1) % 1 == 0 &&
                          'bg-keyword-green/15 border-2 border-keyword-green',
                        (1 + 1) % 2 == 0 &&
                          'bg-keyword-purple/15 border-2 border-keyword-purple',
                        (2 + 1) % 3 == 0 &&
                          'bg-keyword-yellow/15 border-2 border-keyword-yellow',
                        (3 + 1) % 4 == 0 &&
                          'bg-keyword-red/15 border-2 border-keyword-red'
                      )}>
                        Get Started
                     </div>
                </div>

                <div className='rounded-full border-2 border-dashed border-white/60 px-4 py-1 mt-3'>
                      <p className='text-sm text-[#bfc0c3]'>
                        No Keywords
                      </p>
                </div>

            </div>

            <div className='flex flex-col justify-between'>
                    <p className='capitalize text-sm font-light text-[#9B9CA0]'>
                    {/* WIP: Attach real date */}
                    October 5th 2024
                    </p>

                    {/* WIP: Render the button based on listener */}
                    
                    <GradientButton type='BUTTON' className='
                    w-full bg-background-90 text-white hover:bg-background-80'>
                        Automation List
                    </GradientButton>

                    <Button className='bg-background-80 hover:bg-background-90 text-white'>
                        Standard
                    </Button>
            </div>
        </Link>
    </div>
  )
}

export default AutomationList