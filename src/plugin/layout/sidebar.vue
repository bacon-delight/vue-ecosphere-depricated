<template lang="pug">
.sidebar
	v-eco-link.sidebar__toggle(
		icon="ri-menu-4-line",
		@click="$emit('toggleSidebar')"
	)
	v-eco-menu(:options="sidebar")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { sidebar_item } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Sidebar",
	props: {
		sidebar: {
			type: Object as PropType<sidebar_item[]>,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.sidebar {
	background: $color-background;
	max-width: $spacer-10;
	overflow-y: auto;
	padding: $spacer-0-75 $spacer-0-75 $spacer-0-75 0;

	&__toggle {
		justify-content: right;
		display: none;

		@include respond-below(sm) {
			display: inline-block;
			margin-left: 95%;
		}
	}
}
</style>
