export const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Try Marketing AI on everyday browsing.",
    features: ["Basic AI features", "Limited usage", "Chrome Extension access"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "For marketers who want unlimited assistance.",
    features: [
      "Unlimited AI assistance",
      "Advanced marketing analysis",
      "More AI generations",
      "Premium features",
    ],
    cta: "Start Pro",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$49",
    description: "Advanced tools for growing teams.",
    features: [
      "Everything in Pro",
      "Higher usage limits",
      "Advanced marketing tools",
      "Business features",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
] as const;

export type PricingPlan = (typeof plans)[number];
