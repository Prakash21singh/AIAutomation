"use client";

import { Star } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="mt-6 max-w-2xl text-lg">
            "Using this AI-driven messaging solution transformed our customer
            engagement overnight. The automated responses are intelligent and
            feel completely natural."
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-muted" />
            <div className="flex items-center gap-4">
              <div>
                <div className="font-semibold">Jane Smith</div>
                <div className="text-sm text-muted-foreground">VP Product</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
