<template lang="pug">
.layout
	.layout__sidebar Sidebar
	.layout__main
		.layout__navigation Navigation
		.layout__content
			slot
			router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Layout",
});
</script>

<style lang="scss" scoped>
.layout {
	@include occupy-full-parent;
	@include create-grid(2);
	grid-template-columns: min-content 1fr;
	overflow: hidden;
	background: $color-background-faded;
	color: $color-contrast;
	@include font-light;

	&__sidebar {
		min-width: $spacer-8;
		background: $color-background;
		overflow-x: hidden;
		overflow-y: auto;
	}

	&__main {
		@include create-grid(2, row);
		grid-template-rows: min-content 1fr;
		overflow: hidden;
	}

	&__content {
		overflow-x: hidden;
		overflow-y: auto;
	}

	&__navigation {
		overflow: hidden;
	}
}
</style>
