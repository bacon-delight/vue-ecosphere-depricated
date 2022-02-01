<template lang="pug">
.dropdown
	//- Main Area
	.dropdown__container(@click="toggle")
		slot
			v-eco-link(
				:label="label",
				:icon="open ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'"
			)

	//- Drop Area
	.dropdown__content(
		@mouseleave="toggle",
		:class="[`dropdown__content--flow-${flow}`, contain ? 'dropdown__content--contain' : '']",
		v-if="open && options.length"
	)
		.dropdown__option(
			:class="[centered ? 'dropdown__option--centered' : '']",
			v-for="(option, index) in options",
			:key="index"
		) {{ option.label }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
	dropdown_options,
	dropdown_flow,
} from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Dropdown",
	props: {
		label: {
			type: String as PropType<string>,
			default: "",
		},
		options: {
			type: Object as PropType<dropdown_options>,
			required: true,
		},
		flow: {
			type: String as PropType<dropdown_flow>,
			default: "right",
		},
		contain: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		centered: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
	},
	data() {
		return {
			open: false as boolean,
		};
	},
	methods: {
		toggle(): void {
			this.open = !this.open;
		},
	},
});
</script>

<style lang="scss" scoped>
.dropdown {
	position: relative;
	@include font-light;

	&__container {
		display: flex;
		align-items: center;
		column-gap: $spacer-0-25;
		@include hover-color;
	}

	&__content {
		position: absolute;
		margin-top: $spacer-0-25;
		background: $color-background;
		padding: $spacer-0-25;
		border-radius: $spacer-0-75;

		&--contain {
			width: 100%;
		}

		&--flow-right {
			left: 0;
		}

		&--flow-left {
			right: 0;
		}
	}

	&__option {
		padding: $spacer-0-125 $spacer-0-25;
		border-radius: $spacer-0-5;
		@include hover-background;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		&--centered {
			text-align: center;
		}
	}
}
</style>
