import { PricingCard } from "@/components/PricingCard";
import { plans } from "@/lib/plans";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-t border-border/60 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-indigo-600">Pricing</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Simple plans that scale with you
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start free, then upgrade when you need more AI power. Payments coming later.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
