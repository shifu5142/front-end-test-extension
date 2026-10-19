import createClient from "openapi-fetch";
import { publicEnvironment } from "@/lib/env";
import type { paths } from "./schema";

export const apiBaseUrl = publicEnvironment.NEXT_PUBLIC_API_URL;

export const apiClient = createClient<paths>({
  baseUrl: apiBaseUrl,
});
