<template lang="pug">
.menu(v-for="(option, index) in options")
	.menu__item(
		@click="handleClick(option, index)",
		:class="[{ 'menu__item--disabled': !option.value && !option.children }, `menu__item--theme-${theme}`]"
	)
		VEcoIcon.menu__arrow(
			v-if="option.children",
			:type="expanded[index] ? 'ri-subtract-line' : 'ri-add-line'"
		)
		.menu__option
			VEcoLink.menu__label(
				:label="option.label",
				:class="[{ 'menu__item--active': isCurrentRoute(option.value), 'menu__item--disabled': !option.value }, `menu__item--theme-${theme}`]"
			)
			VEcoDot(:hue="isCurrentRoute(option.value) ? hue : ''")

	Transition(name="nested")
		.menu__nested(v-if="expanded[index]")
			MenuItem(
				v-if="option.children",
				:options="option.children",
				:theme="theme",
				:hue="hue",
				@select="propagateSelectEvent"
			)
</template>

<script lang="ts">
import {
	menu_hue,
	menu_option,
	menu_theme,
} from "@/plugin/utils/types.interface";
import { defineComponent, PropType } from "vue";
import VEcoLink from "@/plugin/components/action/link.vue";
import VEcoDot from "@/plugin/components/common/dot.vue";
import VEcoIcon from "@/plugin/components/common/icon.vue";
import config from "@/plugin/utils/defaults/components/menu.config";

export default defineComponent({
	name: "MenuItem",
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
		border-radius: $border-radius-standard 0 0 $border-radius-standard;
		padding: $spacer-0-25 $spacer-0-5;
		width: 100%;

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
		margin-left: $spacer-1-125;
		// @include animation-drop-down;
	}

	&__arrow {
		color: $color-helper-grey;
	}

	&__option {
		display: grid;
		grid-template-columns: 1fr min-content;
		align-items: center;
		column-gap: $spacer-0-5;
		justify-content: start;
		width: 100%;
	}

	&__label {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		min-width: 0;
	}
}
</style>
