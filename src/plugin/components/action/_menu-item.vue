<template lang="pug">
.menu(v-for="option in options")
	.menu__item(
		@click="handleClick(option)",
		:class="[{ 'menu__item--disabled': !option.value }, , `menu__item--theme-${settings.theme}`]"
	)
		VEcoLink(
			:label="option.label",
			:class="[{ 'menu__item--active': isCurrentRoute(option.value), 'menu__item--disabled': !option.value }, `menu__item--theme-${settings.theme}`]"
		)
		VEcoDot(:type="isCurrentRoute(option.value) ? 'information' : ''")

	.menu__nested
		MenuItem(
			v-if="option.children",
			:options="option.children",
			:config="settings",
			@select="propagateSelectEvent"
		)
</template>

<script lang="ts">
import { menu_config, menu_option } from "@/plugin/utils/types.interface";
import { defineComponent, PropType } from "vue";
import config from "@/plugin/utils/defaults/components/menu.config";
import VEcoLink from "@/plugin/components/action/link.vue";
import VEcoDot from "@/plugin/components/common/dot.vue";

export default defineComponent({
	name: "MenuItem",
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
	emits: ["select"],
	components: { VEcoLink, VEcoDot },
	methods: {
		handleClick(option: menu_option): void {
			this.$ecosphere.handlers.navigate(option.value);
			this.$emit("select", option.value);
		},
		isCurrentRoute(route: string) {
			return this.$route ? this.$route.path === route : false;
		},
		propagateSelectEvent(event: Event) {
			this.$emit("select", event);
		},
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
	&__item {
		display: flex;
		align-items: center;
		column-gap: $spacer-0-5;
		@include font-light;
		border-radius: $border-radius-standard 0 0 $border-radius-standard;
		padding: $spacer-0-25 $spacer-0-5;

		&--theme-auto {
			color: $color-contrast;
			@include hover-background;
		}

		&--theme-invert {
			color: $color-background;
			@include hover-background($color-contrast-faded);
		}

		&--theme-light {
			color: $color-dark;
			@include hover-background($color-light-faded);
		}

		&--theme-dark {
			color: $color-light;
			@include hover-background($color-dark-faded);
		}

		&--disabled {
			pointer-events: none;
			color: $color-helper-grey !important;
		}

		&--active {
			@include font-emphasis;
			margin: 0;
		}
	}

	&__nested {
		margin-left: $spacer-0-75;
	}
}
</style>
