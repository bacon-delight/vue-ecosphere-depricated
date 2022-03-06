<template lang="pug">
.toggle(:class="[`toggle--theme-${theme}`]")
	.toggle__option(
		v-for="(option, index) in options",
		:class="[`toggle__option--theme-${theme}`, { 'toggle__option--active': index === selected }]",
		@click="handleSelection(index)"
	)
		span(:class="[index === selected ? `toggle__option--color-${hue}` : '']") {{ option.label }}
</template>

<script lang="ts">
import {
	choice_option,
	toggle_hue,
	toggle_theme,
} from "@/plugin/utils/types.interface";
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "Toggle",
	props: {
		options: {
			type: Object as PropType<choice_option[]>,
			required: true,
		},
		theme: {
			type: String as PropType<toggle_theme>,
			default: "auto",
		},
		hue: {
			type: String as PropType<toggle_hue>,
			default: "hue",
		},
		defaultIndex: {
			type: Number as PropType<number>,
			default: null,
		},
		defaultValue: {
			type: [String, Number] as PropType<string | number>,
			default: null,
		},
	},
	data() {
		return {
			selected: null,
		};
	},
	mounted() {
		this.selected = this.defaultIndex;
		if (this.defaultValue) {
			this.selected = this.options.findIndex(
				(option: choice_option) => option.value === this.defaultValue
			);
		}
	},
	methods: {
		handleSelection(index: number): void {
			this.selected = index;
			this.$emit("select", this.options[index].value);
		},
	},
});
</script>

<style lang="scss" scoped>
.toggle {
	display: inline-flex;
	width: fit-content;
	@include use-theme;
	border-radius: $border-radius-standard;
	padding: $spacer-0-25;

	&__option {
		padding: $spacer-0-125 $spacer-0-5;
		border-radius: $border-radius-standard;
		display: flex;
		align-items: center;
		column-gap: $spacer-0-25;
		@include use-color;
		@include use-theme-hover-option;

		&--active {
			@include font-emphasis;
			margin: 0;
		}
	}
}
</style>
