"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      price: "$19/mo",
      features: [
        "Basic message templates",
        "Up to 100 messages",
        "24/7 customer support",
      ],
    },
    {
      name: "Business Plan",
      price: "$29/mo",
      features: [
        "Advanced analytics",
        "Unlimited messages",
        "Priority support",
        "Custom templates",
      ],
    },
  ];

  return (
    <section className="py-16" id="pricing">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Pricing Plans
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          Choose the plan that best fits your needs
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan, i) => (
            <Card key={i} className={i === 1 ? "border-primary" : ""}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <p className="text-3xl font-bold">{plan.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={i === 1 ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
