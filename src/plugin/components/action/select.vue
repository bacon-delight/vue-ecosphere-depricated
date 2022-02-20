<template lang="pug">
.select
	//- Label
	VEcoLink.select__label(@click="toggle", :label="label")

	//- Drop Area
	.select__content(
		v-if="open && options.length",
		@mouseleave="toggle",
		:class="[settings.contain ? 'select__content--contain' : '', `select__content--flow-${settings.flow}`, settings.outline ? 'select__content--outline' : '']"
	)
		VEcoText.select__option(
			v-for="(option, index) in options",
			:class="[settings.center ? 'select__option--centered' : '']",
			@click="handleSelection(index)",
			:label="option.label"
		)
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { choice_option, select_config } from "@/plugin/utils/types.interface";
import config from "@/plugin/utils/defaults/components/select.config";
import VEcoText from "@/plugin/components/common/text.vue";
import VEcoLink from "@/plugin/components/action/link.vue";

export default defineComponent({
	name: "Select",
	props: {
		label: {
			type: String as PropType<string>,
			default: "",
		},
		options: {
			type: Object as PropType<choice_option[]>,
			required: true,
		},
		config: {
			type: Object as PropType<select_config>,
			default: () => config,
		},
	},
	components: {
		VEcoText,
		VEcoLink,
	},
	computed: {
		settings(): select_config {
			return Object.assign({ ...config }, this.config);
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
		handleSelection(index: number): void {
			this.toggle();
			this.$ecosphere.handlers.navigate(this.options[index].value);
			this.$emit("change", this.options[index].value);
		},
	},
});
</script>

<style lang="scss" scoped>
.select {
	user-select: none;
	position: relative;

	&__label {
		display: flex;
		align-items: center;
		column-gap: $spacer-0-25;
		@include hover-color;
		width: fit-content;
		color: $color-contrast;
	}

	&__content {
		position: absolute;
		margin-top: $spacer-0-25;
		background: $color-background;
		border-radius: $border-radius-standard;
		padding: $spacer-0-25;
		z-index: $z-index-dropdown;
		white-space: nowrap;

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

		&--centered {
			justify-content: center;
		}

		&--active {
			@include font-emphasis;
		}
	}
}
</style>
