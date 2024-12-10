import { SIDEBAR_MENU } from '@/constants/menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

type Props = {
  page:string;
  slug:string;
}

function Items({
  page,
  slug
}: Props) {
  return SIDEBAR_MENU.map((menu) => (
    <Link href={`/dashboard/${slug}/${menu.label === "home" ? "/" : menu.label}`} id={menu.id}
    className={cn(
      "capitalize flex gap-x-2 rounded-full p-3",
      page === menu.label && "bg-[#0f0f0f]",
      page === slug && menu.label === "home" ?'bg-[#0f0f0f]':'text-[#9B9CA0]'
    )
    }
    >
      {menu.icon}
      {menu.label}
    </Link>
  ))
}

export default Items