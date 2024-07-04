<script setup lang="ts">
import { reactive, ref } from "vue";
import useWindowResize from "../../useWindowResize";
const { width } = useWindowResize();

const destinations = reactive([
	{
		name: "MOON",
		images: {
			png: "/src/assets/destination/image-moon.png",
			webp: "/src/assets/destination/image-moon.webp",
		},
		description:
			"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
		distance: "384,400 KM",
		travel: "3 DAYS",
	},
	{
		name: "MARS",
		images: {
			png: "/src/assets/destination/image-mars.png",
			webp: "/src/assets/destination/image-mars.webp",
		},
		description:
			"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
		distance: "225 MIL. KM",
		travel: "9 MONTHS",
	},
	{
		name: "EUROPA",
		images: {
			png: "/src/assets/destination/image-europa.png",
			webp: "/src/assets/destination/image-europa.webp",
		},
		description:
			"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
		distance: "628 MIL. KM",
		travel: "3 YEARS",
	},
	{
		name: "TITAN",
		images: {
			png: "/src/assets/destination/image-titan.png",
			webp: "/src/assets/destination/image-titan.webp",
		},
		description:
			"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
		distance: "1.6 BIL. KM",
		travel: "7 YEARS",
	},
]);
const currentDestination = ref(0);
const showContent = ref(true);
const toggleShow = (idx: number) => {
	showContent.value = false;
	setTimeout(() => {
		currentDestination.value = idx;
		showContent.value = true;
	}, 500);
};
</script>

<template>
	<div class="flex flex-col justify-between lg:px-40 px-5 mt-5 h-full w-full">
		<img
			:src="
				width >= 1024
					? '/src/assets/destination/background-destination-desktop.jpg'
					: width < 1024 && width > 640
					? '/src/assets/destination/background-destination-tablet.jpg'
					: width <= 640
					? '/src/assets/destination/background-destination-mobile.jpg'
					: ''
			"
			class="inset-0 absolute h-full w-full -z-10"
			alt="" />
		<p
			class="font-barlowCondensed text-xl sm:mb-0 mb-14 tracking-widest sm:text-start text-center">
			<span class="font-semibold me-2 opacity-30">01</span>
			PICK YOUR DESTINATION
		</p>
		<div
			class="flex lg:flex-row flex-col gap-x-20 justify-center items-center mt-4 sm:mt-14 lg:mt-4 h-full w-full">
			<Transition name="image">
				<img
					v-if="showContent"
					class="lg:h-[25vw] h-full min-h-[200px] sm:h-[32vw] object-contain"
					:src="destinations[currentDestination].images.webp"
					alt="" />
			</Transition>
			<div
				class="lg:w-[50%] w-[95%] sm:w-[80%] lg:mt-0 mt-12 flex flex-col lg:items-start items-center">
				<ul class="flex gap-x-5 font-barlowCondensed tracking-widest">
					<li
						class="py-2 cursor-pointer"
						:class="[currentDestination == 0 ? ' border-0 border-b-2' : '']"
						@click="toggleShow(0)">
						MOON
					</li>
					<li
						class="py-2 cursor-pointer"
						:class="[currentDestination == 1 ? ' border-0 border-b-2' : '']"
						@click="toggleShow(1)">
						MARS
					</li>
					<li
						class="py-2 cursor-pointer"
						:class="[currentDestination == 2 ? ' border-0 border-b-2' : '']"
						@click="toggleShow(2)">
						EUROPE
					</li>
					<li
						class="py-2 cursor-pointer"
						:class="[currentDestination == 3 ? ' border-0 border-b-2' : '']"
						@click="toggleShow(3)">
						TITAN
					</li>
				</ul>
				<Transition name="text">
					<div v-if="showContent">
						<h1
							class="font-bellefair text-5xl lg:text-start text-center sm:text-7xl my-5">
							{{ destinations[currentDestination].name }}
						</h1>
						<p class="text-center lg:text-justify font-barlow text-slate-400">
							{{ destinations[currentDestination].description }}
						</p>
						<hr class="my-6 border-slate-600 w-full" />
						<div
							class="flex flex-col gap-y-6 sm:flex-row sm:justify-between lg:mb-0 mb-7 w-full">
							<div class="text-center lg:text-start">
								<p class="font-barlowCondensed tracking-widest text-slate-400">
									AVG. DISTANCE
								</p>
								<h2 class="font-bellefair text-2xl">
									{{ destinations[currentDestination].distance }}
								</h2>
							</div>
							<div class="text-center lg:text-start">
								<p class="font-barlowCondensed tracking-widest text-slate-400">
									EST. TRAVEL TIME
								</p>
								<h2 class="font-bellefair text-2xl">
									{{ destinations[currentDestination].travel }}
								</h2>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		</div>
	</div>
</template>

<style scoped>
.text-enter-active {
	animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.text-leave-active {
	animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) reverse;
}

.image-enter-active {
	animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.image-leave-active {
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
</style>
