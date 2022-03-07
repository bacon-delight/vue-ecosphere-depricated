<template lang="pug">
.toggle(:class="[`toggle--theme-${theme}`]")
	.toggle__option(
		v-for="(option, index) in options",
		:class="[`toggle__option--theme-${theme}`, { 'toggle__option--active': index === selected }]",
		@click="handleSelection(index)"
	)
		VEcoText(
			:class="[index === selected ? `toggle__option--color-${hue}` : '']",
			:label="option.label"
		)
</template>

<script lang="ts">
import {
	choice_option,
	toggle_hue,
	toggle_theme,
} from "@/plugin/utils/types.interface";
import { defineComponent, PropType } from "vue";
import VEcoText from "@/plugin/components/common/text.vue";

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
	components: {
		VEcoText,
	},
	watch: {
		defaultValue() {
			this.selected = this.options.findIndex(
				(option: choice_option) => option.value === this.defaultValue
			);
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
	overflow-x: auto;

	&__option {
		padding: $spacer-0-125 $spacer-0-5;
		border-radius: $border-radius-standard;
		display: flex;
		align-items: center;
		column-gap: $spacer-0-25;
		white-space: nowrap;
		@include use-color;
		@include use-theme-hover;

		&--active {
			@include font-emphasis;
			margin: 0;
		}
	}
}
</style>
