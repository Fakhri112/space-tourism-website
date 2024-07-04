<script setup lang="ts">
import { reactive, ref } from "vue";
import useWindowResize from "../../useWindowResize";
const { width } = useWindowResize();
const technologies = reactive([
	{
		name: "LAUNCH VEHICLE",
		images: {
			portrait: "/src/assets/technology/image-launch-vehicle-portrait.jpg",
			landscape: "/src/assets/technology/image-launch-vehicle-landscape.jpg",
		},
		description:
			"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
	},
	{
		name: "SPACEPORT",
		images: {
			portrait: "/src/assets/technology/image-spaceport-portrait.jpg",
			landscape: "/src/assets/technology/image-spaceport-landscape.jpg",
		},
		description:
			"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
	},
	{
		name: "SPACE CAPSULE",
		images: {
			portrait: "/src/assets/technology/image-space-capsule-portrait.jpg",
			landscape: "/src/assets/technology/image-space-capsule-landscape.jpg",
		},
		description:
			"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
	},
]);
const currentTechnology = ref(0);
const showContent = ref(true);
const toggleShow = (idx: number) => {
	showContent.value = false;
	setTimeout(() => {
		currentTechnology.value = idx;
		showContent.value = true;
	}, 500);
};
</script>

<template>
	<div class="flex flex-col justify-between lg:ps-40 mt-5 h-full w-full">
		<img
			:src="
				width > 768
					? '/src/assets/technology/background-technology-desktop.jpg'
					: width <= 768 && width > 640
					? '/src/assets/technology/background-technology-tablet.jpg'
					: width <= 640
					? '/src/assets/technology/background-technology-mobile.jpg'
					: ''
			"
			class="inset-0 absolute h-full w-full object-cover -z-10"
			alt="" />

		<p
			class="font-barlowCondensed text-xl px-5 sm:mb-0 mb-14 tracking-widest sm:text-start text-center">
			<span class="font-semibold me-2 opacity-30">03</span>
			SPACE LAUNCH 101
		</p>
		<div
			class="flex lg:flex-row flex-col gap-x-10 justify-center items-center w-full lg:h-full sm:mt-10 lg:mt-4">
			<div
				class="mt-5 lg:ps-4 sm:ps-0 lg:order-[unset] order-2 flex lg:flex-col flex-row gap-x-5">
				<button
					:class="[
						currentTechnology == 0 ? 'bg-white text-black font-semibold' : '',
					]"
					@click="toggleShow(0)"
					class="hover:bg-white hover:text-black hover:font-semibold sm:text-2xl text-xl font-bellefair sm:h-16 sm:w-16 h-10 w-10 border border-slate-400 mt-4 rounded-full">
					1
				</button>
				<button
					:class="[
						currentTechnology == 1 ? 'bg-white text-black font-semibold' : '',
					]"
					@click="toggleShow(1)"
					class="hover:bg-white hover:text-black hover:font-semibold sm:text-2xl text-xl font-bellefair sm:h-16 sm:w-16 h-10 w-10 border border-slate-400 mt-4 rounded-full">
					2
				</button>
				<button
					:class="[
						currentTechnology == 2 ? 'bg-white text-black font-semibold' : '',
					]"
					@click="toggleShow(2)"
					class="hover:bg-white hover:text-black hover:font-semibold sm:text-2xl text-xl font-bellefair sm:h-16 sm:w-16 h-10 w-10 border border-slate-400 mt-4 rounded-full">
					3
				</button>
			</div>
			<Transition :name="width >= 1024 ? 'text-lg' : 'text'">
				<div
					v-if="showContent"
					class="lg:order-[unset] order-3 lg:mt-0 mt-10 lg:w-auto sm:w-[77%] w-[90%] lg:text-start text-center lg:pb-0 pb-10">
					<h2 class="font-bellefair text-slate-400 text-2xl">
						THE TERIMINOLOGY
					</h2>
					<h1 class="font-bellefair text-3xl sm:text-5xl my-4">
						{{ technologies[currentTechnology].name }}
					</h1>
					<p
						class="font-barlow text-slate-400 text-center lg:text-justify lg:w-[90%] mt-5">
						{{ technologies[currentTechnology].description }}
					</p>
				</div>
			</Transition>
			<Transition name="image">
				<img
					v-if="showContent"
					class="object-contain lg:w-auto w-full lg:max-h-[360px]"
					:src="
						width >= 1024 || width <= 640
							? technologies[currentTechnology].images.portrait
							: width < 1024
							? technologies[currentTechnology].images.landscape
							: ''
					"
					alt="" />
			</Transition>
		</div>
	</div>
</template>

<style scoped>
.text-lg-enter-active {
	animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.text-lg-leave-active {
	animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) reverse;
}

.text-enter-active {
	animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.text-leave-active {
	animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) reverse;
}

.image-enter-active,
.image-leave-active {
	transition: opacity 0.5s ease;
}

.image-enter-from,
.image-leave-to {
	opacity: 0;
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
