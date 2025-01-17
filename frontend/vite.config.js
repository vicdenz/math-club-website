import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	let backendUrl;
	if (mode === "production") {
		backendUrl = "https://www.rhhsmathclub.com";
	} else if (mode === "development") {
		backendUrl = "http://127.0.0.1:8000";
	}

	return {
		base: "/static/",
		plugins: [react()],
		server: {
			port: 3000,
		},
		resolve: {
			alias: {
				src: "/src",
				components: "/src/components",
				context: "/src/context",
				pages: "/src/pages",
				utils: "/src/utils",
			},
		},
		define: {
			"process.env.BACKEND_URL": JSON.stringify(backendUrl),
		},
	};
});
