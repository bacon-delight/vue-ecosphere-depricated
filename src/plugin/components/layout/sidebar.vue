<template lang="pug">
.sidebar
	VEcoMenuItem(:options="options", @select="$emit('toggle')")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { menu_option } from "@/plugin/utils/types.interface";
import VEcoMenuItem from "@/plugin/components/action/_menu-item.vue";

export default defineComponent({
	name: "Sidebar",
	props: {
		options: {
			type: Object as PropType<menu_option[]>,
			required: true,
		},
	},
	components: {
		VEcoMenuItem,
	},
});
</script>

<style lang="scss" scoped>
.sidebar {
	background: $color-background;
	width: $spacer-8;
}
</style>
