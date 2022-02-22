<template lang="pug">
.menu(:class="[`menu--theme-${settings.theme}`]")
	VEcoMenuItem(:options="options", :config="settings")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { menu_config, menu_option } from "@/plugin/utils/types.interface";
import config from "@/plugin/utils/defaults/components/menu.config";
import VEcoMenuItem from "@/plugin/components/action/_menu-item.vue";

export default defineComponent({
	name: "Menu",
	props: {
		options: {
			type: Object as PropType<menu_option[]>,
			required: true,
		},
		config: {
			type: Object as PropType<menu_config>,
			default: () => config,
		},
	},
	components: {
		VEcoMenuItem,
	},
	computed: {
		settings(): menu_config {
			return Object.assign({ ...config }, this.config);
		},
	},
});
</script>

<style lang="scss" scoped>
.menu {
	width: $spacer-8;
	border-radius: $border-radius-standard;
	padding: $spacer-0-25 0 $spacer-0-25 $spacer-0-5;

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
