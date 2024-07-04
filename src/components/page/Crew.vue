<script setup lang="ts">
import { reactive, ref } from "vue";
import useWindowResize from "../../useWindowResize";
const { width } = useWindowResize();
const crews = reactive([
	{
		name: "DOUGLAS HURLEY",
		images: {
			png: "/src/assets/crew/image-douglas-hurley.png",
			webp: "/src/assets/crew/image-douglas-hurley.webp",
		},
		role: "COMMANDER",
		bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
	},
	{
		name: "MARK SHUTTLEWORTH",
		images: {
			png: "/src/assets/crew/image-mark-shuttleworth.png",
			webp: "/src/assets/crew/image-mark-shuttleworth.webp",
		},
		role: "MISSION SPECIALIST",
		bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
	},
	{
		name: "VICTOR GLOVER",
		images: {
			png: "/src/assets/crew/image-victor-glover.png",
			webp: "/src/assets/crew/image-victor-glover.webp",
		},
		role: "PILOT",
		bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
	},
	{
		name: "ANOUSHEH ANSARI",
		images: {
			png: "/src/assets/crew/image-anousheh-ansari.png",
			webp: "/src/assets/crew/image-anousheh-ansari.webp",
		},
		role: "FLIGHT ENGINEER",
		bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
	},
]);
const currentCrew = ref(0);
const showContent = ref(true);
const toggleShow = (idx: number) => {
	showContent.value = false;
	setTimeout(() => {
		currentCrew.value = idx;
		showContent.value = true;
	}, 500);
};
</script>

<template>
	<div class="flex flex-col justify-between lg:px-40 px-5 mt-5 h-full w-full">
		<img
			:src="
				width >= 1024
					? '/src/assets/crew/background-crew-desktop.jpg'
					: width < 1024 && width > 640
					? '/src/assets/crew/background-crew-tablet.jpg'
					: width <= 640
					? '/src/assets/crew/background-crew-mobile.jpg'
					: ''
			"
			class="inset-0 absolute h-full w-full object-cover -z-10 brightness-75"
			alt="" />
		<p
			class="font-barlowCondensed text-xl tracking-widest sm:text-start text-center">
			<span class="font-semibold me-2 opacity-30">02</span>
			MEET YOUR CREW
		</p>
		<div
			class="flex mt-24 sm:mt-16 lg:mt-0 lg:flex-row flex-col items-center lg:items-stretch gap-x-10 justify-center h-full w-full">
			<div class="flex-col flex justify-between py-14">
				<div class="invisible">You found me. Congratulation 😁</div>
				<Transition :name="width >= 1024 ? 'text-lg' : 'text'">
					<div
						class="w-full flex flex-col lg:items-start items-center"
						v-if="showContent">
						<h2 class="font-bellefair text-slate-400 text-xl sm:text-2xl">
							{{ crews[currentCrew].role }}
						</h2>
						<h1 class="font-bellefair text-2xl sm:text-5xl lg:my-3 my-2">
							{{ crews[currentCrew].name }}
						</h1>
						<p
							class="font-barlow text-slate-400 text-center lg:w-auto w-auto sm:w-[80%] lg:text-justify sm:mt-0 mt-5">
							{{ crews[currentCrew].bio }}
						</p>
					</div>
				</Transition>
				<div class="flex mt-9 lg:justify-start justify-center gap-x-5">
					<button
						:class="[currentCrew == 0 ? 'bg-white' : 'bg-slate-700']"
						class="w-3 h-3 rounded-full"
						@click="toggleShow(0)"></button>
					<button
						:class="[currentCrew == 1 ? 'bg-white' : 'bg-slate-700']"
						class="w-3 h-3 rounded-full"
						@click="toggleShow(1)"></button>
					<button
						:class="[currentCrew == 2 ? 'bg-white' : 'bg-slate-700']"
						class="w-3 h-3 rounded-full"
						@click="toggleShow(2)"></button>
					<button
						:class="[currentCrew == 3 ? 'bg-white' : 'bg-slate-700']"
						class="w-3 h-3 rounded-full"
						@click="toggleShow(3)"></button>
				</div>
			</div>
			<Transition :name="width >= 1024 ? 'image-lg' : 'image'">
				<div
					v-if="showContent"
					class="relative w-[90vw] grid place-items-center">
					<img
						class="h-[70vh] object-contain"
						:src="crews[currentCrew].images.png"
						alt="" />
					<div
						class="w-[88%] z-20 h-[30%] mb-5 faded-border -bottom-5 bg-black absolute"></div>
				</div>
			</Transition>
		</div>
	</div>
</template>

<style scoped>
.text-lg-enter-active {
	animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.text-lg-leave-active {
	animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) reverse;
}

.image-lg-enter-active {
	animation: fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.image-lg-leave-active {
	animation: fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) reverse;
}

.image-enter-active {
	animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.image-leave-active {
	animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) reverse;
}

.text-enter-active {
	animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.text-leave-active {
	animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) reverse;
}

@keyframes fade-in-top {
	0% {
		-webkit-transform: translateY(-50px);
		transform: translateY(-50px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
		opacity: 1;
	}
}

@keyframes fade-in-left {
	0% {
		-webkit-transform: translateX(-50px);
		transform: translateX(-50px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateX(0);
		transform: translateX(0);
		opacity: 1;
	}
}

@keyframes fade-in-right {
	0% {
		-webkit-transform: translateX(50px);
		transform: translateX(50px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateX(0);
		transform: translateX(0);
		opacity: 1;
	}
}

.faded-border {
	background: rgb(8, 10, 17);
	background: linear-gradient(
		180deg,
		rgba(51, 51, 51, 0.2777485994397759) 0%,
		rgba(255, 255, 255, 0) 0%,
		rgb(8, 10, 17) 70%,
		rgb(8, 10, 17, 1) 100%
	);
}
</style>
