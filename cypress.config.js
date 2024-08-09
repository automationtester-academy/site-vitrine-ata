import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 800,
    baseUrl: "http://localhost:8080",
  },
});
