<template lang="pug">
v-eco-wrapper.main
	v-eco-text(
		label="test :ri-home-4-line: Remix Icon is a set of open-source neutral-style system symbols elaborately crafted for designers and developers"
	)
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
