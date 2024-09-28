import { resolve } from "path";
import { defineConfig } from "vite";
import { Script } from "vm";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				script: resolve(__dirname, "js/script.js")
			},
		},
	},
});