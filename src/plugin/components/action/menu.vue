<template lang="pug">
.menu(:class="[`menu--theme-${theme}`]")
	VEcoMenuItem(:options="options", :theme="theme", :hue="hue")
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
	name: "Menu",
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
.menu {
	width: $spacer-8;
	border-radius: $border-radius-standard;
	padding: $spacer-0-25 0 $spacer-0-25 $spacer-0-5;
	@include use-theme;
}
</style>
