<template lang="pug">
.layout
	v-eco-layout(:navigation="nav_items", logo="/img/logo.png")
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Components",
	mounted() {
		console.log(this.$ecosphere);
	},
	data() {
		return {
			nav_items: [
				{
					type: "dropdown",
					label: "Resources",
					flow: "left",
					contain: false,
					centered: false,
					options: [
						{
							label: "Ecosphere",
							value: "https://ecosphere.dev/",
							action: () => {
								console.log("Ecosphere");
							},
						},
						{
							label: "Remix Icon",
							value: "https://remixicon.com/",
							action: () => {
								console.log("Remix");
							},
						},
					],
				},
				{
					type: "dropdown",
					category: "locale",
					flow: "left",
					contain: false,
					centered: true,
					options: [
						{
							label: "EN",
							value: "",
						},
						{
							label: "中文",
							value: "",
						},
					],
				},
			],
		};
	},
});
</script>

<style lang="scss" scoped>
.layout {
	height: 100vh;
	width: 100vw;
}
</style>
