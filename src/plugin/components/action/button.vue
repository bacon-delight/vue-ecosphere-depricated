<template lang="pug">
button.button(
	:class="[{ 'button--outline': outline && !disabled, 'button--compact': compact }, disabled ? 'button--disabled' : `button--theme-${theme}`]"
)
	VEcoText(:label="label", :wrap="false")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import VEcoText from "@/plugin/components/common/text.vue";
import config from "@/plugin/utils/defaults/components/button.config";
import { button_theme } from "@/plugin/utils/types.interface";

export default defineComponent({
	name: "Button",
	props: {
		label: {
			type: String as PropType<string>,
			required: true,
		},
		outline: {
			type: Boolean as PropType<boolean>,
			default: config.outline,
		},
		compact: {
			type: Boolean as PropType<boolean>,
			default: config.compact,
		},
		theme: {
			type: String as PropType<button_theme>,
			default: config.theme,
		},
		disabled: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
	},
	components: {
		VEcoText,
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
	@include use-theme;
	@include use-theme-hover(1px);

	&--disabled {
		background: $color-indicator-offline;
		color: $color-helper-grey;
		pointer-events: none;
	}

	&--compact {
		padding: $spacer-0-625 $spacer-0-25;
		font-size: $spacer-1;
		line-height: 0 !important;

		.text {
			transform: translateY(2px);
		}
	}

	&--outline {
		border: 1px solid $color-helper-grey;
	}
}
</style>
