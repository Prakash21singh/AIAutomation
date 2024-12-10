"use client";

import { CircleIcon } from "lucide-react";

export function Solution() {
  return (
    <section className="py-16 bg-muted/50" id="solutions">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Tailored Solutions for Every Industry
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          Discover how AI-driven Instagram DMs transform your business. Perfect
          vertical solutions across industries.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "E-commerce: Boost Your Sales Effortlessly",
            "Creators: Engage Your Audience Like Never Before",
            "Agencies: Streamline Client Communication Efficiently",
            "More Industries",
          ].map((title, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <CircleIcon className="h-12 w-12" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Streamline your workflow and boost engagement with our AI
                solutions.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
