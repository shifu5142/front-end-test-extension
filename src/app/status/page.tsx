import type { Metadata } from "next";
import { StatusChecker } from "./status-checker";

export const metadata: Metadata = {
  title: "API status",
  description: "Check whether the backend API is available.",
};

export default function StatusPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 p-6">
      <StatusChecker />
    </main>
  );
}
