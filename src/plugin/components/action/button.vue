<template lang="pug">
button.button(
	:class="[settings.outline ? 'button--outline' : '', `button--theme-${settings.theme}`]"
)
	VEcoText(:label="label")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoText from "@/plugin/components/common/text.vue";
import config from "@/plugin/utils/defaults/components/button.config";
import { button_config } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Button",
	props: {
		label: {
			type: String as PropType<string>,
			required: true,
		},
		config: {
			type: Object as PropType<button_config>,
			default: () => config,
		},
	},
	components: {
		VEcoText,
	},
	computed: {
		settings(): button_config {
			return Object.assign({ ...config }, this.config);
		},
	},
});
</script>

<style lang="scss" scoped>
.button {
	padding: $spacer-0-25 $spacer-1;
	border-radius: $border-radius-standard;
	border: 1px solid $color-helper-transparent;
	transition: all $transition-micro ease-in-out;
	cursor: pointer;
	@include font-light;
	user-select: none;

	&--outline {
		border: 1px solid $color-helper-grey;
	}

	&--theme-auto {
		background: $color-background;
		color: $color-contrast;

		&:hover {
			background: rgba($color-background-faded, 0.2);
			border: 1px solid $color-hue-faded;
		}
	}

	&--theme-light {
		background: $color-light;
		color: $color-dark;

		&:hover {
			background: rgba($color-light-faded, 0.2);
			border: 1px solid $color-hue-faded;
		}
	}

	&--theme-dark {
		background: $color-dark;
		color: $color-light;

		&:hover {
			background: rgba($color-dark-faded, 0.8);
			border: 1px solid $color-hue-faded;
		}
	}

	&--theme-invert {
		background: $color-contrast;
		color: $color-background;

		&:hover {
			background: rgba($color-background-faded, 0.2);
			border: 1px solid $color-hue-faded;
		}
	}

	&--theme-hue {
		background: $color-hue;
		color: $color-hue-contrast;

		&:hover {
			background: $color-hue-faded;
			border: 1px solid $color-hue;
		}
	}
}
</style>
