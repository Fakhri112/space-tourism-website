<script setup lang="ts">
import { ref } from "vue";
import useWindowResize from "../../useWindowResize";
import { crews } from "../../data/crew-data";
import imgDskt from "../../assets/crew/background-crew-desktop.jpg";
import imgTblt from "../../assets/crew/background-crew-tablet.jpg";
import imgMbl from "../../assets/crew/background-crew-mobile.jpg";

const { width } = useWindowResize();
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
					? imgDskt
					: width < 1024 && width > 640
					? imgTblt
					: width <= 640
					? imgMbl
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
