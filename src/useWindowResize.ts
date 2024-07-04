import { ref, onMounted, onUnmounted } from "vue";

export default function useWindowResize() {
	const width = ref<number>(window.innerWidth);
	const height = ref<number>(window.innerHeight);

	function handler() {
		width.value = window.innerWidth;
		height.value = window.innerHeight;
	}

	onMounted(() => window.addEventListener("resize", handler));
	onUnmounted(() => window.removeEventListener("resize", handler));

	return { width, height };
}
