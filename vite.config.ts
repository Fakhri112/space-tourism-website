import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://fakhri112.github.io/space-tourism-website/",
	plugins: [vue()],
});
