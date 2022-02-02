<template lang="pug">
.sidebar
	v-eco-menu(:options="options")
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Sidebar",
	data() {
		return {
			options: [
				{
					label: "Introduction",
					// icon: "ri-home-2-fill",
					children: [
						{
							label: "Getting Started",
							action: () => {
								console.log("yo");
							},
						},
						{
							label: "Configurations",
							route: "/introduction/configurations",
							action: () => {
								this.$router.push(
									"/introduction/configurations"
								);
							},
						},
					],
				},
				{
					label: "Components",
					children: [
						{
							label: "Button",
							route: "/components/button",
							action: () => {
								this.$router.push("/components/button");
							},
						},
					],
				},
			],
		};
	},
});
</script>

<style lang="scss" scoped>
.sidebar {
	background: $color-background;
	min-width: $spacer-7;
	max-width: $spacer-10;
	overflow-y: auto;
	padding: $spacer-0-75 $spacer-0-75 $spacer-0-75 0;
}
</style>
