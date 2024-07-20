<script setup lang="ts">
defineProps({
	toggleNav: Boolean,
	path: String,
});

defineEmits(["toggleNav"]);
</script>

<template>
	<div
		@click="$emit('toggleNav', false)"
		:class="[toggleNav ? '' : 'hidden']"
		class="absolute inset-0"></div>
	<div :class="[toggleNav ? '!w-[230px]' : '!w-0']" class="sidenav">
		<button @click="$emit('toggleNav', false)" class="closebtn">
			<img src="../../assets/shared/icon-close.svg" alt="" />
		</button>
		<div class="mt-16 text-slate-300" @click="$emit('toggleNav', false)">
			<RouterLink to="/space-tourism-website/">
				<p
					:class="[
						path == '/space-tourism-website/'
							? 'border border-0 border-r-4 border-white '
							: '',
					]"
					class="font-barlowCondensed text-xl tracking-widest">
					<span class="font-semibold me-2">00</span>
					HOME
				</p>
			</RouterLink>
			<RouterLink to="/space-tourism-website/destination">
				<p
					:class="[
						path == '/space-tourism-website/destination'
							? 'border border-0 border-r-4 border-white '
							: '',
					]"
					class="font-barlowCondensed text-xl tracking-widest">
					<span class="font-semibold me-2">01</span>
					DESTINATION
				</p>
			</RouterLink>
			<RouterLink to="/space-tourism-website/crew">
				<p
					:class="[
						path == '/space-tourism-website/crew'
							? 'border border-0 border-r-4 border-white '
							: '',
					]"
					class="font-barlowCondensed text-xl tracking-widest">
					<span class="font-semibold me-2">02</span>
					CREW
				</p>
			</RouterLink>
			<RouterLink to="/space-tourism-website/technology">
				<p
					:class="[
						path == '/space-tourism-website/technology'
							? 'border border-0 border-r-4 border-white '
							: '',
					]"
					class="font-barlowCondensed text-xl tracking-widest">
					<span class="font-semibold me-2">03</span>
					TECHNOLOGY
				</p>
			</RouterLink>
		</div>
	</div>
</template>

<style>
.sidenav {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 30;
	top: 0;
	right: 0;
	background: rgba(28, 32, 41, 0.8);

	box-shadow: 0 4px 30px rgba(25, 28, 39, 0.1);
	backdrop-filter: blur(30px);
	-webkit-backdrop-filter: blur(8.2px);
	overflow-x: hidden;
	transition: 0.5s;
	padding-top: 60px;
}

.sidenav p {
	min-width: 200px;
	margin-bottom: 17px;
	padding: 1px 8px 8px 32px;
	text-decoration: none;
	display: block;
	transition: 0.3s;
}

.sidenav p:hover {
	color: #f1f1f1;
}

.sidenav .closebtn {
	position: absolute;
	top: 30px;
	right: 25px;
	font-size: 36px;
	margin-left: 50px;
}

@media screen and (max-height: 450px) {
	.sidenav {
		padding-top: 15px;
	}
	.sidenav a {
		font-size: 18px;
	}
}
</style>
