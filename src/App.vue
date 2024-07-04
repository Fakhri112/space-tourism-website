<script setup lang="ts">
import TopNav from "./components/navigation/TopNav.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
import SideNav from "./components/navigation/SideNav.vue";
const toggleNav = ref(false);

const location = useRouter();
</script>

<template>
	<div class="h-screen overflow-y-auto flex flex-col justify-between">
		<SideNav
			:path="location.currentRoute.value.fullPath"
			:toggle-nav="toggleNav"
			@toggle-nav="(data) => (toggleNav = data)" />
		<TopNav
			:path="location.currentRoute.value.fullPath"
			@toggle-nav="(data) => (toggleNav = data)" />

		<RouterView v-slot="{ Component }">
			<Transition mode="out-in">
				<component :is="Component" />
			</Transition>
		</RouterView>
	</div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: all 0.2s ease-in;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
