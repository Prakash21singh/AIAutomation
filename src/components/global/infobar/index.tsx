"use client"
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePaths } from '@/hooks/use-path'
import { Menu } from 'lucide-react'
import React from 'react'
import Sheet from '../sheet'
import Items from '../sidebar/items'
import { LogoSmall } from '@/svgs/logo-small'
import CreateAutomation from '../create-automation'
import Search from './search'
import Notification from './notification'
import MainBreadCrumb from '../bread-crumbs/main-bread-crumb'

type Props = {
    slug:string
}


function Infobar({slug}: Props) {
  const { page } = usePaths()
  const currentPage =  PAGE_BREAD_CRUMBS.includes(page) || page == slug
  
  return currentPage && <div className='flex flex-col'>
    <div className="flex gap-x-3 lg:gap-x-5 justify-end">
      <span className='lg:hidden flex items-center flex-1 gap-x-2'>
        <Sheet
          trigger={<Menu/>}
          className="lg-hidden"
          side='left'
        > 

        <div className='flex gap-x-2 items-center p-5 justify-center'><LogoSmall/></div>
        <Items page={page} slug={slug}/>

        </Sheet>
      </span>

      <Search/>
      <CreateAutomation/>
      <Notification/>
    </div>
    
    <MainBreadCrumb 
      page={page === slug ? "Home" : page}
      slug={slug}
    />

  </div>
}

export default Infobar