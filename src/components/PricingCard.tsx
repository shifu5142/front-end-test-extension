import { cn } from "cn";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PricingPlan } from "@/lib/plans";

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <Card
      className={cn(
        "h-full border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        plan.highlighted
          ? "bg-gradient-to-b from-indigo-600 to-violet-700 text-white shadow-xl shadow-indigo-500/30 ring-0 hover:shadow-indigo-500/40"
          : "ring-border/80 hover:shadow-indigo-500/10",
      )}
    >
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className={cn("text-lg", plan.highlighted && "text-white")}>
            {plan.name}
          </CardTitle>
          {plan.highlighted ? (
            <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-medium text-white">
              Most popular
            </span>
          ) : null}
        </div>
        <p
          className={cn(
            "mt-3 text-4xl font-semibold tracking-tight",
            plan.highlighted && "text-white",
          )}
        >
          {plan.price}
          <span
            className={cn(
              "ml-1 text-base font-medium",
              plan.highlighted ? "text-indigo-100" : "text-muted-foreground",
            )}
          >
            /month
          </span>
        </p>
        <CardDescription className={cn(plan.highlighted && "text-indigo-100")}>
          {plan.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <span
                className={cn(
                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                  plan.highlighted
                    ? "bg-white/15 text-white"
                    : "bg-indigo-50 text-indigo-600",
                )}
              >
                <Check className="size-3" aria-hidden="true" />
              </span>
              <span
                className={cn(plan.highlighted ? "text-indigo-50" : "text-muted-foreground")}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter
        className={cn("mt-auto border-0 bg-transparent", plan.highlighted && "bg-transparent")}
      >
        <Button
          type="button"
          variant={plan.highlighted ? "secondary" : "outline"}
          className={cn(
            "h-10 w-full rounded-full",
            plan.highlighted && "bg-white text-indigo-700 hover:bg-indigo-50",
          )}
        >
          {plan.cta}
        </Button>
      </CardFooter>
    </Card>
  );
}
