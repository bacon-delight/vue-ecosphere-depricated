<template lang="pug">
.menu(v-for="option in options")
	.menu__item(
		@click="handleClick(option)",
		:class="{ 'menu__item--disabled': !option.value }"
	)
		VEcoLink.menu__item--text(
			:label="option.label",
			:class="{ 'menu__item--active': isCurrentRoute(option.value), 'menu__item--disabled': !option.value }"
		)
		VEcoDot(:type="isCurrentRoute(option.value) ? 'information' : ''")

	.menu__nested
		Menu(v-if="option.children", :options="option.children")
</template>

<script lang="ts">
import { menu_option } from "@/plugin/utils/types.interface";
import { defineComponent, PropType } from "vue";
import VEcoLink from "@/plugin/components/action/link.vue";
import VEcoDot from "@/plugin/components/common/dot.vue";

export default defineComponent({
	name: "Menu",
	props: {
		options: {
			type: Object as PropType<menu_option[]>,
			required: true,
		},
	},
	components: { VEcoLink, VEcoDot },
	methods: {
		handleClick(option: menu_option): void {
			this.$ecosphere.handlers.navigate(option.value);
		},
		isCurrentRoute(route: string) {
			return this.$route.path === route;
		},
	},
});
</script>

<style lang="scss" scoped>
.menu {
	&__item {
		display: flex;
		align-items: center;
		column-gap: $spacer-0-5;
		@include hover-background;
		border-radius: $border-radius-standard 0 0 $border-radius-standard;
		padding: $spacer-0-25 $spacer-0-5;

		&--text {
			color: $color-contrast;
		}

		&--disabled {
			pointer-events: none;
			color: $color-helper-grey !important;
		}
	}

	&__nested {
		margin-left: $spacer-0-75;
	}
}
</style>
