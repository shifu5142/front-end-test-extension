import { Bot, Lightbulb, ScanSearch, Zap } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "AI Marketing Assistant",
    description: "Get intelligent marketing assistance directly inside your browser.",
    icon: Bot,
  },
  {
    title: "Content Analysis",
    description: "Analyze websites and content to discover useful marketing insights.",
    icon: ScanSearch,
  },
  {
    title: "Smart Suggestions",
    description: "Receive AI-powered suggestions to improve your marketing.",
    icon: Lightbulb,
  },
  {
    title: "Faster Workflow",
    description: "Automate repetitive marketing tasks and save time.",
    icon: Zap,
  },
] as const;

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-24 border-t border-border/60 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-indigo-600">Features</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Everything you need, right in Chrome
          </h2>
          <p className="mt-3 text-muted-foreground">
            A focused set of AI tools designed for marketers who live in the browser.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-0 shadow-sm ring-border/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 hover:ring-indigo-400/30"
            >
              <CardHeader>
                <span className="mb-3 flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/10 text-indigo-600">
                  <feature.icon className="size-5" aria-hidden="true" />
                </span>
                <CardTitle className="text-base">{feature.title}</CardTitle>
                <CardDescription className="text-[13px] leading-6">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
