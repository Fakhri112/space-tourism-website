import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/page/Home.vue";
import Destination from "./components/page/Destination.vue";
import Crew from "./components/page/Crew.vue";
import Technology from "./components/page/Technology.vue";

const routes = [
	{ path: "/space-tourism-website", component: Home },
	{ path: "/space-tourism-website/destination", component: Destination },
	{ path: "/space-tourism-website/crew", component: Crew },
	{ path: "/space-tourism-website/technology", component: Technology },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
