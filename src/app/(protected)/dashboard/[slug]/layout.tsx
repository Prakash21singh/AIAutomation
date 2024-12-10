import Infobar from '@/components/global/infobar';
import Sidebar from '@/components/global/sidebar';
import React from 'react'

type Props = {
    children:React.ReactNode;
    params:{slug : string}
}

function Layout({
    children,
    params
}: Props) {

// Query Client
// WIP: Query Client fetch data

  return (
    <div className='p-3'>
        {/* Sidebar */}
        <Sidebar slug={params.slug}/>
        {/* Infobar */}
        <div className='
          lg:ml-[250px]
          lg:pl-10
          lg-py-5 
          flex 
          flex-col 
          overflow-auto'
        >
          <Infobar slug={params.slug}/>
          {children}
        </div>
    </div>
  )
}

export default Layout