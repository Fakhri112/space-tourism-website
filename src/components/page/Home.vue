<script setup lang="ts">
import useWindowResize from "../../useWindowResize";
import imgDskt from "../../assets/home/background-home-desktop.jpg";
import imgTblt from "../../assets/home/background-home-tablet.jpg";
import imgMbl from "../../assets/home/background-home-mobile.jpg";

const { width } = useWindowResize();
</script>

<template>
	<div
		class="mt-16 flex lg:flex-row flex-col items-center justify-center lg:justify-between px-9 sm:px-40 mb-10">
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
			class="inset-0 absolute h-screen w-full -z-10"
			alt="" />
		<div class="w-full lg:w-[70%] w-full lg:text-start text-center">
			<p class="font-barlowCondensed tracking-widest font-thin">
				SO, YOU WANT TO TRAVEL TO
			</p>
			<h1 class="font-bellefair text-7xl sm:text-8xl -ms-1 my-5">SPACE</h1>
			<p
				class="font-barlow w-full lg:w-[70%] text-slate-400 text-center lg:text-justify">
				Let’s face it; if you want to go to space, you might as well genuinely
				go to outer space and not hover kind of on the edge of it. Well sit
				back, and relax because we’ll give you a truly out of this world
				experience!
			</p>
		</div>
		<RouterLink to="/space-tourism-website/destination">
			<div
				class="cursor-pointer rounded-full relative grid place-items-center w-80 h-80">
				<div
					class="absolute rounded-full h-full w-full transition-all hover:bg-white hover:bg-opacity-20 z-10"></div>
				<div
					class="absolute bg-white text-slate-900 font-bellefair text-4xl w-52 h-52 rounded-full grid place-items-center">
					Explore
				</div>
			</div>
		</RouterLink>
	</div>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
