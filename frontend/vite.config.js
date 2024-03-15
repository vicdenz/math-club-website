import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},
	base: "/static",
	resolve: {
		alias: {
			src: "/src",
			components: "/src/components",
			context: "/src/context",
			pages: "/src/pages",
			utils: "/src/utils",
		},
	},
});
