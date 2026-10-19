import { cn } from "cn";
import { ArrowRight, Puzzle } from "lucide-react";
import { ExtensionMockup } from "@/components/ExtensionMockup";
import { Button, buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.92_0.06_277),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-24 -left-24 size-[28rem] rounded-full bg-violet-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 right-0 size-[22rem] rounded-full bg-cyan-300/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.91_0.02_277)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.91_0.02_277)_1px,transparent_1px)] bg-[length:72px_72px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur-sm">
            <Puzzle className="size-3.5" aria-hidden="true" />
            Chrome Extension for marketers
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            AI That Makes{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Marketing Easier
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Turn your browser into a powerful AI marketing assistant. Generate ideas, analyze
            content, and improve your marketing workflow directly from Chrome.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              type="button"
              className="h-11 rounded-full px-6 text-sm shadow-lg shadow-indigo-500/25"
            >
              Get Started
              <ArrowRight data-icon="inline-end" />
            </Button>
            <a
              href="#how-it-works"
              aria-label="Learn more about how Marketing AI works"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-11 rounded-full px-6 text-sm",
              )}
            >
              Learn More
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Frontend preview · Account and billing coming soon
          </p>
        </div>

        <ExtensionMockup />
      </div>
    </section>
  );
}
