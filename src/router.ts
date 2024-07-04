import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/page/Home.vue";
import Destination from "./components/page/Destination.vue";
import Crew from "./components/page/Crew.vue";
import Technology from "./components/page/Technology.vue";

const routes = [
	{ path: "/", component: Home },
	{ path: "/destination", component: Destination },
	{ path: "/crew", component: Crew },
	{ path: "/technology", component: Technology },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
