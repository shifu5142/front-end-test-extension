"use client";

import { useCallback, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { apiBaseUrl, apiClient } from "@/lib/api/client";

type ApiState =
  | { kind: "loading" }
  | { kind: "connected"; timestamp: string }
  | { kind: "unavailable" };

const labels: Record<ApiState["kind"], string> = {
  connected: "Connected",
  loading: "Loading",
  unavailable: "Unavailable",
};

export function StatusChecker() {
  const [state, setState] = useState<ApiState>({ kind: "loading" });

  const checkApi = useCallback(async (signal?: AbortSignal) => {
    setState({ kind: "loading" });

    try {
      const { data, response } = await apiClient.GET("/api/v1/health", {
        signal,
      });

      if (!response.ok || data?.status !== "ok") {
        throw new Error("API health check failed");
      }

      setState({ kind: "connected", timestamp: data.timestamp });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      setState({ kind: "unavailable" });
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    void checkApi(controller.signal);

    return () => controller.abort();
  }, [checkApi]);

  const badgeVariant =
    state.kind === "connected"
      ? "default"
      : state.kind === "unavailable"
        ? "destructive"
        : "secondary";

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>API status</CardTitle>
        <CardDescription>Connection to the NestJS backend.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-muted-foreground">Current state</span>
          <Badge variant={badgeVariant}>{labels[state.kind]}</Badge>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium">API URL</p>
          <code className="block overflow-x-auto rounded-md bg-muted px-3 py-2 text-xs">
            {apiBaseUrl}
          </code>
        </div>
        {state.kind === "connected" && (
          <p className="text-xs text-muted-foreground">
            Backend time: {new Date(state.timestamp).toLocaleString()}
          </p>
        )}
        {state.kind === "unavailable" && (
          <p className="text-sm text-destructive">
            The API did not respond. Make sure the backend is running on port 5000.
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button disabled={state.kind === "loading"} onClick={() => void checkApi()}>
          Check again
        </Button>
      </CardFooter>
    </Card>
  );
}
