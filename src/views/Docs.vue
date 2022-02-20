<template lang="pug">
v-eco-layout.layout(
	:navbarOptions="navbarOptions",
	:sidebarOptions="sidebarOptions"
)
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navbar from "@/assets/navbar";
import sidebar from "@/assets/sidebar";

export default defineComponent({
	name: "Explore",
	data() {
		return {
			navbar,
			sidebar,
		};
	},
	computed: {
		sidebarOptions() {
			return this.sidebar();
		},
		navbarOptions() {
			return this.navbar();
		},
	},
});
</script>

<style lang="scss" scoped>
.layout {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
}
</style>
