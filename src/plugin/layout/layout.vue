<template lang="pug">
.layout
	v-eco-sidebar.layout__sidebar
	.layout__main
		v-eco-navigation.layout__navigation(
			:logo="logo",
			:navigation="navigation"
		)
		.layout__content
			p Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { navigation_items } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Components",
	props: {
		logo: {
			type: String as PropType<string>,
			required: true,
		},
		navigation: {
			type: Object as PropType<navigation_items>,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.layout {
	@include occupy-full-parent;
	@include create-grid(2);
	grid-template-columns: min-content 1fr;
	overflow: hidden;

	&__main {
		background: $color-background-faded;
		@include create-grid(2, row);
		grid-template-rows: min-content 1fr;
		overflow: hidden;
	}

	&__content {
		overflow-y: auto;
	}
}
</style>
