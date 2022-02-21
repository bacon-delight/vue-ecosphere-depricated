<template lang="pug">
.sidebar
	VEcoMenu(:options="options", @select="$emit('toggle')")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { menu_option } from "@/plugin/utils/types.interface";
import VEcoMenu from "@/plugin/components/action/menu.vue";

export default defineComponent({
	name: "Sidebar",
	props: {
		options: {
			type: Object as PropType<menu_option[]>,
			required: true,
		},
	},
	components: {
		VEcoMenu,
	},
});
</script>

<style lang="scss" scoped>
.sidebar {
	background: $color-background;
	width: $spacer-8;
}
</style>
