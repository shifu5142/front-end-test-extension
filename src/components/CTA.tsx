import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-14 text-center text-white shadow-2xl shadow-indigo-500/30 sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute -top-16 left-10 size-48 rounded-full bg-white/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-10 -bottom-20 size-64 rounded-full bg-cyan-300/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Ready to Make Your Marketing Smarter?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-indigo-50 sm:text-base">
            Use AI directly inside your browser and take your marketing workflow to the next level.
          </p>
          <Button
            type="button"
            variant="secondary"
            className="mt-8 h-11 rounded-full bg-white px-7 text-indigo-700 shadow-lg hover:bg-indigo-50"
          >
            Get Started
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  );
}
