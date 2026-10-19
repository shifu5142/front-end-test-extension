import { Compass, Download, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install",
    description: "Install the Marketing AI Chrome Extension.",
    icon: Download,
  },
  {
    number: "02",
    title: "Browse",
    description: "Continue browsing normally and open the extension whenever you need help.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Generate",
    description:
      "Let AI analyze the content and generate useful marketing insights and suggestions.",
    icon: Sparkles,
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-t border-border/60 bg-[linear-gradient(180deg,oklch(0.985_0.01_277),white)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-indigo-600">How It Works</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Up and running in three steps
          </h2>
          <p className="mt-3 text-muted-foreground">
            Stay in your browsing flow. The assistant meets you on the page.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div
            className="pointer-events-none absolute top-[3.25rem] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent lg:block"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-border/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/30">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-2xl font-semibold text-indigo-200">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">
                {step.number} — {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
