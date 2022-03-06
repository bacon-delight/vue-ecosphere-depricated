<template lang="pug">
.sidebar(:class="[`sidebar--theme-${theme}`]")
	VEcoMenuItem(
		:options="options",
		@select="$emit('toggle')",
		:theme="theme",
		:hue="hue"
	)
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
	menu_hue,
	menu_option,
	menu_theme,
} from "@/plugin/utils/types.interface";
import VEcoMenuItem from "@/plugin/components/action/_menu-item.vue";
import config from "@/plugin/utils/defaults/components/menu.config";

export default defineComponent({
	name: "Sidebar",
	props: {
		options: {
			type: Object as PropType<menu_option[]>,
			required: true,
		},
		theme: {
			type: String as PropType<menu_theme>,
			default: config.theme,
		},
		hue: {
			type: String as PropType<menu_hue>,
			default: config.hue,
		},
	},
	components: {
		VEcoMenuItem,
	},
});
</script>

<style lang="scss" scoped>
.sidebar {
	width: $spacer-8;
	overflow-y: auto;
	@include use-theme;
}
</style>
