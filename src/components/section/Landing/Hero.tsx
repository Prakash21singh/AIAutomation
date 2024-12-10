"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-20 pb-16">
      <div className="container flex flex-col items-center text-center">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Revolutionizing Digital Messaging: AI in Social Media
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Transform your Social Media DM experience with AI-powered automation.
          Boost engagement and streamline communication.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
        <div />
        <Image
          className="mt-16 aspect-video w-full max-w-4xl rounded-lg bg-muted object-cover"
          src="/images/hero3.webp"
          alt="Hero"
          width={900}
          height={900}
        />
      </div>
    </section>
  );
}
