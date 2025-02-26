import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import dependencies from "./package.json";

export default defineConfig({
  build: {
    target: 'chrome89',
  },
  plugins: [
    react(),
    federation({
      name: "chat",
      filename: "remoteEntry.js",
      exposes: {
        "./ChatApp": "./src/ChatApp.jsx",
      },
      remotes: {
        head_wrapper: {
					type: 'module',
					name: 'head_wrapper',
					entry: 'http://localhost:5000/remoteEntry.js',
					entryGlobalName: 'head_wrapper',
					shareScope: 'default',
				},
      },

      shared: {
					react: {
						requiredVersion: dependencies.react,
						singleton: true,
					},
				},
    }),
  ],
  server: {
    port: 5001,
  },
  
});
