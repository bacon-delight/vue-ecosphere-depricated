<template lang="pug">
.layout
	Sidebar.layout__sidebar(
		:class="[sidebar ? 'layout__sidebar--open' : 'layout__sidebar--closed']",
		:options="sidebarOptions",
		@toggle="sidebar = false",
		@mouseleave="sidebar = false"
	)
	.layout__main(@click="sidebar = false")
		Navbar.layout__navbar(
			brand="Ecosphere",
			logo="/img/logo.png",
			:options="navbarOptions",
			toggle,
			@toggle="sidebar = true"
		)
		.layout__content
			router-view
			slot
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Navbar from "@/plugin/components/layout/navbar.vue";
import Sidebar from "@/plugin/components/layout/sidebar.vue";
import { navbar_option } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Layout",
	components: {
		Navbar,
		Sidebar,
	},
	props: {
		navbarOptions: {
			type: Object as PropType<navbar_option[]>,
			required: true,
		},
		sidebarOptions: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			sidebar: false,
		};
	},
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

	@include respond-below(sm) {
		grid-template-columns: 1fr;
	}

	&__sidebar {
		@include respond-below(sm) {
			transition: $transition-micro ease-in-out;
			height: 100%;
			position: fixed;
			z-index: $z-index-sidebar;
			top: 0;
			left: 0;

			&--open {
				width: $spacer-8;
				max-width: $spacer-10;
				border-right: 1px solid rgba($color-helper-grey, 0.4);
			}

			&--closed {
				width: 0;
				padding-right: 0 !important;
				opacity: 0;
				overflow: hidden;
			}
		}
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

	&__navbar {
		width: 100%;
	}
}
</style>
