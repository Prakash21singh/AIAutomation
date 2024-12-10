"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NavBar() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Tage</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between space-x-6">
          <div className="flex gap-6">
            <Link href="#features" className="text-sm font-medium">
              Features
            </Link>
            <Link href="#solutions" className="text-sm font-medium">
              Solutions
            </Link>
            <Link href="#pricing" className="text-sm font-medium">
              Pricing
            </Link>
          </div>
          <Button>
            <Link href={"/dashboard"}>Log In</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
