<script setup lang="ts">
defineProps({
	path: String,
});

defineEmits(["toggleNav"]);
</script>

<template>
	<nav
		class="relative z-20 flex items-center gap-x-6 py-5 sm:py-0 lg:py-5 justify-between">
		<RouterLink to="/space-tourism-website/">
			<div class="flex items-center w-full">
				<img
					src="../../assets/shared/logo.svg"
					class="md:w-10 w-7 ms-6 lg:ms-10 lg:me-10"
					alt="" />
			</div>
		</RouterLink>
		<button class="block sm:hidden" @click="$emit('toggleNav', true)">
			<img src="../../assets/shared/icon-hamburger.svg" class="me-7" alt="" />
		</button>
		<ul
			class="hidden sm:flex backdrop-blur-2xl items-center relative justify-around font-extralight gap-x-6 font-barlowCondensed bg-slate-700 bg-opacity-30 ms-2 sm:w-[90%] lg:w-[55%]">
			<li class="sm:py-0 lg:py-5 hidden lg:block">
				<hr class="border-slate-700 w-[68%] absolute left-[-65%]" />
			</li>
			<li
				:class="[
					path == '/space-tourism-website/' ? 'border border-0 border-b-2' : '',
				]"
				class="py-5">
				<RouterLink to="/space-tourism-website/">
					<b class="text-white font-bold me-1">00</b> HOME
				</RouterLink>
			</li>
			<li
				:class="[
					path == '/space-tourism-website/destination'
						? 'border border-0 border-b-2'
						: '',
				]"
				class="py-5">
				<RouterLink to="/space-tourism-website/destination">
					<b class="text-white font-bold me-1">01</b> DESTINATION
				</RouterLink>
			</li>
			<RouterLink to="/space-tourism-website/crew">
				<li
					:class="[
						path == '/space-tourism-website/crew'
							? 'border border-0 border-b-2'
							: '',
					]"
					class="py-5">
					<b class="text-white font-bold me-1">02</b> CREW
				</li>
			</RouterLink>
			<RouterLink to="/space-tourism-website/technology">
				<li
					:class="[
						path == '/space-tourism-website/technology'
							? 'border border-0 border-b-2'
							: '',
					]"
					class="py-5">
					<b class="text-white font-bold me-1">03</b> TECHNOLOGY
				</li>
			</RouterLink>
		</ul>
	</nav>
</template>
