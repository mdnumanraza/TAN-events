
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import csp from 'vite-plugin-csp';


export default ({ mode }) => {
  return defineConfig({
    plugins: [
      react(),
      csp({
        policies: {
          'script-src': ["'self'", "'wasm-unsafe-eval'", "'inline-speculation-rules'"]
        }
      }),
    ],
  });
};

