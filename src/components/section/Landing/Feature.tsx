"use client";

import { CircleIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Feature() {
  return (
    <section className="py-16" id="features">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Why Choose Our AI-Powered Solutions?
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <CircleIcon className="h-12 w-12" />
                <h3 className="mt-4 font-semibold">Short heading here</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
