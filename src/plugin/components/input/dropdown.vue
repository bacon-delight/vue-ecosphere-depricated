<template lang="pug">
.dropdown
	//- Label
	VEcoText.dropdown__label(:label="label")

	//- Input Field
	.dropdown__container(
		@click="toggle",
		:class="{ 'dropdown__container--outline': settings.outline, 'dropdown__container--active': open }"
	)
		VEcoText.dropdown__container--placeholder(
			v-if="selected === null",
			:label="placeholder"
		)
		//- span(v-else) {{options[selected].label}}
		VEcoText(v-else, :label="options[selected].label")
		VEcoIcon.dropdown__container--icon(
			:type="open ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'"
		)

	//- Drop Area
	.dropdown__content(
		v-if="open && options.length",
		@mouseleave="toggle",
		:class="[settings.contain ? 'dropdown__content--contain' : '', `dropdown__content--flow-${settings.flow}`, settings.outline ? 'dropdown__content--outline' : '']"
	)
		.dropdown__option(
			v-for="(option, index) in options",
			@click="handleSelection(index)"
		)
			VEcoText.dropdown__option--text(
				:class="{ 'dropdown__option--active': index === selected }",
				:label="option.label"
			)
			VEcoDot.dropdown__option--dot(type="information", v-if="index === selected")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { choice_option, dropdown_config } from "@/plugin/utils/types.interface";
import config from "@/plugin/utils/defaults/components/input/dropdown.config";
import VEcoDot from "@/plugin/components/common/dot.vue";
import VEcoText from "@/plugin/components/common/text.vue";
import VEcoIcon from "@/plugin/components/common/icon.vue";

export default defineComponent({
	name: "Dropdown",
	props: {
		label: {
			type: String as PropType<string>,
			default: "",
		},
		placeholder: {
			type: String as PropType<string>,
			default: "",
		},
		options: {
			type: Object as PropType<choice_option[]>,
			required: true,
		},
		config: {
			type: Object as PropType<dropdown_config>,
			default: () => config,
		},
	},
	components: {
		VEcoDot,
		VEcoText,
		VEcoIcon,
	},
	computed: {
		settings(): dropdown_config {
			return Object.assign(config, this.config);
		},
	},
	data() {
		return {
			open: false as boolean,
			selected: null,
		};
	},
	methods: {
		toggle(): void {
			this.open = !this.open;
		},
		handleSelection(index: number): void {
			this.selected = index;
			this.toggle();
			this.$emit("change", this.options[index].value);
		},
	},
});
</script>

<style lang="scss" scoped>
.dropdown {
	user-select: none;
	position: relative;

	&__label {
		@include font-sidenote;
	}

	&__container {
		background: $color-background;
		padding: $spacer-0-25 $spacer-0-5;
		border-radius: $border-radius-standard;
		display: flex;
		align-items: center;
		justify-content: space-between;
		column-gap: $spacer-0-5;
		cursor: pointer;
		border: 1px solid $color-helper-transparent;

		&--placeholder {
			color: $color-helper-grey;
		}

		&--active {
			transition: all $transition-micro ease-in-out;
			border: 1px solid $color-hue !important;
		}

		&--outline {
			border: 1px solid $color-helper-grey;
		}
	}

	&__content {
		position: absolute;
		margin-top: $spacer-0-25;
		background: $color-background;
		border-radius: $border-radius-standard;
		padding: $spacer-0-25;
		z-index: $z-index-dropdown;

		&--contain {
			width: 100%;
		}

		&--flow-right {
			left: 0;
		}

		&--flow-left {
			right: 0;
		}

		&--outline {
			border: 1px solid $color-helper-grey;
		}
	}

	&__option {
		padding: $spacer-0-125 $spacer-0-25;
		@include hover-background;
		border-radius: $border-radius-standard;
		display: flex;
		align-items: center;
		column-gap: $spacer-0-5;

		&--active {
			@include font-emphasis;
		}
	}
}
</style>
