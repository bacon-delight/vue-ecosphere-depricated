<template lang="pug">
.sidebar(:class="[`sidebar--theme-${theme}`]")
	VEcoMenuItem(:options="options", @select="$emit('toggle')", :theme="theme")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { menu_option, menu_theme } from "@/plugin/utils/types.interface";
import VEcoMenuItem from "@/plugin/components/action/_menu-item.vue";
import { menu_config } from "@/plugin/utils/defaults/components/menu.config";

export default defineComponent({
	name: "Sidebar",
	props: {
		options: {
			type: Object as PropType<menu_option[]>,
			required: true,
		},
		theme: {
			type: String as PropType<menu_theme>,
			default: menu_config.theme,
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

	&--theme-auto {
		@include apply-theme(auto);
	}

	&--theme-invert {
		@include apply-theme(invert);
	}

	&--theme-light {
		@include apply-theme(light);
	}

	&--theme-dark {
		@include apply-theme(dark);
	}
}
</style>
