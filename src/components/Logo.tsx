import { cn } from "cn";
import { Sparkles } from "lucide-react";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <a
      href="#home"
      className={cn("inline-flex items-center gap-2.5 outline-none", className)}
      aria-label="Marketing AI home"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-md shadow-indigo-500/30">
        <Sparkles className="size-4 text-white" aria-hidden="true" />
      </span>
      <span
        className={cn(
          "font-semibold tracking-tight text-foreground",
          compact ? "text-base" : "text-lg",
        )}
      >
        Marketing AI
      </span>
    </a>
  );
}
