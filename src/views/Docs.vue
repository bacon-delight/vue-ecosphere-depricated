<template lang="pug">
v-eco-layout.layout(
	:brand="$t('headers.ecosphere')",
	logo="/img/logo.png",
	:navbarOptions="navbarOptions",
	:sidebarOptions="sidebarOptions",
	hideBrand="xs"
)
	Footer
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navbar from "@/assets/navbar";
import sidebar from "@/assets/sidebar";
import Footer from "@/components/common/Footer.vue";

export default defineComponent({
	name: "Explore",
	data() {
		return {
			navbar,
			sidebar,
		};
	},
	components: {
		Footer,
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
