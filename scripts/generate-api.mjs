import { spawnSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const schemaUrl = process.env.OPENAPI_SCHEMA_URL ?? "http://localhost:5000/docs-json";
const outputPath = resolve("src/lib/api/schema.d.ts");

mkdirSync(dirname(outputPath), { recursive: true });

const result = spawnSync(
  process.execPath,
  ["x", "openapi-typescript", schemaUrl, "--output", outputPath],
  { stdio: "inherit" },
);

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
