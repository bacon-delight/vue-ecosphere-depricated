<template lang="pug">
v-eco-layout.layout(
	:navbarOptions="navbarOptions",
	:sidebarOptions="sidebarOptions"
)
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
	name: "Explore",
	computed: {
		...mapGetters({
			navbarOptions: "navigation",
			sidebarOptions: "sidebar",
		}),
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
