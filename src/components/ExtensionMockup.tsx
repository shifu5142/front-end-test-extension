import {
  BarChart3 as BarChart3Icon,
  Lock as LockIcon,
  Send as SendIcon,
  Sparkles as SparklesIcon,
  WandSparkles as WandSparklesIcon,
} from "lucide-react";

export function ExtensionMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-none">
      <div
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-indigo-500/35 via-violet-400/20 to-cyan-400/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        role="img"
        aria-label="Chrome window mockup of the Marketing AI assistant popup analyzing a page, with suggestions and a generate action"
        className="animate-float relative overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_24px_80px_-20px_rgba(79,70,229,0.45)] ring-1 ring-indigo-500/10"
      >
        <div className="flex items-center gap-3 border-b border-zinc-200/80 bg-zinc-100 px-3 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-1.5">
            <span className="hidden truncate rounded-t-md bg-white px-3 py-1 text-[11px] font-medium text-zinc-700 shadow-sm sm:inline">
              Product Launch — Acme
            </span>
            <span className="hidden truncate rounded-t-md px-3 py-1 text-[11px] text-zinc-500 sm:inline">
              Competitor Blog
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-3 py-2">
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[11px] text-zinc-500">
            <span className="flex size-3.5 shrink-0 items-center justify-center text-emerald-600">
              <LockIcon className="size-2.5" aria-hidden="true" />
            </span>
            <span className="truncate">
              https://acme.com/campaigns/spring-launch
            </span>
          </div>
          <div className="relative flex size-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/40">
            <SparklesIcon className="size-3.5" aria-hidden="true" />
            <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-emerald-400 ring-2 ring-white" />
          </div>
        </div>

        <div className="relative grid min-h-[340px] bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] p-4 sm:min-h-[380px] sm:p-5">
          <div
            className="pointer-events-none max-w-[58%] space-y-3 opacity-70"
            aria-hidden="true"
          >
            <div className="h-3 w-24 rounded-full bg-indigo-200/80" />
            <div className="h-7 w-4/5 rounded-lg bg-zinc-200/90" />
            <div className="space-y-2">
              <div className="h-2.5 w-full rounded-full bg-zinc-200/80" />
              <div className="h-2.5 w-11/12 rounded-full bg-zinc-200/70" />
              <div className="h-2.5 w-4/5 rounded-full bg-zinc-200/60" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-16 rounded-xl bg-white/80 ring-1 ring-zinc-200/80" />
              <div className="h-16 rounded-xl bg-white/80 ring-1 ring-zinc-200/80" />
            </div>
          </div>

          <aside className="absolute top-3 right-3 bottom-3 flex w-[min(100%,280px)] flex-col overflow-hidden rounded-xl border border-indigo-100 bg-white shadow-2xl shadow-indigo-500/20 sm:w-[270px]">
            <div className="flex items-center justify-between border-b border-indigo-50 bg-gradient-to-r from-indigo-50 to-violet-50 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                  <WandSparklesIcon className="size-3.5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-zinc-900">
                    AI Assistant
                  </p>
                  <p className="text-[10px] text-indigo-600">
                    Analyzing this page
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                Live
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-2.5 overflow-hidden p-3">
              <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-2.5">
                <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                  <BarChart3Icon className="size-3" aria-hidden="true" />
                  Page analysis
                </div>
                <p className="text-[11px] leading-relaxed text-zinc-700">
                  Strong headline, weak CTA. Traffic intent: product launch +
                  conversion.
                </p>
                <div className="mt-2 flex gap-1.5">
                  <span className="rounded-md bg-indigo-50 px-1.5 py-0.5 text-[10px] font-medium text-indigo-700">
                    Intent 86%
                  </span>
                  <span className="rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-medium text-amber-700">
                    CTA 42%
                  </span>
                </div>
              </div>

              <div>
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                  Marketing suggestions
                </p>
                <ul className="space-y-1.5">
                  <li className="rounded-md bg-white px-2 py-1.5 text-[11px] text-zinc-700 ring-1 ring-zinc-100">
                    Rewrite CTA around a 7-day trial
                  </li>
                  <li className="rounded-md bg-white px-2 py-1.5 text-[11px] text-zinc-700 ring-1 ring-zinc-100">
                    Add social proof near the hero
                  </li>
                </ul>
              </div>

              <div className="mt-auto space-y-2">
                <div className="rounded-lg bg-indigo-50 px-2.5 py-2 text-[11px] leading-relaxed text-indigo-950">
                  I can generate 3 campaign angles from this page. Ready when
                  you are.
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex-1 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-[11px] text-zinc-400">
                    Ask the assistant...
                  </div>
                  <span className="flex size-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500">
                    <SendIcon className="size-3.5" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 py-2 text-[12px] font-semibold text-white shadow-sm">
                  <SparklesIcon className="size-3.5" aria-hidden="true" />
                  Generate
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
