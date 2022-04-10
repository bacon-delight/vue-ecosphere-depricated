<template lang="pug">
.select
	//- Label
	VEcoLink.select__label(
		@click="toggle(!open)",
		:label="generateLabel",
		:class="{ 'select__label--hue': settings.hue }"
	)

	//- Drop Area
	Transition(name="nested")
		.select__content(
			v-if="open && options.length",
			@mouseleave="toggle(false)",
			:class="[settings.contain ? 'select__content--contain' : '', `select__content--flow-${settings.flow}`, settings.outline ? 'select__content--outline' : '', `select__content--theme-${settings.theme}`]"
		)
			VEcoText.select__option(
				v-for="(option, index) in options",
				:class="[settings.center ? 'select__option--centered' : '', `select__option--theme-${settings.theme}`]",
				@click="handleSelection(index)",
				:label="option.label",
				:wrap="false"
			)
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { select_option, select_config } from "@/plugin/utils/types.interface";
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
			type: Object as PropType<select_option[]>,
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
		generateLabel() {
			if (this.settings.indicator) {
				return `${this.label} ${
					this.open
						? ":ri-arrow-up-s-line:"
						: ":ri-arrow-down-s-line:"
				}`;
			} else {
				return this.label;
			}
		},
	},
	data() {
		return {
			open: false as boolean,
		};
	},
	methods: {
		toggle(state: boolean): void {
			this.open = state;
		},
		handleSelection(index: number): void {
			this.toggle(false);
			this.$ecosphere.handlers.navigate(this.options[index].value);
			this.$ecosphere.handlers.runAction(this.options[index].action);
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
		@include select-label;
	}

	&__content {
		@include dropdown-content-area;
	}

	&__option {
		@include font-light;
		margin: 0;
		padding: $spacer-0-125 $spacer-0-25;
		// @include hover-background;
		border-radius: $border-radius-standard;
		display: flex;
		align-items: center;

		&--theme-auto,
		&--theme-transparent {
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

		&--centered {
			justify-content: center;
		}
	}
}
</style>
