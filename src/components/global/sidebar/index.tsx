"use client"

import { usePaths } from '@/hooks/use-path';
import { LogoSmall } from '@/svgs/logo-small';
import React from 'react'
import Items from './items';
import { SIDEBAR_MENU } from '@/constants/menu';
import { Separator } from '@/components/ui/separator';
import { UserButton } from '@clerk/nextjs';
import ClerkAuthState from '../clerk-auth-state';
import { HelpDuoToneWhite } from '@/icons';
import { SubscriptionPlan } from '../subscription-plan';
import UpgradeCard from './upgrade';

type Props = {
    slug:string;

}

function Sidebar({slug}: Props) {
  const {page}= usePaths()

  return (
    <div className='w-[250px]
    border-[1px]
    radial
    fixed
    left-0
    lg:inline-block 
    border-[#545454] bg-gradient-to-b 
    from-[#768BDD] 
    via-[#171717]
    to-[#2c2f3b] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden
    '>
        <div className='
        flex
        flex-col 
        gap-y-5 
        w-full 
        h-full 
        p-3 
        bg-[#0e0e0e]
        bg-opacity-90 
        bg-clip-padding
        backdrop-filter 
        backdrop--blur__safari 
        backdrop-blur-3xl
        '> 
            <div className='flex mx-auto w-full gap-x-2 items-center p-5 justify-center'>
                <LogoSmall/>
            </div>
            <div className='flex flex-col py-3'>
                <Items 
                    page={page} 
                    slug={slug}
                />
            </div>
            <div className='px-16'>
                <Separator
                orientation='horizontal'
                className='bg-[#5C5C5F]'
                />
            </div>
            <div className='px-3 flex flex-col gap-y-5'>
                <div className='flex gap-x-2'>
                    <ClerkAuthState/>
                    <p className='text-[#9B9CA0]'>Profile</p>
                </div>
                <div className='flex gap-x-3'>
                    <HelpDuoToneWhite/>
                    <p className='text-[#9B9CA0]'>Help</p>
                </div>
            </div>
            <SubscriptionPlan type='FREE'>
                    <div className='flex flex-1 flex-col justify-end'>
                        <UpgradeCard/>
                    </div>
            </SubscriptionPlan>
        </div>
    </div>
  )
}

export default Sidebar