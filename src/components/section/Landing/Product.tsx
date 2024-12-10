"use client";
import { Button } from "@/components/ui/button";

export function Product() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Experience Real-Time AI Messaging Magic
              </h2>
              <p className="text-lg text-muted-foreground">
                Take your conversations to the next level with our AI-powered
                smart responses and automated engagement features.
              </p>
              <div className="flex gap-4">
                <Button>Try Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="aspect-video rounded-lg bg-muted" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 flex flex-col justify-center space-y-4 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight">
                Unlock Insights: Your Engagement Dashboard for AI-Driven
                Messaging Success
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold">Engagement Trends</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor and analyze your messaging performance
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Success Rates</h3>
                  <p className="text-sm text-muted-foreground">
                    Track conversion and response metrics in real-time
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 aspect-video rounded-lg bg-muted lg:order-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
