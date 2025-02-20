import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {federation} from "@module-federation/vite";
import { dependencies } from "./package.json";

export default defineConfig({
  build: {
		target: 'chrome89',
	},
  plugins: [
    react(),
    federation({
      name: "head_wrapper",
      remotes: {
        chat: {
					type: 'module',
					name: 'chat',
					entry: 'http://localhost:5001/remoteEntry.js',
					entryGlobalName: 'chat',
					shareScope: 'default',
				},
        email: {
					type: 'module',
					name: 'email',
					entry: 'http://localhost:5002/remoteEntry.js',
					entryGlobalName: 'email',
					shareScope: 'default',
				},
      },
      exposes: {
        './design-system': './design-system/index.js',
        './shared-components': './shared-components/index.js',
      },
      filename: "remoteEntry.js",
      shared: {
				react: {
					requiredVersion: dependencies.react,
					singleton: true,
				},
			},
    }),
  ],
  server: {
    port: 5000,
  },
});
