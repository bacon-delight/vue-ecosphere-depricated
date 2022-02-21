<template lang="pug">
v-eco-wrapper.main
	v-eco-navbar(:options="navbarOptions", brand="Eco", logo="/img/logo.png")
</template>

<script>
import { defineComponent } from "vue";
import navbar from "@/assets/navbar";

export default defineComponent({
	name: "Test",
	data() {
		return {
			navbar,
		};
	},
	computed: {
		navbarOptions() {
			return this.navbar();
		},
	},
});
</script>

<style lang="scss" scoped>
.main {
	height: 100vh;
}
</style>
