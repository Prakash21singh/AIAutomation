import React from 'react'
import {
    Sheet as ShadCnSheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetFooter,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import UpgradeCard from '../sidebar/upgrade';
import { SubscriptionPlan } from '../subscription-plan';
import { Separator } from '@/components/ui/separator';
import ClerkAuthState from '../clerk-auth-state';
import { HelpDuoToneWhite } from '@/icons';
type Props = {
    trigger:React.ReactNode
    className?:string
    children:React.ReactNode
}

function Sheet({children,trigger,className}: Props) {
  return (
    <ShadCnSheet>
        <SheetTrigger>
            {trigger}
        </SheetTrigger>
        <SheetContent className={cn("flex flex-col py-3",className)}>
            <SheetTitle className='text-2xl my-4'>
                Digital<span className='
                bg-gradient-to-r
                from-[#CC3BD4]
                font-bold
              to-[#D064AC]
                bg-clip-text
                text-transparent
                '> Automation</span>
            </SheetTitle>
            {children}
            <div className='px-16'>
                <Separator
                orientation='horizontal'
                className='bg-[#7f7f82] border-2'
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

        </SheetContent>
    </ShadCnSheet>
  )
}

export default Sheet