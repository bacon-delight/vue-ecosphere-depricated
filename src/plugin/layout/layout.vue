<template lang="pug">
.layout
	v-eco-sidebar.layout__sidebar(
		:class="[open ? 'layout__sidebar--open' : 'layout__sidebar--closed']",
		:sidebar="sidebar",
		@toggleSidebar="toggleSidebar(false)"
	)
	.layout__main
		v-eco-navigation.layout__navigation(
			:logo="logo",
			:navigation="navigation",
			:sidebarToggle="true",
			@toggleSidebar="toggleSidebar(true)"
		)
		.layout__content
			router-view
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { navigation_item, sidebar_item } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Components",
	data() {
		return {
			open: false,
		};
	},
	props: {
		logo: {
			type: String as PropType<string>,
			required: true,
		},
		navigation: {
			type: Object as PropType<navigation_item[]>,
			required: true,
		},
		sidebar: {
			type: Object as PropType<sidebar_item[]>,
			required: true,
		},
	},
	methods: {
		toggleSidebar(state: boolean) {
			this.open = state;
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

	@include respond-below(sm) {
		grid-template-columns: 1fr;
	}

	&__main {
		background: $color-background-faded;
		@include create-grid(2, row);
		grid-template-rows: min-content 1fr;
		overflow: hidden;
	}

	&__content {
		overflow-y: auto;
		@include font-light;
		color: $color-contrast;
		padding: 0 $spacer-0-5;
	}

	&__sidebar {
		@include respond-below(sm) {
			transition: $transition-micro ease-in-out;
			height: 100%;
			position: fixed;
			z-index: 1;
			top: 0;
			left: 0;
			overflow-x: hidden;

			&--open {
				width: $spacer-8;
				max-width: $spacer-10;
			}

			&--closed {
				width: 0;
				padding-right: 0 !important;
			}
		}
	}
}
</style>
