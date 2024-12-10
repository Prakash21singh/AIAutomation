"use client"
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePaths } from '@/hooks/use-path'
import { Menu } from 'lucide-react'
import React from 'react'
import Sheet from '../sheet'
import Items from '../sidebar/items'

type Props = {
    slug:string
}

function Navbar({slug}: Props) {
    const {page} = usePaths()
    const currentPage =  PAGE_BREAD_CRUMBS.includes(page) || page == slug

  return currentPage && <div className='flex flex-col'>
    <div className="flex gap-x-3 lg:gap-x-5 justify-end">
      <span className='lg:hidden flex items-center flex-1 gap-x-2'>
        <Sheet
          trigger={<Menu/>}
          className="lg-hidden"
        >
            <Items page={page} slug={slug}/>
        </Sheet>
      </span>
    </div>
  </div>
}

export default Navbar