import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "node",
    globals: true,
    setupFiles: ["./src/__tests__/setup.ts"],
    // Allow tests to import ESM-only packages without issue
    server: {
      deps: {
        inline: ["next-auth", "@auth/prisma-adapter"],
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Stub next/server for Vitest (it's only needed at runtime in Next.js)
      "next/server": path.resolve(
        __dirname,
        "./src/__tests__/__mocks__/next-server.ts"
      ),
    },
  },
});
