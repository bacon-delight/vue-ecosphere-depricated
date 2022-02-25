<template lang="pug">
.menu(v-for="(option, index) in options")
	.menu__item(
		@click="handleClick(option, index)",
		:class="[{ 'menu__item--disabled': !option.value && !option.children }, `menu__item--theme-${settings.theme}`]"
	)
		VEcoIcon.menu__arrow(
			v-if="option.children",
			:type="expanded[index] ? 'ri-subtract-line' : 'ri-add-line'"
		)
		VEcoLink(
			:label="option.label",
			:class="[{ 'menu__item--active': isCurrentRoute(option.value), 'menu__item--disabled': !option.value }, `menu__item--theme-${settings.theme}`]"
		)
		VEcoDot(:type="isCurrentRoute(option.value) ? 'information' : ''")

	.menu__nested(v-if="expanded[index]")
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
import VEcoIcon from "@/plugin/components/common/icon.vue";

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
	data() {
		return {
			expanded: {},
		};
	},
	emits: ["select"],
	components: { VEcoLink, VEcoDot, VEcoIcon },
	methods: {
		handleClick(option: menu_option, index: number): void {
			option.children
				? (this.expanded[index] = !this.expanded[index])
				: null;
			if (option.value) {
				this.$ecosphere.handlers.navigate(option.value);
				this.$emit("select", option.value);
			}
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
	mounted() {
		this.options.forEach((option: menu_option, index: number) => {
			this.expanded[index] = true;
		});
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
		margin: 0 !important;
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
			margin: 0 !important;
		}
	}

	&__nested {
		margin-left: $spacer-1-125;
		@include animation-drop-down;
	}

	&__arrow {
		color: $color-helper-grey;
	}
}
</style>
