// Recursive Component

<template lang="pug">
.menu(v-for="(option, index) in options", :key="index")
	.menu__item(@click="handleClick(option)")
		v-eco-link(
			:label="option.label",
			:icon="option.icon",
			:disabled="option.route || option.action ? false : true",
			iconDirection="left"
		)
		v-eco-dot.menu__active(
			:type="isCurrentRoute(option.route) ? 'information' : ''"
		)
	v-eco-menu(v-if="option.children", :options="option.children")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { menu_item } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Menu",
	props: {
		options: {
			type: Array as PropType<menu_item[]>,
			default: () => [],
		},
	},
	methods: {
		isCurrentRoute(route: string) {
			return this.$route.path === route;
		},
		handleClick(item: menu_item) {
			if (item.route) {
				this.$router.push(item.route);
			}
			if (item.action) {
				item.action();
			}
		},
	},
});
</script>

<style lang="scss" scoped>
.menu {
	padding: $spacer-0-5 0 0 $spacer-0-75;

	&__item {
		display: flex;
		align-items: center;
		column-gap: $spacer-0-5;
	}

	&__active {
		margin-left: auto;
	}
}
</style>
