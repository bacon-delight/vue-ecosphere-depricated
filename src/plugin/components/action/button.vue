<template lang="pug">
button.button(
	:class="[{ 'button--outline': settings.outline && !disabled, 'button--compact': settings.compact }, disabled ? 'button--disabled' : `button--theme-${settings.theme}`]"
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
		disabled: {
			type: Boolean as PropType<boolean>,
			default: false,
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
	@include font-regular;
	margin: 0 !important;
	user-select: none;

	&--disabled {
		background: $color-indicator-offline;
		color: $color-helper-grey;
		pointer-events: none;
	}

	&--compact {
		padding: $spacer-0-75 $spacer-0-5;
		font-size: $spacer-1;
		line-height: 0 !important;

		.text {
			transform: translateY(2px);
		}
	}

	&--outline {
		border: 1px solid $color-helper-grey;
	}

	&--theme-auto {
		@include apply-theme(auto);
		@include apply-theme-hover(auto);
	}

	&--theme-light {
		@include apply-theme(light);
		@include apply-theme-hover(light);
	}

	&--theme-dark {
		@include apply-theme(dark);
		@include apply-theme-hover(dark);
	}

	&--theme-invert {
		@include apply-theme(invert);
		@include apply-theme-hover(invert);
	}

	&--theme-hue {
		@include apply-theme(hue);
		@include apply-theme-hover(hue);
	}

	&--theme-critical {
		@include apply-theme(critical);
		@include apply-theme-hover(critical);
	}

	&--theme-warning {
		@include apply-theme(warning);
		@include apply-theme-hover(warning);
	}

	&--theme-success {
		@include apply-theme(success);
		@include apply-theme-hover(success);
	}

	&--theme-transparent {
		@include apply-theme(transparent);
		@include apply-theme-hover(transparent);
	}
}
</style>
